import { Link, useLocation } from "react-router";
import { IoIosHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";

export const Sidebar = ({ toggle }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const sideBarMenu = [
    { name: "Home", icon: <IoIosHome />, path: "/" },
    { name: "Subscription", icon: <MdSubscriptions />, path: "/subscription" },
    { name: "History", icon: <FaHistory />, path: "/history" },
    { name: "playlist", icon: <MdFeaturedPlayList />, path: "/playlist" },
  ];

  return (
    <>
      <div
        className={` ${toggle ? "w-64" : " w-20"} transition-all duration-300 ease-in-out flex flex-col justify-between fixed h-screen md:sticky z-50 ${toggle ? "translate-x-0" : "-translate-x-full md:translate-x-0"} overflow-hidden bg-[#11141B] text-[#FAFAFA]`}
      >
        <div className=" flex justify-center text-[17px] font-semibold gap-11 flex-col h-full p-4"> 
          {sideBarMenu.map((item) => (
            <Link key={item.path} to={item.path}>
              <div
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${toggle ? "px-6 justify-start" :"px-0 justify-center"} ${
                  isActive(item.path)
                    ? "bg-purple-600/10 text-purple-500"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-[24px] pl-4 transition-colors">
                  {item.icon}
                </span>
                <span className={`text-[15px] font-medium tracking-wide ${toggle ? " md:opacity-100 w-auto" : "md:opacity-0 w-0 invisible"}`}>
                  {item.name}
                </span>

                {toggle && isActive(item.path) && (
                  <div className="absolute left-0 w-1 h-6 bg-purple-600 rounded-r-full" />
                )}
              </div>
              {!toggle && (
                <div className="absolute left-full ml-4 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
                  {item.name}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};


