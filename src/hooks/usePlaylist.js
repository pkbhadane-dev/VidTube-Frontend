import {
  addVideoToPlaylistRequest,
  createPlaylistRequest,
  deletePlaylistRequest,
  fetchPlaylistByIdRequest,
  fetchPlaylistRequest,
  removeVideoFromPlaylistRequest,
} from "@/Api/playlist.api";
import { useToggleStore } from "@/store/useToggleStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  const { setShowPlaylistModel } = useToggleStore();
  return useMutation({
    mutationFn: ({ videoId, playlistData }) => {
      return createPlaylistRequest({ videoId, playlistData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["playlist"]);
      setShowPlaylistModel(false);
      toast.success("Playlist & Video added");
    },
    onError: (error) => {
      toast.error(error?.response.data.message);
    },
  });
};

export const useFetchPlaylist = (userId) => {
  return useQuery({
    queryKey: ["playlist", userId],
    queryFn: () => fetchPlaylistRequest(userId),
    enabled: !!userId,
  });
};

export const useAddVideoToPlaylist = () => {
  const queryClient = useQueryClient();
  const { setShowPlaylistModel } = useToggleStore();
  return useMutation({
    mutationFn: ({ playlistId, videoId }) => {
      return addVideoToPlaylistRequest({ playlistId, videoId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["playlist"]);
      setShowPlaylistModel(false);
      toast.success("Video added to playlist");
    },
    onError: (error) => {
      toast.error(error?.response.data.message);
    },
  });
};

export const useFetchPlaylistById = (playlistId) => {
  return useQuery({
    queryKey: ["playlistVideos", playlistId],
    queryFn: () => fetchPlaylistByIdRequest(playlistId),
    enabled: !!playlistId,
  });
};

export const useRemoveVideoFromPlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ videoId, playlistId }) => {
      return removeVideoFromPlaylistRequest({ videoId, playlistId });
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["playlistVideos"] });
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useDeletePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (playlistId) => {
      return deletePlaylistRequest(playlistId);
    },
    onSuccess: (response) => {
      toast.success(response?.data.message);
      queryClient.invalidateQueries({ queryKey: ["playlist"] });
    },
    onError: (error) => {
      toast.error(error?.response.data.message);
    },
  });
};
