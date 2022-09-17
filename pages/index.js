import Head from "next/head";
import Image from "next/image";
import {
  MdDesignServices,
  MdOutlineKeyboardArrowDown,
  MdOutlineWeb,
} from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { SiGooglesearchconsole } from "react-icons/si";
import { FaPhotoVideo, FaTools } from "react-icons/fa";
import { AiFillApi, AiFillAudio } from "react-icons/ai";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import React from "react";
import AhmadRaza365 from "../images/AhmadRaza365.webp";
import underline from "../images/underline.png";
import techNationAward from "../images/techNationAward.jpeg";
import ServicesCard from "../components/ServicesCard";
import SkillsCard from "../components/SkillsCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const services = [
    {
      title: "Web Development",
      description:
        "I can provide you with the service that best fits your needs. My goal is to make your website a tool to help you reach your business goals. I will develop a site that will be Search engine friendly and easy to handle.",
      image: <MdOutlineWeb className="text-light-primary text-5xl" />,
    },
    {
      title: "UI/UX Designing",
      description:
        "I will create a user-friendly and engaging UI Design, so your users will have no trouble finding what they need and getting the most out of your service. I also have experience in building interactive content.",
      image: <MdDesignServices className="text-light-primary text-5xl" />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Want to generate more sales? But you have no customer? I will help you with my social media marketing skills. With my experience, I can help you increase your sales by using social media to reach a wider audience.",
      image: <IoShareSocialSharp className="text-light-primary text-5xl" />,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Do you have a website that doesn't appear in search results? Don't worry, I will help you to index your website in search engines through my expertise. I'll audit your website and fix all obstacles that are blocking you from your journey.",
      image: <SiGooglesearchconsole className="text-light-primary text-5xl" />,
    },
    {
      title: "Video Editing",
      description:
        "Have raw footage and looking for an editor to shape them? I am here to shape them in a final engaging video. I have good experience in video editing and would love to help you with your video project. My core strengths are video editing, audio editing, and color grading. I can also design custom graphics.",
      image: <FaPhotoVideo className="text-light-primary text-5xl" />,
    },
  ];

  const skills = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Next JS",
        "Tailwind CSS",
        "Bootstrap",
        "WordPress",
        "Elementor",
        "WooCommerce",
      ],
      icon: <MdOutlineWeb className="text-light-primary" />,
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
      icon: <AiFillApi className="text-light-primary" />,
    },
    {
      title: "UI/UX",
      skills: [
        "Figma",
        "Framer",
        "Adobe XD",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      icon: <MdDesignServices className="text-light-primary" />,
    },
    {
      title: "Search Engine Optimization",
      skills: [
        "Keyword Research",
        "On-Page SEO",
        "Off-Page SEO",
        "Website Audit",
        "Google Search Console",
      ],
      icon: <SiGooglesearchconsole className="text-light-primary" />,
    },
    {
      title: "Video Editing",
      skills: ["Adobe Premiere Pro", "Adobe After Effects", "Color Grading"],
      icon: <FaPhotoVideo className="text-light-primary" />,
    },
    {
      title: "Social Media Marketing",
      skills: [
        "Lead Generation",
        "Facebook",
        "Instagram",
        "Twitter",
        "LinkedIn",
        "Google Ads",
      ],
      icon: <IoShareSocialSharp className="text-light-primary" />,
    },
    {
      title: "Audio Editing",
      skills: ["Adobe Audition", "Audacity"],
      icon: <AiFillAudio className="text-light-primary" />,
    },

    {
      title: "Additional Skills",
      skills: [
        "Git Version Control",
        "GitHub",
        "CI/CD",
        "Firebase",
        "Google Cloud",
        "Digital Ocean",
        "Heroku",
        "Netlify",
        "Vercel",
      ],
      icon: <FaTools className="text-light-primary" />,
    },
  ];

  return (
    <div>
      <Head>
        <title>About Me - AhmadRaza365</title>
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

      <main className="">
        <section className=" flex flex-col sm:flex-row items-center mx-4 md:mx-8 py-5 relative">
          <MdOutlineKeyboardArrowDown className="text-6xl text-light-secondary absolute bottom-1 m-auto left-1/3 right-1/3 animate-bounce" />
          <div className=" flex flex-col justify-center gap-3 md:gap-5 w-full lg:w-1/2 py-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-light-secondary ">
              I will help you convert your <br className="hidden lg:block" />
              <span className="text-light-primary capitalize">idea</span> into a{" "}
              <span className="text-light-primary capitalize">
                successful business.
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-normal text-light-secondary w-full md:w-[90%] text-left md:text-justify">
              The only thing I need from you is an idea or a rough sketch of
              your future project. I will provide the rest. I am a developer and
              UI/UX Designer who has turned ideas into business.
            </p>
            <button
              className="w-fit bg-light-primary hover:bg-light-secondary text-dark-secondary text-xl lg:text-2xl font-bold py-2 md:py-2 px-5 md:px-10 rounded-[10px] shadow-md transition-all duration-300 ease-in"
              onClick={() => {
                router.push("/work");
              }}
            >
              Check my work
            </button>
          </div>
          <div className=" w-fit lg:w-1/2">
            <div className="w-72 sm:w-64 lg:w-96 m-auto">
              <Image
                src={AhmadRaza365}
                alt="Ahmad Raza"
                width={1440}
                height={2000}
                className="m-auto"
              />
            </div>
          </div>
        </section>

        <section className="my-10 mx-4 md:mx-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-light-secondary capitalize">
              A Bit About Me
            </h2>
            <div className="w-40 md:w-48">
              <Image
                src={underline}
                alt="underline effect"
                width={2160}
                height={175}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center py-4">
            <div className="w-full md:w-7/12">
              <p className="text-lg lg:text-2xl font-normal text-light-secondary text-justify sm:text-left">
                Hi, I am <b>Ahmad Raza</b> from <b>Pakistan.</b> I am a{" "}
                <b>Software Engineer</b> with expertise in Web Development. I
                have professional experience in{" "}
                <b>
                  MERN Stack development, UI/UX Designing, and Content Creation.
                </b>{" "}
                I have worked with local as well as international clients and
                worked on a range of projects from LMS system to e-commerce
                stores. Also, I was <b>awarded</b> an{" "}
                <b>accomplished professional</b> at{" "}
                <b>Tech Nation Conference 2022</b> in Pakistan.
              </p>
            </div>
            <div className="my-4 md:my-0 rounded-[15px] flex items-end justify-center md:justify-end w-full md:w-5/12">
              <div className="w-full sm:w-9/12 md:w-96 rounded-[15px] overflow-hidden">
                <Image
                  src={techNationAward}
                  alt="AhmadRaza365"
                  width={1920}
                  height={1280}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-10 mx-5 md:mx-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-light-secondary capitalize">
              My Services
            </h2>
            <div className="w-36 md:w-44">
              <Image
                src={underline}
                alt="underline effect"
                width={2160}
                height={175}
              />
            </div>
          </div>
          <div className="py-2 md:py-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={50}
              speed={1000}
              grabCursor={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                10: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                550: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                850: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1120: {
                  slidesPerView: 3,
                  spaceBetween: 45,
                },
              }}
              className="servicesSlider"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="py-12">
                  <ServicesCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="my-10 mx-3 md:mx-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-light-secondary capitalize">
              My Skills Set
            </h2>
            <div className="w-36 md:w-44">
              <Image
                src={underline}
                alt="underline effect"
                width={2160}
                height={175}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 lg:gap-x-6 gap-y-8 items-start justify-items-start mt-10 mb-4">
            {skills.map((skill, index) => (
              <SkillsCard
                key={index}
                title={skill.title}
                skills={skill.skills}
                icon={skill.icon}
              />
            ))}
          </div>
        </section>
        <div className="my-8 flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light-secondary text-center capitalize">
            Check out my{" "}
            <span className="text-light-primary capitalize">Recent Work</span>
          </h4>
          <button
            className="my-3 w-fit bg-light-primary hover:bg-light-secondary text-dark-secondary text-xl md:text-2xl lg:text-3xl font-bold py-2 px-6 md:px-10 rounded-[10px] shadow-md transition-all duration-300 ease-in"
            onClick={() => {
              router.push("/work");
            }}
          >
            My Work
          </button>
        </div>
      </main>
    </div>
  );
}
