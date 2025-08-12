import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) {
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 0,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 0);
    }
  }, [location]);

  return null;
}

export default ScrollToSection;
