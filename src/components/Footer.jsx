import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";

const _motionDiv = motion.div;

export default function Footer() {
  const { t } = useTranslation();
  const [isLaptop, setIsLaptop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerRef = useRef(null);
  const contentRef = useRef(null);

  const footerInView = useInView(footerRef, { once: false, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.3 });

  const handleNavigate = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      navigate(`/?section=${section}`);
    }
  };

  const menuItems = isLaptop
    ? [
        { label: t("footer.menu.home"), section: "home" },
        { label: t("footer.menu.toolboxProject"), section: "toolbox" },
        { label: t("footer.menu.resume"), section: "resume" },
      ]
    : [
        { label: t("footer.menu.home"), section: "home" },
        { label: t("footer.menu.toolbox"), section: "toolbox" },
        { label: t("footer.menu.projects"), section: "projects" },
        { label: t("footer.menu.resume"), section: "resume" },
      ];

  return (
    <footer className="bg-[#2F2FA2] text-[#C0E57C] px-6 sm:px-10 md:px-16 py-16">
      <motion.div
        ref={footerRef}
        initial={{ y: 50, opacity: 0 }}
        animate={footerInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, color: "#ffffff" }}
          animate={
            contentInView
              ? { opacity: 1, color: "#C0E57C" }
              : { opacity: 0, color: "#ffffff" }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
            {/* Left */}
            <div>
              <div className="mb-6">
                <h4 className="text-sm tracking-widest mb-2">
                  {t("footer.sayHello")}
                </h4>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="text-lg font-medium hover:text-white"
                >
                  {t("footer.email")}
                </a>
                <br />
                <a
                  href="https://t.me/putriayundaa"
                  className="text-lg font-medium hover:text-white"
                >
                  t.me/putriayundaa
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 sm:items-end">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleNavigate(item.section)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contentInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * idx,
                  }}
                  className="group relative inline-flex w-fit text-lg font-medium transition-colors duration-300 hover:text-[#f4ffd1]"
                >
                  <span className="relative z-10 px-1">{item.label}</span>
                  <span className="absolute inset-0 bg-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#C0E57C]/50 my-6"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm">&copy; {t("footer.portfolio")}</p>
            <div className="flex gap-6 text-15px font-medium">
              <a href="https://x.com/Ayundaa1489269?t=c7Hj1DocFpk2PTsP8n8cwQ&s=08" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="https://github.com/PutriAyunda11" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                GH
              </a>
              <a href="https://www.linkedin.com/in/putri-ayunda-gustiara-1aa690331" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                LN
              </a>
              <a href="https://www.instagram.com/pppp_yyygstrr/" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                IG
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
