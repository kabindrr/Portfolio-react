import "./App.css";

import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="banner" element={<Banner />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
