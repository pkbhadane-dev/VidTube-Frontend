import { useFetchChannelProfile } from "@/hooks/useChannel";
import { Link } from "react-router";

export const SideVideoCard = ({ video }) => {
  // console.log(video);

  const { data: channelProfile } = useFetchChannelProfile(
    video?.owner.username,
  );

  // console.log(channel);

  return (
    <Link to={`/video/${video?._id}`}>
    <div className="flex gap-3 group cursor-pointer">
        <div className="w-40 shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
          <img className=" w-full object-cover" src={video?.thumbnail} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold line-clamp-2 group-hover:text-purple-400 transition-colors">
            {video?.title}
          </h4>
          <p className="text-xs text-zinc-400">{channelProfile?.username}</p>
          <p className="text-xs text-zinc-500">{video?.views}views</p>
        </div>
    </div>
    </Link>
  );
};
