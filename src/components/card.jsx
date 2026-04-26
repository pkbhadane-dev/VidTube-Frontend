import { Link, useParams } from "react-router";
import { UpdateDeleteBtn } from "./update-delete-btn";
import { useAuthStore } from "@/store/useAuthStore";
import { formatDistanceToNow } from "date-fns";

export const Card = ({ video }) => {
  // console.log(video);

  const { user } = useAuthStore();

  const timeAgo = formatDistanceToNow(new Date(video?.createdAt), {
    addSuffix: true,
  });
  const isOwner = user?._id === video?.owner?._id;

  const avatar = video?.owner?.avatar;
  const avatarName = video?.owner?.username.charAt(0);
  console.log(avatarName);
  console.log(avatar);
  

  return (
    <>
      <Link to={`/video/${video?._id}`}>
        <div className="group relative p-px rounded-xl overflow-hidden transition-all duration-500 hover:bg-linear-to-br from-[#7000FF] to-[#FF0080] hover:shadow-[0_0_20px_rgba(112,0,255,0.2)]">
          <div className="bg-[#11141B] rounded-xl h-full overflow-hidden">
            <div className=" bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
              <img
                src={video?.thumbnail}
                className="w-full aspect-video object-cover rounded-lg"
                alt=""
              />

              <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {isOwner && <UpdateDeleteBtn video={video} />}
            <div className="p-4 flex gap-3">
              <div className="flex justify-center items-center">
                {avatar ? (
                  <img
                    src={avatar}
                    className=" h-10 w-10 rounded-full object-cover ring-1 ring-black/10"
                  />
                ) : (
                  <span className="h-10 w-10 rounded-full object-cover ring-1 ring-black/10">{avatarName}</span>
                )}
              </div>
              <div>
                <h3 className="text-zinc-50 font-semibold line-clamp-2 truncate group-hover:text-purple-300 transition-colors">
                  {video?.title}
                </h3>
                <p className="text-zinc-400 text-sm flex items-center gap-2">
                  {video?.owner.username}
                  {/* <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span> */}
                </p>
                <div className="text-zinc-500 text-xs mt-1">
                  {video?.views} views • {timeAgo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
