import { useState } from "react";
import Hero from "./../../components/hero/Hero";
import { useLanguage } from "../../context/LanguageContext";
import translationsData from "../../data/translations.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Features from "../hero/Features";

const translations = translationsData as any;

export default function HomeSection() {
  const { lang } = useLanguage();
  const t = translations[lang]?.home;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  if (!t) return null;

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % (t.testimonials?.length || 1));
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? (t.testimonials?.length || 1) - 1 : prev - 1
    );
  };

  // Determine dynamic localized content based on selected language key
  const title = lang === "fi" ? t.fiTitle : t.enTitle;
  const description = lang === "fi" ? t.fiDescription : t.enDescription;

  return (
    <div className="min-h-screen pt-16 bg-gray-50 font-sans">
      {/* 1. Banner */}
      <Hero />
      <Features />

      {/* 2. Main Description Section */}
      {description && (
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* 3. Testimonials Section */}
      {t.testimonials && t.testimonials.length > 0 && (
        <div className="max-w-5xl mx-auto p-6 pb-20">
          <div className="bg-[#3381A9] text-white p-8 md:p-12 rounded-2xl shadow-md text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              {t.testimonialTitle}
            </h3>

            <div className="relative max-w-3xl mx-auto px-6">
              <p className="text-base md:text-lg italic leading-relaxed opacity-95">
                "{t.testimonials[currentTestimonial]}"
              </p>

              {/* Carousel Controls */}
              {t.testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={handlePrev}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}