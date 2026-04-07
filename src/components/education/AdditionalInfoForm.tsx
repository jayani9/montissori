import { useLanguage } from "./../../context/LanguageContext";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const T = {
  fi: {
    h4: "4. Muuta huomioitavaa",
    fileDesc: "Mikäli perhe haluaa vedota taloudellisiin, koulutuksellisiin, sosiaalisiin tai muihin syihin päivähoitopaikkaa hakiessaan, hakemukseen on liitettävä selvitys.",
    h5: "5. Perheen koko",
    siblingLabel: "Lapsen sisarusten tai muiden perheessä asuvien alle 18-vuotiaiden lasten syntymävuodet",
    siblingCare: "Sisarukset hoidossa",
    h6: "6. Lisätiedot",
    textAreaLabel: "Sairaudet, allergiat tai muut seikat, jotka hakija haluaa tuoda esiin.",
    next: "Tarkista ja valmis →",
    prev: "← Edellinen"
  },
  en: {
    h4: "4. Other things to consider",
    fileDesc: "If a family wishes to rely on financial, educational, social or other reasons when applying for a daycare place, a statement must be attached to the application.",
    h5: "5. Family size",
    siblingLabel: "Birth years of the child's siblings or other children under the age of 18 in the family",
    siblingCare: "Sibling in care",
    h6: "6. Additional information",
    textAreaLabel: "Illnesses, allergies or other considerations that the applicant wishes to make.",
    next: "Review & Finish →",
    prev: "← Previous"
  }
};

export default function AdditionalInfoForm({ data, updateData, onNext, onPrev }: Props) {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div className="bg-white p-6 md:p-10 shadow-sm rounded-xl border border-gray-100 text-slate-700">
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-[#0a2540]">{t.h4}</h2>
        <p className="text-sm text-gray-500 mb-4">{t.fileDesc}</p>
        <input type="file" onChange={(e) => updateData({ statementFile: e.target.files ? e.target.files[0] : null })} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gray-100 file:text-gray-700" />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-[#0a2540]">{t.h5}</h2>
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-400 uppercase block mb-2">{t.siblingLabel}</label>
          <input type="text" value={data.siblingBirthYears} onChange={(e) => updateData({ siblingBirthYears: e.target.value })} className="w-full bg-gray-50 border border-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. 2018, 2021" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-[#0a2540]">{t.h6}</h2>
        <label className="text-xs font-bold text-gray-400 uppercase block mb-2">{t.textAreaLabel}</label>
        <textarea rows={5} value={data.additionalNotes} onChange={(e) => updateData({ additionalNotes: e.target.value })} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg outline-none transition-all" />
      </section>

      <div className="mt-12 flex justify-between items-center border-t pt-8">
        <button onClick={onPrev} className="text-gray-400 font-bold hover:text-gray-600 transition-colors">{t.prev}</button>
        <button onClick={onNext} className="bg-[#0a2540] text-white px-12 py-3 rounded-lg font-bold shadow-lg">{t.next}</button>
      </div>
    </div>
  );
}