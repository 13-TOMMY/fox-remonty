import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineDownload } from "react-icons/ai";
import { GrFormView } from 'react-icons/gr'
import { motion } from "framer-motion";
import Language from "./parts/Language";
import businessCard from "../assets/business-card/business-card.png";
import { useNavigate } from "react-router-dom";

function HomepageBtns() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const scrollToTopAndNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/projects');
  };

  return (
    <div className="homepage-btns-container">
      <div className="grid-homepage-btns-container">
        <div className="text-homepage-btns-container">
          <div
            className={
              darkMode
                ? "dark-container business-card-container"
                : "light-container business-card-container"
            }
          >
            <h3 className={darkMode ? "dark-text l-font" : "light-text l-font"}>
              <Language
                englishText={`Download a Business Card`}
                polishText={`Pobierz Wizytówkę`}
              />
            </h3>
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={
                darkMode
                  ? `dark-btn download-btn  l-font`
                  : `light-btn download-btn  l-font`
              }
            >
              <a href={businessCard} download>
                <AiOutlineDownload />
              </a>
            </motion.button>
          </div>
          <div
            className={
              darkMode
                ? "dark-container find-out-container"
                : "light-container find-out-container"
            }
          >
            <h3 className={darkMode ? "dark-text l-font" : "light-text l-font"}>
              <Language
                englishText={`Find Out More`}
                polishText={`Dowiedz Się Więcej`}
              />
            </h3>
            <motion.button
              onClick={scrollToTopAndNavigate}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={
                darkMode
                  ? `dark-btn view-btn l-font`
                  : `light-btn view-btn l-font`
              }
            >
              <GrFormView/>
            </motion.button>
          </div>
        </div>
        <div className="img-homepage-btns-container">
          <img src="/logo/fox-remonty-logo-nobg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomepageBtns;
