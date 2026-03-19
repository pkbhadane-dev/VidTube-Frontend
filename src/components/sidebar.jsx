import { Link, useLocation, useNavigate } from "react-router";
import { IoIosHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";
import { useLogout } from "@/hooks/useAuth";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export const Sidebar = ({ toggle }) => {
  const location = useLocation();
  const nevigate = useNavigate();
  const isActive = (path) => location.pathname === path;
  const [logoutActive, setLogoutActive] = useState(false);

  const { mutate: logout, isPending } = useLogout();
  const { isAuthenticated } = useAuthStore();

  const handleOnClick = (e) => {
    e.preventDefault();
    setLogoutActive(() => !logoutActive);
    isActive(null);
    isAuthenticated ? logout() : nevigate("/login");
  };

  const sideBarMenu = [
    { name: "Home", icon: <IoIosHome />, path: "/" },
    { name: "Subscription", icon: <MdSubscriptions />, path: "/subscription" },
    { name: "History", icon: <FaHistory />, path: "/history" },
    { name: "playlist", icon: <MdFeaturedPlayList />, path: "/playlist" },
    { name: "Logout", icon: <BiSolidLogOut />, path: "/login" },
  ];

  return (
    <>
      <div
        className={` ${toggle ? "w-64" : " w-20"} transition-all duration-300 ease-in-out flex flex-col justify-between fixed h-screen md:sticky z-50 ${toggle ? "translate-x-0" : "-translate-x-full md:translate-x-0"} overflow-hidden bg-[#11141B] text-[#FAFAFA]`}
      >
        <div className=" flex justify-center text-[17px] font-semibold gap-11 flex-col h-full p-4">
          {sideBarMenu.map((item) => {
            const isLogout = item.name === "Logout";

            if (isLogout) {
              return (
                <div
                  key={item.name}
                  onClick={handleOnClick}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${toggle ? "px-6 justify-start" : "px-0 justify-center"} ${
                    logoutActive
                      ? "bg-purple-600/10 text-purple-500"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-[24px] pl-4 ">{item.icon}</span>
                  <span
                    className={`text-[15px] font-medium tracking-wide ${toggle ? " md:opacity-100 w-auto" : "md:opacity-0 w-0 invisible"}`}
                  >
                    {isAuthenticated ? item.name : "Login"}
                  </span>
                </div>
              );
            }

            return (
              <Link key={item.path} to={item.path}>
                <div
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${toggle ? "px-6 justify-start" : "px-0 justify-center"} ${
                    isActive(item.path)
                      ? "bg-purple-600/10 text-purple-500"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-[24px] pl-4 transition-colors">
                    {item.icon}
                  </span>
                  <span
                    className={`text-[15px] font-medium tracking-wide ${toggle ? " md:opacity-100 w-auto" : "md:opacity-0 w-0 invisible"}`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
