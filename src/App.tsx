import About from "./components/About";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import { Features } from "./components/Features";
import MFeature from "./components/MFeature";
import SpecialOffers from "./components/SpecialOffers";
import CarBrands from "./components/CarBrands";
import Footer from "./components/Footer";
import UpArrow from "./components/UpArrow";
import { useEffect, useState } from "react";

const App = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [currentLink, setCurrentLink] = useState("Home");

  useEffect(() => {
    const sectionIds = ["Home", "About", "Popular", "Featured"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentLink(id);
            break;
          }
        }
      }

      const homeHeight = document.getElementById("Home")?.offsetHeight || 0;
      setShowArrow(window.scrollY > homeHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScoll = () => {
      const homeHeight = document.getElementById("Home")?.offsetHeight || 0;
      const scrolled = window.scrollY;

      setShowArrow(scrolled > homeHeight);
    };
    window.addEventListener("scroll", handleScoll);

    return () => window.removeEventListener("scroll", handleScoll);
  }, []);

  return (
    <div className="min-h-screen py-8 bg-bodyColor">
      <NavBar currentLink={currentLink} setCurrentLink={setCurrentLink} />
      <HomePage />
      <About />
      <Popular />
      <MFeature />
      <Features />
      <SpecialOffers />
      <CarBrands />
      <Footer />
      {showArrow && <UpArrow setCurrentLink={setCurrentLink} />}
    </div>
  );
};

export default App;
