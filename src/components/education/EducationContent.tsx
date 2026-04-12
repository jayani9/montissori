import { useLanguage } from "./../../context/LanguageContext";
import translationsData from "./../../data/translations.json";

const translations = translationsData as any;

export default function EducationContent() {
    const { lang } = useLanguage();
    const t = translations[lang]?.education;

    if (!t) return null;

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-8 text-slate-700 leading-relaxed text-base md:text-lg">

            {/* 1. Introduction Paragraphs */}
            <p className="text-blue-900/80 font-medium">
                {t.p1}
            </p>

            <p>
                {t.p2}
            </p>

            {/* 2. First Link: MS Word Document (Daycare Application) */}
            <p>
                {t.appIntro}
                <a
                    href={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
                        window.location.origin + "/paivakotihakemus.doc"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors mx-1"
                >
                    {t.appLink}
                </a>
                {t.appOutro}
            </p>

            {/* Footer Resource Links */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
                {/* 3. Second Link: Reminder Procedure PDF */}
                <p>
                    {t.guidelineText}
                    <a
                        href="/Tiedote_muistutusmenettely.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium ml-1"
                    >
                        {t.guidelineLink}
                    </a>.
                </p>

                {/* 4. Third Link: Supervision Plan PDF */}
                <p>
                    {t.supervisionText}
                    <a
                        href="/Omavalvontasuunnitelma_SYKSY2025_MIO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium ml-1"
                    >
                        {t.supervisionLink}
                    </a>.
                </p>
            </div>
        </div>
    );
}