import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const MButton = motion.create(Button);

export const SubscribeButton = ({ isSubscribed, onClick, isPending }) => {
  return (
    <>
      <MButton
        // Radix/Shadcn Props
        // variant={isSubscribed ? "secondary" : "destructive"}
        size="lg"
        disabled={isPending}
        onClick={onClick}
        className={`rounded-full min-w-30 relative overflow-hidden ${isSubscribed ? "bg-white/10 hover:bg-white/20" : "bg-purple-600 hover:bg-purple-500"}`}
        // Framer Motion Props
        initial={false}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isPending ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              Please wait
            </motion.span>
          ) : isSubscribed ? (
            <motion.span
              key="subscribed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex items-center gap-2"
            >
              Subscribed
            </motion.span>
          ) : (
            <motion.span
              key="subscribe"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              Subscribe
            </motion.span>
          )}
        </AnimatePresence>
      </MButton>
    </>
  );
};
