/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { client } from "../../client";
import { urlFor } from "../../client";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [projectBrif, setProjectBrif] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const projectQuery = `*[_type == "works" && _id == "${id}"]{
          _id,
          title,
          projectBrifImg
        }`;

    client.fetch(projectQuery).then((projectData) => {
      setProjectBrif(projectData);
      setIsloading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-0">
      <Head>
        <title>Project Brief - AhmadRaza365</title>
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
      <div>
        {projectBrif.map((item, index) => (
          <div
            className="m-auto justify-center max-w-screen flex flex-wrap"
            key={index}
          >
            <img
              className="w-screen"
              src={urlFor(item.projectBrifImg).url()}
              alt={item.title}
            />
          </div>
        ))}
      </div>
      <div
        className={`bg-dark-secondary min-h-screen min-w-[100vw] z-[100] fixed top-0 left-0 flex justify-center items-center ${
          isloading ? " " : "hidden"
        }`}
      >
        <AiOutlineLoading3Quarters className="text-light-primary text-6xl animate-spin" />
      </div>
    </div>
  );
}
