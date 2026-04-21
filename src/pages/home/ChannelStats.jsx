import { StatsCard } from "@/components/stats-card";
import { VideoActivityRow } from "@/components/video-activity-row";
import { useFetchChannelStats } from "@/hooks/useChannel"
import { useFetchUserVideos } from "@/hooks/useVideo";
import { useAuthStore } from "@/store/useAuthStore";

export const ChannelStats = () => {
    const {data:stats} = useFetchChannelStats()
    const {user} = useAuthStore()
    const{data:channelVideos} = useFetchUserVideos(user.username)
    console.log(stats);
    
    // const stats = { totalViews: "1.2M", totalSubscribers: "45K", totalVideos: "128", totalLikes: "890K" };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-white text-3xl font-bold mb-8">Channel Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Views" value={stats?.totalVideoViews} icon="📊" trend="+12%" />
        <StatsCard title="Subscribers" value={stats?.totalSubscribersCount} icon="👥" />
        <StatsCard title="Videos" value={stats?.totalVideoCount} icon="🎥" />
        <StatsCard title="Likes" value={stats?.totalLike} icon="❤️" />
      </div>

     <div className=" mt-10">
      {channelVideos?.map((video)=> <VideoActivityRow key={video._id} video={video}/>)}
     </div>
    </div>
  );
}