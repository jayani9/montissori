import { motion } from "framer-motion";
import skybackground from "../assets/hero.jpg";
import sun from "../assets/sun.png";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">

      {/* 🌄 Background */}
      <img
        src={skybackground}
        className="absolute w-full h-full object-cover"
        alt="background"
      />

      {/* ☀️ Sun */}
      <motion.img
        src={sun}
        alt="sun"
        className="absolute top-10 right-20 w-80 z-10"
        animate={{
          y: [0, -70, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ☁️ LEFT → RIGHT CLOUDS */}
      {[0, 8, 16].map((delay, i) => (
        <motion.img
          key={"lr-" + i}
          src={cloud1}
          alt="cloud"
          className="absolute top-20 w-40 opacity-90 z-10"
          initial={{ x: -300 }}
          animate={{
            x: "120vw",
            y: [0, -20, 0],
          }}
          transition={{
            x: {
              duration: 20,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* ☁️ RIGHT → LEFT CLOUDS */}
      {[0, 10, 20].map((delay, i) => (
        <motion.img
          key={"rl-" + i}
          src={cloud2}
          alt="cloud"
          className="absolute top-40 w-52 opacity-80 z-10"
          initial={{ x: "120vw" }}
          animate={{
            x: -300,
            y: [0, 15, 0],
          }}
          transition={{
            x: {
              duration: 25,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* ☁️ EXTRA FLOATING CLOUDS */}
      {[5, 15].map((delay, i) => (
        <motion.img
          key={"extra-" + i}
          src={cloud3}
          alt="cloud"
          className="absolute top-64 w-32 opacity-70 z-10"
          initial={{ x: -200 }}
          animate={{
            x: "120vw",
            y: [0, -25, 10, 0],
          }}
          transition={{
            x: {
              duration: 22,
              delay,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-20 px-12 text-white">
        <h1 className="text-5xl font-bold mb-4 text-red-500">
          Pedagogiikka <br /> Pedagogy
        </h1>

        <button className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-full text-lg shadow-lg">
          Lue lisää →
        </button>
      </div>
    </div>
  );
};

export default Hero;