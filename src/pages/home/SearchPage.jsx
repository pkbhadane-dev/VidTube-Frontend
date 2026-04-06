import { Card } from "@/components/card";
import { useFetchAllVideos } from "@/hooks/useVideo";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  console.log(query);

  const { data: videos } = useFetchAllVideos({ query });
//   console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {videos?.map((video) => (
          <Card key={video._id} video={video} />
        ))}
      </div>
    </>
  );
};
