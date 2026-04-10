import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

export const ImageSlider = () => {
  const { lang } = useLanguage();
  const t = translations[lang]?.slider;

  // 'align: center' is key to keeping the items focused in the middle
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'center', 
    containScroll: 'trimSnaps' 
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const slides = [
    { url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800", title: t?.slide1 },
    { url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800", title: t?.slide2 },
    { url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800", title: t?.slide3 },
    { url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800", title: t?.slide4 },
    { url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800", title: t?.slide5 },
  ];

  return (
    /* py-16 adds space above/below. bg-white ensures it matches your image background */
    <section className="relative w-full bg-white py-16 z-20">
      
      {/* Max-width container to center the entire slider area */}
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6"> {/* Negative margin to counteract slide padding */}
            {slides.map((slide, index) => (
              <div 
                key={index} 
                /* Mobile: 100% (1 slide)
                   Tablet: 50% (2 slides)
                   Desktop: 33.33% (3 slides)
                */
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] pl-6 min-w-0"
              >
                <div className="relative h-[380px] md:h-[480px] overflow-hidden rounded-[2.5rem] shadow-xl">
                  <img 
                    src={slide.url} 
                    alt={slide.title} 
                    className="w-full h-full object-cover block"
                  />
                  
                  {/* Subtle overlay for the title if needed */}
                  {slide.title && (
                    <div className="absolute inset-0 bg-black/10 flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                       <p className="text-white font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                        {slide.title}
                       </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;