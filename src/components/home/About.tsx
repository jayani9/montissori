import { useLanguage } from "../../context/LanguageContext";
import translations from "../../data/translations.json"; // Import the JSON
import img1 from "./../../assets/about_images/img1.png";
import img2 from "./../../assets/about_images/img2.png";
import img3 from "./../../assets/about_images/img3.png";
import img4 from "./../../assets/about_images/img4.png";

const About = () => {
  const { lang } = useLanguage();
  
  // Create a shortcut to the current language data
  const t = translations[lang].about;

  return (
    <div className="flex flex-col overflow-x-hidden pt-6 md:pt-8">
      {/* SECTION 1 */}
      <section className="bg-white py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-amber-700">{t.intro}</p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative bg-[#4a90b5] text-white py-24 px-6 md:px-24" style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 md:flex-[2]">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t.activeTitle}</h2>
            <p className="text-lg leading-relaxed">{t.activeDesc}</p>
          </div>
          <div className="flex-1">
            <img src={img2} alt={t.activeTitle} className="w-full h-auto object-contain transform md:rotate-2" />
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="relative bg-red-400 text-white py-24 px-6 md:px-24" style={{ clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 92%)", marginTop: "-60px", paddingTop: "130px" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src={img1} className="w-full max-w-xs h-auto transform md:rotate-2 rounded-2xl shadow-xl" alt={t.sensitiveTitle} />
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">{t.sensitiveTitle}</h2>
            <p className="text-lg leading-relaxed">{t.sensitiveDesc}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="relative bg-[#f39c12] text-white py-24 px-6 md:px-24" style={{ clipPath: "polygon(0 0, 50% 5%, 100% 0, 100% 95%, 50% 100%, 0 95%)", marginTop: "-60px" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">{t.materialsTitle}</h2>
            <p className="text-lg leading-relaxed">{t.materialsDesc}</p>
          </div>
          <div className="flex-1">
            <img src={img3} alt={t.materialsTitle} className="w-[85%] mx-auto h-auto transform md:rotate-2" />
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="relative bg-[#27ae60] text-white py-24 px-6 md:px-24" style={{ clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 100%)", marginTop: "-80px", paddingTop: "140px" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">{t.socialTitle}</h2>
            <p className="text-lg leading-relaxed">{t.socialDesc}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={img4} className="w-full max-w-sm h-auto transform md:rotate-2 rounded-2xl shadow-lg" alt={t.socialTitle} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;