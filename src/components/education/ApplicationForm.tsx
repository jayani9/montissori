import { useState } from "react";
import { useLanguage } from "./../../context/LanguageContext";
import emailjs from '@emailjs/browser';
import ChildInfoForm from "./ChildInfoForm";
import CareNeedsForm from "./CareNeedsForm";
import FamilyInfoForm from "./FamilyInfoForm";
import AdditionalInfoForm from "./AdditionalInfoForm";

const STEPS = {
  fi: ["Lapsi", "Palveluntarve", "Perhe", "Lisätiedot", "Lähetä"],
  en: ["Child", "Care Need", "Family", "Additional", "Submit"]
};

export default function ApplicationForm() {
  const { lang, setLang } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    childFullName: "Matti Meikäläinen",
    socialSecurityNumber: "010120-A123",
    nativeLanguage: "Finnish",
    otherLanguage: "",
    streetAddress: "Keskuskatu 10",
    postalCode: "00100",
    city: "Helsinki",
    municipality: "Helsinki",
    homePhone: "040 123 4567",
    safetyBlock: false,
    careNeed: "Full day",
    dailyTime: "08:00 - 16:00",
    startDate: "2026-04-06",
    currentCareLocation: "Kotihoidossa",
    guardian1: {
      name: "Anna Meikäläinen",
      ssn: "020285-B456",
      occupation: "Engineer",
      workplace: "Tech Corp Oy",
      workPhone: "050 987 6543",
      email: "anna.m@example.com",
      weekdayHours: "37.5",
      weekendHours: "0",
      workType: ["Full-time job"],
      studentType: "",
    },
    guardian2: {
      name: "Pekka Meikäläinen",
      ssn: "030384-C789",
      occupation: "Teacher",
      workplace: "Koulu",
      workPhone: "044 555 6666",
      email: "pekka.m@example.com",
      weekdayHours: "30",
      weekendHours: "0",
      workType: ["Full-time job"],
      studentType: "",
    },
    statementFile: null as File | null,
    siblingBirthYears: "2022, 2024",
    siblingInCare: "In private daycare",
    additionalNotes: "Lapsella on pähkinäallergia.",
  });

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSending(true);

    // 1. Create the final flattened object for EmailJS
    const templateParams = {
      // Basic Fields
      time: new Date().toLocaleString(),
      childFullName: formData.childFullName,
      socialSecurityNumber: formData.socialSecurityNumber,
      nativeLanguage: formData.nativeLanguage,
      otherLanguage: formData.otherLanguage,
      streetAddress: formData.streetAddress,
      postalCode: formData.postalCode,
      city: formData.city,
      municipality: formData.municipality,
      careNeed: formData.careNeed,
      dailyTime: formData.dailyTime,
      startDate: formData.startDate,
      currentCareLocation: formData.currentCareLocation,
      siblingBirthYears: formData.siblingBirthYears,
      siblingInCare: formData.siblingInCare,
      additionalNotes: formData.additionalNotes,

      // Guardian 1 Flattened
      guardian1_name: formData.guardian1.name,
      guardian1_email: formData.guardian1.email,
      guardian1_occupation: formData.guardian1.occupation,
      guardian1_workplace: formData.guardian1.workplace,
      guardian1_phone: formData.guardian1.workPhone,

      // Guardian 2 Flattened
      guardian2_name: formData.guardian2.name,
      guardian2_email: formData.guardian2.email,
      guardian2_phone: formData.guardian2.workPhone,

      // RECIPIENT FIX: 
      // This key ensures EmailJS knows who to send it to if you use {{to_email}} in the dashboard
      to_email: 'YOUR_OWN_EMAIL@EXAMPLE.COM', 
    };

    try {
      await emailjs.send(
        'service_nxdsdg5',      // Service ID
        'template_ir8smv8',     // Template ID
        templateParams,
        'GB8603Aj-J5iL40qb'      // Public Key
      );
      
      alert(lang === "fi" ? "Hakemus lähetetty onnistuneesti!" : "Application sent successfully!");
    } catch (error: any) {
      console.error("Submission error:", error);
      // Show more detail if available to help you debug
      const errorDetail = error?.text || "";
      alert(lang === "fi" 
        ? `Lähetys epäonnistui: ${errorDetail}` 
        : `Failed to send: ${errorDetail}`
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-slate-800">
          {lang === "fi" ? "Päivähoitohakemus" : "Daycare Application"}
        </h1>
        <div className="flex bg-white rounded-lg shadow-sm p-1 border">
          <button 
            onClick={() => setLang("fi")} 
            className={`px-4 py-1 rounded-md text-xs font-bold ${lang === "fi" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-gray-600"}`}
          >FI</button>
          <button 
            onClick={() => setLang("en")} 
            className={`px-4 py-1 rounded-md text-xs font-bold ${lang === "en" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-gray-600"}`}
          >EN</button>
        </div>
      </div>

      <nav className="mb-12 relative pt-4">
        <div className="flex items-center justify-between">
          {STEPS[lang].map((label, idx) => {
            const sId = idx + 1;
            return (
              <div key={sId} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= sId ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-400"}`}>
                  {step > sId ? "✓" : sId}
                </div>
                <span className={`absolute -bottom-7 text-[10px] font-bold uppercase w-24 text-center transition-colors duration-500 ${step >= sId ? "text-blue-600" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="absolute top-[34px] left-0 w-full h-[2px] bg-gray-200 -z-0"></div>
        <div className="absolute top-[34px] left-0 h-[2px] bg-blue-600 transition-all duration-700" style={{ width: `${((step - 1) / 4) * 100}%` }}></div>
      </nav>

      <div className="mt-16">
        {step === 1 && <ChildInfoForm data={formData} updateData={updateFormData} onNext={nextStep} />}
        {step === 2 && <CareNeedsForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
        {step === 3 && <FamilyInfoForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
        {step === 4 && <AdditionalInfoForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
        {step === 5 && (
          <div className="bg-white p-12 rounded-xl shadow-sm text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800">
              {lang === "fi" ? "Valmis lähetettäväksi" : "Ready to Submit"}
            </h3>
            <p className="text-gray-500 mt-2">
              {lang === "fi" ? "Tarkista tiedot ennen lähettämistä." : "Please review your details before sending."}
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <button 
                onClick={prevStep} 
                disabled={isSending}
                className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 disabled:opacity-50"
              >
                {lang === "fi" ? "Takaisin" : "Back"}
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSending}
                className={`bg-green-600 text-white px-10 py-3 rounded-lg font-bold shadow-md transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'}`}
              >
                {isSending 
                  ? (lang === "fi" ? "Lähetetään..." : "Sending...") 
                  : (lang === "fi" ? "Lähetä hakemus" : "Submit Application")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}