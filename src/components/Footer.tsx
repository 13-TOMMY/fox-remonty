import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Language from "./parts/Language";
import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode
          ? "dark-container footer-container"
          : "light-container footer-container"
      }
    >
      <div className="left-footer-container">
        <div
          className={
            darkMode
              ? "dark-text s-font text-left-footer"
              : "light-text s-font text-right-footer"
          }
        >
          <Language
            englishText={`CREATED BY:`}
            polishText={`STWORZONY PRZEZ:`}
          />
        </div>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="https://tommy-portfolio.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={
            darkMode
              ? "dark-text s-font link-left-footer"
              : "light-text s-font link-right-footer"
          }
        >
          TOMMY.DEV
        </motion.a>
      </div>
      <div className="right-footer-container">
        <p
          className={
            darkMode
              ? "dark-text m-font text-right-footer"
              : "light-text m-font text-right-footer"
          }
        >
          <FaRegCopyright />
          FOX REMONTY 2023/2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
