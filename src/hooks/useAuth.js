import axiosInstance from "@/Api/axiosInstance";
import {
  userRegisterRequest,
  userLoginRequest,
  userLogoutRequest,
  userWatchHistoryRequest,
} from "@/Api/user.api";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const nevigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (userFormData) => {
      return userRegisterRequest(userFormData);
    },

    onSuccess: (data) => {
      console.log("Registration Successful:", data);
      setAuth(data.data);
      nevigate("/");
      toast.success("Account Created!");
    },

    onError: (error) => {
      const customErr = error?.response.data.message;
      const validationErr = error?.response.data.errors;

      if (validationErr) {
        validationErr?.forEach((err) => {
          return toast.error(err.msg);
        });
      } else if (customErr) {
        return toast.error(customErr);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
};

export const useLogout = () => {
  const nevigate = useNavigate();
  const logoutFromStore = useAuthStore((state) => state.setLogout);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return userLogoutRequest();
    },

    onSuccess: () => {
      logoutFromStore();
      queryClient.clear();
      nevigate("/login");
      toast.success("Logout successfull");
    },

    onError: (error) => {
      toast.error("Logout error", error?.response.data.message);
    },
  });
};

export const useLogin = () => {
  const setLogin = useAuthStore((state) => state.setLogin);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (userData) => {
      return userLoginRequest(userData);
    },

    onSuccess: (data) => {
      setLogin(data);
      navigate("/");
      toast.success("Login Successfull");
    },

    onError: (error) => {
      const customErr = error?.response.data.message;
      const validationErr = error?.response.data.errors;

      if (validationErr) {
        validationErr?.forEach((err) => {
          return toast.error(err.msg);
        });
      } else if (customErr) {
        return toast.error(customErr);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
};

export const useWatchHistory = () => {
  return useQuery({
    queryKey: ["watchHistory"],
    queryFn: userWatchHistoryRequest,
  });
};
