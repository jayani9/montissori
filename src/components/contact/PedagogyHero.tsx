import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";
import img1 from "./../../assets/contact_images/img1.jpg";
import img2 from "./../../assets/contact_images/img2.jpg";
import img3 from "./../../assets/contact_images/img3.jpg";

const translations = translationsData as any;

export default function PedagogyHero() {
  const { lang } = useLanguage();
  const t = translations[lang]?.contact?.pedagogy;

  const images = [img1, img2, img3];

  return (
    <div className="relative pt-24 pb-16 bg-white overflow-hidden">
      {/* Visual Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#93c47d] rounded-b-[50%] scale-x-110 shadow-inner opacity-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {images.map((img, i) => (
            <div key={i} className="w-full md:w-64 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform transition hover:scale-105 border-8 border-white">
              <img src={img} alt="Activity" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c27e2a] leading-relaxed text-xl font-medium italic">
            "{t?.text}"
          </p>
        </div>
      </div>
    </div>
  );
}