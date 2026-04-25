import { Card } from "@/components/card";
import { PlaylistCard } from "@/components/playlist-card";
import { SubscribeButton } from "@/components/subscribe-btn";
import { UploadVideoForm } from "@/components/upload-video-form";
import { useAvatarChange } from "@/hooks/useAuth";
import { useFetchChannelProfile } from "@/hooks/useChannel";
import { useFetchPlaylist } from "@/hooks/usePlaylist";
import { useFetchUserVideos } from "@/hooks/useVideo";
import { useAuthStore } from "@/store/useAuthStore";
import { useToggleStore } from "@/store/useToggleStore";
import { Loader, Loader2, PencilIcon } from "lucide-react";
import { useState } from "react";
import { MdUpdate } from "react-icons/md";
import { Link, useParams } from "react-router";

export const Channel = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("Videos");

  const { mutate, isPending: avatarPending } = useAvatarChange();

  const handleAvatarOnChange = (e) => {
    const avatarFile = e.target.files[0];
    if (!avatarFile) return;

    const data = new FormData();

    data.append("avatar", avatarFile);
    mutate(data);
  };

  const { user, isAuthenticated } = useAuthStore();

  const { setVideoUploadForm, videoUploadForm } = useToggleStore();
  const { data: channelVideos, isPending } = useFetchUserVideos(username);

  const { data: channelProfile } = useFetchChannelProfile(username);

  const owner = user?._id === channelProfile?._id;

  const { data: playlists } = useFetchPlaylist(channelProfile?._id);

  return (
    <div className="bg-[#0B0E14] min-h-screen text-zinc-50 relative">
      <div className="w-full h-40 sm:h-64 bg-linear-to-r from-[#1A103D] via-[#7000FF] to-[#FF0080] opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 border-b border-white/10">
          <div className="relative">
            <div className=" group absolute inset-1 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-linear-to-b from-gray-500/60 overflow-hidden to-transparent ">
              <form>
                <label htmlFor="image">
                  <PencilIcon size={30} className=" cursor-pointer" />
                </label>
                <input
                  id="image"
                  hidden
                  type="file"
                  onChange={handleAvatarOnChange}
                />
              </form>{" "}
            </div>
            {avatarPending && (
              <span className="absolute inset-0 rounded-full flex justify-center items-center">
                {" "}
                <Loader2 className=" animate-spin" size={40} />{" "}
              </span>
            )}
            <img
              className=" object-cover w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0B0E14]"
              src={channelProfile?.avatar}
              alt="Channel Avatar"
            />
          </div>

          <div className="flex justify-between w-full md:w-auto">
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                {channelProfile?.username}
              </h1>
              <p>{channelProfile?.fullname}</p>
              <p className="text-zinc-400 mt-1">
                {channelProfile?.subscribersCount} subscribers{" "}
                {/*• 120 videos*/}
              </p>
            </div>

            <div className=" mt-10 md:mt-4 text-sm">
              {owner ? (
                <Link
                  to="/channel-stats"
                  className=" bg-purple-600 px-3 py-2 rounded-md mx-1 sm:mx-8 font-semibold hover:bg-purple-800 transition-all"
                >
                  Channel Stats
                </Link>
              ) : (
                <div className=" mt-6">
                  <SubscribeButton />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between px-8 mt-4 border-b border-white/5 overflow-x-auto no-scrollbar">
          <div className=" flex gap-8">
            {["Home", "Videos", "Playlists", "Community", "About"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold transition-all relative ${
                    activeTab === tab
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-t-full" />
                  )}
                </button>
              ),
            )}
          </div>
          <div className="absolute md:static right-4 top-122 sm:top-146 flex items-center">
            {owner && (
              <button
                onClick={() => setVideoUploadForm(true)}
                className={` bg-purple-600 px-4 py-2 mb-4 rounded-md text-sm font-bold transition-all relative hover:bg-purple-800`}
              >
                Upload Video
              </button>
            )}
          </div>
        </div>
        {videoUploadForm && <UploadVideoForm />}
        <div className="py-14 sm:py-7">
          {activeTab === "Videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {channelVideos?.map((video) => (
                <Card key={video._id} video={video} />
              ))}
            </div>
          )}

          {activeTab === "About" && (
            <div className="max-w-3xl text-zinc-300">
              <h3 className="text-xl font-bold text-white mb-4">Description</h3>
              <p>This channel is dedicated to modern web development...</p>
            </div>
          )}

          {activeTab === "Playlists" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {playlists?.map((playlist) => (
                <PlaylistCard key={playlist._id} playlist={playlist} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
