
import { Link } from "react-router";

export const PlaylistCard = ({ playlist }) => {
  
  return (
    <Link to={`/playlist/${playlist?._id}`}>
      <div className="group cursor-pointer">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
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

        <div className="mt-3">
          <h3 className="text-white font-semibold line-clamp-2">
            {playlist?.title}
          </h3>
          <p className="text-zinc-400 text-xs mt-1">View full playlist</p>
        </div>
      </div>
    </Link>
  );
};
