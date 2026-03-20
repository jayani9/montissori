import { motion } from "framer-motion";
import heroImg from "./../../assets/action_images/banner.jpg";

export default function Actionbanner() {
  return (
    <div 
      className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 1. Dark Overlay (Important for text readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 2. Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg uppercase tracking-wider">
          Toiminta
        </h1>
        <p className="mt-3 text-white text-lg md:text-2xl font-medium drop-shadow-md">
          Oppimisen iloa, itsenäisyyttä ja kunnioitusta.
        </p>
      </motion.div>
    </div>
  );
}