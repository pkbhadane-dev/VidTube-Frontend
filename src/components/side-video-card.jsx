export const SideVideoCard = () => (
  <div className="flex gap-3 group cursor-pointer">
    <div className="w-40 h-24 shrink-0 bg-zinc-800 rounded-lg overflow-hidden"></div>
    <div className="flex flex-col gap-1">
      <h4 className="text-sm font-bold line-clamp-2 group-hover:text-purple-400 transition-colors">
        Next Video Title...
      </h4>
      <p className="text-xs text-zinc-400">Channel Name</p>
      <p className="text-xs text-zinc-500">500K views</p>
    </div>
  </div>
);
