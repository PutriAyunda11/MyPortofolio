import profileImage from "../assets/photo1.jpg";
import  { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function Home() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const textInView = useInView(textRef, { once: false, amount: 0.3 });
  const imgInView = useInView(imgRef, { once: false, amount: 0.3 });

  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:items-start md:p-20">
  {/* Gambar */}
  <motion.div
    ref={imgRef}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={imgInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.6 }}
    className="relative mx-auto md:mx-3 w-[200px] md:w-[280px] lg:w-[350px] lg:left-30 order-1 md:order-2"
  >
    <div className="absolute top-6 left-6 border-2 border-white rounded-lg z-0 w-full h-full" />
    <img
      src={profileImage}
      alt="Profile"
      className="relative z-10 rounded-lg shadow-xl w-full h-auto"
    />
  </motion.div>

{/* Teks */}
<motion.div
  ref={textRef}
  initial={{ opacity: 0, y: 50 }}
  animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
  className="text-white text-center md:text-left flex flex-col justify-center pt-10 md:pt-0 lg:pt-15 order-2 md:order-1"
>
  <h1 className="text-xl md:text-4xl lg:text-4xl font-extrabold text-lime-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-none">
    From Concept to Code.
  </h1>
  <p className="mt-4 text-base md:text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] md:drop-shadow-none">
    I enjoy turning ideas into reality by engaging in every layer of a project — from building solid logic, 
    designing intuitive interfaces, to managing data in an organized manner. I believe a great application is 
    a blend of powerful functionality and seamless user experience.
  </p>
</motion.div>
</div>
  );
}
