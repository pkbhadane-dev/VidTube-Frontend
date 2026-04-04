import axiosInstance from "./axiosInstance";

export const likeVideoRequest = async (videoId) => {
  const response = await axiosInstance.post(`/likes/${videoId}`);
  return response;
};
