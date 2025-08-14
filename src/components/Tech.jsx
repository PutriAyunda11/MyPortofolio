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
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

export default function Tech() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640); // <640px berarti mobile
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toolboxRef = useRef(null);
  const mobileToolboxRef = useRef(null);
  const projectsRef = useRef(null);

  const toolboxInView = useInView(toolboxRef, { once: false, amount: 0.2 });
  const mobileToolboxInView = useInView(mobileToolboxRef, {
    once: false,
    amount: 0.2,
  });
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.2 });

  const fastDuration = isMobile ? 0.4 : 0.8; // mobile lebih cepat
  const fastItemDuration = isMobile ? 0.3 : 0.6;

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
      date: "January 2024 - May 2024",
      message:
        "With SQL, I learned how to efficiently manage and retrieve data from databases. This experience has been very useful for backend projects I developed.",
    },
    {
      name: "HTML 5",
      image: Html,
      date: "June 2024 - August 2024",
      message:
        "HTML was my introduction to the web world. Through HTML, I learned how to structure pages neatly and semantically.",
    },
    {
      name: "CSS 3",
      image: Css,
      date: "June 2024 - August 2024",
      message:
        "CSS helps me enhance the appearance of web pages and make them more visually appealing.",
    },
    {
      name: "JavaScript",
      image: Js,
      date: "June 2024 - August 2024",
      message:
        "JavaScript introduced me to creating dynamic interactions on web pages, making applications more lively and interactive.",
    },
    {
      name: "Java",
      image: Java,
      date: "September 2024 - April 2025",
      message:
        "Java provided a deep understanding of OOP concepts such as inheritance, polymorphism, and encapsulation. I now feel more confident creating object-oriented applications.",
    },
    {
      name: "Php",
      image: Php,
      date: "in the third semester of college",
      message:
        "Through PHP, I gained an understanding of backend web development, including data management and database integration, by building projects with HTML-based interfaces connected to a database.",
    },
    {
      name: "C++",
      image: Cc,
      date: "first to third semester",
      message:
        "Studied C++ from the ground up — beginning with fundamental algorithms and progressing to advanced Object-Oriented Programming (OOP) — which strengthened my overall programming skills.",
    },
    {
      name: "React",
      image: ReactLogo,
      date: "May 2025 - Now",
      message:
        "React introduced me to component-based architecture and state management. I enjoy how React makes UI development more structured and efficient.",
    },
    {
      name: "Tailwind",
      image: Tailwind,
      date: "May 2025 - Now",
      message:
        "Tailwind makes it easy for me to create responsive and consistent web designs without having to write a lot of CSS manually.",
    },
  ];

  const projects = [
    {
      title: "C Language | Nail Art Ayunda",
      desc: "A simple cashier program based on C running on CMD, displaying nail art service lists, processing payments, and automatically printing transaction receipts.",
      image: pC,
      tech: ["C", "Desktop"],
      github:
        "https://github.com/PutriAyunda11/Nail-Art-Ayunda---project-C.git",
    },
    {
      title: "Java Fundamental | PureFresh Laundry",
      desc: "A web application with CRUD features using Java, Spring Boot, and Thymeleaf for user data management.",
      image: pJava,
      tech: ["Java Fundamental", "Spring Boot", "Thymeleaf", "Web"],
      github: "https://github.com/PutriAyunda11/Java-Fundamental-Project.git",
    },
    {
      title: "Html + Css + JavaScript | Elysian Gamer",
      desc: "A web project using HTML, CSS, and JavaScript providing a collection of free online games with attractive graphics, fun gameplay, and easy browser access without cost.",
      image: pHtml,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PutriAyunda11/PUTRI_AYUNDA_GUSTIARA.git",
    },
    {
      title: "Java API | HayMart REST APIs",
      desc: "HayMart is a Java REST API for managing sales, product inventory, and generating sales reports, built with Spring Boot and MySQL.",
      image: pJva,
      tech: ["Java", "Spring Boot", "Spring Security", "Jwt", "Swagger UI"],
      github: "https://github.com/Wahyudi120505/haymart-pos-api",
    },
    {
      title: "Php | Koperasi simpan pinjam",
      desc: "Web application built with PHP and MySQL to manage a cooperative's operations, including admin, members, savings, loans, and installments. Features role-based access, secure login, CRUD functions, and a responsive dashboard with Bootstrap.",
      image: pPhp,
      tech: ["Php", "Mysql","Bootstrap 5"],
      github:
        "https://github.com/PutriAyunda11/Project-Koperasi-PHP-Kelompok5.git",
    },
    {
      title: "React Application",
      desc: "A modern React app featuring search and API interaction, built with functional components and hooks.",
      image: ReactLogo,
      tech: ["React", "API", "Hooks"],
      github: "https://github.com/namamu/project-react",
    },
  ];

  return (
    <motion.div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* My Toolbox */}
        <motion.div
          ref={toolboxRef}
          initial={{ opacity: 0, x: -50 }}
          animate={
            toolboxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: fastDuration, delay: 0.2 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-6 text-center text-blue-800"
            initial={{ opacity: 0, y: -20 }}
            animate={
              toolboxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: fastItemDuration }}
          >
            My Toolbox
          </motion.h2>

          {/* Tablet & Desktop View - Logo + Teks */}
          <div
            className="hidden sm:block space-y-6 pt-2 pr-8 pl-8 overflow-y-auto scroll-container"
            style={{
              maxHeight:
                window.innerWidth >= 1024
                  ? "630px" 
                  : window.innerWidth >= 768
                  ? "900px"
                  : "none", 
            }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  toolboxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{
                  duration: fastItemDuration,
                  delay: index * (isMobile ? 0.05 : 0.15),
                }}
              >
                {" "}
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
                  animate={
                    toolboxInView
                      ? { opacity: 1, backgroundColor: "rgba(255,255,255,0)" }
                      : { opacity: 0, backgroundColor: "#ffffff" }
                  }
                  transition={{ duration: 1 }}
                >
                  <p className="font-bold text-gray-800 mb-1">{tool.date}</p>
                  <p className="font-semibold">{tool.message}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Hanya Logo */}
          <div
            ref={mobileToolboxRef}
            className="flex sm:hidden flex-wrap justify-center gap-6 pt-6"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  mobileToolboxInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: fastItemDuration,
                  delay: index * (isMobile ? 0.05 : 0.15),
                  scale: { duration: 0.3 },
                }}
              >
                {" "}
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-20 h-20 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay nama */}
                <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 w-[80px] rounded-b-full py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-xs font-bold text-center truncate">
                    {tool.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Projects */}
        <motion.div
          ref={projectsRef}
          id="projects"
          initial={{ opacity: 0, x: 50 }}
          animate={
            projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
          }
          transition={{ duration: fastDuration, delay: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold text-center mb-6 text-blue-800 lg:pt-0 sm:pt-10 md:pt-13"
            initial={{ opacity: 0, y: -20 }}
            animate={
              projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: fastItemDuration }}
          >
            My Projects
          </motion.h2>{" "}
          <div
            className="space-y-8 overflow-y-auto scroll-container"
            style={{
              maxHeight:
                window.innerWidth >= 1024
                  ? "630px" 
                  : window.innerWidth >= 768
                  ? "930px" 
                  : "none", 
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row bg-white/10 hover:bg-white/20 transition p-4 rounded-xl hover:shadow-lg gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={
                  projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{
                  duration: fastItemDuration,
                  delay: index * (isMobile ? 0.05 : 0.15),
                }}
              >
                {" "}
                <div className="md:w-1/3 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-full max-h-32 shadow"
                  />
                </div>
                <div className="md:w-2/3 w-full">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-gray-700">
                      {project.title}
                    </h3>
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
