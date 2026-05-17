import { LoaderCircle } from "lucide-react"

export const ButtonLoading = () => {
    return(
        <>
        <div>
            <LoaderCircle size={24} className=" animate-spin duration-300"/>
        </div>
        </>
    )
}