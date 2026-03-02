export const Sidebar = ({ data }) => {
  return (
    <>
      <div
        className={` ${data ? "w-64 opacity-100" : " w-0 opacity-0"} transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden bg-[#1A103D]`}
      >
        <div className="w-64 flex flex-col justify-between h-full p-4">
          <div>
            <span>sidebar</span>
          </div>
          <div>
            <span>Setting</span>
          </div>
        </div>
      </div>
    </>
  );
};
