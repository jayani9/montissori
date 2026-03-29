import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa"; 
import { useLanguage } from "../../context/LanguageContext"; // 1. Import your hook
import Logo from "./../../assets/logo_web.svg";

const navItems = [
  { path: "/", fi: "Pedagogiikka", en: "Pedagogy" },
  { path: "/varhaiskasvatus", fi: "Varhaiskasvatus", en: "Childhood Education" },
  { path: "/action", fi: "Toiminta", en: "Action" },
  { path: "/yhteystiedot", fi: "Yhteystiedot", en: "Contact Info" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage(); // 2. Use global state instead of local useState
  const location = useLocation();

  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      scale: 0.95,
      y: -20,
      transition: { type: "spring", stiffness: 300, damping: 30 } 
    },
    opened: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { 
        type: "spring", stiffness: 300, damping: 30,
        staggerChildren: 0.08, delayChildren: 0.1 
      } 
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100 h-20 flex items-center justify-between px-6 md:px-12 transition-all">
      
      {/* 1. Animated Logo Wrap */}
      <Link to="/" className="relative flex items-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          src={Logo}
          alt="MIO Montessori Logo"
          className="h-14 md:h-20 w-auto object-contain"
        />
      </Link>

      {/* 2. Attractive Hamburger with "Menu" label */}
      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400 font-bold">
          {/* 3. Translate "Close" label */}
          {isOpen ? (lang === "fi" ? "Sulje" : "Close") : "Menu"}
        </span>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-[#4A90B9]/10 text-[#4A90B9] text-3xl hover:bg-[#4A90B9] hover:text-white transition-all duration-300 focus:outline-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-[101]"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="absolute top-24 right-6 w-[calc(100%-3rem)] sm:w-[380px] bg-white/95 backdrop-blur-2xl z-[102] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 p-8 flex flex-col gap-6"
            >
              {/* 4. Language Switcher (Now using global setLang) */}
              <div className="flex justify-between items-center bg-gray-50 p-1 rounded-full w-fit">
                {(["fi", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)} // This now changes the whole app
                    className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${
                      lang === l ? "bg-[#4A90B9] text-white shadow-md" : "text-gray-400"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div 
                      key={item.path} 
                      variants={itemVariants}
                      whileHover={{ x: 10 }} 
                    >
                      <Link 
                        to={item.path} 
                        onClick={() => setIsOpen(false)}
                        className={`group py-3 text-2xl font-bold transition-all flex items-center justify-between
                          ${isActive ? "text-[#4A90B9]" : "text-gray-800 hover:text-[#4A90B9]"}
                        `}
                      >
                        {lang === "fi" ? item.fi : item.en}
                        <motion.span 
                          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          className="text-sm"
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Footer */}
              <motion.div variants={itemVariants} className="pt-6 border-t border-gray-100 mt-2">
                <div className="flex gap-6 items-center">
                  {[FaInstagram, FaFacebookF, FaEnvelope].map((Icon, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ y: -5, scale: 1.1 }}
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-[#4A90B9] hover:bg-[#4A90B9] hover:text-white transition-colors"
                    >
                      <Icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}