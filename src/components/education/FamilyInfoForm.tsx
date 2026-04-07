import { useLanguage } from "./../../context/LanguageContext";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const T = {
  fi: {
    title: "3. Perheen henkilötiedot",
    g1: "Huoltajan henkilötiedot (1)",
    g2: "Huoltajan henkilötiedot (2)",
    name: "Nimi *",
    ssn: "Henkilötunnus *",
    occ: "Ammatti *",
    wp: "Työpaikka *",
    wpPhone: "Työpuhelin *",
    email: "Sähköposti *",
    wHours: "Työtunnit arkisin klo *",
    weHours: "Työtunnit viikonloppuisin *",
    atWork: "Työssä",
    student: "Opiskelija",
    next: "Seuraava vaihe →",
    prev: "← Edellinen"
  },
  en: {
    title: "3. Family personal information",
    g1: "Guardian's personal information (1)",
    g2: "Guardian's personal information (2)",
    name: "By them *",
    ssn: "Personal identification number *",
    occ: "Occupation *",
    wp: "Workplace *",
    wpPhone: "Work phone *",
    email: "Email address *",
    wHours: "Working hours on weekdays at *",
    weHours: "Working hours on weekends *",
    atWork: "At work",
    student: "Student",
    next: "Next Step →",
    prev: "← Previous"
  }
};

export default function FamilyInfoForm({ data, updateData, onNext, onPrev }: Props) {
  const { lang } = useLanguage();
  const t = T[lang];

  const handleGuardianChange = (guardianKey: "guardian1" | "guardian2", field: string, value: any) => {
    updateData({ [guardianKey]: { ...data[guardianKey], [field]: value } });
  };

  const renderGuardianSection = (key: "guardian1" | "guardian2", title: string) => (
    <div className="mb-12 border-b border-gray-100 pb-8 last:border-0">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
        <InputField label={t.name} value={data[key].name} onChange={(v) => handleGuardianChange(key, "name", v)} />
        <InputField label={t.ssn} value={data[key].ssn} onChange={(v) => handleGuardianChange(key, "ssn", v)} />
        <InputField label={t.occ} value={data[key].occupation} onChange={(v) => handleGuardianChange(key, "occupation", v)} />
        <InputField label={t.wp} value={data[key].workplace} onChange={(v) => handleGuardianChange(key, "workplace", v)} />
        <InputField label={t.wpPhone} value={data[key].workPhone} onChange={(v) => handleGuardianChange(key, "workPhone", v)} />
        <InputField label={t.email} value={data[key].email} onChange={(v) => handleGuardianChange(key, "email", v)} />
        <InputField label={t.wHours} value={data[key].weekdayHours} onChange={(v) => handleGuardianChange(key, "weekdayHours", v)} />
        <InputField label={t.weHours} value={data[key].weekendHours} onChange={(v) => handleGuardianChange(key, "weekendHours", v)} />
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 md:p-10 shadow-sm rounded-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-10 text-[#0a2540]">{t.title}</h2>
      {renderGuardianSection("guardian1", t.g1)}
      {renderGuardianSection("guardian2", t.g2)}
      <div className="mt-12 flex justify-between">
        <button onClick={onPrev} className="text-gray-500 font-bold hover:text-gray-700">{t.prev}</button>
        <button onClick={onNext} className="bg-[#0a2540] text-white px-10 py-3 rounded font-bold shadow-md">{t.next}</button>
      </div>
    </div>
  );
}

const InputField = ({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-gray-500 mb-1 uppercase">{label}</label>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="bg-gray-50 border-none p-3 rounded outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
  </div>
);