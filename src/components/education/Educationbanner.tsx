import { motion } from "framer-motion";
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";
import heroImg from "./../../assets/action_images/banner.jpg";

// Type assertion for TypeScript
const translations = translationsData as any;

export default function Educationbanner() {
  const { lang } = useLanguage();
  
  // Access the action translations
  const t = translations[lang]?.education;

  // Safety return if translation data is missing
  if (!t) return null;

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
          {t.title}
        </h1>
        <p className="mt-3 text-white text-lg md:text-2xl font-medium drop-shadow-md">
          {t.subtitle}
        </p>
      </motion.div>
    </div>
  );
}