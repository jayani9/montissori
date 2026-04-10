import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang]?.contact?.form;
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert(t.success);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert(t.error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 max-w-5xl mx-auto">
      {/* 1. Header with subtle decorative element */}
      <div className="flex items-center gap-4 mb-16">
        {/* Soft Olive Green Accent */}
        <div className="w-2 h-10 bg-[#c2d66d] rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
          {t.title}
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* 2. Grid for Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <FormInputField 
            label={t.name} 
            type="text" 
            name="name"
            value={formData.name}
            onChange={(v: any) => setFormData({ ...formData, name: v })}
            required
          />
          <FormInputField 
            label={t.email} 
            type="email" 
            name="email"
            value={formData.email}
            onChange={(v: any) => setFormData({ ...formData, email: v })}
            required
          />
        </div>

        {/* 3. Subject Input */}
        <FormInputField 
          label={t.subject} 
          type="text" 
          name="subject"
          value={formData.subject}
          onChange={(v: any) => setFormData({ ...formData, subject: v })}
        />

        {/* 4. Message Textarea */}
        <div className="flex flex-col group">
          <label className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide group-focus-within:text-blue-500">
            {t.message}
          </label>
          <textarea
            rows={7}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-gray-50 border border-gray-100 p-5 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:bg-white resize-none text-slate-700 leading-relaxed"
          />
        </div>

        {/* 5. Required Info & Submit Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400 font-medium">
            {t.required}
          </p>
          
          <button
            type="submit"
            disabled={isSending}
            className="bg-[#c2d66d] hover:bg-[#b0c45a] text-[#0a2540] text-sm font-bold uppercase tracking-wider py-4 px-12 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? t.sending : t.submit}
          </button>
        </div>
      </form>
    </div>
  );
}

// Sub-component for Input Fields to keep the code clean
const FormInputField = ({ label, type, value, onChange, required, name }: any) => (
  <div className="flex flex-col group">
    <label className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide group-focus-within:text-blue-500">
      {label}
    </label>
    <input
      required={required}
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:bg-white text-slate-700"
    />
  </div>
);