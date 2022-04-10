import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { FiMail } from "react-icons/fi";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookMessenger,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Fiverr from "../images/tech-icons/Fiverr.svg";
import Freelancer from "../images/tech-icons/Freelancer.svg";
import Guru from "../images/tech-icons/Guru.svg";
import Upwork from "../images/tech-icons/Upwork.svg";
import Image from "next/image";

export default function Contact() {

    const [sendSuccess, showSendSuccess] = useState(false);
  const [sendError, showSendError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ipqha2q', 'template_muxflni', form.current, 'vU2SaV6dWKn_6SWkQ')
      .then((result) => {
          showSendSuccess(true);
      }, (error) => {
          showSendError(true);
      
      });
      e.target.reset();
      
  };

  setTimeout(() => {
    showSendSuccess(false);
    showSendError(false);
  }, 5000);

  useEffect(() => {
    document.title = "Ahmad Raza - Contact Me";
  }, []);

  return(
    <div>
        <Head>
        <title>Contact Me - AhmadRaza365</title>
        <meta
          name="description"
          content="AhmadRaza365 - I am Ahmad Raza Pakistan. I am a student of bachelors of Software Engineering and also a MERN Stack Developer, UI/UX Designer and Content Creator. I'm also a community mentor at &ldquo;Dive Into Skills&rdquo; and &ldquo;iConnect Pakistan&rdquo;."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="mt-20">
      <h3 className="text-white text-3xl md:text-4xl font-bold text-center my-5">
        Want to <span className="text-light-primary">Consult</span> with me or{" "}
        <span className="text-light-primary">Contact me?</span>
      </h3>
    </div>
    <div className="flex flex-wrap w-screen justify-center divide-y md:divide-y-0 md:divide-x">
      <div className="w-full md:w-1/2 p-4">
        <form
          className="flex flex-col justify-center gap-2"
          ref={form} onSubmit={sendEmail}

        >
        
          <input
            type="text"
            className="bg-transparent outline-light-primary border-light-primary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-white text-2xl"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="bg-transparent outline-light-primary border-light-primary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-white text-2xl"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="bg-transparent outline-light-primary border-light-primary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-white text-2xl"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="mail_body"
            className="bg-transparent outline-light-primary border-light-primary border-2 rounded-lg w-full py-2 px-4 focus:outline-none text-white text-lg"
            id="body"
            cols="30"
            rows="10"
            placeholder="Body"
          ></textarea>
          <button
            type="submit"
            className="bg-light-primary text-dark-primary mx-auto hover:text-light-primary hover:bg-transparent border-2 border-light-primary  px-4 py-2 my-4 text-xl font-bold rounded-md transition-all duration-300 ease-in"
          >
            Send
          </button>
        </form>
        {sendSuccess ? (
          <p className="text-center text-light-primary text-xl my-2">
            Message has been sent successfully. I will get back to you as soon as possible.<br />
            Due to any technical issue, I couldn&apos;t send you response then you can also contact me via other options.
            </p>
        ) : null}
        {sendError ? (
          <p className="text-center text-[#dc2626] text-xl my-2">
            Error while sending the message. Please try again.
            </p>
        ) : null}
      </div>
      <div className="border-white w-full md:w-2/5  p-4 flex flex-col">
        <h3 className="text-white text-2xl md:text-2xl text-center">
          You can also contact me via
        </h3>

        <div>
          <ul className="flex justify-center my-3 ">
            <a
              href="https://wa.me/923001312712"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaWhatsapp className="text-5xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
            </a>
            <a
              href="https://www.facebook.com/AhmadRaza365"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaFacebookMessenger className="text-5xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
            </a>
            <a
              href="https://t.me/AhmadRaza365"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaTelegramPlane className="text-5xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
            </a>
            <a
              href="mailto:ahmadraza365pro@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FiMail className="text-5xl md:text-6xl mx-2 text-white hover:text-light-primary cursor-pointer transition-all duration-300 ease-in" />{" "}
            </a>
          </ul>
        </div>
        <hr className="text-white opacity-50 my-3" />
        <h3 className="text-white text-2xl md:text-2xl text-center">
          You can also contact me on different{" "}
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
          <a
            href="https://www.guru.com/freelancers/ahmadraza365"
            target="_blank"
            rel="noreferrer"
            className="my-2 m-auto"
          >
            <Image
              src={Guru}
              alt="Guru Profile link"
              className="w-2/5 md:w-1/3 m-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
