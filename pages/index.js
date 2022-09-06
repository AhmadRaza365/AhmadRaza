import Head from "next/head";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
              <SwiperSlide className="py-12">
                <ServicesCard />
              </SwiperSlide>
              <SwiperSlide className="py-12">
                <ServicesCard />
              </SwiperSlide>
              <SwiperSlide className="py-12">
                <ServicesCard />
              </SwiperSlide>
              <SwiperSlide className="py-12">
                <ServicesCard />
              </SwiperSlide>
              <SwiperSlide className="py-12">
                <ServicesCard />
              </SwiperSlide>
              ...
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 lg:gap-x-6 gap-y-8 items-center justify-items-center mt-10 mb-4">
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
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
