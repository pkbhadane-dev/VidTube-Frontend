import { Navbar } from "@/components/nav-bar";
// import { Sidebar, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/card";
import { useState } from "react";
import { Outlet } from "react-router";

export const Home = () => {
  const [data, setData] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
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
  );
};
