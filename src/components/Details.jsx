import { useLocation, useNavigate } from "react-router-dom";
import { Github, Code2, Layers, Calendar, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [project, setProject] = useState(location.state || null);

  useEffect(() => {
    if (!project) {
      const saved = localStorage.getItem("selectedProject");
      if (saved) setProject(JSON.parse(saved));
    } else {
      localStorage.setItem("selectedProject", JSON.stringify(project));
    }
  }, [project]);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <p className="text-lg font-bold">No project data found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen mx-auto px-6 md:px-26 md:pt-20 py-12 text-white bg-[#26267d]">
      {/* Back Button */}
      <button
        onClick={() => navigate("/toolbox")}
        className="mb-6 px-4 py-2 bg-[#2F2FA2] text-white font-semibold rounded-lg hover:bg-[#26267d] transition flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        {t("stats.back")}
      </button>

      {/* TITLE + DESCRIPTION + IMAGE */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
        {/* LEFT SIDE: Title, Desc, Stats, Buttons, Tech Stack */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left text-lime-300 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-[17px] sm:text-[19px] leading-relaxed mb-6 text-justify">
            {project.descLong}
          </p>

          {/* Stats Box */}
          <div className="flex flex-wrap gap-4 bg-white/8 p-3 mb-6 rounded-xl">
            <div className="flex-1 min-w-[140px] bg-white/15 p-4 rounded-xl flex items-center gap-3">
              <Code2 className="text-lime-400" size={24} />
              <div>
                <p className="text-lg font-bold">{project.tech?.length || 0}</p>
                <p className="text-sm text-gray-300">{t("stats.totalTech")}</p>
              </div>
            </div>
            <div className="flex-1 min-w-[140px] bg-white/15 p-4 rounded-xl flex items-center gap-3">
              <Layers className="text-lime-400" size={24} />
              <div>
                <p className="text-lg font-bold">
                  {project.features?.length || 0}
                </p>
                <p className="text-sm text-gray-300">
                  {t("stats.mainFeatures")}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-700 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            <div className="px-4 py-2 bg-white/10 rounded-lg flex items-center gap-2">
              <Calendar size={18} className="text-white" />
              <span className="font-bold">{project.date}</span>
            </div>
          </div>

          {/* Tech Stack */}
          <h2 className="text-xl font-bold mb-4">{t("stats.tg")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-purple-600/30 rounded-lg text-sm font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Image + Key Features */}
        <div className="flex flex-col items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl shadow-lg mb-6"
          />

          {/* Key Features */}
          <div className="w-full bg-white/5 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 text-lime-200">
              {t("stats.keyy")}
            </h2>
            <ul className="space-y-2 text-gray-300">
              {project.features?.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
