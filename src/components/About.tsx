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
          <p className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <Language
              englishText={`Welcome to Fox Remonty, Where Sławomir's Expertise Transforms Your Space!`}
              polishText={`Witaj w Fox Remonty, Gdzie Ekspertyza Sławomira Przemienia Twój Przestrzeń!`}
            />
          </p>
          <p className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <Language
              englishText={`With a legacy of over two decades in the construction industry, Sławomir brings his wealth of experience from London, England, to Poland. At Fox Remonty, we specialise in plastering, painting, and general renovations, ensuring that your home or business receives top-notch craftsmanship with every project.
`}
              polishText={`Z ponad dwudziestoletnim doświadczeniem w branży budowlanej Sławomir przynosi swoje bogate doświadczenie z Londynu, Anglia, do Polski. W Fox Remonty specjalizujemy się w tynkowaniu, malowaniu oraz ogólnych remontach, zapewniając, że każdy projekt w Twoim domu lub firmie otrzymuje najwyższą jakość rzemiosła.
              `}
            />
          </p>
          <p className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <Language
              englishText={`Sławomir's commitment to quality and dedication to his craft have earned him a reputation for excellence. He understands that your space is a reflection of your lifestyle, and every project is a unique opportunity to create something truly exceptional. Whether you desire a fresh coat of paint, flawless plasterwork, or a complete renovation, Sławomir and his team are here to make your vision a reality.
`}
              polishText={`Zobowiązanie do jakości i oddanie swojemu fachu przyniosły Sławomirowi reputację doskonałości. Rozumie, że Twoja przestrzeń odzwierciedla Twój styl życia, a każdy projekt to wyjątkowa okazja do stworzenia czegoś naprawdę wyjątkowego. Czy potrzebujesz świeżej warstwy farby, bezbłędnej pracy tynkarza czy też kompleksowego remontu, Sławomir i jego zespół są tutaj, aby zrealizować Twoją wizję.
              `}
            />
          </p>
          <p className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <Language
              englishText={`Discover the difference that comes with choosing Fox Remonty for your construction needs. Contact us today and let Sławomir's passion and expertise transform your space into something extraordinary. Your dream space is just a project away with Fox Remonty.`}
              polishText={`Odkryj różnicę, jaką przynosi wybór Fox Remonty na potrzeby budowlane. Skontaktuj się z nami jeszcze dziś i pozwól pasji i ekspertyzie Sławomira przekształcić Twoją przestrzeń w coś nadzwyczajnego. Twoja wymarzona przestrzeń jest w zasięgu ręki dzięki Fox Remonty.`}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
