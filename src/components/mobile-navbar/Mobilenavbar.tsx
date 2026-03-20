import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { path: "/", fi: "Pedagogiikka", en: "Pedagogy" },
  { path: "/varhaiskasvatus", fi: "Varhaiskasvatus", en: "Childhood Education" },
  { path: "/action", fi: "Toiminta", en: "Action" },
  { path: "/yhteystiedot", fi: "Yhteystiedot", en: "Contact Info" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Explicitly type as Variants to fix the TS error
  const menuVariants: Variants = {
    closed: { 
      x: "100%", 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        when: "afterChildren" // Closes children before the menu slides away
      } 
    },
    opened: { 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        staggerChildren: 0.1, // Automatically staggers the nav links
        delayChildren: 0.2    // Waits for menu to slide in slightly first
      } 
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm h-16 flex items-center justify-between px-6">
      {/* Logo */}
      <Link to="/" className="text-[#4A90B9] font-bold text-xl uppercase tracking-tighter">
        Montessori
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((link) => (
          <Link key={link.path} to={link.path} className="text-gray-600 hover:text-[#4A90B9] font-medium transition-colors">
            {link.fi}
          </Link>
        ))}
      </div>

      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="relative z-[110] md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
      >
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="w-full h-0.5 bg-gray-800 rounded-full block origin-center"
        />
        <motion.span 
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-full h-0.5 bg-gray-800 rounded-full block"
        />
        <motion.span 
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          className="w-full h-0.5 bg-gray-800 rounded-full block origin-center"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[101]"
            />

            {/* Sidebar Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-white z-[102] shadow-2xl p-10 flex flex-col"
            >
              <div className="mt-16 flex flex-col gap-8">
                {navItems.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={linkVariants}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-semibold text-gray-800 hover:text-[#4A90B9] block"
                    >
                      {link.fi}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}