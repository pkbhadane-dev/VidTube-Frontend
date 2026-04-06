import { motion, AnimatePresence } from "framer-motion";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export const LikeButton = ({ isLiked, onClick, likesCount }) => {
  return (
    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all cursor-pointer group">
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isLiked ? (
            <motion.div
              key="liked"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-purple-500 cursor-pointer"
            >
              <AiFillLike className="cursor-pointer" size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="unliked"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-zinc-400 group-hover:text-white"
            >
              <AiOutlineLike size={22} />
            </motion.div>
          )}
        </AnimatePresence>
        {likesCount > 0 && (
        <span className="text-sm font-bold tabular-nums">{likesCount}</span>
      )}
      </motion.button>
    </div>
  );
};
