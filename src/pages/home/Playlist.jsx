import { PlaylistCard } from "@/components/playlist-card";
import { VideoGridSkeleton } from "@/components/videogrid-skeleton";
import { useFetchPlaylist } from "@/hooks/usePlaylist";
import { useAuthStore } from "@/store/useAuthStore";

export const Playlist = () => {
  const { user } = useAuthStore();

  const { data: playlists, isLoading } = useFetchPlaylist(user?._id);

  return (
    <>
      {isLoading ? (
        <VideoGridSkeleton />
      ) : (
        <>
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {playlists?.map((playlist) => (
              <PlaylistCard key={playlist._id} playlist={playlist} />
            ))}
          </div>
          <div>
            {playlists?.length > 0 || (
              <div className="text-xl text-center font-semibold text-purple-400">
                You don't have any playlist
              </div>
            )}
          </div>{" "}
        </>
      )}
    </>
  );
};
