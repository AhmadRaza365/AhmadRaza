import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../client";

const WorkItem = (props) => {
  return (
    <div className="w-72 min-h-fit max-h-full rounded-2xl bg-transparent  relative flex items-end transition  ease-in-out duration-300 drop-shadow-lg hover:translate-y-2">
      <div className="w-full h-full object-cover absolute top-0 left-0 rounded-2xl  hover:backdrop-brightness-50">
        <Image
          src={urlFor(props.imgUrl).url()}
          alt={props.title}
          className="rounded-2xl"
          width="720"
          height="1200"
        />
      </div>
      <div className="z-[1] flex flex-col justify-between min-h-[490px]  p-5 bg-dark-secondary/80 w-full opacity-0 hover:opacity-100 h-full text-dark-primary rounded-2xl transition-all duration-75 ease-in">
        <h2 className="text-3xl text-light-primary font-bold text-center pt-2">
          {props.title}
        </h2>
        <p className="text-lg text-white text-justify">{props.description}</p>
        <div>
          <button
            className={`bg-light-primary text-dark-primary hover:text-light-primary hover:bg-transparent border-light-primary  px-4 py-2 my-2 mx-2 text-lg font-bold rounded-md transition-all duration-300 ease-in ${
              props.isBrif === "null" ? "hidden" : "cursor-pointer border-2"
            }`}
          >
            {" "}
            <Link href={`/project/${props.projectBrif}`}>
              <a>Project Brief</a>
            </Link>
          </button>
          <button
            className={`bg-light-primary text-dark-primayr hover:text-light-primary hover:bg-transparent border-light-primary  px-4 py-2 my-2 mx-2 text-lg font-bold rounded-md transition-all duration-300 ease-in ${
              props.projectLink === "null"
                ? "hidden"
                : "cursor-pointer border-2"
            }`}
          >
            {" "}
            <a href={props.projectLink} target="_blank" rel="noreferrer">
              Live URL
            </a>
          </button>
          <button
            className={`bg-light-primary text-dark-primary hover:text-light-primary hover:bg-transparent border-light-primary  px-4 py-2 my-2  mx-2 text-lg font-bold rounded-md transition-all duration-300 ease-in ${
              props.codeLink === "null" ? "hidden" : "cursor-pointer border-2"
            }`}
          >
            {" "}
            <a href={props.codeLink} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
