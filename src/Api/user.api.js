import axiosInstance from "./axiosInstance";

export const useRegisterRequest = async (userFormData) => {
  const { data } = await axiosInstance.post("/user/register", userFormData);
  return data;
};

export const userLoginRequest = async (userFormData) => {
  const { data } = await axiosInstance.post("/user/login", userFormData);
  return data.data.user;
};

export const userLogoutRequest = async () => {
  const response = await axiosInstance.post("/user/logout");
  return response;
};
