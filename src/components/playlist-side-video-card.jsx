import {
  useFetchPlaylistById,
  useRemoveVideoFromPlaylist,
} from "@/hooks/usePlaylist";
import { Link } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
import { MdDelete } from "react-icons/md";

export const PlaylistSideVideoCard = ({ playlistId, currentVideoId }) => {
  const { data: playlist, isLoading } = useFetchPlaylistById(playlistId);
  const { user } = useAuthStore();
  const { mutate, isPending } = useRemoveVideoFromPlaylist();

  if (isPending) {
    return <h1 className="text-2xl">Pending...</h1>
  }

  if (isLoading) {
    return <div className="text-2xl ">Loading Playlist... </div>;
  }

  const isOwner = user?._id === playlist?.owner;

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900">
      <div className="p-4 bg-zinc-800/50 border-b border-zinc-800">
        <h2 className="text-white font-bold line-clamp-1">{playlist?.title}</h2>
        <p className="text-sm text-zinc-400 mt-1">
          {playlist?.playlistVideo?.findIndex((v) => v._id === currentVideoId) +
            1}{" "}
          / {playlist?.playlistVideo?.length}
        </p>
      </div>

      <div className="max-h-150 py-2 rounded-md overflow-y-auto custom-scrollbar">
        {playlist?.playlistVideo?.map((video, index) => (
          <div key={video._id} className=" flex items-end">
            <Link
              to={`/video/${video._id}?list=${playlistId}`}
              className={` relative flex flex-row items-center gap-3 p-2 pr-5 w-full hover:bg-zinc-800 transition-all ${
                video._id === currentVideoId ? "bg-zinc-800" : ""
              }`}
            >
              <span className="text-[12px] text-zinc-500 w-4 text-center">
                {video._id === currentVideoId ? "▶" : index + 1}
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-50 md:w-60 lg:w-50 shrink-0 rounded-md overflow-hidden bg-zinc-800">
                  <img
                    src={video.thumbnail}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center ">
                  <h4
                    className={`text-md sm:text-lg font-semibold line-clamp-2 ${
                      video._id === currentVideoId
                        ? "text-purple-400"
                        : "text-white"
                    }`}
                  >
                    {video.title}
                  </h4>
                  <p className="text-[14px] text-zinc-500 mt-1">
                    {video.owner?.username}
                  </p>
                  <p className=" text-[12px]  text-zinc-400 mt-1">
                    {video.views} views
                  </p>
                </div>
              </div>
            </Link>
            {isOwner && (
              <div className="p-2">
                {" "}
                <MdDelete
                  className="hover:text-slate-500 hover:scale-125 transition-all z-50 duration-300 cursor-pointer"
                  onClick={() =>
                    mutate({ videoId: video._id, playlistId: playlist._id })
                  }
                  size={20}
                />{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
