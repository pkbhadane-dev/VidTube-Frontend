import { Navbar } from "@/components/nav-bar";
import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router";
import { useState } from "react";

export const Layout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#0B0E14] h-dvh flex flex-col overflow-hidden">
      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 transition-opacity md:hidden"
          onClick={() => setToggle(false)}
        />
      )}
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar toggle={toggle} />
        <main className="flex-1 overflow-y-auto transition-all duration-300 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
