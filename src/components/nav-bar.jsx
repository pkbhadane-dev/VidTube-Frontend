import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
export const Navbar = ({toggle, setToggle}) => {

  const handleOnClick = (e) => {
    e.preventDefault()
    setToggle(() => toggle ? false: true)
  }

  return (
    <>
      <div className="flex flex-wrap justify-between text-white pl-5 pr-5 items-center h-auto p-2 bg-linear-to-b from-[#1A103D] to-[#7000FF]">
        <div className="flex items-center gap-5">
          <FiMenu onClick={handleOnClick} className="text-2xl text-[#ab9be6] cursor-pointer" />
          <span className="text-2xl sm:text-3xl font-mono font-extrabold tracking-tight bg-linear-to-t from-[#7000FF] via-[#9862ea] to-[#ab9be6] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            VidTube
          </span>
        </div>

        <div className="flex items-center gap-5 sm:gap-18 ">
          <div className=" flex items-center rounded-md md:border-2 border-[#ab9be6] ">
            <input className="w-3xs text-[17px] border-none focus:outline-none focus:ring-0 hidden sm:block" />
            <IoIosSearch className=" text-[27px] text-[#ab9be6] sm:text-2xl m-2 cursor-pointer " />
          </div>
          <span>
            <FaRegUser className="text-2xl text-[#ab9be6]" />
          </span>
        </div>
      </div>
    </>
  );
};
