import Head from "next/head";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Skills from "../components/Skills";

import { client } from "../client";
import { urlFor } from "../client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home({aboutdata}) {
  
  return (
    <div>
      <Head>
        <title>About Me - AhmadRaza365</title>
        <meta
          name="description"
          content="AhmadRaza365 - I am Ahmad Raza Pakistan. I am a student of bachelors of Software Engineering and also a MERN Stack Developer, UI/UX Designer and Content Creator. I'm also a community mentor at &ldquo;Dive Into Skills&rdquo; and &ldquo;iConnect Pakistan&rdquo;."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overflow-x-hidden">
          {/* Hero Section */}
          <div className="bg-about-hero bg-center bg-no-repeat bg-cover w-screen md:h-screen min-h-[95vh]  flex flex-col justify-center items-center ">
            <h1 className="text-white text-5xl md:text-6xl text-center my-2">
              Hi, Welcome!
              <br />I am Ahmad Raza
            </h1>
            {aboutdata.map((item, index) => (
              <h2
                className="text-light-primary text-2xl md:text-4xl text-center my-2"
                key={index}
              >
                {item.shortIntro}
              </h2>
            ))}
            <button className="bg-light-primary text-dark-primary hover:text-light-primary hover:bg-transparent border-2 border-light-primary  px-4 py-2 my-2 text-xl font-bold rounded-md transition-all duration-300 ease-in">
              <Link href="/work"> Check My Recent Work </Link>
            </button>
            <MdKeyboardArrowDown className="text-white text-6xl absolute bottom-10 animate-bounce" />
          </div>

          {aboutdata.map((imgItem, index) => (
            <div key={index} className=" w-4/5 md:w-2/5 my-1 m-auto">
              <Image
                src={urlFor(imgItem.imgUrl).url()}
                alt="AhmadRaza365 Profile"
                width="1440"
                height="2000"
              />
            </div>
          ))}

          <div className="w-[80vw] md:w-[75vw] m-auto my-5">
            <p className="text-white text-xl text-justify ">
              I am{" "}
              <span className="text-light-primary font-bold">Ahmad Raza</span>{" "}
              from{" "}
              <span className="text-light-primary font-bold">Pakistan.</span> I
              am a student of bachelors of Software Engineering and also a{" "}
              <span className="text-light-primary font-bold">
                MERN Stack Developer, UI/UX Designer and Content Creator.
              </span>{" "}
              I&apos;m also a community mentor at{" "}
              <span className="text-light-primary font-bold">
                iConnect Pakistan.
              </span>
            </p>
          </div>
          <Skills />
          <div className="mt-14 flex flex-col justify-center">
            <h3 className="text-white text-3xl md:text-4xl font-bold text-center">
              Want to check my{" "}
              <span className="text-light-primary">recent work done?</span>
            </h3>

            <button className="bg-light-primary text-dark-primary mx-auto hover:text-light-primary hover:bg-transparent border-2 border-light-primary  px-4 py-2 my-4 text-xl font-bold rounded-md transition-all duration-300 ease-in">
              <Link href="/work">
                <a>Check My Recent Work</a>
              </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = '*[_type == "about"]';
  const aboutdata = await client.fetch(query);
  
  if(!aboutdata.length) {

  return {
    props: {
      aboutdata:[],
    },
  }
} else {
  return {
    props: {
      aboutdata,
    },
  }
}
}