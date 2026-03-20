import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "./../assets/logo_web.svg";

// Define the menu items to keep the code DRY
const navItems = [
  { path: "/", fi: "Pedagogiikka", en: "Pedagogy" },
  { path: "/varhaiskasvatus", fi: "Varhaiskasvatus", en: "Childhood Education" },
  { path: "/action", fi: "Toiminta", en: "Action" },
  { path: "/yhteystiedot", fi: "Yhteystiedot", en: "Contact Info" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 relative bg-white/80 backdrop-blur-md sticky top-0 z-[100] shadow-sm">

      {/* Logo - Linked to Home */}
      <Link to="/" className="z-[110] absolute">
        <img
          src={Logo}
          alt="MIO Montessori Logo"
          className="pt-4 h-24 md:h-36 w-auto transition-transform hover:scale-105"
        />
      </Link>

      <div className="flex w-full">
        <div className="flex items-center justify-end gap-10 w-full">
          {/* Navigation Menu */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>

          {/* Action Button */}
          <Link to="/yhteystiedot">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4CAF50] hover:bg-[#43a047] text-white px-8 py-2.5 rounded-full font-bold shadow-md transition-colors"
            >
              Ota yhteyttä
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Sub-component for individual Nav Items with Hover Label
const NavItem = ({ item }: { item: typeof navItems[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `text-lg font-semibold transition-colors ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-400"
          }`
        }
      >
        {item.fi}
      </NavLink>

      {/* English Label - Appears on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute -bottom-6 whitespace-nowrap text-xs font-medium text-gray-400 italic pointer-events-none"
          >
            {item.en}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;