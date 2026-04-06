
import { PlaylistCard } from "@/components/playlist-card";
import { useFetchPlaylist } from "@/hooks/usePlaylist";
import { useAuthStore } from "@/store/useAuthStore";

export const Playlist = () => {

  const {user} = useAuthStore()

  const {data:playlists, isPending} = useFetchPlaylist(user?._id)
  console.log(playlists);
  

  return (
    <>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {playlists?.map((playlist) => (
              <PlaylistCard key={playlist._id} playlist={playlist} />
            ))}
          </div>
    </>
  );
};