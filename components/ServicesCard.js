import React from "react";
import { MdOutlineWeb } from "react-icons/md";

const ServicesCard = () => {
  return (
    <div className="relative p-3 border-light-secondary border-2 rounded-[10px] ~max-w-sm pt-12 pb-5">
      <div className="absolute -top-11 right-1/3 left-1/3 m-auto w-fit p-3 bg-dark-secondary border-light-secondary border-2 rounded-full">
        <MdOutlineWeb className="text-light-primary text-5xl" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-light-secondary text-center">
          Web Development
        </h3>
        <p className="text-lg font-normal text-light-secondary text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some. majority have suffered
          alterat.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
