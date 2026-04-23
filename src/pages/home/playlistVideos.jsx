import { Card } from "@/components/card";
import { SideVideoCard } from "@/components/side-video-card";
import { VideoGridSkeleton } from "@/components/videogrid-skeleton";
import { useFetchPlaylistById } from "@/hooks/usePlaylist";
import { Link, useParams } from "react-router";

export const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const { data: playlist, isLoading } = useFetchPlaylistById(playlistId);

  if (isLoading) return <div className="text-white p-10"> <VideoGridSkeleton/> </div>;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-28 gap-8 p-4 md:p-8 max-w-400 mx-auto text-white">
      <div className="w-full lg:w-2/5 shrink-0">
        <div className="sticky top-24 bg-linear-to-b from-zinc-800 to-zinc-900 p-6 rounded-2xl border border-zinc-700 shadow-xl">
          <div className="relative group rounded-xl overflow-hidden aspect-video shadow-lg">
            <img
              src={playlist?.playlistVideo[0]?.thumbnail}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
              <Link
                to={`/video/${playlist?.playlistVideo[0]._id}?list=${playlist._id}`}
              >
                <button className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                  Play All
                </button>
              </Link>
            </div>
          </div>

          <h1 className="text-2xl font-extrabold mt-6 leading-tight">
            {playlist?.title}
          </h1>

          <div className="mt-6 flex flex-col gap-2 border-t border-zinc-700 pt-4">
            <span className="text-sm font-semibold">
              {playlist?.playlistVideo?.length} Videos
            </span>
                  
          </div>
        </div>
      </div>

      <div className="flex p-2.5 w-full lg:w-[40%]">
        <div className="flex flex-col gap-5">
          {playlist?.playlistVideo?.map((video, index) => (
            <SideVideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
