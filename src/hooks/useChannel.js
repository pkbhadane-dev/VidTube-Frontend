import { channelProfileRequest } from "@/Api/channel.api";
import { useQuery } from "@tanstack/react-query";

export const useFetchChannelProfile = (username) => {
  return useQuery({
    queryKey: ["channelProfile", username],
    queryFn: () => channelProfileRequest(username),
  });
};
