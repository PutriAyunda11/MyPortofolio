import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

export default function KontakForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isAnimating, setIsAnimating] = useState(false); // animasi klik

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAnimating) return; // cegah double click

    // Validasi dulu
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields before sending!");
      return;
    }

    // Jalankan animasi dulu
    setIsAnimating(true);

    // Tunggu durasi animasi (1s di mobile / 0.5s di laptop)
    const duration = window.innerWidth < 1024 ? 1000 : 500;

    setTimeout(() => {
      // baru kirim setelah animasi selesai
      emailjs
        .sendForm(
          "service_4thw9wf",
          "template_hkkmei9",
          form.current,
          "zMbEIiv-EgL7m12FO"
        )
        .then(
          (result) => {
            console.log("Message sent: ", result.text);
            setSent(true);
            setError("");
            form.current.reset();
          },
          (err) => {
            console.error("Failed to send: ", err.text);
            setError("Failed to send your message. Please try again.");
          }
        )
        .finally(() => {
          setIsAnimating(false); // reset animasi setelah submit selesai
        });
    }, duration);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-4 mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Send Your Message!
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-10 text-lg max-w-xl pb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        Got questions, collaboration ideas, or just want to say hi? Please fill
        out the form below.
      </motion.p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-2"
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Message</label>
          <textarea
            rows="4"
            name="message"
            placeholder="Type your message here..."
            className="border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-2"
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10">
          <button
            type="submit"
            disabled={isAnimating}
            className="relative overflow-hidden inline-flex items-center gap-3 font-semibold px-10 py-3 rounded-sm border-2 border-[#4b22d1] text-[#4b22d1]"
          >
            <span
              className={`relative z-10 transition-colors duration-1000 lg:duration-500 ease-in-out ${
                isAnimating ? "text-white" : ""
              }`}
            >
              {isAnimating ? "SENDING..." : "SEND"}
            </span>
            <ArrowRight
              className={`relative z-10 w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] transition-colors duration-1000 lg:duration-500 ease-in-out ${
                isAnimating ? "text-white" : ""
              }`}
            />
            <span
              className={`absolute inset-0 bg-[#4b22d1] transition-all duration-1000 lg:duration-500 ease-in-out z-0 ${
                isAnimating ? "w-full" : "w-0"
              }`}
            ></span>
          </button>
        </div>
      </form>

      {/* Notifikasi sukses */}
      {sent && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-4 rounded-lg shadow-xl z-50 w-[300px]">
          <div className="flex justify-between items-center">
            <p className="text-lg">Your message has been sent successfully!</p>
            <button
              onClick={() => setSent(false)}
              className="ml-4 text-white hover:text-gray-200 font-bold text-lg leading-none"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Notifikasi error */}
      {error && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-4 rounded-lg shadow-xl z-50 w-[300px]">
          <div className="flex justify-between items-center">
            <p className="text-lg">{error}</p>
            <button
              onClick={() => setError("")}
              className="ml-4 text-white hover:text-gray-200 font-bold text-lg leading-none"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
