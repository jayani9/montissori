import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

export default function StaffGrid() {
  const { lang } = useLanguage();
  const t = translations[lang]?.contact?.staff;

  if (!t) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0a2540] text-center mb-20">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {t.members.map((member: any, idx: number) => (
            <div key={idx} className="text-center group">
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
              <p className="text-gray-500 font-medium mb-3">{member.role}</p>
              {member.email && <p className="text-blue-600 hover:underline cursor-pointer mb-1">{member.email}</p>}
              {member.extra && (
                <p className={`text-sm italic ${member.extra.match(/leave|virkavapaalla/i) ? 'text-red-400' : 'text-gray-400'}`}>
                  {member.extra}
                </p>
              )}
              {member.phone && <p className="text-slate-700 font-semibold mt-2">{member.phone}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}