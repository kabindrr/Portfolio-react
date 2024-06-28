import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const handleOnScrollY = () => {
    setScrollYPosition(window.scrollY);
  };

  useEffect(() => {
    //end of the render, run following code
    window.addEventListener("scroll", handleOnScrollY);
    //clean up the events
    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  }, []);
  return (
    <div>
      {" "}
      <footer className="flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Youtube
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy Right All reserved 2024 || Made by Kabindra 🚀🚀
        </div>
      </footer>
      {scrollYPosition > 800 && (
        <a href="#NavBar" className="flex goUp">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      )}
    </div>
  );
};
