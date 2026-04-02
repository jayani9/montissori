import React from "react";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function FamilyInfoForm({ data, updateData, onNext, onPrev }: Props) {
  
  const handleGuardianChange = (guardianKey: "guardian1" | "guardian2", field: string, value: any) => {
    updateData({
      [guardianKey]: {
        ...data[guardianKey],
        [field]: value
      }
    });
  };

  const handleCheckboxChange = (guardianKey: "guardian1" | "guardian2", value: string) => {
    const currentTypes = data[guardianKey].workType;
    const newTypes = currentTypes.includes(value)
      ? currentTypes.filter((t: string) => t !== value)
      : [...currentTypes, value];
    
    handleGuardianChange(guardianKey, "workType", newTypes);
  };

  const renderGuardianSection = (key: "guardian1" | "guardian2", title: string) => (
    <div className="mb-12 border-b border-gray-100 pb-8 last:border-0">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="By them *" value={data[key].name} onChange={(v) => handleGuardianChange(key, "name", v)} />
        <InputField label="Personal identification number *" value={data[key].ssn} onChange={(v) => handleGuardianChange(key, "ssn", v)} />
        <InputField label="Occupation *" value={data[key].occupation} onChange={(v) => handleGuardianChange(key, "occupation", v)} />
        <InputField label="Workplace *" value={data[key].workplace} onChange={(v) => handleGuardianChange(key, "workplace", v)} />
        <InputField label="Work phone *" value={data[key].workPhone} onChange={(v) => handleGuardianChange(key, "workPhone", v)} />
        <InputField label="Email address *" value={data[key].email} onChange={(v) => handleGuardianChange(key, "email", v)} />
        <InputField label="Working hours on weekdays at *" value={data[key].weekdayHours} onChange={(v) => handleGuardianChange(key, "weekdayHours", v)} />
        <InputField label="Working hours on weekends *" value={data[key].weekendHours} onChange={(v) => handleGuardianChange(key, "weekendHours", v)} />
      </div>

      <div className="mt-6">
        <label className="text-xs font-bold text-gray-400 uppercase">At work</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {["At home", "Full-time job", "Part-time work", "Shift work"].map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-gray-600">
              <input 
                type="checkbox" 
                checked={data[key].workType.includes(type)} 
                onChange={() => handleCheckboxChange(key, type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="text-xs font-bold text-gray-400 uppercase">Student</label>
        <div className="flex gap-4 mt-2">
          {["Full-time", "Part-time"].map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-gray-600">
              <input 
                type="radio" 
                name={`${key}-student`}
                checked={data[key].studentType === type} 
                onChange={() => handleGuardianChange(key, "studentType", type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 md:p-10 shadow-sm rounded-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-10 text-[#0a2540]">3. Family personal information</h2>
      
      {renderGuardianSection("guardian1", "Guardian's personal information (1)")}
      {renderGuardianSection("guardian2", "Guardian's personal information (2)")}

      <div className="mt-12 flex justify-between">
        <button onClick={onPrev} className="text-gray-500 font-bold hover:text-gray-700">← Previous</button>
        <button onClick={onNext} className="bg-[#0a2540] text-white px-10 py-3 rounded font-bold hover:opacity-90 shadow-md">
          Next Step →
        </button>
      </div>
    </div>
  );
}

const InputField = ({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-gray-500 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none transition-all"
    />
  </div>
);