import { useTranslation } from "react-i18next";
import C from "../assets/cc.png";
import ReactLogo from "../assets/reacttt.png";
import Html from "../assets/htmll.png";
import Css from "../assets/csss.png";
import Js from "../assets/JVSCRR.png";
import Java from "../assets/java.png";
import vs from "../assets/vscd.png";
import Tailwind from "../assets/tailwindd.png";
import Php from "../assets/pphp.png";
import Cc from "../assets/cppp.png";
import Sql from "../assets/sqll.png";
import pHtml from "../assets/projectHTML.png";
import pC from "../assets/projectC.png";
import pJava from "../assets/projectJava.png";
import pJva from "../assets/projectJava2.png";
import pPhp from "../assets/projectPhp.png";
import pReact from "../assets/projectReact.png";
import certifC1 from "../assets/certifCourse1.png";
import certifC2 from "../assets/certifCourse2.png";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Code2, Medal, Cpu } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

const _motionDiv = motion.div;

export default function Tech() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const projectsRef = useRef(null);

  const tabItems = [
    { key: "projects", label: t("tabs.projects"), icon: <Code2 size={20} /> },
    {
      key: "certificates",
      label: t("tabs.certificates"),
      icon: <Medal size={20} />,
    },
    { key: "tech", label: t("tabs.tech"), icon: <Cpu size={20} /> },
  ];
  const _fastDuration = isMobile ? 0.4 : 0.8;
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 40, transition: { duration: 0.4 } },
  };
  const tools = [
    { name: "C", image: C },
    { name: "SQL", image: Sql },
    { name: "HTML", image: Html },
    { name: "CSS", image: Css },
    { name: "JavaScript", image: Js },
    { name: "Java", image: Java },
    { name: "Php", image: Php },
    { name: "C++", image: Cc },
    { name: "React.js", image: ReactLogo },
    { name: "TailwindCSS", image: Tailwind },
    { name: "VsCode", image: vs },
  ];

  const certificates = [
    {
      name: "Bootcamp Course 1",
      image: certifC1,
    },
    {
      name: "Bootcamp Course 2",
      image: certifC2,
    },
    // {
    //   name: "database",
    //   image: pHtml,
    // },
    // {
    //   name: "webProgramming",
    //   image: pPhp,
    // },
    // {
    //   name: "fundamentalJava",
    //   image: pReact,
    // },
    // {
    //   name: "advancedJava",
    //   image: pJva,
    // },
    // {
    //   name: "frontendReact",
    //   image: pReact,
    // },
    // {
    //   name: "github",
    //   image: pHtml,
    // },
  ].map((cert) => ({
    ...cert,
    title: t(`certificates.list.${cert.name}`),
  }));

  const projects = [
    {
      name: "c",
      image: pC,
      tech: ["C", "Desktop"],
      github:
        "https://github.com/PutriAyunda11/Nail-Art-Ayunda---project-C.git",
    },
    {
      name: "java1",
      image: pJava,
      tech: ["Java Fundamental", "Spring Boot", "Thymeleaf", "Web"],
      github: "https://github.com/PutriAyunda11/Java-Fundamental-Project.git",
    },
    {
      name: "html",
      image: pHtml,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PutriAyunda11/PUTRI_AYUNDA_GUSTIARA.git",
    },
    {
      name: "java2",
      image: pJva,
      tech: ["Java", "Spring Boot", "Spring Security", "Jwt", "Swagger UI"],
      github: "https://github.com/Wahyudi120505/haymart-pos-api",
    },
    {
      name: "php",
      image: pPhp,
      tech: ["Php", "Mysql", "Bootstrap 5"],
      github:
        "https://github.com/PutriAyunda11/Project-Koperasi-PHP-Kelompok5.git",
    },
    {
      name: "react",
      image: pReact,
      tech: ["React", "Tailwind CSS", "Hooks", "Local Storage"],
      github: "https://github.com/PutriAyunda11/Skintizen",
      project: "https://skintizen-project.vercel.app/",
    },
  ].map((project) => ({
    ...project,
    title: t(`projects.list.${project.name}.title`),
    descShort: t(`projects.list.${project.name}.descShort`),
    descLong: t(`projects.list.${project.name}.descLong`),
    date: t(`projects.list.${project.name}.date`),
    features: t(`projects.list.${project.name}.features`, {
      returnObjects: true,
    }),
  }));
  return (
    <div className="backdrop-blur-[300px] px-0 py-22 max-w-screen min-h-screen flex items-start">
      <motion.div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0 ">
        {/* TITLE & DESCRIPTION */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#2F2FA2] mb-3">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-800 lg:text-white text-[13px] md:text-[18px] font-bold max-w-2xl mx-auto">
            {t("portfolio.desc")}
          </p>
        </div>

        {/* TAB MENU */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 lg:gap-4 p-2 md:p-3 lg:p-4 rounded-lg bg-white/40 lg:bg-white/10 backdrop-blur-md shadow-lg">
            {tabItems.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-2 md:px-10 lg:px-36 py-4 md:py-6 rounded-md font-bold text-sm md:text-lg transition-all duration-300
            ${
              activeTab === tab.key
                ? "bg-white/50 lg:bg-white/30 backdrop-blur-xl text-blue-900 shadow-md scale-105"
                : "bg-white/40 lg:bg-white/10 backdrop-blur-sm text-gray-600 lg:text-gray-200 hover:bg-white/20"
            }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <AnimatePresence mode="wait">
          {/* PROJECTS */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              ref={projectsRef}
              id="projects"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col relative"
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full max-h-60 sm:max-h-72 lg:max-h-80 rounded-md bg-white/5 p-2"
                  />
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-gray-800 mb-12">
                    {project.descShort}
                  </p>
                  {/* Buttons */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {/* Live Demo button (only if project.project exists) */}
                    {project.project && (
                      <a
                        href={project.project}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-white/20 backdrop-blur-md text-purple-500 font-bold flex items-center gap-1 hover:bg-white/30 transition"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={() => {
                        localStorage.setItem(
                          "selectedProject",
                          JSON.stringify(project)
                        );
                        navigate("/detail", { state: project });
                      }}
                      className="px-3 py-2 rounded-lg bg-white/20 backdrop-blur-md text-blue-700 font-bold flex items-center gap-1 hover:bg-white/30 transition"
                    >
                      Details <ArrowRight size={20} />
                    </button>
                  </div>{" "}
                </motion.div>
              ))}
            </motion.div>
          )}
          {/* CERTIFICATES */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-10"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/10 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="object-contain w-full max-h-60 sm:max-h-72 lg:max-h-80 rounded-md bg-white/5 p-2"
                  />
                  {/* <div className="flex items-center gap- mt-2 text-center">
                    <h3 className="text-sm sm:text-md font-bold text-black/90 md:text-black/90 break-words">
                      {cert.title}
                    </h3>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TECH STACK */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10"
            >
              <motion.div
                key="tech-grid"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 justify-items-center"
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-3 sm:p-4 w-full max-w-[200px] rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-[99px] sm:w-[90px] lg:w-[100px] h-[99px] sm:h-[90px] lg:h-[100px] object-contain mb-2 rounded-lg"
                    />
                    <p className="text-[15px] sm:text-sm font-bold text-gray-900 uppercase tracking-wide text-center">
                      {tool.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
