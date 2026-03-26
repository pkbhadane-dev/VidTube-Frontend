import { useDeleteVideoById } from "@/hooks/useVideo";
import { useAuthStore } from "@/store/useAuthStore";
import { useToggleStore } from "@/store/useToggleStore";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { UpdateVideoForm } from "./update-video-form";

export const UpdateDeleteBtn = ({ video }) => {
const{videoUpdateForm, setVideoUpdateForm} = useToggleStore()
  const [showBtn, setShowBtn] = useState(false);
  const { mutate: deleteVideo, isPending } = useDeleteVideoById();

  const handleOnDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteVideo(video._id);
  };

  const handleUpdateClick = (e) =>{
    e.preventDefault()
    e.stopPropagation()
    setVideoUpdateForm(true, video)  
  }
  
  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBtn(!showBtn);
  };
  return (
    <>
      <div className="absolute top-2 right-2 z-50">
        {!showBtn ? (
          <button
            onClick={toggleMenu}
            className="p-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all cursor-pointer"
          >
            <HiDotsVertical className="text-xl" />
          </button>
        ) : (
          <div className="flex flex-col gap-2 bg-[#2a2a2a] p-2 rounded-lg shadow-xl border border-gray-700 animate-in fade-in zoom-in duration-200">
            <button
              onClick={toggleMenu}
              className="self-end text-gray-400 hover:text-white cursor-pointer"
            >
              <IoMdClose className="text-[20px]" />
            </button>
            <button
              onClick={handleOnDelete}
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-600 rounded text-sm text-white transition-colors cursor-pointer"
            >
              <FaTrashAlt /> Delete
            </button>
            <button onClick={handleUpdateClick} className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-600 rounded text-sm text-white transition-colors cursor-pointer">
              <FaPen /> Edit
            </button>
          </div>
        )}
      </div>
      {videoUpdateForm && <UpdateVideoForm onClick={(e)=>{e.stopPropagation(); e.preventDefault()}} video={video}/>}
    </>
  );
};
