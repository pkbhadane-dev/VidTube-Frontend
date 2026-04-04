import { likeVideoRequest } from "@/Api/like.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
      console.log(error.response.data.message);
    },
  });
};
