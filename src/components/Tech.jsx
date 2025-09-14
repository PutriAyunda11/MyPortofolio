import { useTranslation } from "react-i18next"; 
import C from "../assets/bahasaC.jpg";
import ReactLogo from "../assets/reactJS.jpg";
import Html from "../assets/htmlll.jpg";
import Css from "../assets/css.jpeg";
import Js from "../assets/JavaScriptt.jpg";
import Java from "../assets/java.jpg";
import Tailwind from "../assets/Tailwind.jpg";
import Php from "../assets/php.jpg";
import Cc from "../assets/c++.jpg";
import Sql from "../assets/mysql.jpg";
import pHtml from "../assets/projectHTML.png";
import pC from "../assets/projectC.png";
import pJava from "../assets/projectJava.png";
import pJva from "../assets/projectJava2.png";
import pPhp from "../assets/projectPhp.png";
import pReact from "../assets/projectReact.png";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

const _motionDiv = motion.div;

export default function Tech() {
  const { t } = useTranslation(); // ambil teks sesuai bahasa
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toolboxRef = useRef(null);
  const mobileToolboxRef = useRef(null);
  const projectsRef = useRef(null);

  const toolboxInView = useInView(toolboxRef, { once: isMobile, amount: 0.2 });
  const _mobileToolboxInView = useInView(mobileToolboxRef, { once: isMobile, amount: 0.2 });
  const projectsInView = useInView(projectsRef, { once: isMobile, amount: 0.2 });

  const fastDuration = isMobile ? 0.4 : 0.8;
  const _fastItemDuration = isMobile ? 0.3 : 0.6;

  // tools array -> ambil teks dari JSON
  const tools = [
    { name: "c", image: C },
    { name: "sql", image: Sql },
    { name: "html", image: Html },
    { name: "css", image: Css },
    { name: "js", image: Js },
    { name: "java", image: Java },
    { name: "php", image: Php },
    { name: "cpp", image: Cc },
    { name: "react", image: ReactLogo },
    { name: "tailwind", image: Tailwind },
  ].map((tool) => ({
    ...tool,
    date: t(`tech.tools.${tool.name}.date`),
    message: t(`tech.tools.${tool.name}.message`),
  }));

  // projects array -> ambil teks dari JSON
  const projects = [
    { name: "c", image: pC, tech: ["C", "Desktop"], github: "https://github.com/PutriAyunda11/Nail-Art-Ayunda---project-C.git" },
    { name: "java1", image: pJava, tech: ["Java Fundamental", "Spring Boot", "Thymeleaf", "Web"], github: "https://github.com/PutriAyunda11/Java-Fundamental-Project.git" },
    { name: "html", image: pHtml, tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/PutriAyunda11/PUTRI_AYUNDA_GUSTIARA.git" },
    { name: "java2", image: pJva, tech: ["Java", "Spring Boot", "Spring Security", "Jwt", "Swagger UI"], github: "https://github.com/Wahyudi120505/haymart-pos-api" },
    { name: "php", image: pPhp, tech: ["Php", "Mysql", "Bootstrap 5"], github: "https://github.com/PutriAyunda11/Project-Koperasi-PHP-Kelompok5.git" },
    { name: "react", image: pReact, tech: ["React", "Tailwind CSS", "Hooks", "Local Storage"], github: "https://github.com/PutriAyunda11/Skintizen", project: "https://skintizen-project.vercel.app/" },
  ].map((project) => ({
    ...project,
    title: t(`projects.list.${project.name}.title`),
    desc: t(`projects.list.${project.name}.desc`),
  }));

  return (
    <motion.div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        
        {/* My Toolbox */}
        <motion.div ref={toolboxRef} initial={{ opacity: 0, x: -50 }} animate={toolboxInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: fastDuration, delay: 0.2 }}>
          <motion.h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            {t("tech.title")}
          </motion.h2>

          {/* Tablet & Desktop */}
          <div className="hidden sm:block space-y-6 pt-2 pr-8 pl-8 overflow-y-auto scroll-container" style={{ maxHeight: window.innerWidth >= 1024 ? "630px" : window.innerWidth >= 768 ? "900px" : "none" }}>
            {tools.map((tool, index) => (
              <motion.div key={index} className="flex items-start gap-4 group" initial={{ opacity: 0, x: -30 }} animate={toolboxInView ? { opacity: 1, x: 0 } : {}}>
                <div className="relative shrink-0">
                  <img src={tool.image} alt={tool.name} className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full shadow-md" />
                </div>
                <motion.div className="flex-1 text-sm text-gray-700">
                  <p className="font-bold text-gray-800 mb-1">{tool.date}</p>
                  <p className="font-semibold">{tool.message}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View */}
          <div ref={mobileToolboxRef} className="flex sm:hidden flex-wrap justify-center gap-6 pt-6">
            {tools.map((tool, index) => (
              <motion.div key={index} className="relative group">
                <img src={tool.image} alt={tool.name} className="w-20 h-20 object-cover rounded-full shadow-md" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Projects */}
        <motion.div ref={projectsRef} id="projects" initial={{ opacity: 0, x: 50 }} animate={projectsInView ? { opacity: 1, x: 0 } : {}}>
          <motion.h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
            {t("projects.title")}
          </motion.h2>
          <div className="space-y-8 overflow-y-auto scroll-container" style={{ maxHeight: window.innerWidth >= 1024 ? "630px" : window.innerWidth >= 768 ? "930px" : "none" }}>
            {projects.map((project, index) => (
              <motion.div key={index} className="flex flex-col md:flex-row bg-white/10 p-4 rounded-xl gap-4">
                <div className="md:w-1/3 w-full">
                  <img src={project.image} alt={project.title} className="rounded-lg object-cover w-full h-full max-h-32 shadow" />
                </div>
                <div className="md:w-2/3 w-full">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-gray-700">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-800 hover:text-blue-400">GitHub <Github size={15} /></a>
                    {project.project && (
                      <a href={project.project} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-800 hover:text-blue-400">View Project <ExternalLink size={15} /></a>
                    )}
                  </div>
                  <p className="text-sm text-gray-800 mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs font-bold bg-blue-500 text-white px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
