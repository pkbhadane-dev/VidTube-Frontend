import { CommentSection } from "@/components/comment-section";
import { SideVideoCard } from "@/components/side-video-card";
import { Link, useParams } from "react-router";
import { useState } from "react";
import { PlaylistModal } from "@/components/playlist-model";
import { useFetchVideoById } from "@/hooks/useVideo";

export const Video = () => {
  const [showModel, setShowModel] = useState(false);
  const dummyPlaylists = [
    { _id: "1", name: "Watch Later" },
    { _id: "2", name: "React Projects" },
    { _id: "3", name: "Liked Videos" },
  ];
  const { videoId } = useParams();
  const { data: video, isLoading } = useFetchVideoById(videoId);


  return (
    <div className="bg-[#0B0E14] min-h-screen text-zinc-50 font-sans">
      <div className="max-w-400 mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
        <div className="flex-1">
          <div className="aspect-video w-full rounded-2xl bg-black overflow-hidden shadow-2xl border border-white/5">
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#1A103D] to-black">
              {/* <span className="text-zinc-500 italic"> */}
                <video
                  src={video?.videoFile}
                  poster={video?.thumbnail}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              {/* </span> */}
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold leading-tight">{video?.title}</h1>

            <div className="flex flex-wrap justify-between items-center mt-4 pb-6 border-b border-white/10 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600"></div>{" "}
                <div>
                  <Link>
                    <h3 className="font-bold">{video?.owner.username}</h3>
                  </Link>
                  <p className="text-xs text-zinc-400">1.5M subscribers</p>
                </div>
                <button className="ml-4 px-6 py-2 bg-zinc-50 text-black font-bold rounded-full hover:bg-zinc-200 transition-all">
                  Subscribe
                </button>
              </div>

              <div className="flex gap-2">
                <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 flex items-center gap-2">
                  <span>👍</span> 124K
                </button>
                <button
                  className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
                  onClick={() => setShowModel(true)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            {showModel && (
              <PlaylistModal
                closeModel={() => setShowModel(false)}
                videoId={"@1"}
                playlist={dummyPlaylists}
              />
            )}

            <div className="mt-6 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <p className="text-sm font-bold">1.2M views • 2 days ago</p>
              <p className="text-sm mt-2 text-zinc-300">
                {video?.description}
                <span className="font-bold block mt-2">Show more</span>
              </p>
            </div>
          </div>
          <div>
            <CommentSection />
          </div>
        </div>

        <div className="lg:w-100 flex flex-col gap-4">
          <h2 className="font-bold text-lg mb-2">Up next</h2>

          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
        </div>
      </div>
    </div>
  );
};
