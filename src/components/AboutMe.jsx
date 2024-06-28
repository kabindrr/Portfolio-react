import React from "react";
import aboutMe from "../assets/CasualPhoto.png";
import { Title } from "./Title";

export const AboutMe = () => {
  return (
    <div>
      {" "}
      <section className="about" id="about">
        <Title title="About Me" />

        <div className="container flex about-content">
          <div className="flex-center myImg">
            <img src={aboutMe} alt="Image" width="100%" />
          </div>
          <div className="my-bio container">
            <h2>Kabindra Ranabhat</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              corrupti sunt neque! Laboriosam ex earum harum suscipit
              exercitationem, animi quas adipisci sunt cum dicta officia
              reiciendis doloremque repudiandae itaque maiores similique omnis
              aliquid fugiat deleniti a fuga unde. Quas fugit id molestias
              similique incidunt repudiandae ab facere adipisci temporibus sit!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates nostrum rerum suscipit aliquam alias neque iste
              adipisci, ullam sint molestiae dolor, atque nulla debitis unde, ab
              eveniet dolore! Molestiae, accusamus.
            </p>
            <p>Sydney, Australia</p>
            <div>
              <div className="tag">Interest</div>
              <div className="flex">
                <span>Coding</span>
                <span>Traveling</span>
                <span>Football</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
