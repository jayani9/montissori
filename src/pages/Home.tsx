import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import About from "../components/home/About";
import ImageSlider from "../components/home/ImageSlider";

const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* 1. Hero Section (Sky, Clouds, Sun, Animated Grass) */}
      <Hero />

      {/* 2. Image Cards Section (Active Child, Independence, Curiosity) */}
      <Features />

      {/* 3. Slanted Content Sections (Pedagogy & About) */}
      <About />
      <ImageSlider />
    </main>
  );
};
export default Home;