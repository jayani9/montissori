import Disclosure from "./Disclosure";
import Actionbanner from "./Actionbanner";
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

const Action = () => {
  const { lang } = useLanguage();
  // Updated to include the .education path
  const t = translations[lang]?.action;

  if (!t || !t.items) return null;

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* 1. Banner */}
      <Actionbanner />

      {/* 2. Styled Paragraph Section */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            {t.peragraph}
          </p>
        </div>
      </div>

      {/* 3. Main Content Area (Disclosures) */}
      <div className="max-w-5xl mx-auto p-6 pb-20">
        <div className="flex flex-col gap-6">
          {t.items.map((item: any, index: number) => (
            <Disclosure key={index} title={item.title}>
              <div className="text-slate-600 leading-7">
                {item.content.map((paragraph: string, pIndex: number) => (
                  <p key={pIndex} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Action;