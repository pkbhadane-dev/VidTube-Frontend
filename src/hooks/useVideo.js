import axiosInstance from "@/Api/axiosInstance";
import { useVideoStore } from "@/store/useVideoStore";
import { useMutation } from "@tanstack/react-query";

export const useVideoUpload = () => {
  const setVideo = useVideoStore((state) => state.setVideoUpload);

  return useMutation({
    mutationFn: async (videoData) => {
      const { data } = await axiosInstance.post("/video", videoData);

      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      setVideo(data);
    },
    onError: (error) => {
      console.log(error);
      alert(error.message);
    },
  });
};
