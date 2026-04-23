import { Card } from "@/components/card";
import { useFetchAllVideos } from "@/hooks/useVideo";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data: videos } = useFetchAllVideos({ query });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {videos?.map((video) => (
          <Card key={video._id} video={video} />
        ))}
      </div>{" "}
      {videos?.length > 0 || <div className="text-xl text-center font-semibold text-purple-400">Video not found</div>}
    </>
  );
};
