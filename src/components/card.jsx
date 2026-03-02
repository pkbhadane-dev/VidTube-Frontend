import { CardHeader } from "./ui/card";

export const Card = () => {
  return (
    <>
      <div className="flex-1 min-w-70 max-w-100 rounded-md bg-linear-to-t from-[#1A103D] to-[#7000FF] ">
        <div className=" rounded-md h-52">video thumbnail</div>
        <div className="p-2.5">video title</div>
        <div className=" p-2.5">channel name</div>
      </div>
    </>
  );
};
