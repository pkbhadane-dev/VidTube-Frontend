import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useVideoStore = create(
  persist(
    (set) => ({
      videoData: null,

      setVideoUpload: (videoData) => {
        set({
          videoData: videoData,
        });
      },
    }),
    {
      name: "video_storage",
    },
  ),
);
