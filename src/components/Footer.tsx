import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Language from "./parts/Language";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const { darkMode }  : boolean = useContext(ThemeContext);
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
            darkMode ? "dark-text m-font text-left-footer" : "light-text m-font text-right-footer"
          }
        >
          <Language englishText={`Thank you`} polishText={`Dziękuję`} />
        </div>
      </div>
      <div className="right-footer-container">
        <p
          className={
            darkMode ? "dark-text m-font text-right-footer" : "light-text m-font text-right-footer"
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
