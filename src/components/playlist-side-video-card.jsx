import { useFetchPlaylistById } from "@/hooks/usePlaylist";
import { Link } from "react-router";
import { SideVideoCard } from "./side-video-card";

export const PlaylistSideVideoCard = ({ playlistId, currentVideoId }) => {
  const { data: playlist, isLoading } = useFetchPlaylistById(playlistId);

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900">
      <div className="p-4 bg-zinc-800/50 border-b border-zinc-800">
        <h2 className="text-white font-bold line-clamp-1">{playlist?.title}</h2>
        <p className="text-xs text-zinc-400 mt-1">
          {playlist?.playlistVideo?.findIndex((v) => v._id === currentVideoId) +
            1}{" "}
          / {playlist?.playlistVideo?.length}
        </p>
      </div>

      <div className="max-h-150 overflow-y-auto custom-scrollbar">
        {playlist?.playlistVideo?.map((video, index) => (
          <Link
            key={video._id}
            to={`/video/${video._id}?list=${playlistId}`}
            className={`flex items-center gap-3 p-2 hover:bg-zinc-800 transition-all ${
              video._id === currentVideoId ? "bg-zinc-800" : ""
            }`}
          >
            <span className="text-[10px] text-zinc-500 w-4 text-center">
              {video._id === currentVideoId ? "▶" : index + 1}
            </span>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-50 md:w-60 lg:w-50 shrink-0 rounded-md overflow-hidden bg-zinc-800">
                <img
                  src={video.thumbnail}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4
                  className={`text-xs font-semibold line-clamp-2 ${
                    video._id === currentVideoId
                      ? "text-purple-400"
                      : "text-white"
                  }`}
                >
                  {video.title}
                </h4>
                <p className="text-[13px] text-zinc-500 mt-1">
                  {video.owner?.username}
                </p>
                <p className=" text-[12px]  text-zinc-400 mt-1">
                  {video.views} views
                </p>
              </div>
            </div>
          </Link>
        ))}
        {/* <SideVideoCard/> */}
      </div>
    </div>
  );
};
