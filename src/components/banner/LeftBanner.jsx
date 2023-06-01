import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "HTML5, CSS, Sass, BOOTSTRAP",
      "JavaScript, JQUERY",
      "React, Redux",
      "Git, github",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome to my personal website</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ramy</span>
        </h1>

        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Front End Developer specialized in developing user interfaces using
          HTML5, CSS, Sass, JS, JQUERY, BOOTSTRAP, React, Redux.
          <br />
          I have extensive experience in designing and developing attractive and
          responsive websites for all devices.
          <br />
          Also, I use React to develop modern and cutting edge web applications.
        </p>
      </div>

      <Media />
    </div>
  );
};

export default LeftBanner;
