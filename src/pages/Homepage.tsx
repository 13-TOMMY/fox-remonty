import "../scss/pages/homepage.scss";
import Banner from "../components/Banner";
import About from "../components/About";
import BusinessCard from "../components/BusinessCard";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Homepage() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="homepage-container">
      <div className="homepage-banner-container">
        <Banner />
      </div>
      <div className="homepage-about-container">
        <About />
      </div>
      <div className="homepage-text-container l-font"></div>
      <div className="homepage-business-card-container">
        <BusinessCard />
      </div>
    </div>
  );
}

export default Homepage;
