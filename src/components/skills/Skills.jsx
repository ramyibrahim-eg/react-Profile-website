import React from "react";
import Title from "../layouts/Title";
import Motion from "./Motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black flex flex-col justify-center"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="MY SKILLS" />
      </div>
      <Motion />
    </section>
  );
};

export default Skills;
