import { axiosInstance } from "@/Api/axiosInstance";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const nevigate = useNavigate()
  const setAuth = useAuthStore((state)=> state.setAuth)
  return useMutation({
    mutationFn: async (userData) => {
      const { data } = await axiosInstance.post("/user/register", userData);
      return data;
    },

    onSuccess: (data) => {
      console.log("Registration Successful:", data);
      setAuth(data)
      nevigate("/")
      alert("Account Created!");
    },

    onError: (error) => {
      console.log("Registration Error", error);
      alert(error.response?.data?.message || "Something went wrong");
    },
  });
};
