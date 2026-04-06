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
  async (error) => {
    const originalRequest = error.config;

    const{user, setLogout} = useAuthStore.getState()

    if (error.response?.status === 401 && !user) {
      return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
       const response =  await axios.post("http://localhost:8000/api/v1/user/refresh", {}, { withCredentials: true });
       console.log(response.data);
       
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        console.log("Token Expired. Logging out...");
        setLogout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
