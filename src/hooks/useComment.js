import { fetchCommentRequest, postCommentRequest } from "@/Api/comment.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const usePostComment = () => {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ commentData, videoId }) => {
      return postCommentRequest(commentData, videoId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["comment"]})
    },
    onError: (error) => {
      toast.error(error?.response.data.message);
    },
  });
};

export const useFetchComment = (videoId) => {
  return useQuery({
    queryKey: ["comment", videoId],
    queryFn: () => fetchCommentRequest(videoId),
    enabled: !!videoId,
  });
};
