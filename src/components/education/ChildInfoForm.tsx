interface Props {
  data: any;
  updateData: (newData: any) => void;
  onNext: () => void;
}

export default function ChildInfoForm({ data, updateData, onNext }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    updateData({ [name]: val });
  };

  return (
    <div className="bg-white p-8 shadow-sm rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">1. Child's Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Names */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Last and First Names *</label>
          <input
            type="text"
            name="childFullName"
            value={data.childFullName}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* SSN */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Social Security Number *</label>
          <input
            type="text"
            name="socialSecurityNumber"
            value={data.socialSecurityNumber}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Native Language */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Native Language *</label>
          <select 
            name="nativeLanguage"
            value={data.nativeLanguage}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          >
            <option value="Finnish">Finnish</option>
            <option value="Swedish">Swedish</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Other Language */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Native language other than Finnish</label>
          <input
            type="text"
            name="otherLanguage"
            value={data.otherLanguage}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium mb-1">Street Address *</label>
          <input
            type="text"
            name="streetAddress"
            value={data.streetAddress}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          />
        </div>

        {/* Security Checkbox */}
        <div className="flex items-start gap-3 md:col-span-2 py-2">
          <input
            type="checkbox"
            name="safetyBlock"
            checked={data.safetyBlock}
            onChange={handleChange}
            className="mt-1 w-4 h-4"
          />
          <label className="text-xs text-gray-600">
            Security prohibition/non-disclosure marked as valid according to Section 36 of the Act on the Population Register Center's certification service (661/2009).
          </label>
        </div>

        {/* Postal Code */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Postal Code *</label>
          <input
            type="text"
            name="postalCode"
            value={data.postalCode}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          />
        </div>

        {/* City/Post Office */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">City / Post Office *</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          />
        </div>

        {/* Home Town */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Municipality of Residence *</label>
          <input
            type="text"
            name="municipality"
            value={data.municipality}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          />
        </div>

        {/* Home Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Home Phone *</label>
          <input
            type="text"
            name="homePhone"
            value={data.homePhone}
            onChange={handleChange}
            className="border p-2 bg-gray-50 rounded outline-none"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-8 py-2 rounded font-bold hover:bg-blue-700 transition-colors"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}