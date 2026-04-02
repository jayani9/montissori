import { useState } from "react";
import ChildInfoForm from "./ChildInfoForm";
import CareNeedsForm from "./CareNeedsForm";
import FamilyInfoForm from "./FamilyInfoForm";
import AdditionalInfoForm from "./AdditionalInfoForm";

const STEPS = [
  { id: 1, label: "Child" },
  { id: 2, label: "Care Need" },
  { id: 3, label: "Family" },
  { id: 4, label: "Additional" },
  { id: 5, label: "Submit" },
];

export default function ApplicationForm() {
  const [step, setStep] = useState(1);

  // CENTRALIZED DATA STORE WITH DEFAULT TESTING VALUES
  const [formData, setFormData] = useState({
    // --- Step 1: Child's Information ---
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

    // --- Step 2: Educational Needs ---
    careNeed: "Full day",
    dailyTime: "08:00 - 16:00",
    startDate: "2026-04-06",
    currentCareLocation: "Kotihoidossa",

    // --- Step 3: Family / Guardian Information ---
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

    // --- Step 4, 5, & 6: Additional Details ---
    statementFile: null as File | null,
    siblingBirthYears: "2022, 2024",
    siblingInCare: "In private daycare",
    additionalNotes: "Lapsella on pähkinäallergia.",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen font-sans text-slate-900">
      {/* --- Progress Bar --- */}
      <nav className="mb-12 relative pt-4">
        <div className="flex items-center justify-between">
          {STEPS.map((s) => (
            <div key={s.id} className="flex flex-col items-center relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 shadow-sm ${
                  step >= s.id
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {step > s.id ? "✓" : s.id}
              </div>
              <span
                className={`absolute -bottom-7 text-[10px] md:text-xs font-bold uppercase tracking-widest w-24 text-center transition-colors duration-500 ${
                  step >= s.id ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-[34px] left-0 w-full h-[2px] bg-gray-200 -z-0"></div>
        <div
          className="absolute top-[34px] left-0 h-[2px] bg-blue-600 transition-all duration-700 ease-in-out -z-0"
          style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
        ></div>
      </nav>

      {/* --- Step Router --- */}
      <div className="mt-16 transition-opacity duration-300">
        {step === 1 && (
          <ChildInfoForm data={formData} updateData={updateFormData} onNext={nextStep} />
        )}
        {step === 2 && (
          <CareNeedsForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
        )}
        {step === 3 && (
          <FamilyInfoForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
        )}
        {step === 4 && (
          <AdditionalInfoForm data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
        )}

        {/* Final Submission Review */}
        {step === 5 && (
          <div className="bg-white p-12 rounded-xl shadow-sm text-center border border-gray-100">
            <div className="inline-block p-4 bg-green-50 rounded-full mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Check Details & Submit</h3>
            <p className="text-gray-500 mb-8">Review the data in the debugger below.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={prevStep} className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700">Back</button>
              <button 
                onClick={() => alert("Application Sent: " + JSON.stringify(formData, null, 2))}
                className="bg-green-600 text-white px-10 py-3 rounded-lg font-bold shadow-md hover:bg-green-700 transition-all"
              >
                Send Application
              </button>
            </div>
          </div>
        )}
      </div>

      {/* --- Testing Debugger --- */}
      <footer className="mt-20 border-t border-gray-200 pt-8">
        <div className="bg-slate-900 rounded-lg p-6 shadow-2xl">
          <h4 className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
            Test Data Preview
          </h4>
          <pre className="text-blue-200 text-[11px] leading-relaxed overflow-x-auto h-64 custom-scrollbar">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </footer>
    </div>
  );
}