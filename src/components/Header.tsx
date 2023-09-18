import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSolidMoon, BiSun } from "react-icons/bi";
import Language from "./parts/Language";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LangContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDarkChange = (isChecked: boolean): void => {
    setDarkMode(isChecked);
  };

  const isHomepage = location.pathname === "/";
  const isProjects = location.pathname === "/projects";
  const isContact = location.pathname === "/contact";

  return (
    <div
      className={
        darkMode
          ? "dark-container header-container"
          : "light-container header-container"
      }
    >
      <div className="left-header-container">
        <img
          src="/logo/fox-remonty-logo-nobg.png"
          alt="Fox Remonty logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="right-header-container">
        <div className="right-header-links">
          <Link to="/">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${
                      isHomepage ? "selected-dark m-font" : "dark-text m-font"
                    }`
                  : `icon ${
                      isHomepage ? "selected-light m-font" : "light-text m-font"
                    }`
              }
            >
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
            </motion.div>
          </Link>
          <Link to="/projects">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${
                      isProjects ? "selected-dark m-font" : "dark-text m-font"
                    }`
                  : `icon ${
                      isProjects ? "selected-light m-font" : "light-text m-font"
                    }`
              }
            >
              <Language englishText={`SERVICES`} polishText={`USŁUGI`} />
            </motion.div>
          </Link>
          <Link to="/contact">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${
                      isContact ? "selected-dark m-font" : "dark-text m-font"
                    }`
                  : `icon ${
                      isContact ? "selected-light m-font" : "light-text m-font"
                    }`
              }
            >
              <Language englishText={`CONTACT`} polishText={`KONTAKT`} />
            </motion.div>
          </Link>
        </div>
        <div className="right-header-btns">
          <motion.button
            onClick={() => handleDarkChange(!darkMode)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={
              darkMode
                ? `dark-btn mode-btn  m-font`
                : `light-btn mode-btn  m-font`
            }
          >
            {darkMode ? <BiSolidMoon /> : <BiSun />}
          </motion.button>

          <motion.button
            onClick={toggleLanguage}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={
              darkMode
                ? `dark-btn mode-btn  m-font`
                : `light-btn mode-btn  m-font`
            }
          >
            {language === "PL" ? "ENG" : "PL"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Header;
