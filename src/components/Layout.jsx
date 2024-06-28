import React from "react";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* <!-- dark mode toggler --> */}

      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}

        <NavBar />
        <Hero />
        {/* navbar */}
        <main className="main" style={{ minHeight: "50vh" }}>
          <Outlet />
        </main>

        {/* footer */}
        {/* <!-- footer --> */}
        <Footer />
      </div>
    </div>
  );
};
