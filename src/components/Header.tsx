import { ReactNode, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiHomeAlt2 } from "react-icons/bi";

function Header() {
  const { darkMode, setDarkMode }: boolean = useContext(ThemeContext);
  const { language, toggleLanguage }: boolean = useContext(LangContext);
  const location = useLocation();
  const handleDarkChange = (isChecked): any => {
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
        <img src="/logo/fox-remonty-logo-nobg.png" alt="Fox Remonty logo" />
      </div>
      <div className="right-header-container">
        <Link to="/">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className={
              darkMode
                ? `icon ${isHomepage ? "selected-dark" : "dark-text"}`
                : `icon ${isHomepage ? "selected-light" : "light-text"}`
            }
          >
            <BiHomeAlt2 />
          </motion.div>
        </Link>
        <Link to="/projects">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className={
              darkMode
                ? `icon ${isProjects ? "selected-dark" : "dark-text"}`
                : `icon ${isProjects ? "selected-light" : "light-text"}`
            }
          >
            <BiHomeAlt2 />
          </motion.div>
        </Link>
        <Link to="/contact">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className={
              darkMode
                ? `icon ${isContact ? "selected-dark" : "dark-text"}`
                : `icon ${isContact ? "selected-light" : "light-text"}`
            }
          >
            <BiHomeAlt2 />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
