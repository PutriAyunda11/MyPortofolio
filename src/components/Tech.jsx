import C from "../assets/bahasaC.jpg";
import ReactLogo from "../assets/reactJS.jpg";
import Html from "../assets/htmlll.jpg";
import Java from "../assets/java.jpg";
import Sql from "../assets/mysql.jpg";
import pHtml from "../assets/projectHTML.png";
import pC from "../assets/projectC.png";
import pJava from "../assets/projectJava.png";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function Tech() {
  const toolboxRef = useRef(null);
  const mobileToolboxRef = useRef(null);
  const projectsRef = useRef(null);

  const toolboxInView = useInView(toolboxRef, { once: false, amount: 0.2 });
  const mobileToolboxInView = useInView(mobileToolboxRef, { once: false, amount: 0.2 });
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.2 });
  
const tools = [
  {
    name: "C",
    image: C,
    date: "September 2023 - January 2024",
    message:
      "Learning C language provided a strong foundation for understanding basic programming logic and data structures. Although it was quite challenging at first, I feel satisfied as it now makes it easier to learn other languages.",
  },
  {
    name: "SQL",
    image: Sql,
    date: "March 2024 - May 2024",
    message:
      "With SQL, I learned how to efficiently manage and retrieve data from databases. This experience has been very useful for backend projects I developed.",
  },
  {
    name: "HTML",
    image: Html,
    date: "July 2023 - August 2023",
    message:
      "HTML was my introduction to the web world. Through HTML, I learned how to structure pages neatly and semantically.",
  },
  {
    name: "Java",
    image: Java,
    date: "May 2024 - June 2024",
    message:
      "Java provided a deep understanding of OOP concepts such as inheritance, polymorphism, and encapsulation. I now feel more confident creating object-oriented applications.",
  },
  {
    name: "React",
    image: ReactLogo,
    date: "February 2024 - April 2024",
    message:
      "React introduced me to component-based architecture and state management. I enjoy how React makes UI development more structured and efficient.",
  },
];

const projects = [
  {
    title: "Nail Art Ayunda",
    desc: "A simple cashier program based on C running on CMD, displaying nail art service lists, processing payments, and automatically printing transaction receipts.",
    image: pC,
    tech: ["C", "Desktop"],
    github:
      "https://github.com/PutriAyunda11/Nail-Art-Ayunda---project-C.git",
  },
  {
    title: "PureFresh Laundry",
    desc: "A web application with CRUD features using Java, Spring Boot, and Thymeleaf for user data management.",
    image: pJava,
    tech: ["Java Fundamental", "Spring Boot", "Thymeleaf", "Web"],
    github: "https://github.com/PutriAyunda11/Java-Fundamental-Project.git",
  },
  {
    title: "Elysian Gamer",
    desc: "A web project using HTML, CSS, and JavaScript providing a collection of free online games with attractive graphics, fun gameplay, and easy browser access without cost.",
    image: pHtml,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PutriAyunda11/PUTRI_AYUNDA_GUSTIARA.git",
  },
  {
    title: "React Application",
    desc: "A modern React app featuring search and API interaction, built with functional components and hooks.",
    image: C,
    tech: ["React", "API", "Hooks"],
    github: "https://github.com/namamu/project-react",
  },
];

return (
  <motion.div
    className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0"
  >
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
      {/* My Toolbox */}
      <motion.div
        ref={toolboxRef}
        initial={{ opacity: 0, x: -50 }}
        animate={toolboxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={toolboxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My Toolbox
        </motion.h2>

        {/* Tablet & Desktop View - Logo + Teks */}
        <div className="hidden sm:block space-y-9 pt-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 group"
              initial={{ opacity: 0, x: -30 }}
              animate={toolboxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative shrink-0">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 w-[100px] rounded-b-full py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-sm font-bold text-center truncate">
                    {tool.name}
                  </p>
                </div>
              </div>

              {/* Tulisan dengan animasi fade-in */}
              <motion.div
                className="flex-1 text-sm text-gray-700"
                initial={{ opacity: 0, backgroundColor: "#ffffff" }}
                animate={toolboxInView ? { opacity: 1, backgroundColor: "rgba(255,255,255,0)" } : { opacity: 0, backgroundColor: "#ffffff" }}
                transition={{ duration: 1 }}
              >
                <p className="font-bold text-gray-800 mb-1">{tool.date}</p>
                <p className="font-semibold">{tool.message}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Hanya Logo */}
        <motion.div
          ref={mobileToolboxRef}
          className="flex sm:hidden flex-wrap justify-center gap-6 pt-6"
          initial={{ opacity: 0, backgroundColor: "#ffffff" }}
          animate={mobileToolboxInView ? { opacity: 1, backgroundColor: "rgba(255,255,255,0)" } : { opacity: 0, backgroundColor: "#ffffff" }}
          transition={{ duration: 1 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-20 h-20 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay nama */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 w-[80px] rounded-b-full py-1 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <p className="text-white text-xs font-bold text-center truncate">
                  {tool.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* My Projects */}
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, x: 50 }}
        animate={projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-6 text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-white/10 hover:bg-white/20 transition p-4 rounded-xl hover:shadow-lg gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="md:w-1/3 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg object-cover w-full h-full max-h-32 shadow"
                />
              </div>
              <div className="md:w-2/3 w-full">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-gray-700">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-800 hover:text-blue-400"
                  >
                    GitHub <Github size={15} />
                  </a>
                </div>
                <p className="text-sm text-gray-800 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold bg-blue-500 text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
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