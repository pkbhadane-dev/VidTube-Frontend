import { Link } from "react-router";

export const Card = () => {
  return (
    <>
      <Link to="/video">
        <div className="group relative p-px rounded-xl overflow-hidden transition-all duration-500 hover:bg-linear-to-br hover:from-[#7000FF] hover:to-[#FF0080] hover:shadow-[0_0_20px_rgba(112,0,255,0.2)]">
          <div className="bg-[#11141B] rounded-xl h-full overflow-hidden">
            <div className="h-44 bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
              <span className="text-zinc-500 text-xs">video thumbnail</span>

              <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-4">
              <h3 className="text-zinc-50 font-semibold line-clamp-2 group-hover:text-purple-300 transition-colors">
                Building a Premium UI with Tailwind 2026
              </h3>
              <p className="text-zinc-400 text-sm mt-2 flex items-center gap-2">
                Gemini Dev
                <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
              </p>
              <div className="text-zinc-500 text-xs mt-1">
                1.2M views • 3 hours ago
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
