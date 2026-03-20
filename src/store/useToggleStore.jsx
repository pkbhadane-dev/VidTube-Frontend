import { create } from "zustand";

export const useToggleStore = create((set) => ({
  videoUploadForm: false,
  uploadProgress: 0,
  isUploading: false,
  isProcessing: false,

  setVideoUploadForm: () =>
    set({
      videoUploadForm: true,
    }),

  setCancelVideoUploadForm: () =>
    set({
      videoUploadForm: false,
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
