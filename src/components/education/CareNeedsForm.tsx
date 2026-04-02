interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function CareNeedsForm({ data, updateData, onNext, onPrev }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-[#0a2540]">
        2. The need for early childhood education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Need Selection */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm text-gray-500 mb-1">Need *</label>
          <select
            name="careNeed"
            value={data.careNeed}
            onChange={handleChange}
            className="border-b border-gray-300 py-2 bg-transparent focus:border-blue-500 outline-none transition-colors w-full md:w-1/4"
          >
            <option value="Full day">Full day</option>
            <option value="Part day">Part day</option>
            <option value="Shift care">Shift care</option>
          </select>
        </div>

        {/* Time Input */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Time *</label>
          <input
            type="text"
            name="dailyTime"
            placeholder="e.g. 08:00 - 16:00"
            value={data.dailyTime}
            onChange={handleChange}
            className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Treatment start date *</label>
          <input
            type="date"
            name="startDate"
            value={data.startDate}
            onChange={handleChange}
            className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Current Care Location */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm text-gray-500 mb-1">Current care location</label>
          <input
            type="text"
            name="currentCareLocation"
            value={data.currentCareLocation}
            onChange={handleChange}
            className="bg-gray-50 border-none p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-between">
        <button
          onClick={onPrev}
          className="text-gray-500 font-bold hover:text-gray-700 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          className="bg-[#0a2540] text-white px-10 py-3 rounded font-bold hover:bg-black transition-all shadow-md"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}