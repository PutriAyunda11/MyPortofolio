import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import ScrollToSection from "./components/ScrollToSection";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Header from "./components/Header";
import Tech from "./components/Tech";
import About from "./components/About"; 
import Footer from "./components/Footer";
import Message from "./components/Message";
import Resume from "./components/Resume";

function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            if (location.pathname !== `/${sectionName === "home" ? "" : sectionName}`) {
              navigate(sectionName === "home" ? "/" : `/${sectionName}`, { replace: true });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigate, location.pathname]);

  return (
    <>
      <ScrollToSection />
      <Header />
      <Element
        name="home"
        data-section="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b md:bg-gradient-to-r from-[#2F2FA2] to-[#A1FFCE] px-4 py-10"
      >
        <Home />
      </Element>
      <Element
        name="toolbox"
        data-section="toolbox"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b md:bg-gradient-to-r from-[#A1FFCE] to-[#2F2FA2] px-4 py-10"
      >
        <Tech />
      </Element>
      <Element
        name="resume"
        data-section="resume"
        className="min-h-screen bg-gradient-to-b md:bg-gradient-to-r from-[#2F2FA2] to-[#A1FFCE] flex items-center justify-center px-0 sm:px-6 md:px-5 py-6"
      >
        <About />
      </Element>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/toolbox" element={<MainPage />} />
        <Route path="/resume" element={<MainPage />} />
        <Route
          path="/message"
          element={
            <>
              <ScrollToTop />
              <Header />
              <Message />
              <Footer />
            </>
          }
        />
        <Route
          path="/resumee"
          element={
            <>
              <ScrollToTop />
              <Header />
              <Resume />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
