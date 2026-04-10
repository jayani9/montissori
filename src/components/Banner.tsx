import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: string; // Optional: in case some banners need to be taller
}

export default function Banner({ title, subtitle, image, height = "h-[250px] md:h-[400px]" }: BannerProps) {
  return (
    <div 
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 1. Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 2. Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg uppercase tracking-wider">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-white text-lg md:text-2xl font-medium drop-shadow-md">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}