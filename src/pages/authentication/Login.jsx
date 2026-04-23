import { LoginForm } from "@/components/login-form";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

export const Login = () => {
  const nevigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  useEffect(() => {
    if (isAuthenticated) {
      nevigate("/");
    }
  }, [isAuthenticated, nevigate]);
  return (
    <>
      <div className=" w-full h-lvh bg-[#0B0E14]">
        <LoginForm className=" max-w-2xl m-auto pt-10" />
      </div>
      <Toaster />
    </>
  );
};
