import React from "react";

interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function AdditionalInfoForm({ data, updateData, onNext, onPrev }: Props) {
  
  return (
    <div className="bg-white p-6 md:p-10 shadow-sm rounded-xl border border-gray-100 text-slate-700">
      
      {/* 4. Other things to consider */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-[#0a2540]">4. Other things to consider</h2>
        <p className="text-sm text-gray-500 mb-4">
          If a family wishes to rely on financial, educational, social or other reasons when applying for a daycare place, a statement must be attached to the application.
        </p>
        <input 
          type="file" 
          onChange={(e) => updateData({ statementFile: e.target.files ? e.target.files[0] : null })}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
        />
      </section>

      {/* 5. Family size */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-[#0a2540]">5. Family size</h2>
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
            Birth years of the child's siblings or other children under the age of 18 in the family
          </label>
          <input 
            type="text"
            value={data.siblingBirthYears}
            onChange={(e) => updateData({ siblingBirthYears: e.target.value })}
            className="w-full bg-gray-50 border border-gray-100 p-3 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
            placeholder="e.g. 2018, 2021"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 uppercase block mb-3">Sibling in care</label>
          <div className="flex gap-6">
            {["In private daycare", "In municipal day care"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm cursor-pointer">
                <input 
                  type="radio"
                  name="siblingInCare"
                  checked={data.siblingInCare === option}
                  onChange={() => updateData({ siblingInCare: option })}
                  className="w-4 h-4 text-blue-600 border-gray-300"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Additional information */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 text-[#0a2540]">6. Additional information</h2>
        <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
          Illnesses, allergies or other considerations that the applicant wishes to make.
        </label>
        <textarea 
          rows={5}
          value={data.additionalNotes}
          onChange={(e) => updateData({ additionalNotes: e.target.value })}
          className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all"
        />
      </section>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center border-t pt-8">
        <button onClick={onPrev} className="text-gray-400 font-bold hover:text-gray-600 transition-colors">
          ← Previous
        </button>
        <button 
          onClick={onNext} 
          className="bg-[#0a2540] text-white px-12 py-3 rounded-lg font-bold hover:bg-black transition-all shadow-lg"
        >
          Review & Finish →
        </button>
      </div>
    </div>
  );
}