import { Card } from "@/components/card";
import { VideoGridSkeleton } from "@/components/videogrid-skeleton";
import { useFetchAllVideos } from "@/hooks/useVideo";

export const Home = () => {
  const { data: videos, isLoading } = useFetchAllVideos();
  console.log(videos);

  return (
    <>
      {isLoading ? (
        <VideoGridSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {videos?.map((video) => (
            <Card key={video._id} video={video} />
          ))}
        </div>
      )}
    </>
  );
};
