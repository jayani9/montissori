
import { useLanguage } from "../context/LanguageContext";
import translationsData from "../data/translations.json";
import About from "../components/hero/About";
import ImageSlider from "../components/hero/ImageSlider";
import Banner from "../components/Banner";
import heroBg from "../assets/peda_images/banner.jpg";

const translations = translationsData as any;

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang]?.about;

  

  return (
    <main className="overflow-hidden">
      {/* 1. Hero / Banner Section */}
      <Banner
        title={t?.title || "Montessoripäiväkoti Mio"}
        subtitle={t?.subtitle || ""}
        image={heroBg}
      />

      {/* 2. Image Cards Section */}
      

      {/* 3. Slanted Content Sections (Pedagogy & About) */}
      <About />
      <ImageSlider />
    </main>
  );
};

export default Home;