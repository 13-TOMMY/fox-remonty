import React, { useContext } from "react";
import "../scss/pages/projects.scss";
import Language from "../components/parts/Language";
import Carousel from "../components/Carousel";
import { ThemeContext } from "../context/ThemeContext";

function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const imgSetOne: string[] = [
    "/imgs/portfolio-imgs-dummy/dummy-one.avif",
    "/imgs/portfolio-imgs-dummy/dummy-two.avif",
    "/imgs/portfolio-imgs-dummy/dummy-three.avif",
  ];
  const imgSetTwo: string[] = [
    "/imgs/portfolio-imgs-dummy/dummy-one.avif",
    "/imgs/portfolio-imgs-dummy/dummy-two.avif",
    "/imgs/portfolio-imgs-dummy/dummy-three.avif",
  ];
  const imgSetThree: string[] = [
    "/imgs/portfolio-imgs-dummy/dummy-one.avif",
    "/imgs/portfolio-imgs-dummy/dummy-two.avif",
    "/imgs/portfolio-imgs-dummy/dummy-three.avif",
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
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
            </h3>
          </div>
          <div className="p-text-project-one">
            <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
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
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
            </h3>
          </div>
          <div className="p-text-project-two">
            <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
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
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
            </h3>
          </div>
          <div className="p-text-project-three">
            <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
              <Language englishText={`ABOUT US`} polishText={`O NAS`} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
