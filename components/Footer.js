import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-light-secondary mt-3">
      <ul className="flex justify-center items-center gap-3 sm:gap-5 md:gap-8 my-2">
        <a
          href="https://www.facebook.com/AhmadRaza365"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="https://www.instagram.com/ahmadraza_365"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="https://twitter.com/AhmadRaza365"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmadraza365/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="http://github.com/AhmadRaza365"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01818f994e8e4c722f"
          target="_blank"
          rel="noreferrer"
        >
          <SiUpwork className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="https://www.fiverr.com/users/ahmadraza365"
          target="_blank"
          rel="noreferrer"
        >
          <SiFiverr className="text-4xl sm:text-5xl md:text-7xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
        <a
          href="https://www.freelancer.com/u/Ahmad365Raza"
          target="_blank"
          rel="noreferrer"
        >
          <SiFreelancer className="text-2xl sm:text-3xl md:text-5xl   text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
