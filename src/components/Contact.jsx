import React from "react";
import { Title } from "./Title";

export const Contact = () => {
  return (
    <div>
      {" "}
      <section className="contact container" id="contact">
        <Title title="Contact" />

        <div className="flex social">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <h3>OR</h3>

        <div className="flex-center">
          <a href="" className="email-section flex-center">
            <span>youremail@gmail.com</span>
            <div className="email-icon flex-center">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
