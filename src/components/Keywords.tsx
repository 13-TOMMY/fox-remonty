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
              "Reliable| Fast | Efficient | Professional | Experienced | High Quality | Affordable | Trustworthy."
            }
            polishText={
              "Wiarygodny| Szybko | Efektywny | Profesjonalny | Doświadczony | Wysoka Jakość | Przystępny Cenowo | Godny zaufania"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Keywords;
