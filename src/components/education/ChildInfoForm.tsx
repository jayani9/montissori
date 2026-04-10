import React from "react";
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
}

const translations = translationsData as any;

export default function ChildInfoForm({ data, updateData, onNext }: Props) {
  const { lang } = useLanguage();
  const t = translations[lang]?.education?.childInfo;

  if (!t) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    updateData({ [name]: val });
  };

  return (
    <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{t.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Names & SSN */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.name}</label>
          <input type="text" name="childFullName" value={data.childFullName} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.ssn}</label>
          <input type="text" name="socialSecurityNumber" value={data.socialSecurityNumber} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        {/* Languages */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.nativeLang}</label>
          <select name="nativeLanguage" value={data.nativeLanguage} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none">
            <option value="Finnish">{t.langOptions.fi}</option>
            <option value="Swedish">{t.langOptions.sv}</option>
            <option value="Other">{t.langOptions.other}</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.otherLang}</label>
          <input type="text" name="otherLanguage" value={data.otherLanguage} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>

        {/* Address */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium mb-1">{t.address}</label>
          <input type="text" name="streetAddress" value={data.streetAddress} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>

        {/* Security Checkbox */}
        <div className="flex items-start gap-3 md:col-span-2 py-2">
          <input type="checkbox" name="safetyBlock" checked={data.safetyBlock} onChange={handleChange} className="mt-1 w-4 h-4 cursor-pointer" />
          <label className="text-xs text-gray-600 leading-tight">{t.security}</label>
        </div>

        {/* Location Info */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.postal}</label>
          <input type="text" name="postalCode" value={data.postalCode} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.city}</label>
          <input type="text" name="city" value={data.city} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.mun}</label>
          <input type="text" name="municipality" value={data.municipality} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.phone}</label>
          <input type="text" name="homePhone" value={data.homePhone} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button onClick={onNext} className="bg-blue-600 text-white px-8 py-2 rounded font-bold hover:bg-blue-700 transition-colors shadow-sm">
          {t.next}
        </button>
      </div>
    </div>
  );
}