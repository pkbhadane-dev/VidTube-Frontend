import { Navbar } from "@/components/nav-bar";
// import { Sidebar, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/card";
import { useState } from "react";

export const Home = () => {
  const [data, setData] = useState(false);

  return (
    <div className="bg-[#0B0E14] h-dvh flex flex-col overflow-hidden">
      <Navbar data={data} setData={setData} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar data={data} />

        <main className=" flex-1 overflow-y-auto transition-all duration-300 p-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
           
          </div>
        </main>
      </div>
    </div>
  );
};
