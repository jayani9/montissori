import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Grass from "./Grass"; // Make sure the Grass component is in the same folder
import { useLanguage } from "../../context/LanguageContext";
import translationsData from "../../data/translations.json";

// Asset placeholders - replace with your actual paths
import skybackground from "./../../assets/hero.jpg";
import sun from "./../../assets/sun.png";
import cloud1 from "./../../assets/cloud1.png";
import cloud2 from "./../../assets/cloud2.png";
import cloud3 from "./../../assets/cloud3.png";

const translations = translationsData as any;

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang]?.hero;

  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!t) return null;

  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden bg-sky-200">
      
      {/* 🌄 Background Layer */}
      <img
        src={skybackground}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        alt="Finnish Landscape"
      />

      {/* ☀️ Animated Sun */}
      <motion.img
        src={sun}
        alt="Sun"
        className="absolute top-12 right-[10%] w-48 md:w-64 lg:w-80 z-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ☁️ Cloud Layer 1: Slow Left to Right */}
      {[0, 12].map((delay, i) => (
        <motion.img
          key={"cloud-lr-" + i}
          src={cloud1}
          className="absolute top-[10%] w-40 md:w-60 opacity-80 z-10"
          initial={{ x: -400 }}
          animate={{ x: windowWidth + 400 }}
          transition={{
            duration: 35,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* ☁️ Cloud Layer 2: Faster Right to Left */}
      {[5, 20].map((delay, i) => (
        <motion.img
          key={"cloud-rl-" + i}
          src={cloud2}
          className="absolute top-[25%] w-48 md:w-72 opacity-70 z-10"
          initial={{ x: windowWidth + 400 }}
          animate={{ x: -400 }}
          transition={{
            duration: 45,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* ☁️ Cloud Layer 3: Floating Middle */}
      <motion.img
        src={cloud3}
        className="absolute top-[40%] left-[20%] w-32 md:w-44 opacity-60 z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🌿 The Interactive Grass Layer (GSAP) */}
      <div className="absolute bottom-2 left-0 w-full z-30">
        <Grass />
      </div>

      {/* 🌑 Subtle Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent z-20"></div>

      {/* 🖋️ Main Content Area */}
      <div className="container mx-auto px-8 md:px-16 relative z-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-white mb-6">
            <span className="text-orange-400">{t.titlePart1}</span> <br /> 
            <span className="italic font-light">{t.titlePart2}</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl mb-8 font-medium bg-black/10 backdrop-blur-sm p-4 rounded-lg inline-block">
            {t.subtitle}
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden bg-orange-500 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-2xl transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.button} <span className="text-2xl">→</span>
              </span>
              {/* Organic "Blob" Hover Effect */}
              <div className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 🎨 Bottom Transition Wave */}
      <div className="absolute -bottom-1 left-0 w-full z-30 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.34,92.83,168,76.65,214,62.83,264,67.1,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;