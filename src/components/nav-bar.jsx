import { FiMenu } from "react-icons/fi";
import { useAuthStore } from "@/store/useAuthStore";
import { Link } from "react-router";
import { SearchBar } from "./search-bar";

export const Navbar = ({ toggle, setToggle }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    setToggle(() => (toggle ? false : true));
  };

  const { user } = useAuthStore();

  return (
    <>
      <div className="flex flex-wrap justify-between text-white pl-5 pr-5 items-center h-auto p-2 bg-linear-to-b from-[#1A103D] to-[#7000FF]">
        <div className="flex items-center gap-5">
          <FiMenu
            onClick={handleOnClick}
            className="text-2xl text-[#ab9be6] cursor-pointer"
          />
          <span className="text-2xl sm:text-3xl font-mono font-extrabold tracking-tight bg-linear-to-t from-[#7000FF] via-[#9862ea] to-[#ab9be6] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            VidTube
          </span>
        </div>

        <div className="flex items-center gap-5 sm:gap-18 ">
          <SearchBar/>
          <span>
            <Link to={`/channel/${user?.username}`}>
              <img
                src={user ? user?.avatar : "user"}
                alt="user avatar"
                className=" h-9 w-9 rounded-full object-cover ring-1 ring-black/10"
              />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
