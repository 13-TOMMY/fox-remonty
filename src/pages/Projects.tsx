import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Language from "../components/parts/Language";
import Carousel from "../components/Carousel";

function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const imgSetOne: string[] = [
    "/imgs/Plastering/AEE178EF-84A5-49F6-BFE0-8743038BD88A.jpeg",
    "/imgs/Plastering/IMG_0052.jpeg",
    "/imgs/Plastering/IMG_4224.jpeg",
    // "/imgs/Plastering/IMG_7190.jpeg",
    // "/imgs/Plastering/IMG_4224.jpeg",
    // "/imgs/Plastering/IMG_7195.jpeg",
    // "/imgs/Plastering/IMG_7196.jpeg",
    // "/imgs/Plastering/IMG_7200.jpeg",
  ];
  const imgSetTwo: string[] = [
    "/imgs/Painting/IMG_0419.jpeg",
    "/imgs/Painting/IMG_1256.jpeg",
    "/imgs/Painting/IMG_1259.jpeg",
  ];
  const imgSetThree: string[] = [
    "/imgs/Renovations/IMG_7338.jpeg",
    "/imgs/Renovations/IMG_7354.jpeg",
    "/imgs/Renovations/IMG_7360.jpeg",
  ];
  return (
    <div className="project-container">
      <div className="project-container-grid">
        <div className="carousel-project-one">
          <Carousel images={imgSetOne} />
        </div>
        <div
          className={
            darkMode
              ? "dark-container text-project-one"
              : "light-container text-project-one"
          }
        >
          <div className="h3-text-project-one">
            <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
              <Language
                englishText={`PLASTERING`}
                polishText={`Gładź (Angielska gładź, Plaster)`}
              />
            </h3>
          </div>
          <div className="p-text-project-one">
            <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
              <Language
                englishText={`Plastering is the foundation of a strong and visually appealing finish in construction and renovation. Our experienced team excels in this art, using high-quality materials and modern techniques to ensure durability and beauty. Whether it's repairing walls, preparing surfaces for paint, or enhancing interiors, we provide precision and professionalism. With a focus on both new construction and renovations, we transform walls and ceilings, creating lasting and elegant spaces that reflect your unique style and needs`}
                polishText={`Gładź (Plaster) to fundament trwałego i estetycznego wykończenia w budownictwie i renowacji. Nasz doświadczony zespół doskonale się w tym sprawdza, używając wysokiej jakości materiałów i nowoczesnych technik, zapewniając trwałość i piękno. Czy to naprawa ścian, przygotowanie powierzchni do malowania czy też poprawa wnętrz, zapewniamy precyzję i profesjonalizm. Skupiając się zarówno na nowych budowlach, jak i renowacjach, przekształcamy ściany i sufity, tworząc trwałe i eleganckie przestrzenie, które odzwierciedlają Twój wyjątkowy styl i potrzeby.
                `}
              />
            </p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "dark-container text-project-two"
              : "light-container text-project-two"
          }
        >
          <div className="h3-text-project-two">
            <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
              <Language englishText={`PAINTING`} polishText={`MALOWANIE`} />
            </h3>
          </div>
          <div className="p-text-project-two">
            <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
              <Language
                englishText={`Painting is the art of adding colour and life to your spaces. Whether it's refreshing the look of a room, creating stunning decorative effects or restoring beauty to your walls, we deliver exceptional results. I take pride in transforming your spaces with precision and imagination.`}
                polishText={`Malowanie to sztuka dodawania koloru i życia Twoim przestrzeniom. Czy to odświeżanie wyglądu pomieszczeń, tworzenie zachwycających efektów dekoracyjnych czy też przywracanie piękna Twoim ścianom, dostarczamy wyjątkowych rezultatów. Jestem dumny z przekształcania Twoich przestrzeni z precyzją i fantazją.`}
              />
            </p>
          </div>
        </div>
        <div className="carousel-project-two">
          <Carousel images={imgSetTwo} />
        </div>
        <div className="carousel-project-three">
          <Carousel images={imgSetThree} />
        </div>
        <div
          className={
            darkMode
              ? "dark-container text-project-three"
              : "light-container text-project-three"
          }
        >
          <div className="h3-text-project-three">
            <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
              <Language englishText={`RENOVATIONS`} polishText={`REMONTY`} />
            </h3>
          </div>
          <div className="p-text-project-three">
            <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
              <Language
                englishText={`Renovations bring your spaces to life and my expertise is dedicated to bringing your surroundings to life. From complex renovation projects to careful restorations, I bring a wealth of experience and craftsmanship to every job. Whether it's transforming an outdated interior, enhancing functionality or preserving a property's historic charm, I take pride in delivering exceptional renovation solutions that meet your unique needs and preferences.`}
                polishText={`Remonty ożywiają Twoje przestrzenie, a moje doświadczenie  jest oddane ożywianiu Twojego otoczenia. Od kompleksowych projektów remontowych po staranne renowacje, przynoszę ogromne doświadczenie i rzemieślniczą precyzję do każdej pracy. Czy to transformacja przestarzałego wnętrza, zwiększanie funkcjonalności czy zachowywanie historycznego uroku nieruchomości, jestem  dumny z dostarczania wyjątkowych rozwiązań remontowych, które spełniają Twoje unikalne potrzeby i preferencje.`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
