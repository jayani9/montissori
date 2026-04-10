import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

// 1. Dynamic Glob Import: Automatically finds all images in the folder
const imageModules = import.meta.glob("./../../assets/slider_images/*.{png,jpg,jpeg,svg}", { 
  eager: true, 
  import: 'default' 
});

// Convert the object into a simple array of image paths
const imagePaths = Object.values(imageModules) as string[];

const translations = translationsData as any;

export const ImageSlider = () => {
  const { lang } = useLanguage();
  const t = translations[lang]?.slider;

  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'center', 
    containScroll: 'trimSnaps' 
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  // 2. Map the dynamic images to the slide structure
  const slides = imagePaths.map((path, index) => {
    return {
      url: path,
      // Dynamically access t.slide1, t.slide2, etc.
      title: t?.[`slide${index + 1}`] 
    };
  });

  return (
    <section className="relative w-full bg-white py-16 z-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] pl-6 min-w-0"
              >
                <div className="relative h-[380px] md:h-[480px] overflow-hidden rounded-[2.5rem] shadow-xl">
                  <img 
                    src={slide.url} 
                    alt={slide.title || `Slide ${index + 1}`} 
                    className="w-full h-full object-cover block"
                  />
                  
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