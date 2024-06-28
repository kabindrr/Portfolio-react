import React from "react";
import profile from "../assets/ProfilePhoto.png";

export const Hero = () => {
  return (
    <div>
      {" "}
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I`m <span>Kabindra Ranabhat</span>
            </div>

            <div className="tag">Full Stack Developer</div>
            <p>I love to Code</p>
            <div>
              <a href="">
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="right flex">
            <img src={profile} alt="profilePhoto" />
          </div>
        </div>
      </section>
    </div>
  );
};
