import { useDeletePlaylist } from "@/hooks/usePlaylist";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

export const PlaylistCard = ({ playlist }) => {

  const {mutate} = useDeletePlaylist()

  return (
    <div className=" bg-zinc-800/20 rounded-md">
      <Link to={`/playlist/${playlist?._id}`}>
        <div className="group cursor-pointer">
          <div className="relative aspect-video rounded-md overflow-hidden bg-zinc-800">
            <img
              src={playlist?.videoDetails?.thumbnail || "/default-playlist.jpg"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-y-0 right-0 w-1/3 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
              <span className="text-sm font-bold mt-1">
                {playlist?.videos?.length} Videos
              </span>
            </div>
          </div>

          <div className="mt-2 ml-3">
            <h3 className="text-white font-semibold line-clamp-2">
              {playlist?.title}
            </h3>
            <p className="text-zinc-400 text-xs mt-1">View full playlist</p>
          </div>
        </div>
      </Link>
      <div className="text-white flex justify-end pr-2 pb-2">
        <MdDelete onClick={()=>mutate(playlist?._id)} className="hover:text-slate-500 hover:scale-125 transition-all z-50 duration-300 cursor-pointer" size={22}/>
      </div>
    </div>
  );
};
