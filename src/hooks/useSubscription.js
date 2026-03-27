import { toggleSubscribeRequest } from "@/Api/subscription.api";
import { useToggleStore } from "@/store/useToggleStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useToggleSubscribe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (channelId) => {
      return await toggleSubscribeRequest(channelId);
    },
    onSuccess: (subscriptionData) => {
      console.log(subscriptionData);
      queryClient.invalidateQueries({ queryKey: ["channelProfile"] });
    },
    onError: (error) => {
      console.log(error?.response.data.message);
    },
  });
};
