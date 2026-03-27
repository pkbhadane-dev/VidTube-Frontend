import { Card } from "@/components/card";
import { UploadVideoForm } from "@/components/upload-video-form";
import { useFetchUserVideos } from "@/hooks/useVideo";
import { useAuthStore } from "@/store/useAuthStore";
import { useToggleStore } from "@/store/useToggleStore";
import { useState } from "react";

export const Channel = () => {
  const [activeTab, setActiveTab] = useState("Videos");
  const { user, isAuthenticated } = useAuthStore();
  const { setVideoUploadForm, videoUploadForm } = useToggleStore();
  const { data: userVideos, isPending } = useFetchUserVideos();
 

  return (
    <div className="bg-[#0B0E14] min-h-screen text-zinc-50 relative">
      <div className="w-full h-40 sm:h-64 bg-linear-to-r from-[#1A103D] via-[#7000FF] to-[#FF0080] opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 border-b border-white/10">
          <div>
            <img
              className=" object-cover w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0B0E14]"
              src={user?.avatar}
              alt="Channel Avatar"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              {user?.fullname}
            </h1>
            <p className="text-zinc-400 mt-1">
              @geminidev • 1.5M subscribers • 120 videos
            </p>
            <p className="text-zinc-300 mt-3 max-w-2xl line-clamp-2 text-sm">
              Helping developers build premium user interfaces with React and
              Tailwind CSS. New videos every Tuesday!
            </p>
            <div className="flex gap-3 mt-4">
              <button className="bg-zinc-50 text-black px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition-all">
                Subscribe
              </button>
              <button className="bg-white/10 px-6 py-2 rounded-full font-bold hover:bg-white/20 transition-all">
                Join
              </button>
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
          <div className="flex items-center">
            <button
              onClick={() => setVideoUploadForm(true)}
              className={` bg-purple-600 px-4 py-2 mb-4 rounded-md text-sm font-bold transition-all relative hover:bg-purple-800`}
            >
              Upload Video
            </button>
          </div>
        </div>
        {videoUploadForm && <UploadVideoForm />}
        <div className="py-8">
          {activeTab === "Videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userVideos?.map((video) => (
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
        </div>
      </div>
    </div>
  );
};
