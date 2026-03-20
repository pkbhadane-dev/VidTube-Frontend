import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
 
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token Expired. Logging out...");

      useAuthStore.getState().setLogout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
