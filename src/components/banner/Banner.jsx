import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import Projects from "./../projects/Projects";
import Skills from "./../skills/Skills";
import Footer from "./../footer/Footer";

const Banner = () => {
  return (
    <>
      <section
        id="home"
        className="w-full pt-40 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      >
        <LeftBanner />
        <RightBanner />
      </section>

      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default Banner;
