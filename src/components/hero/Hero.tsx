import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Grass from "./Grass";
import { useLanguage } from "../../context/LanguageContext";
import translationsData from "../../data/translations.json";
import { useNavigate } from "react-router-dom";
import "./Birds.css";

// Asset imports
import skybackground from "./../../assets/hero.jpg";
import sun from "./../../assets/sun.png";
import cloud1 from "./../../assets/cloud1.png";
import cloud2 from "./../../assets/cloud2.png";
import cloud3 from "./../../assets/cloud3.png";

const translations = translationsData as any;

const Hero = () => {
	const navigate = useNavigate();
	const { lang } = useLanguage();
	const t = translations[lang]?.home;

	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1200,
	);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!t) return null;

	// Bird configuration for the loop
	const birds = [
		{ id: 1, duration: "15s", delay: "0s", wingSpeed: "1s", top: "10%" },
		{ id: 2, duration: "16s", delay: "1s", wingSpeed: "0.9s", top: "15%" },
		{ id: 3, duration: "14s", delay: "9.5s", wingSpeed: "1.25s", top: "8%" },
		{ id: 4, duration: "16s", delay: "10.25s", wingSpeed: "1.1s", top: "20%" },
	];

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

			{/* 🐦 Flying Birds Layer */}
			{birds.map((bird) => (
				<div
					key={bird.id}
					className="bird-container"
					style={{
						animationDuration: bird.duration,
						animationDelay: bird.delay,
						top: bird.top,
					}}
				>
					<div
						className="bird"
						style={{ animationDuration: bird.wingSpeed }}
					></div>
				</div>
			))}

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

			{/* 🌑 Subtle Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-900/20 to-transparent z-20"></div>

			{/* 🖋️ Main Content Area */}
			<div className="container mx-auto px-8 md:px-16 relative z-40">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="max-w-2xl"
				>
					<h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg text-white mb-6">
						<span className="italic font-light">{t.titlePart2}</span>
						<br />
						<span className="text-cyan-800">{t.titlePart3}</span>
					</h1>

					{/* 🌟 Highlighted Montessori Subtitle Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="mb-8 relative group max-w-xl"
					>
						{/* Glowing Accent Ring */}
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl blur-sm opacity-50 group-hover:opacity-80 transition duration-500"></div>

						{/* Content Container */}
						<div className="relative bg-black/40 backdrop-blur-md border border-white/20 p-6 md:p-7 rounded-2xl shadow-2xl overflow-hidden">
							{/* Decorative Background Quote Icon */}
							<span className="absolute -right-2 -bottom-6 text-9xl font-serif text-amber-400/10 select-none pointer-events-none">
								“
							</span>

							{/* Pedagogy Badge Header */}
							<div className="flex items-center gap-2 mb-3">
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse"></span>
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse"></span>
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse"></span>
								{/* <span className="text-amber-300 text-xs md:text-sm font-bold tracking-widest uppercase">
    Montessori Philosophy
  </span> */}
							</div>

							{/* Subtitle Quote Text */}
							<blockquote className="relative z-10 text-white text-xl md:text-2xl font-serif italic font-medium leading-relaxed drop-shadow-sm text-center">
								“{t.subtitle}”
							</blockquote>

							<div className="flex items-center justify-end gap-2 mt-3">
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse"></span>
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse"></span>
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse"></span>
								{/* <span className="text-amber-300 text-xs md:text-sm font-bold tracking-widest uppercase">
    Montessori Philosophy
  </span> */}
							</div>
						</div>
					</motion.div>

					<div className="flex gap-4">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate("/education")}
							className="relative group overflow-hidden bg-lime-600 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-2xl transition-all"
						>
							<span className="relative z-10 flex items-center gap-2">
								{t.button} <span className="text-2xl">→</span>
							</span>
							<div className="absolute inset-0 bg-lime-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
						</motion.button>
					</div>
				</motion.div>
			</div>

			{/* 🎨 Bottom Transition Wave */}
			<div className="absolute -bottom-1 left-0 w-full z-30 overflow-hidden leading-none">
				<svg
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block w-full h-[60px] fill-white"
				>
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.34,92.83,168,76.65,214,62.83,264,67.1,321.39,56.44Z"></path>
				</svg>
			</div>
		</section>
	);
};

export default Hero;
