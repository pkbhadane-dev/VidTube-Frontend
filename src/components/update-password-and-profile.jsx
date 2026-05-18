import { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { PasswordUpdateForm } from "./password-update-form";
export const UpdatePasswordAndProfile = () => {
  const [showModel, setShowModel] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  return (
    <>
      <div className=" ">
        <div className="text-end cursor-pointer mb-1 ">
          <span
            onClick={() => setShowModel(!showModel)}
            className="font-semibold bg-purple-600 hover:bg-purple-700 py-1 px-2 rounded-sm"
          >
            Update
          </span>
        </div>
        {showModel && (
          <div className=" flex flex-col animate-in fade-in duration-300 transition-all bg-black/30 backdrop-blur-sm px-3 py-2 rounded-sm">
            <span
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className=" hover:bg-black/10 hover:backdrop-blur-sm px-2 py-1 rounded-sm transition-colors cursor-pointer"
            >
              Password
            </span>
            <span className="hover:bg-black/10 hover:backdrop-blur-sm px-2 py-1 rounded-sm transition-colors cursor-pointer">
              Profile
            </span>
          </div>
        )}
      </div>
      {showPasswordForm && (
          <PasswordUpdateForm className="" setShowPasswordForm={setShowPasswordForm} showPasswordForm={showPasswordForm} setShowModel={setShowModel}/>
        )}
    </>
  );
};
