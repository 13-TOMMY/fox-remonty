import React from "react";
import "../scss/pages/projects.scss";
import Language from "../components/parts/Language";
import Carousel from "../components/Carousel";

function Projects() {
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
        <div className="text-project-one">
          <div className="h3-text-project-one">
            <Language englishText={`ABOUT US`} polishText={`O NAS`} />
          </div>
          <div className="p-text-project-one">
            <Language englishText={`ABOUT US`} polishText={`O NAS`} />
          </div>
        </div>
        <div className="text-project-two">
          <div className="h3-text-project-two">
            <Language englishText={`ABOUT US`} polishText={`O NAS`} />
          </div>
          <div className="p-text-project-two">
            <Language englishText={`ABOUT US`} polishText={`O NAS`} />
          </div>
        </div>
        <div className="carousel-project-two">
          <Carousel images={imgSetTwo} />
        </div>
        <div className="carousel-project-three">
          <Carousel images={imgSetThree} />
        </div>
        <div className="text-project-three">
          <div className="h3-text-project-three">
            <Language englishText={`ABOUT US`} polishText={`O NAS`} />
          </div>
          <div className="p-text-project-three">
            <Language englishText={`ABOUT US`} polishText={`O NAS`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
