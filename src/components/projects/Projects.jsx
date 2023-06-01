import React, { useEffect } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
} from "../../images/img";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="React Movies API Tmdb"
          des="Codes used - 
          HTML5, CSS, JS, React.js, react icons, axios , (movie-trailer => react-player)"
          src={project_1}
          href="https://github.com/ramyibrahim-eg/movies-api"
        />
        <ProjectsCard
          title="React blogs"
          des="Codes used {Frontend} - 
          HTML5, CSS, ,sass JS, bootstrap, react-icons, react-owl-carousel, react-tag-input, react-toastify, React.js
          Codes used {Backend} - 
          Firebase"
          src={project_2}
          href="https://github.com/ramyibrahim-eg/blogs"
        />
        <ProjectsCard
          title="React Watch Video From Youtube"
          des="Codes used {Frontend} - 
          HTML5, CSS, ,sass JS, bootstrap, react-icons, React, Redux, axios, moment, numeral, react-lazy-load-image-component, react-router-dom, react-show-more-text, react-toastify, redux-devtools-extension
          Codes used {Backend} - 
          Firebase"
          src={project_3}
          href="https://github.com/ramyibrahim-eg/watch-videos-youtube"
        />
        <ProjectsCard
          title="React Full Ecommerce"
          des="Codes used {Frontend} - 
          HTML5, CSS, JS, React.js
          Codes used {Backend} - 
          Firebase"
          src={project_4}
          href="https://github.com/ramyibrahim-eg/full-ecommerce"
        />
        <ProjectsCard
          title="Website From React"
          des="Codes used - 
          HTML5, CSS, JS, BOOTSTRAP, React.js, react icons, localstorage"
          src={project_5}
          href="https://github.com/ramyibrahim-eg/website-from-react"
        />
        <ProjectsCard
          title="React Social Media"
          des="Codes used - 
          HTML5, CSS, JS, React.js, react icons, swiper"
          src={project_6}
          href="https://github.com/ramyibrahim-eg/social-media"
        />
      </div>
    </section>
  );
};

export default Projects;
