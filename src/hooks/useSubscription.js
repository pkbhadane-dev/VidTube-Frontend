import { subscribedChannelsRequest, toggleSubscribeRequest } from "@/Api/subscription.api";
import { useToggleStore } from "@/store/useToggleStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useToggleSubscribe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (channelId) => {
      return await toggleSubscribeRequest(channelId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["channelProfile"] });
    },
    onError: (error) => {
      toast.error(error?.response.data.message);
    },
  });
};

export const useFetchSubscribedChannels = () => {
  return useQuery({
    queryKey: ["subscribedChannel"],
    queryFn: subscribedChannelsRequest
  })
}