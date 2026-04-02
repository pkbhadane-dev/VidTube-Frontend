
export const SubscriptionSkeleton = () => (
  <div className="p-8 space-y-8">
    <div className="flex gap-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="space-y-2">
          <div className="w-20 h-20 bg-zinc-800 rounded-full animate-pulse" />
          <div className="h-3 w-16 bg-zinc-800 rounded mx-auto animate-pulse" />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-video bg-zinc-800 rounded-xl animate-pulse" />
      ))}
    </div>
  </div>
);