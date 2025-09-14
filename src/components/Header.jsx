import { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const _motionDiv = motion.div;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setLanguage(i18n.language);
    return () => window.removeEventListener("resize", handleResize);
  }, [i18n.language]);

  const handleNavigate = (section) => {
    if (location.pathname === "/") {
      let offsetValue = 0;

      if (section === "projects") {
        offsetValue = isLaptop ? -50 : -100;
        scroller.scrollTo("projects", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: offsetValue,
        });
      } else if (section === "toolbox") {
        scroller.scrollTo("toolbox", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: 0,
        });
      } else if (section === "home") {
        scroller.scrollTo("home", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: 0,
        });
      }
    } else {
      navigate(`/?section=${section}`);
    }
    setMenuOpen(false);
  };

  const boxVariants = {
    hidden: { opacity: 0, backgroundColor: "#ffffff" },
    visible: { opacity: 1, backgroundColor: "#ffffff" },
    exit: { opacity: 0, backgroundColor: "#ffffff" },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
    exit: { opacity: 0, y: -20 },
  };

  const menuItems = isLaptop
    ? [
        { label: t("home"), section: "home" },
        { label: t("toolboxs"), section: "toolbox" },
        { label: t("resume"), section: "resume" },
      ]
    : [
        { label: t("home"), section: "home" },
        { label: t("toolbox"), section: "toolbox" },
        { label: t("project"), section: "projects" },
        { label: t("resume"), section: "resume" },
      ];

  const toggleLanguage = () => {
    const newLang = language === "en" ? "id" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-6 md:px-10">
        <div
          className="text-blue-500 text-lg md:text-2xl font-bold tracking-wide hover:text-blue-400 cursor-pointer"
          onClick={() => handleNavigate("home")}
        >
          {t("mainTitle")}
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1 md:gap-2 cursor-pointer"
        >
          <span className="w-10 h-0.5 bg-blue-300 md:bg-purple-900 "></span>
          <span className="w-8 h-0.5 bg-blue-300 md:bg-purple-900"></span>
          <span className="w-4 h-0.5 bg-blue-300 md:bg-purple-900"></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 md:top-6 md:right-8 h-full w-full md:w-100 md:h-auto rounded-none md:rounded-lg shadow-xl p-10 md:p-8 z-50"
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-12 text-6xl text-purple-800 hover:text-purple-500 cursor-pointer"
            >
              &times;
            </button>

            <nav className="mt-16 md:mt-15 flex flex-col space-y-8 text-purple-800 font-medium text-[18px]">
              {menuItems.map((item, i) =>
                location.pathname === "/" ? (
                  <motion.div
                    key={item.section}
                    variants={textVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ScrollLink
                      to={item.section}
                      smooth={true}
                      duration={500}
                      offset={0}
                      className="cursor-pointer hover:text-purple-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </ScrollLink>
                  </motion.div>
                ) : (
                  <motion.span
                    key={item.section}
                    variants={textVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="cursor-pointer hover:text-purple-500"
                    onClick={() => handleNavigate(item.section)}
                  >
                    {item.label}
                  </motion.span>
                )
              )}
            </nav>

            <motion.div
              className="mt-6 space-y-4"
              variants={textVariants}
              custom={menuItems.length}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-[12px] text-gray-400 uppercase tracking-wider mb-3">
                {t("sayHello")}
              </p>
              <a
                href="mailto:putriayundagustiara@gmail.com"
                className="block text-purple-800 hover:text-purple-500 text-[15px]"
              >
                putriayundagustiara@gmail.com
              </a>
              <a
                href="https://t.me/putriayundaa"
                className="block text-purple-800 hover:text-purple-500 text-[15px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                t.me/putriayundaa
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col space-y-4 text-sm text-purple-800"
              variants={textVariants}
              custom={menuItems.length + 1}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Social Links */}
              <div className="flex space-x-4 mb-4">
                <div
                  className="flex items-center gap-0.5 cursor-pointer select-none"
                  onClick={toggleLanguage}
                >
                  <Globe size={22} className="text-purple-800" />
                  <span className="text-sm font-semibold text-purple-800">
                    {language.toUpperCase()}
                  </span>
                </div>
                <a
                  href="https://x.com/Ayundaa1489269?t=c7Hj1DocFpk2PTsP8n8cwQ&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  X
                </a>
                <a
                  href="https://github.com/PutriAyunda11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  GH
                </a>
                <a
                  href="https://www.linkedin.com/in/putri-ayunda-gustiara-1aa690331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  LN
                </a>
                <a
                  href="https://www.instagram.com/pppp_yyygstrr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  IG
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
