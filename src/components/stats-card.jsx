import React from "react";

export const StatsCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="relative group overflow-hidden bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl transition-all duration-300 hover:border-[#7000FF] hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]">

      <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-600/10 rounded-full blur-3xl group-hover:bg-blue-950 transition-all duration-500" />

      <div className="flex justify-between items-start">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-white tracking-tight">
            {value}
          </h3>
        </div>

        <div className="p-3 bg-zinc-800 rounded-xl text-[#7000FF] group-hover:bg-[#7000FF] group-hover:text-white transition-colors duration-300">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};
