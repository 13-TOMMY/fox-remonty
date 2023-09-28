import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Banner() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className="banner-container">
      <img src="/imgs/RE.svg" alt="fox-remonty-logo" className="banner-img" />
      <h3 className={darkMode ? "banner-text banner-text-dark" : "banner-text banner-text-light"}>FOX REMONTY</h3>
    </div>
  );
}

export default Banner;
