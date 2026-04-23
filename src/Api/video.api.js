
import axiosInstance from "./axiosInstance";

export const uploadVideoRequest = async (videoFormData, progress) => {
  const { data } = await axiosInstance.post("/video", videoFormData, {
    onUploadProgress: progress,
  });
  return data;
};

export const fetchAllVideoRequest = async (params = {}) => {
  const query = params?.query
  const { data } = await axiosInstance.get("/video", { params: query ? { query } : {} });
  return data.data.docs;
};

export const fetchVideoByIdRequest = async (videoId) => {
  const { data } = await axiosInstance.get(`/video/${videoId}`);
  return data.data;
};

export const fetchUserVideosRequest = async (username) => {
  const { data } = await axiosInstance.get(
    `/dashboard/user-videos/${username}`,
  );
  return data.data;
};

export const deleteVideoRequest = async (videoId) => {
  const response = await axiosInstance.delete(`/video/${videoId}`);
  return response;
};

export const updateVideoRequest = async (updateVideoData, videoId) => {
  const { data } = await axiosInstance.patch(
    `/video/${videoId}`,
    updateVideoData,
  );
  return data;
};
