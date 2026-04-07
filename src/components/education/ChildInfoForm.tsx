import React from "react";
import { useLanguage } from "./../../context/LanguageContext";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
}

const T = {
  fi: {
    title: "1. Lapsen tiedot",
    name: "Suku- ja etunimet *",
    ssn: "Henkilötunnus *",
    nativeLang: "Äidinkieli *",
    otherLang: "Äidinkieli muu kuin suomi",
    address: "Katuosoite *",
    security: "Turvakielto/tietojen luovutuskielto voimassa Väestötietolain (661/2009) 36 §:n mukaisesti.",
    postal: "Postinumero *",
    city: "Postitoimipaikka *",
    mun: "Kotikunta *",
    phone: "Kotipuhelin *",
    next: "Seuraava vaihe →"
  },
  en: {
    title: "1. Child's Information",
    name: "Last and First Names *",
    ssn: "Social Security Number *",
    nativeLang: "Native Language *",
    otherLang: "Native language other than Finnish",
    address: "Street Address *",
    security: "Security prohibition/non-disclosure marked as valid according to Section 36 (661/2009).",
    postal: "Postal Code *",
    city: "City / Post Office *",
    mun: "Municipality of Residence *",
    phone: "Home Phone *",
    next: "Next Step →"
  }
};

export default function ChildInfoForm({ data, updateData, onNext }: Props) {
  const { lang } = useLanguage();
  const t = T[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    updateData({ [name]: val });
  };

  return (
    <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.name}</label>
          <input type="text" name="childFullName" value={data.childFullName} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.ssn}</label>
          <input type="text" name="socialSecurityNumber" value={data.socialSecurityNumber} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.nativeLang}</label>
          <select name="nativeLanguage" value={data.nativeLanguage} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none">
            <option value="Finnish">Finnish</option>
            <option value="Swedish">Swedish</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">{t.otherLang}</label>
          <input type="text" name="otherLanguage" value={data.otherLanguage} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium mb-1">{t.address}</label>
          <input type="text" name="streetAddress" value={data.streetAddress} onChange={handleChange} className="border p-2 bg-gray-50 rounded outline-none" />
        </div>
        <div className="flex items-start gap-3 md:col-span-2 py-2">
          <input type="checkbox" name="safetyBlock" checked={data.safetyBlock} onChange={handleChange} className="mt-1 w-4 h-4" />
          <label className="text-xs text-gray-600">{t.security}</label>
        </div>
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
        <button onClick={onNext} className="bg-blue-600 text-white px-8 py-2 rounded font-bold hover:bg-blue-700 transition-colors">
          {t.next}
        </button>
      </div>
    </div>
  );
}