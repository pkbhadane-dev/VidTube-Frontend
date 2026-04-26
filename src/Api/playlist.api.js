import axiosInstance from "./axiosInstance";

export const createPlaylistRequest = async ({ videoId, playlistData }) => {
  const { data } = await axiosInstance.post(
    `/playlist/${videoId}`,
    playlistData,
  );
  return data;
};

export const fetchPlaylistRequest = async (userId) => {
  const { data } = await axiosInstance.get(`/playlist/user/${userId}`);
  return data.data;
};

export const addVideoToPlaylistRequest = async ({ playlistId, videoId }) => {
  const { data } = await axiosInstance.patch(
    `/playlist/add/${playlistId}/${videoId}`,
  );
  return data;
};

export const fetchPlaylistByIdRequest = async (playlistId) => {
  const { data } = await axiosInstance.get(`/playlist/${playlistId}`);
  return data.data;
};

export const removeVideoFromPlaylistRequest = async ({
  videoId,
  playlistId,
}) => {
  const { data } = await axiosInstance.patch(
    `/playlist/remove/${videoId}/${playlistId}`,
  );
  return data;
};

export const deletePlaylistRequest = (playlistId) => {
  const response = axiosInstance.delete(`/playlist/${playlistId}`);
  return response;
};
