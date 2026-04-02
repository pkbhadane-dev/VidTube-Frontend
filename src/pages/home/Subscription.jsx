
import { Card } from "@/components/card";
import { SubscriptionSkeleton } from "@/components/subscription-skeleton";
import { VideoGridSkeleton } from "@/components/videogrid-skeleton";
import { useFetchSubscribedChannels } from "@/hooks/useSubscription";
import { useFetchUserVideos } from "@/hooks/useVideo";
import { useState, useEffect } from "react";


export const Subscription = () => {
  const { data, isPending } = useFetchSubscribedChannels();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (data?.length > 0 && !selectedUser) {
      setSelectedUser(data[0].channel);
    }
  }, [data]);

  const { data: channelVideos, isLoading: isVideosLoading } = 
    useFetchUserVideos(selectedUser?.username);

  if (isPending) return <SubscriptionSkeleton />;

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 min-h-screen bg-[#0B0E14] text-white">

      <div className="flex  gap-6 overflow-x-auto p-4 scrollbar-hide">
        {data?.map((item) => {
          const channel = item.channel;
          const isActive = selectedUser?.username === channel.username;
          
          return (
            <button
              key={channel._id}
              onClick={() => setSelectedUser(channel)}
              className="flex flex-col items-center gap-2 min-w-20 group transition-all"
            >
              <div className={`relative p-1 rounded-full border-2 transition-all duration-300 ${
                isActive ? "border-[#7000FF] scale-110" : "border-transparent group-hover:border-zinc-700"
              }`}>
                <img
                  className="w-11 h-11 md:w-16 md:h-16 rounded-full object-cover shadow-lg"
                  src={channel.avatar}
                  alt={channel.username}
                />
              </div>
              <span className={`text-xs md:text-sm font-medium truncate w-20 text-center ${
                isActive ? "text-white" : "text-zinc-400"
              }`}>
                {channel.username}
              </span>
            </button>
          );
        })}
      </div>

      <hr className="border-zinc-800" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold italic">
            {selectedUser ? `${selectedUser.username}` : "Latest Video"}
          </h2>
        </div>

        {isVideosLoading ? (
          <VideoGridSkeleton />
        ) : channelVideos?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10">
            {channelVideos.map((video) => (
              <Card key={video._id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500">
            No videos on this Channel.
          </div>
        )}
      </div>
    </div>
  );
};



