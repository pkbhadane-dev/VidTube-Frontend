import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState();
  console.log(searchValue);
  const nevigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchValue.trim() && nevigate(`/search?q=${searchValue}`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className=" flex items-center rounded-md md:border-2 border-[#ab9be6] ">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-3xs text-[17px] border-none focus:outline-none focus:ring-0 hidden sm:block"
        />
        <button type="onSubmit">
          <IoIosSearch className=" text-[27px] text-[#ab9be6] sm:text-2xl m-2 cursor-pointer " />
        </button>
      </div>
    </form>
  );
};
