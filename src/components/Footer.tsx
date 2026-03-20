import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi"; // Modern, clean icons

export const Footer = () => {
  return (
    <footer className="w-full">
      <section className="relative bg-[#E67E22] text-white py-24 md:py-32 px-6 overflow-hidden">
        {/* 🌊 The SVG Wave Top Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] md:h-[100px] fill-[#f8f9fa]" 
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.34,92.83,168,76.65,214,62.83,264,67.1,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 mt-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Yhteystiedot / Contact</h2>
          <p className="text-lg md:text-xl opacity-90 mb-12">
            Tule tutustumaan meidän lämpimään ja virikkeelliseen ympäristöömme.
          </p>

          {/* Icon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="flex flex-col items-center group">
              <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/40 transition-all">
                <HiPhone className="text-3xl text-white" />
              </div>
              <h3 className="font-bold mb-1">Puhelin</h3>
              <p className="opacity-90">+358 12 345 6789</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center group">
              <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/40 transition-all">
                <HiMail className="text-3xl text-white" />
              </div>
              <h3 className="font-bold mb-1">Sähköposti</h3>
              <p className="opacity-90">info@montessori.fi</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center group">
              <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/40 transition-all">
                <HiLocationMarker className="text-3xl text-white" />
              </div>
              <h3 className="font-bold mb-1">Osoite</h3>
              <p className="opacity-90 text-center">Koulukatu 12, 00100 Helsinki</p>
            </div>
          </div>

          <button className="bg-white text-[#E67E22] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
            Varaa vierailu →
          </button>
          
          <div className="mt-20 pt-8 border-t border-white/20 text-sm opacity-70">
            © 2026 Montessori-projekti. Kaikki oikeudet pidätetään.
          </div>
        </div>
      </section>
    </footer>
  );
};