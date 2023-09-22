import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Language from "./parts/Language";

function Keywords() {
  const { darkMode } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 0.5, 1], ["-50%", "0%", "50%"]);
  return (
    <div className={"scroll-container"}>
      <motion.h3
        className={darkMode ? "dark-text" : "light-text"}
        style={{ x }}
        initial={{ x: "-50%" }}
      >
        <Language
          englishText={
            "Reliable Quick Affordable Fast Professional Experience Quality Affordable Trusted"
          }
          polishText={
            "Wiarygodny Szybko Tanio Efektywny Profesjonalny Doświadczony Wysoka jakość Przystępny cenowo Godny zaufania"
          }
        />
      </motion.h3>
    </div>
  );
}

export default Keywords;
