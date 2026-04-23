import { SignupForm } from "@/components/signup-form";
import { Toaster } from "react-hot-toast";

export const Signup = () => {
  return (
    <>
      <div className=" w-full bg-[#0B0E14]">
        <SignupForm className=" max-w-2xl m-auto pt-10" />
      </div>
      <Toaster/>
    </>
  );
};
