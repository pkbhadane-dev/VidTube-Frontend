import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setAuth: (userData) =>
        set({
          user: userData,
          isAuthenticated: true,
        }),

      setLogout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth_storage", // data save as this name in local storage
    },
  ),
);
