import { format } from "date-fns";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export const VideoActivityRow = ({ video }) => {

  const date = new Date(video.createdAt);
  const simpleDate = format(date, "dd mm yyyy, hh:mm a");
  

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 mb-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:bg-zinc-800/60 transition-all group">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-14 rounded-lg overflow-hidden shrink-0">
          <img
            src={video.thumbnail}
            className="object-cover w-full h-full"
            alt=""
          />
          {/* <span className="absolute bottom-1 right-1 text-white bg-black/80 text-[10px] px-1 rounded">
            12:05
          </span> */}
        </div>

        <div>
          <h4 className="font-medium text-white line-clamp-1">{video.title}</h4>
          <p className="text-xs text-zinc-500">{simpleDate} • Published</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 md:mt-0 pl-6 gap-8 px-4">
        <div className="text-center">
          <p className="text-xs text-zinc-500">Views</p>
          <p className="font-semibold text-white">{video.views}</p>
        </div>

        <div className="opacity-100 lg:opacity-0  lg:group-hover:opacity-100 transition-opacity flex gap-2">
          <button className="p-2 hover:bg-zinc-700 rounded-full text-zinc-400">
            <FaPen />
          </button>
          <button className="p-2 hover:bg-red-900/30 rounded-full text-red-500">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};
