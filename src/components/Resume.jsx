import React, { useRef } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.bundle";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();
  const resumeRef = useRef(null);

  const fixColorsForPdf = (element) => {
    if (!element) return;
    const all = element.querySelectorAll("*");
    all.forEach((el) => {
      const styles = window.getComputedStyle(el);
      ["color", "backgroundColor", "borderColor"].forEach((prop) => {
        const val = styles[prop];
        if (val.includes("oklch")) {
          if (prop === "color" || prop === "borderColor") {
            el.style[prop] = "#000000";
          } else if (prop === "backgroundColor") {
            el.style[prop] = "#ffffff";
          }
        }
      });
    });
  };

  const handleDownloadPdf = () => {
    const element = resumeRef.current;
    if (!element) return;
    fixColorsForPdf(element);

    const opt = {
      margin: 10,
      filename: "Putri_Ayunda_Gustiara_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const titleColor = "#0b3d91";
  const borderColor = "#0b3d91";

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
      <div ref={resumeRef} className="bg-white p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold" style={{ color: titleColor }}>
            Putri Ayunda Gustiara
          </h1>
          {/* kontak tetap */}
          <p className="mt-2">  Sukaraja, Cicendo, Bandung, Jawa Barat |{" "} <a href="https://wa.me/628388459523" target="_blank" rel="noopener noreferrer" className="text-[#0b3d91] hover:underline" > +62 838-8459-523 </a>{" "} |{" "} <a href="mailto:putriayundagustiara@gmail.com" className="text-[#0b3d91] hover:underline" > putriayundagustiara@gmail.com </a>{" "} |{" "} <a href="https://github.com/PutriAyunda11" target="_blank" rel="noopener noreferrer" className="text-[#0b3d91] hover:underline" > GitHub </a>{" "} |{" "} <a href="https://www.linkedin.com/in/putri-ayunda-gustiara-1aa690331" target="_blank" rel="noopener noreferrer" className="text-[#0b3d91] hover:underline" > LinkedIn </a>{" "} |{" "} <a href="https://my-portofolio-gamma-green.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#0b3d91] hover:underline" > {" "} Portofolio </a> </p>
        </div>

        {/* Profil */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1" style={{ color: titleColor, borderColor }}>
            {t("resumes.profile.title")}
          </h2>
          <p className="mt-2 text-black text-justify">
            {t("resumes.profile.desc")}
          </p>
        </div>

        {/* Pendidikan */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1" style={{ color: titleColor, borderColor }}>
            {t("resumes.education.title")}
          </h2>
          <ul className="mt-2 space-y-4 text-black">
            <li className="flex justify-between">
              <div>
                <p className="font-semibold">{t("resumes.education.university")}</p>
                <ul className="list-disc ml-6">
                  <li>{t("resumes.education.gpa")}</li>
                </ul>
              </div>
              <span>{t("resumes.education.period")}</span>
            </li>
            <li className="flex justify-between">
              <div>
                <p className="font-semibold">{t("resumes.education.school")}</p>
                <ul className="list-disc ml-6">
                  <li>{t("resumes.education.avg")}</li>
                </ul>
              </div>
              <span>{t("resumes.education.graduated")}</span>
            </li>
          </ul>
        </div>

        {/* Pengalaman */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1" style={{ color: titleColor, borderColor }}>
            {t("resumes.experience.title")}
          </h2>
          <div className="mt-2 ml-1">
            <p className="font-semibold">{t("resumes.experience.assistant")}</p>
          </div>
          <ul className="mt-2 list-disc ml-6 space-y-1 text-black">
            <li>{t("resumes.experience.desc")}</li>
          </ul>
        </div>

        {/* Pelatihan */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1" style={{ color: titleColor, borderColor }}>
            {t("resumes.training.title")}
          </h2>
          <ul className="mt-2 list-disc ml-6 space-y-1 text-black">
            {t("resumes.training.list", { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Keahlian */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1" style={{ color: titleColor, borderColor }}>
            {t("resumes.skills.title")}
          </h2>
          <ul className="mt-2 list-disc ml-6 space-y-1 text-black">
            {t("resumes.skills.list", { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Bahasa */}
        <div>
          <h2 className="text-lg font-semibold border-b pb-1 pt-2" style={{ color: titleColor, borderColor }}>
            {t("resumes.languages.title")}
          </h2>
          <ul className="mt-2 list-disc ml-6 space-y-1 text-black">
            {t("resumes.languages.list", { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tombol Download */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleDownloadPdf}
          className="flex items-center gap-2 text-white px-4 py-2 rounded shadow cursor-pointer transition-colors duration-200"
          style={{ backgroundColor: "#374151" }}
        >
          <Download size={18} />
         Download PDF
        </button>
      </div>
    </section>
  );
}
