import Worklist from "../components/Worklist";

import Link from "next/link";
import Head from "next/head";

export default function Home() {

    return (
        <div className="overflow-x-hidden">
        <Head>
        <title>My Work - AhmadRaza365</title>
        <meta
          name="description"
          content="AhmadRaza365 - I am Ahmad Raza Pakistan. I am a student of bachelors of Software Engineering and also a MERN Stack Developer, UI/UX Designer and Content Creator. I'm also a community mentor at &ldquo;Dive Into Skills&rdquo; and &ldquo;iConnect Pakistan&rdquo;."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        Want to{" "}
          <span className="text-light-primary">Consult</span>
          {" "}with me or{" "}
          <span className="text-light-primary">Contact me?</span>
        </h3>

        <button className="bg-light-primary text-dark-primary mx-auto hover:text-light-primary hover:bg-transparent border-2 border-light-primary  px-4 py-2 my-4 text-xl font-bold rounded-md transition-all duration-300 ease-in">
          <Link href="/contact"><a>Contact Me</a></Link>
        </button>
      </div>
      
    </div>
    );
}
