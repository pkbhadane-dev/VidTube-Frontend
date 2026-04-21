import axiosInstance from "./axiosInstance";

export const channelProfileRequest = async (username) => {
  const { data } = await axiosInstance.get(`/user/channel-profile/${username}`);
  return data.data;
};

export const channelStatsRequest = async () => {
  const { data } = await axiosInstance.get("/dashboard/stats");
  return data.data;
};
