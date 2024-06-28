import React from "react";
import project1 from "../assets/Projectimg1.png";
import project2 from "../assets/Projectimg2.png";
import project3 from "../assets/ProjectImg3.png";
import project4 from "../assets/Projectimg4.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const projects = [
    {
      image: project1,
      github: "https://github.com",
      url: "",
      title: "GlassMorphism Project",
      description: "Techstack: HTML, Css, JavaScript, React",
    },
    {
      image: project2,
      github: "https://github.com",
      url: "",
      title: "Parallex-Project",
      description: "Techstack: HTML, Css, JavaScript, React",
    },
    {
      image: project3,
      github: "https://github.com",
      url: "",
      title: "My-Portfolio",
      description: "Techstack: HTML, Css, JavaScript, React",
    },
    {
      image: project4,
      github: "https://github.com",
      url: "",
      title: "React-Movie-Collection",
      description: "Techstack: HTML, Css, JavaScript, React",
    },
  ];

  return (
    <div>
      {" "}
      <section className="projects container" id="projects">
        <Title title="My Projects" />

        <div className="grid project-container">
          {projects.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};
