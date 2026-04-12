import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";
import { Mail, Phone, Info } from "lucide-react";

// Types for better development experience
interface StaffMember {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  extra?: string;
}

const translations = translationsData as any;

export default function StaffGrid() {
  const { lang } = useLanguage();
  const t = translations[lang]?.contact?.staff;

  if (!t || !t.members) return null;

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        {t.title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.members.map((member: StaffMember, index: number) => (
          <div 
            key={`${member.name}-${index}`} 
            className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all border-t-4 border-t-orange-400"
          >
            <h3 className="text-xl font-bold text-slate-800 leading-tight mb-1">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm mb-4 min-h-[40px]">
              {member.role}
            </p>
            
            <div className="mt-auto space-y-2 text-sm text-slate-600">
              {member.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-orange-500 shrink-0" />
                  <a 
                    href={`mailto:${member.email}`} 
                    className="hover:text-orange-600 truncate transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              )}
              
              {member.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-orange-500 shrink-0" />
                  <span className="font-medium">{member.phone}</span>
                </div>
              )}
              
              {member.extra && (
                <div className="mt-3 flex gap-2 p-2 bg-slate-50 rounded-lg text-xs italic text-slate-500 border border-slate-100">
                  <Info size={14} className="shrink-0 text-blue-400" />
                  <span>{member.extra}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}