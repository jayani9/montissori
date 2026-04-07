import React from "react";
import { useLanguage } from "./../../context/LanguageContext";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const T = {
  fi: {
    title: "2. Varhaiskasvatuksen tarve",
    need: "Tarve *",
    time: "Aika *",
    start: "Hoitoalkamispäivä *",
    current: "Nykyinen hoitopaikka",
    next: "Seuraava vaihe →",
    prev: "← Edellinen"
  },
  en: {
    title: "2. The need for early childhood education",
    need: "Need *",
    time: "Time *",
    start: "Treatment start date *",
    current: "Current care location",
    next: "Next Step →",
    prev: "← Previous"
  }
};

export default function CareNeedsForm({ data, updateData, onNext, onPrev }: Props) {
  const { lang } = useLanguage();
  const t = T[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-[#0a2540]">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm text-gray-500 mb-1">{t.need}</label>
          <select name="careNeed" value={data.careNeed} onChange={handleChange} className="border-b border-gray-300 py-2 bg-transparent focus:border-blue-500 outline-none w-full md:w-1/4">
            <option value="Full day">Full day</option>
            <option value="Part day">Part day</option>
            <option value="Shift care">Shift care</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">{t.time}</label>
          <input type="text" name="dailyTime" placeholder="e.g. 08:00 - 16:00" value={data.dailyTime} onChange={handleChange} className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">{t.start}</label>
          <input type="date" name="startDate" value={data.startDate} onChange={handleChange} className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm text-gray-500 mb-1">{t.current}</label>
          <input type="text" name="currentCareLocation" value={data.currentCareLocation} onChange={handleChange} className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>
      </div>
      <div className="mt-12 flex justify-between">
        <button onClick={onPrev} className="text-gray-500 font-bold hover:text-gray-700">{t.prev}</button>
        <button onClick={onNext} className="bg-[#0a2540] text-white px-10 py-3 rounded font-bold shadow-md">{t.next}</button>
      </div>
    </div>
  );
}