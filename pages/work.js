import Worklist from "../components/Worklist";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Work() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>My Work - AhmadRaza365</title>
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
      <main>
        {/* Work Page Hero section */}
        <div className="bg-work-hero bg-top bg-no-repeat bg-auto w-screen h-[50vh] md:h-[60vh]  flex flex-col justify-center items-center ">
          <h2 className="text-white text-4xl md:text-6xl text-center my-2">
            Do What you Love
            <br />
            Love What you Do
          </h2>
        </div>
        <Worklist />
        <div className="mt-14 flex flex-col justify-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold text-center">
            Want to <span className="text-light-primary">Consult</span> with me
            or <span className="text-light-primary">Contact me?</span>
          </h3>

          <button className="m-auto my-3 w-fit bg-light-primary hover:bg-light-secondary text-dark-secondary text-xl md:text-2xl lg:text-3xl font-bold py-2 px-6 md:px-10 rounded-[10px] shadow-md transition-all duration-300 ease-in">
            <Link href="/contact">
              <a>Contact Me</a>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}
