import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  // Refs untuk box kiri & kanan
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: false, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: false, amount: 0.3 });

  return (
    <section>
      <div className="w-full max-w-7xl min-h-[600px] grid grid-cols-1 md:grid-cols-2 border-lg border-[#d8ccf2] divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-[#b197fc] bg-[#f3f0ff]/40 backdrop-blur-sm">
        {/* Left Card */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, backgroundColor: "rgba(255,255,255,0)" }}
          animate={
            leftInView
              ? { opacity: 1, backgroundColor: "rgba(255,255,255,0.4)" }
              : { opacity: 0, backgroundColor: "rgba(255,255,255,0)" }
          }
          transition={{ duration: 0.8 }}
          className="p-13 sm:p-19 lg:p-35 flex flex-col justify-between text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold sm:font-extrabold text-[#4b22d1] leading-tight mb-4"
          >
            I build
            <br />& design my career
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-gray-700 text-lg"
          >
            View my CV/RESUME to learn more about my experience and skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="mt-10"
          >
            <Link
              to="/resumee"
              className="relative overflow-hidden inline-flex items-center gap-3 font-semibold px-6 py-3 rounded-sm border-2 border-[#4b22d1] text-[#4b22d1] group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                SEE RESUME
              </span>
              <ArrowRight className="relative z-10 transition-colors duration-300 group-hover:text-white w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]" />
              <span className="absolute inset-0 bg-[#4b22d1] w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, backgroundColor: "rgba(255,255,255,0)" }}
          animate={
            rightInView
              ? { opacity: 1, backgroundColor: "rgba(255,255,255,0.4)" }
              : { opacity: 0, backgroundColor: "rgba(255,255,255,0)" }
          }
          transition={{ duration: 0.8 }}
          className="p-13 sm:p-19 lg:p-35 flex flex-col justify-between text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold sm:font-extrabold text-[#4b22d1] leading-tight mb-4"
          >
            Want to chat?
            <br /> Just send a message
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-gray-700 text-lg"
          >
            I’m open to discussions, collaborations, or just saying hello.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="mt-10"
          >
            <Link
              to="/message"
              className="relative overflow-hidden inline-flex items-center gap-3 font-semibold px-6 py-3 rounded-sm border-2 border-[#4b22d1] text-[#4b22d1] group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                SEND MESSAGE
              </span>
              <ArrowRight className="relative z-10 transition-colors duration-300 group-hover:text-white w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]" />
              <span className="absolute left-0 top-0 h-full w-0 bg-[#4b22d1] group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
