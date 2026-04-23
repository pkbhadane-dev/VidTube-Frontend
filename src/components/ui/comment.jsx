import { useFetchComment } from "@/hooks/useComment";

export const Comment = ({ user, time, likes, comments}) => {

  const {comment, ownerDetails} = comments

  return (
    <div className="flex gap-4 mb-6 group">
      <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0 overflow-hidden">
        <img className="w-full h-full object-cover"
          src={ownerDetails.avatar}
          alt="avatar"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-zinc-50">{user}</span>
          <span className="text-xs text-zinc-500">{time}</span>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed">{comment}</p>

        {/* <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/10 p-1 rounded transition-all">
            <span className="text-xs">👍</span>
            <span className="text-xs text-zinc-500">{likes}</span>
          </div>
            
          <span className="text-xs font-bold text-zinc-400 cursor-pointer hover:text-zinc-200 ml-2">
            Reply
          </span>
        </div> */}
      </div>
    </div>
  );
};
