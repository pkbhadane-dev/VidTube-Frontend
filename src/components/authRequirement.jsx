import { Link } from "react-router";

export const AuthRequirement = () => {
  return (
    <>
      <div className=" shrink overflow-hidden w-full h-full bg-linear-to-b to-[#1A103D] flex justify-center items-center text-white">
        <div className=" bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-2xl flex flex-col items-center gap-6 shadow-2xl">
          <div>
            <span className=" font-semibold text-2xl">
              You are not Authorized!
            </span>
          </div>
          <div className=" flex justify-around gap-3">
            <div className=" m-3.5 bg-purple-600 p-3 hover:bg-purple-800 rounded-md">
              <Link to="/signup">Register</Link>
            </div>
            <div className=" m-3.5 rounded-md bg-purple-600 p-3 hover:bg-purple-800 ">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
