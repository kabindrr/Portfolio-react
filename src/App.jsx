import "./App.css";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <!-- dark mode toggler --> */}

      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}

        <NavBar />

        {/* <!-- herosection --> */}
        <Hero />
        {/* <!-- banner section --> */}

        <Banner />

        {/* <!-- skills section --> */}
        <Skills />

        {/* <!-- projects --> */}
        <Projects />

        {/* <!-- about me --> */}
        <AboutMe />

        {/* <!-- contact --> */}
        <Contact />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
