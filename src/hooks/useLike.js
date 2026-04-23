import { likeVideoRequest } from "@/Api/like.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLikeVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => {
      return likeVideoRequest(videoId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["video"] });
    },
    onError: (error) => {
      toast.error(error?.response.data.message);
    },
  });
};
