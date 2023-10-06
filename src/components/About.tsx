import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Language from "./parts/Language";

function About() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="about-container">
      <div className="grid-about-container">
        <div className="img-about-container">
          <img src="/imgs/dad/IMG_7251.jpeg" alt="" />
        </div>
        <div
          className={
            darkMode
              ? "dark-container text-about-container"
              : "light-container text-about-container"
          }
        >
          <h3 className={darkMode ? "dark-text l-font" : "light-text l-font"}>
            <Language englishText={`About Us`} polishText={`O Nas`} />
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
            <Language
              englishText={`Welcome to Fox Remonty, Where my expertise will transform your Space!`}
              polishText={`Witaj w Fox Remonty, gdzie moja ekspertyza przemieni Twoją Przestrzeń!`}
            />
          </p>
          <p className={darkMode ? "dark-text" : "light-text"}>
            <Language
              englishText={`With more than 20 years of experience in the construction industry, he specializes in plastering, painting and general renovations, ensuring that every project in your home or business receives the highest quality craftsmanship.`}
              polishText={`Z ponad dwudziestoletnim doświadczeniem w branży budowlanej specjalizuje się w gładzi, malowaniu oraz ogólnych remontach, zapewniając, że każdy projekt w Twoim domu lub firmie otrzymuje najwyższą jakość rzemiosła.`}
            />
          </p>
          <p className={darkMode ? "dark-text" : "light-text"}>
            <Language
              englishText={`A commitment to quality and dedication to my craft have earned me a reputation for excellence. I understand that your space reflects your lifestyle, and every project is a unique opportunity to create something truly special. Whether you need a fresh coat of paint, a flawless plaster job or a comprehensive renovation I am here to make your vision a reality.`}
              polishText={`Zobowiązanie do jakości i oddanie swojemu fachu przyniosły mi reputację i doskonałości. Rozumiem że Twoja przestrzeń odzwierciedla Twój styl życia, a każdy projekt to wyjątkowa okazja do stworzenia czegoś naprawdę wyjątkowego. Czy potrzebujesz świeżej warstwy farby, bezbłędnej pracy gładzi czy też kompleksowego remontu jestem tutaj, aby zrealizować Twoją wizję.`}
            />
          </p>
          <p className={darkMode ? "dark-text" : "light-text"}>
            <Language
              englishText={`Discover the difference that choosing Fox Renovations for your construction needs brings. Contact me today and let passion and expertise transform your space into something extraordinary. Your dream space is within reach. `}
              polishText={`Odkryj różnicę, jaką przynosi wybór Fox Remonty na potrzeby budowlane. Skontaktuj się z mną jeszcze dziś i pozwól pasji i ekspertyzie przekształcić Twoją przestrzeń w coś nadzwyczajnego. Twoja wymarzona przestrzeń jest w zasięgu ręki.`}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
