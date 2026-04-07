import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailTest() {
  const [status, setStatus] = useState('');

  const sendTestEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // These are the "Flattened" variables for your template
    const testData = {
      to_name: "Admin",
      from_name: "Test User",
      message: "This is a simple test to check the 412 error fix!",
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      testData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('✅ Success! Check your inbox.');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus(`❌ Error: ${err.text || 'Check console'}`);
      });
  };

  return (
    <div className="p-10 bg-white shadow-xl rounded-xl max-w-md mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold mb-4">EmailJS Connection Test</h2>
      <button
        onClick={sendTestEmail}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700"
      >
        Send Test Email
      </button>
      <p className="mt-4 font-mono text-sm">{status}</p>
    </div>
  );
}