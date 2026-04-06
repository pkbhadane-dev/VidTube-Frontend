import { create } from "zustand";

export const useToggleStore = create((set) => ({
  videoUploadForm: false,
  videoUpdateForm: false,
  selectedVideo: null,
  uploadProgress: 0,
  isUploading: false,
  isProcessing: false,
  showPlaylistModel: false,

  setShowPlaylistModel: (status) =>
    set({
      showPlaylistModel: status,
    }),

  setVideoUploadForm: (status) =>
    set({
      videoUploadForm: status,
    }),

  setVideoUpdateForm: (status, videoData = null) =>
    set({
      videoUpdateForm: status,
      selectedVideo: videoData,
    }),

  setUploadProgress: (progress) =>
    set({
      uploadProgress: progress,
    }),

  setIsUploading: (status) =>
    set({
      isUploading: status,
    }),
  setIsProcessing: (status) =>
    set({
      isProcessing: status,
    }),
  resetProgress: () =>
    set({
      uploadProgress: 0,
      isUploading: false,
      isProcessing: false,
    }),
}));
