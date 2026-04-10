import PedagogyHero from "./PedagogyHero";
import StaffGrid from "./StaffGrid";
import ContactForm from "./ContactForm";
import Banner from "../Banner";
import heroImg from "./../../assets/contact_images/banner.jpg";
import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

export default function Contact() {
    const { lang } = useLanguage();

    const t = translations[lang]?.contact;
    return (
        <main className="min-h-screen bg-white">
            <div className="min-h-screen pt-16 bg-gray-50">
                <Banner
                    title={t.title}
                    subtitle={t.subtitle}
                    image={heroImg}
                />

                <PedagogyHero />

                {/* Aesthetic Divider */}
                <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gray-100 rounded-full" />
                </div>

                {/* Section 2: Staff Information */}
                <StaffGrid />

                {/* Footer Section with Form */}
                <section className="bg-white py-24 border-t border-gray-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <ContactForm />
                    </div>
                </section>
            </div>
            {/* Section 1: Pedagogy & Image Gallery */}

        </main>
    );
}