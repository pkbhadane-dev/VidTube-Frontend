import { CommentSection } from "@/components/comment-section";
import { SideVideoCard } from "@/components/side-video-card";
import { Link, useParams, useSearchParams } from "react-router";
import { PlaylistModal } from "@/components/playlist-model";
import { useFetchAllVideos, useFetchVideoById } from "@/hooks/useVideo";
import { useToggleSubscribe } from "@/hooks/useSubscription";
import { useFetchChannelProfile } from "@/hooks/useChannel";
import { SubscribeButton } from "@/components/subscribe-btn";
import { formatDistanceToNow } from "date-fns";
import { useLikeVideo } from "@/hooks/useLike";
import { LikeButton } from "@/components/like-btn";
import { useToggleStore } from "@/store/useToggleStore";
import { PlaylistSideVideoCard } from "@/components/playlist-side-video-card";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

export const Video = () => {
  const { mutate } = useLikeVideo();
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get("list");

  // const [showModel, setShowModel] = useState(false);
  const { user } = useAuthStore();
  const { showPlaylistModel, setShowPlaylistModel } = useToggleStore();
  const { mutate: subscribe, isPending } = useToggleSubscribe();

  const { videoId } = useParams();
  const { data: video, isLoading } = useFetchVideoById(videoId);

  const username = video?.owner?.username;
  const channelId = video?.owner?._id;

  const { data: channel } = useFetchChannelProfile(username);
  const { data: allVideos } = useFetchAllVideos();

  const isSubscribed = channel?.isSubscribed;

  const timeAgo = video?.createdAt
    ? formatDistanceToNow(new Date(video?.createdAt), {
        addSuffix: true,
      })
    : "";

    const loginToast = () => {
      return toast.error("Login first!")
    }

  const handleSubscribe = () => {
    if (!user) {
      return loginToast()
    }
    subscribe(channelId);
  };
  const handleLike = () => {
    if (!user) {
       return loginToast()
    }
    mutate(video?._id);
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-zinc-50 font-sans">
      <div className="max-w-400 mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
        <div className="flex-1">
          <div className="aspect-video w-full rounded-2xl bg-black overflow-hidden shadow-2xl border border-white/5">
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#1A103D] to-black">
              <video
                src={video?.videoFile}
                poster={video?.thumbnail}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold leading-tight">{video?.title}</h1>

            <div className="flex flex-wrap justify-between items-center mt-4 pb-6 border-b border-white/10 gap-4">
              <div className="flex items-center gap-4">
                <span>
                  <Link to={`/channel/${channel?.username}`}>
                    <img
                      src={channel ? channel?.avatar : "user"}
                      alt="user avatar"
                      className=" h-9 w-9 rounded-full object-cover ring-1 ring-black/10"
                    />
                  </Link>
                </span>
                <div>
                  <Link>
                    <h3 className="font-bold">{video?.owner.username}</h3>
                  </Link>
                  <p className="text-xs text-zinc-400">
                    {channel?.subscribersCount} subscribers
                  </p>
                </div>
                <SubscribeButton
                  onClick={handleSubscribe}
                  isSubscribed={isSubscribed}
                  isPending={isPending}
                />
              </div>

              <div className="flex gap-2">
                <LikeButton
                  isLiked={video?.isLiked}
                  likesCount={video?.likesCount}
                  onClick={handleLike}
                />
                <button
                  className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
                  onClick={() =>{!user ? loginToast() : setShowPlaylistModel(true)}}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            {showPlaylistModel && (
              <PlaylistModal
                closeModel={() => setShowPlaylistModel(false)}
                videoId={video?._id}
              />
            )}

            <div className="mt-6 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <p className="text-sm font-bold">
                {video?.views} views • {timeAgo}{" "}
              </p>
              <p className="text-sm mt-2 text-zinc-300">
                {video?.description}
                <span className="font-bold block mt-2">Show more</span>
              </p>
            </div>
          </div>
          <div>
            <CommentSection videoId={video?._id} />
          </div>
        </div>

        <div className="lg:w-100 flex flex-col gap-4">
          <h2 className="font-bold text-lg mb-2">Up next</h2>
          {playlistId ? (
            <PlaylistSideVideoCard
              playlistId={playlistId}
              currentVideoId={videoId}
            />
          ) : (
            allVideos?.map((video) => (
              <SideVideoCard key={video._id} video={video} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
