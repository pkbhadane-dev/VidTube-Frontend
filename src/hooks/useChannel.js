import { channelProfileRequest, channelStatsRequest } from "@/Api/channel.api";
import { useQuery } from "@tanstack/react-query";

export const useFetchChannelProfile = (username) => {
  return useQuery({
    queryKey: ["channelProfile", username],
    queryFn: () => channelProfileRequest(username),
  });
};

export const useFetchChannelStats = () => {
  return useQuery({
    queryKey:["channelStats"],
    queryFn: channelStatsRequest
  })
}