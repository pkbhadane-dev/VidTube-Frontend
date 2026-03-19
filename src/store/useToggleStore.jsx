import { create } from "zustand";

export const useToggleStore = create(
 (set) => ({
    videoUploadForm: false,

    setVideoUploadForm: () =>
      set({
        videoUploadForm: true,
      }),

      setCancelVideoUploadForm: () =>
        set({
          videoUploadForm: false
        })
  }),
);
