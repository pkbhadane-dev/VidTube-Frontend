import { fetchCommentRequest, postCommentRequest } from "@/Api/comment.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePostComment = () => {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ commentData, videoId }) => {
      return postCommentRequest(commentData, videoId);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({queryKey:["comment"]})
    },
    onError: (error) => {
      console.log(error.response.data.message);
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
