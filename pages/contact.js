import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { FiMail } from "react-icons/fi";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookMessenger,
} from "react-icons/fa";
import { BsLinkedin, BsSkype } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Fiverr from "../images/tech-icons/Fiverr.svg";
import Freelancer from "../images/tech-icons/Freelancer.svg";
import Upwork from "../images/tech-icons/Upwork.svg";
import Image from "next/image";

export default function Contact() {
  const [sendSuccess, showSendSuccess] = useState(false);
  const [sendError, showSendError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipqha2q",
        "template_muxflni",
        form.current,
        "vU2SaV6dWKn_6SWkQ"
      )
      .then(
        (result) => {
          showSendSuccess(true);
        },
        (error) => {
          showSendError(true);
        }
      );
    e.target.reset();
  };

  setTimeout(() => {
    showSendSuccess(false);
    showSendError(false);
  }, 5000);

  useEffect(() => {
    document.title = "Ahmad Raza - Contact Me";
  }, []);

  return (
    <div>
      <Head>
        <title>Contact Me - AhmadRaza365</title>
        <meta
          name="description"
          content="AhmadRaza365 - I am Ahmad Raza from Pakistan. I am a Software Engineer with expertise in Web Development. I have professional experience in MERN Stack development, UI/UX Designing, and Content Creation."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="keywords"
          content="AhmadRaza365, Ahmad Raza, Web Developer, UI/UX Designer, Content Creator, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, Express.js Developer, MongoDB Developer, MySQL Developer, Firebase Developer, Figma Expert, Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects, Adobe Audition, Git Expert, GitHub Expert, CI/CD Developer, Firebase Developer, Google Cloud Developer, Digital Ocean Developer, SEO Expert, Social Media Marketing Expert, Video Editing Expert, Audio Editing Expert, Pakistan, Punjab, Pakistan"
        />
        <link rel="canonical" href="https://ahmadraza365.diveintoskills.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AhmadRaza365 - Portfolio" />
        <meta property="og:site_name" content="AhmadRaza365" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ahmadraza365.diveintoskills.com"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://ahmadraza365.diveintoskills.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAhmadRaza365.e8a5943a.webp&w=1920&q=75"
        />
        <meta
          property="og:description"
          content="AhmadRaza365 - I am Ahmad Raza from Pakistan. I am a Software Engineer with expertise in Web Development. I have professional experience in MERN Stack development, UI/UX Designing, and Content Creation."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AhmadRaza365" />
        <meta name="twitter:title" content="AhmadRaza365 - Portfolio" />
        <meta name="twitter:creator" content="@AhmadRaza365" />
        <meta
          name="twitter:description"
          content="AhmadRaza365 - I am Ahmad Raza from Pakistan. I am a Software Engineer with expertise in Web Development. I have professional experience in MERN Stack development, UI/UX Designing, and Content Creation."
        />
        <meta
          name="twitter:image"
          content="https://ahmadraza365.diveintoskills.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAhmadRaza365.e8a5943a.webp&w=1920&q=75"
        />
      </Head>
      <div className="mt-12">
        <h3 className="text-white text-3xl md:text-4xl font-bold text-center my-5">
          Want to <span className="text-light-primary">Consult</span> with me or{" "}
          <span className="text-light-primary">Contact me?</span>
        </h3>
      </div>
      <main className="flex flex-wrap justify-center divide-y md:divide-y-0 md:divide-x divide-dashed">
        <div className="w-full md:w-1/2 p-4">
          <form
            className="flex flex-col justify-center gap-2"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="bg-transparent outline-light-secondary border-light-secondary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-light-secondary text-2xl"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="bg-transparent outline-light-secondary border-light-secondary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-light-secondary text-2xl"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="bg-transparent outline-light-secondary border-light-secondary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-light-secondary text-2xl"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="mail_body"
              className="bg-transparent outline-light-secondary border-light-secondary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-light-secondary text-lg"
              id="body"
              cols="30"
              rows="10"
              placeholder="Body"
            ></textarea>
            <button
              type="submit"
              className=" bg-light-primary text-dark-primary w-fit hover:bg-light-secondary border-2 border-light-primary hover:border-light-secondary  px-4 py-2 my-4 text-xl font-bold rounded-md transition-all duration-300 ease-in"
            >
              Send Message
            </button>
          </form>
          {sendSuccess && (
            <p className="text-left text-light-primary text-xl my-2">
              Message has been sent successfully. I will get back to you as soon
              as possible.
              <br />
              Due to any technical issue, I couldn&apos;t send you response then
              you can also contact me via other options.
            </p>
          )}
          {sendError && (
            <p className="text-center text-[#dc2626] text-xl my-2">
              Error while sending the message. Please try again.
            </p>
          )}
        </div>
        <div className="border-white w-full md:w-2/5  p-4 flex flex-col">
          <h3 className="text-white text-2xl lg:text-3xl font-semibold text-center">
            You can also contact me via
          </h3>

          <div>
            <ul className="flex justify-center my-4 ">
              <a
                href="https://wa.me/923001312712"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaWhatsapp className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
              </a>
              <a
                href="https://www.facebook.com/AhmadRaza365"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaFacebookMessenger className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
              </a>
              <a
                href="https://t.me/AhmadRaza365"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTelegramPlane className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
              </a>
              <a
                href="mailto:ahmadraza365pro@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FiMail className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
              </a>
              <a
                href="https://join.skype.com/invite/gITQdMfF1I5v"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsSkype className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/ahmadraza365"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsLinkedin className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
              </a>
            </ul>
          </div>
          <hr className="text-white opacity-50 my-3" />
          <h3 className="text-white text-2xl md:text-2xl font-semibold text-center">
            I am also available on different
            <br className="hidden lg:block" />{" "}
            <span className="text-light-primary">Freelance Marketplaces.</span>
          </h3>

          <div className="flex flex-col justify-center gap-2 mt-3">
            <a
              href="https://www.upwork.com/freelancers/~01818f994e8e4c722f"
              target="_blank"
              rel="noreferrer"
              className="my-2 m-auto"
            >
              <Image
                src={Upwork}
                alt="Upwork Profile link"
                className="w-2/5  md:w-1/3 m-auto"
              />
            </a>
            <a
              href="https://www.fiverr.com/ahmadraza365"
              target="_blank"
              rel="noreferrer"
              className="my-2 m-auto"
            >
              <Image
                src={Fiverr}
                alt="Fiverr Profile link"
                className="w-2/5 md:w-1/3 m-auto"
              />
            </a>
            <a
              href="https://www.freelancer.com/u/Ahmad365Raza"
              target="_blank"
              rel="noreferrer"
              className="my-2 m-auto"
            >
              <Image
                src={Freelancer}
                alt="Freelancer Profile link"
                width="120"
                height="50"
                className="w-2/5 md:w-1/3 m-auto"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
