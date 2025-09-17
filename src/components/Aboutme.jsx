import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const DivMotion = motion.div;

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 py-12 md:pb-50">
      {/* Judul */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-lime-500 drop-shadow-lg">
        {t("aboutmee.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Kolom Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Nama Besar */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-lime-300 mb-4">
            {t("aboutmee.name")}
          </h1>

          {/* Deskripsi */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-justify mb-8 text-gray-100">
            {t("aboutmee.description")}
          </p>

          {/* Info Box */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 sm:p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
                2+
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-200">
                {t("aboutmee.years")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 sm:p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
                6+
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-200">
                {t("aboutmee.projects")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 md:p-18"
        >
          <h3 className="text-xl sm:text-2xl text-center font-bold text-blue-900 mb-6">
            {t("aboutmee.skillsTitle")}
          </h3>
          <ul className="list-disc list-inside space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-base font-semibold text-gray-900">
            <li>{t("aboutmee.skills.0")}</li>
            <li>{t("aboutmee.skills.1")}</li>
            <li>{t("aboutmee.skills.2")}</li>
            <li>{t("aboutmee.skills.3")}</li>
            <li>{t("aboutmee.skills.4")}</li>
            <li>{t("aboutmee.skills.5")}</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
