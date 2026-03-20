import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export default function Disclosure({ title, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-2">
      {/* The Blue Bar (Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left text-white bg-[#4A90B9] hover:bg-[#3d7699] transition-all rounded-t-sm"
      >
        <span className="text-lg font-semibold tracking-wide">{title}</span>
        
        {/* Animated Arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl"
        >
          ▾
        </motion.span>
      </button>

      {/* The Hidden Content (Collapsible Part) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-x border-b border-gray-200 bg-white"
          >
            <div className="p-5 text-gray-800 leading-relaxed text-[15px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}