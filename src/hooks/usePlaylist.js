import {
  addVideoToPlaylistRequest,
  createPlaylistRequest,
  fetchPlaylistByIdRequest,
  fetchPlaylistRequest,
} from "@/Api/playlist.api";
import { useToggleStore } from "@/store/useToggleStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  const { setShowPlaylistModel } = useToggleStore();
  return useMutation({
    mutationFn: ({ videoId, playlistData }) => {
      return createPlaylistRequest({ videoId, playlistData });
    },
    onSuccess: (data) => {
      alert("Playlist & Video added");
      queryClient.invalidateQueries(["playlist"]);
      setShowPlaylistModel(false);
    },
    onError: (error) => {
      console.log(error.response.data.message);
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
    onSuccess: (data) => {
      alert("video added ");
      queryClient.invalidateQueries(["playlist"]);
      setShowPlaylistModel(false);
    },
    onError: (error) => {
      console.log(error.response.data.message);
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
