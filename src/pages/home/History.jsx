import { Card } from "@/components/card";
import { useWatchHistory } from "@/hooks/useAuth";

export const History = () => {
  const { data: watchHistory } = useWatchHistory();
  console.log("history", watchHistory);

  return (
    <>
      <div>
        {watchHistory?.length === 0 ? (
          <h2 className="text-white text-2xl text-center">No Watch Hisstory</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {watchHistory?.map((video) => (
              <Card key={video?._id} video={video} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
