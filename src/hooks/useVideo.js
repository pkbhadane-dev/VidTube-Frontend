import {
  deleteVideoRequest,
  fetchAllVideoRequest,
  fetchUserVideosRequest,
  fetchVideoByIdRequest,
  updateVideoRequest,
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
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useVideoUpload = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setVideo = useVideoStore((state) => state.setVideoUpload);
  const {
    setUploadProgress,
    setIsUploading,
    resetProgress,
    setIsProcessing,
    setVideoUploadForm,
  } = useToggleStore();

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
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["userVideos"] });
      setTimeout(() => resetProgress(), 2000);
      setVideoUploadForm(false);
      toast.success("Video uploaded successfully")
    },

    onError: (error) => {
      toast.error(error?.response.data.message);
      resetProgress();
    },
  });
};

export const useFetchAllVideos = (query) => {
  return useQuery({
    queryKey: ["videos", query],
    queryFn:()=> fetchAllVideoRequest(query),
    enabled: true
  });
};

export const useFetchVideoById = (videoId) => {
  return useQuery({
    queryKey: ["video", videoId],
    queryFn: () => fetchVideoByIdRequest(videoId),
    enabled: !!videoId,
  });
};

export const useFetchUserVideos = (username) => {
  return useQuery({
    queryKey: ["userVideos", username],
    queryFn:()=> fetchUserVideosRequest(username),
    enabled: !!username
  });
};

export const useDeleteVideoById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (videoId) => {
      return deleteVideoRequest(videoId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["userVideos"] });
      toast.success("Video deleted")
    },
    onError: (error) => {
      toast.error(error?.response.data.message || "Something went wrong")
      
    },
  });
};

export const useUpdateVideo = () => {
  const queryClient = useQueryClient();
  const {setVideoUpdateForm} = useToggleStore()
  return useMutation({
    mutationFn: async({videoData, videoId}) => {
      return updateVideoRequest(videoData, videoId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["userVideos"] });
      setVideoUpdateForm(false)
      toast.success("Video updated!")
    },
    onError: (error) => {
      toast.error(error?.response.data.message || "Error while updating video");
    },
  });
};
