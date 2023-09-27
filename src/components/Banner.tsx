import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Banner() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className="banner-container">
      <img src="/imgs/RE.svg" alt="fox-remonty-logo" className="banner-img"/>
      <img
        src={darkMode ? "/imgs/fox-remonty-banner.png" : "/imgs/fox-remonty-banner-light.png"}
        alt="fox-remonty-logo"
        className="banner-text"
      />
    </div>
  );
}

export default Banner;
