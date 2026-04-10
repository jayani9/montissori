import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";
import Banner from "../Banner";
import heroImg from "./../../assets/asscotion_images/banner.jpg";

const translations = translationsData as any;

export default function Association() {
    const { lang } = useLanguage();
    const t = translations[lang]?.association;

    if (!t) return null;

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* 1. Hero Header */}
            {/* <div className="bg-[#93c47d]/10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540]">
            {t.title}
          </h1>
          <div className="w-20 h-1 bg-[#c2d66d] mx-auto mt-6 rounded-full" />
        </div>
      </div> */}
            <Banner
                title={t.title}
                subtitle={t.subtitle}
                image={heroImg}
            />

            {/* 2. Content Sections */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

                {/* History Card */}
                <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#0a2540] mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#c2d66d] rounded-full inline-block" />
                        {t.historyTitle}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {t.historyText}
                    </p>
                </section>

                {/* Management Card */}
                <section className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-[#0a2540] mb-6">
                                {t.managementTitle}
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                {t.managementText}
                            </p>
                        </div>

                        {/* Chairman Callout */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#c2d66d]/30 flex flex-col justify-center items-center text-center">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                {t.chairmanLabel}
                            </p>
                            <p className="text-xl font-bold text-[#0a2540]">
                                {t.chairmanName}
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* 3. Decorative Footer Shape (Same as Pedagogy) */}
            <div className="relative h-40 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-32 bg-[#93c47d] rounded-t-[100%] scale-x-125 opacity-10" />
            </div>
        </div>
    );
}