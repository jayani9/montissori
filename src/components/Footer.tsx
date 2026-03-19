import React from 'react'

export const Footer = () => {
    return (
        <div>
            <section className="relative bg-[#E67E22] text-white py-32 px-12 overflow-hidden">
                {/* 🌊 The SVG Wave Top Border */}
                <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-full h-[100px] fill-[#f8f9fa]" // Matches the section color above
                    >
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.34,92.83,168,76.65,214,62.83,264,67.1,321.39,56.44Z"></path>
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 mt-10 text-center">
                    <h2 className="text-4xl font-bold mb-6">Yhteystiedot / Contact</h2>
                    <p className="text-xl opacity-90 mb-8">
                        Tule tutustumaan meidän lämpimään ja virikkeelliseen ympäristöömme.
                    </p>

                    <button className="bg-white text-[#E67E22] px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
                        Varaa vierailu →
                    </button>
                </div>
            </section>
        </div>
    )
}
