import { axiosInstance } from "@/Api/axiosInstance";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const nevigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  return useMutation({
    mutationFn: async (userData) => {
      const { data } = await axiosInstance.post("/user/register", userData);
      return data;
    },

    onSuccess: (data) => {
      console.log("Registration Successful:", data);
      setAuth(data);
      nevigate("/");
      alert("Account Created!");
    },

    onError: (error) => {
      console.log("Registration Error", error);
      alert(error.response?.data?.message || "Something went wrong");
    },
  });
};

export const useLogout = () => {
  const nevigate = useNavigate();
  const logoutFromStore = useAuthStore((state) => state.setLogout);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/user/logout");
      return response;
    },

    onSuccess: (response) => {
      console.log(response);
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
