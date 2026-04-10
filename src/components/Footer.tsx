import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { useLanguage } from "./../context/LanguageContext";
import translationsData from "./../data/translations.json";

const translations = translationsData as any;

export const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang]?.footer;

  if (!t) return null;

  return (
    <footer className="w-full">
      <section className="relative bg-[#E67E22] text-white py-24 md:py-32 px-6 overflow-hidden">
        {/* 🌊 SVG Wave Top Border (KEPT EXACTLY THE SAME) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] md:h-[100px] fill-[#ffff]" 
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.34,92.83,168,76.65,214,62.83,264,67.1,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 mt-10">
          {/* Header Section */}
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl font-semibold opacity-90">{t.subtitle}</p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Location */}
            <div className="flex items-start gap-4">
              <HiLocationMarker className="text-3xl flex-shrink-0" />
              <p className="text-lg">{t.address}</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <HiMail className="text-3xl flex-shrink-0" />
              <p className="text-lg">
                <strong>Sähköposti:</strong> <br />
                {t.email}
              </p>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold flex-shrink-0">🕒</div>
              <p className="text-lg">{t.hours}</p>
            </div>
          </div>

          {/* Phone Section - Specifically for the two groups */}
          <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <HiPhone className="text-3xl" />
              <div className="flex flex-col md:flex-row flex-wrap gap-x-6 gap-y-2">
                <span className="font-bold">{t.phoneTitle}</span>
                <span>{t.group1}</span>
                <span className="hidden md:inline">|</span>
                <span>{t.group2}</span>
              </div>
            </div>
          </div>

          {/* Bottom Links (Rekisteriseloste / Association) */}
          <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex gap-8 font-bold">
              <a href="#" className="hover:text-black transition-colors">{t.privacy}</a>
              <a href="#" className="hover:text-black transition-colors">{t.association}</a>
            </div>
            <div className="opacity-70">
              © 2026 migara dev.
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;