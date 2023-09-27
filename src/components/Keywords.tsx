import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Language from "./parts/Language";

function Keywords() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div
          className={
            darkMode
              ? "dark-marquee marquee-content scroll"
              : "light-marquee marquee-content scroll"
          }
        >
          <Language
            englishText={
              "Reliable | Quick | Affordable | Fast | Professional | Experience | Quality | Affordable | Trusted"
            }
            polishText={
              "Wiarygodny | Szybko | Tanio | Efektywny | Profesjonalny | Doświadczony | Wysoka jakość | Przystępny cenowo | Godny zaufania"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Keywords;
