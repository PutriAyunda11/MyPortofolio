import profileImage from "../assets/photo1.jpg";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { scroller } from "react-scroll";

const _motionDiv = motion.div;

export default function Home() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const { t } = useTranslation();

  const textInView = useInView(textRef, { once: true, amount: 0.3 });
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });

  const navigate = useNavigate();
  const location = useLocation();
  const [animatingButton, setAnimatingButton] = useState(null);

  const handleClick = (to) => {
    if (animatingButton) return;
    setAnimatingButton(to);

    setTimeout(() => {
      navigate(to);
      setAnimatingButton(null);
    }, 700);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:items-start md:p-20">
      {/* Gambar */}
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={imgInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative mx-auto md:mx-3 w-[200px] md:w-[280px] lg:w-[350px] lg:left-30 order-1 md:order-2"
      >
        <div className="absolute md:top-13 lg:top-3 top-6 left-6 border-2 border-white rounded-lg z-0 w-full h-full" />
        <img
          src={profileImage}
          alt="Profile"
          className="relative z-10 rounded-lg md:top-8 shadow-xl w-full h-auto"
        />
      </motion.div>

      {/* Teks */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-white text-center md:text-left flex flex-col justify-center pt-10 md:pt-0 lg:pt-15 lg:pl-40 order-2 md:order-1"
      >
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-lime-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-none">
          {t("homeSection.title")}
        </h1>
        <p className="mt-4 text-base md:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] md:drop-shadow-none">
          {t("homeSection.description")}
        </p>

        {/* Tombol */}
        <div className="mt-6 flex gap-6 justify-center md:justify-start">
          {/* About Me */}
          <button
            onClick={() =>
              scroller.scrollTo("aboutme", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: 0, // bisa diatur kalau ada header fixed
              })
            }
            className="px-5 py-2 md:px-8 md:py-2 lg:px-13 lg:py-3 rounded-[5px] bg-lime-400 text-black font-semibold hover:bg-lime-500 transition"
          >
            {t("homeSection.me")}
          </button>{" "}
          {/* Chat */}
          <button
            onClick={() => handleClick("/message")}
            className={`relative overflow-hidden inline-flex items-center gap-3 font-semibold px-6 py-2 md:px-8 md:py-2 lg:px-13 lg:py-3 rounded-[5px] border-2 border-lime-500 transition-all duration-700
              ${
                location.pathname === "/message" ||
                animatingButton === "/message"
                  ? "text-black"
                  : "text-lime-200"
              }
            `}
          >
            <span className="relative z-10">{t("homeSection.chat")}</span>
            {/* <ArrowRight className="relative z-10 w-[18px] h-[18px]" /> */}
            <span
              className={`absolute inset-0 bg-lime-700 transition-all duration-700 z-0
                ${
                  location.pathname === "/message" ||
                  animatingButton === "/message"
                    ? "w-full"
                    : "w-0"
                }
              `}
            ></span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
