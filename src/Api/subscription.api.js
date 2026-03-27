import axiosInstance from "./axiosInstance";

export const toggleSubscribeRequest = async (channelId) => {
  const { data } = await axiosInstance.post(`/subscription/${channelId}`);
  return data;
};
