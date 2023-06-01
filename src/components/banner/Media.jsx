import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4 flex-wrap">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/ramyibrahim123" target="_blank">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/ramy-ibrahim-a767a3269/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/ramyibrahim-eg" target="_blank">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://api.whatsapp.com/send?phone=201200050378"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
