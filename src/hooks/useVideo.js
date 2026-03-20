import axiosInstance from "@/Api/axiosInstance";
import { useToggleStore } from "@/store/useToggleStore";
import { useVideoStore } from "@/store/useVideoStore";
import { useMutation } from "@tanstack/react-query";

export const useVideoUpload = () => {
  const setVideo = useVideoStore((state) => state.setVideoUpload);
  const { setUploadProgress, setIsUploading, resetProgress, setIsProcessing } =
    useToggleStore();

  return useMutation({
    mutationFn: async (videoData) => {
      setIsUploading(true);
      const { data } = await axiosInstance.post("/video", videoData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          setUploadProgress(percentCompleted);

          if (percentCompleted === 100) {
            setIsProcessing(true);
          }
        },
      });

      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      setVideo(data);
      setTimeout(() => resetProgress(), 2000);
    },
    onError: (error) => {
      console.log(error);
      alert(error.message);
      resetProgress();
    },
  });
};
