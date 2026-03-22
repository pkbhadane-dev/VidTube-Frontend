import {
  fetchAllVideoRequest,
  fetchVideoByIdRequest,
  uploadVideoRequest,
} from "@/Api/video.api";
import { useToggleStore } from "@/store/useToggleStore";
import { useVideoStore } from "@/store/useVideoStore";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useVideoUpload = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setVideo = useVideoStore((state) => state.setVideoUpload);
  const { setUploadProgress, setIsUploading, resetProgress, setIsProcessing } =
    useToggleStore();

  return useMutation({
    mutationFn: async (videoFormData) => {
      setIsUploading(true);
      return uploadVideoRequest(videoFormData, (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        setUploadProgress(percentCompleted);

        if (percentCompleted === 100) {
          setIsProcessing(true);
        }
      });
    },

    onSuccess: (data) => {
      setVideo(data);
      // navigate("/")
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      setTimeout(() => resetProgress(), 2000);
    },

    onError: (error) => {
      console.log(error);
      alert(error.message);
      resetProgress();
    },
  });
};

export const useFetchAllVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: fetchAllVideoRequest,
  });
};

export const useFetchVideoById = (videoId) => {
  return useQuery({
    queryKey: ["video", videoId],
    queryFn: () => fetchVideoByIdRequest(videoId),
    enabled: !!videoId,
  });
};
