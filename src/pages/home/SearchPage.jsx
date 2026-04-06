import { useFetchAllVideos } from "@/hooks/useVideo";
import { useSearchParams } from "react-router"

export const SearchPage = () => {

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    console.log(query);
    
    const {data} = useFetchAllVideos({query})
    console.log(data);
    

    return (
        <>
        <div>

        </div>
        </>
    )
}