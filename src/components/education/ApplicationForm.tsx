import { useState } from "react";
import { useLanguage } from "./../../context/LanguageContext";
import emailjs from '@emailjs/browser';
import translationsData from "./../../data/translations.json";

// Import your sub-forms
import ChildInfoForm from "./ChildInfoForm";
import CareNeedsForm from "./CareNeedsForm";
import FamilyInfoForm from "./FamilyInfoForm";
import AdditionalInfoForm from "./AdditionalInfoForm";
import Banner from "../Banner";
import heroImg from "./../../assets/education_images/banner.jpg";
import EducationContent from "./EducationContent";

const translations = translationsData as any;

export default function ApplicationForm() {
  const { lang, setLang } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);

  // Get translations for this component
  const t = translations[lang]?.education?.application;
  const t_1 = translations[lang]?.education;

  const [formData, setFormData] = useState({
    childFullName: "",
    socialSecurityNumber: "",
    nativeLanguage: "",
    otherLanguage: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    municipality: "",
    homePhone: "",
    safetyBlock: false,
    careNeed: "",
    dailyTime: "",
    startDate: "",
    currentCareLocation: "",
    guardian1: {
      name: "",
      ssn: "",
      occupation: "",
      workplace: "",
      workPhone: "",
      email: "",
      weekdayHours: "",
      weekendHours: "0",
      workType: [],
      studentType: "",
    },
    guardian2: {
      name: "",
      ssn: "",
      occupation: "",
      workplace: "",
      workPhone: "",
      email: "",
      weekdayHours: "",
      weekendHours: "0",
      workType: [],
      studentType: "",
    },
    siblingBirthYears: "",
    siblingInCare: "",
    additionalNotes: "",
  });

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSending(true);

    const templateParams = {
      time: new Date().toLocaleString(),
      ...formData,
      // Flatten nested objects for EmailJS template
      guardian1_name: formData.guardian1.name,
      guardian1_email: formData.guardian1.email,
      guardian2_name: formData.guardian2.name,
      guardian2_email: formData.guardian2.email,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert(t.success);
      setStep(1); // Reset form
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(`${t.error} ${error?.text || "Unknown error"}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <Banner
        title={t_1.title}
        subtitle={t_1.subtitle}
        image={heroImg}
      />

      

      <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
<EducationContent />
        {/* Header & Language Switcher */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-slate-800">{t.title}</h1>
          <div className="flex bg-white rounded-lg shadow-sm p-1 border">
            {["fi", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as "fi" | "en")}
                className={`px-4 py-1 rounded-md text-xs font-bold uppercase ${lang === l ? "bg-blue-600 text-white" : "text-gray-400 hover:text-gray-600"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Stepper Navigation */}
        <nav className="mb-12 relative pt-4">
          <div className="flex items-center justify-between">
            {t.steps.map((label: string, idx: number) => {
              const sId = idx + 1;
              return (
                <div key={sId} className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= sId ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-400"}`}>
                    {step > sId ? "✓" : sId}
                  </div>
                  <span className={`absolute -bottom-7 text-[10px] font-bold uppercase w-24 text-center ${step >= sId ? "text-blue-600" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="absolute top-[34px] left-0 w-full h-[2px] bg-gray-200 -z-0"></div>
          <div className="absolute top-[34px] left-0 h-[2px] bg-blue-600 transition-all duration-700" style={{ width: `${((step - 1) / 4) * 100}%` }}></div>
        </nav>

        {/* Form Content */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm">
          {step === 1 && <ChildInfoForm data={formData} updateData={updateFormData} onNext={nextStep} />}
          {step === 2 && <CareNeedsForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
          {step === 3 && <FamilyInfoForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
          {step === 4 && <AdditionalInfoForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />}
          {step === 5 && (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-gray-800">{t.ready}</h3>
              <p className="text-gray-500 mt-2">{t.review}</p>
              <div className="flex gap-4 justify-center mt-8">
                <button onClick={prevStep} className="px-6 py-2 text-gray-500 font-bold">{t.back}</button>
                <button
                  onClick={handleSubmit}
                  disabled={isSending}
                  className="bg-green-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-green-700 disabled:opacity-50"
                >
                  {isSending ? t.sending : t.submit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}