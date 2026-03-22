import axiosInstance from "./axiosInstance";

export const uploadVideoRequest = async (videoFormData, progress) => {
  const { data } = await axiosInstance.post("/video", videoFormData, {
    onUploadProgress: progress,
  });
  return data;
};

export const fetchAllVideoRequest = async () => {
  const { data } = await axiosInstance.get("/video");
  return data.data.docs;
};

export const fetchVideoByIdRequest = async (videoId) => {
  const { data } = await axiosInstance.get(`/video/${videoId}`);
  return data.data
};
