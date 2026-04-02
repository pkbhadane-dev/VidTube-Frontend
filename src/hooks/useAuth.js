import axiosInstance from "@/Api/axiosInstance";
import {
  userRegisterRequest,
  userLoginRequest,
  userLogoutRequest,
  userWatchHistoryRequest,
} from "@/Api/user.api";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
      alert("Account Created!");
    },

    onError: (error) => {
      console.log("Registration Error", error);
      alert(error.message || "Something went wrong");
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
      alert("Logout successfull");
    },

    onError: (error) => {
      console.log("Logout error", error);
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
      alert("Login Successfull");
    },

    onError: (error) => {
      console.log("Login Error", error);
      alert(error.message || "something went wrong");
    },
  });
};

export const useWatchHistory = () => {
  return useQuery({
    queryKey: ["watchHistory"],
    queryFn: userWatchHistoryRequest
  })
}