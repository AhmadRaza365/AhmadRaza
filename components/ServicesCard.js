import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="relative p-3 h-96 sm:h-80 md:h-96 lg:h-80 border-light-secondary border-2 rounded-[10px] ~max-w-sm pt-12 pb-5">
      <div className="absolute -top-11 right-1/3 left-1/3 m-auto w-fit p-3 bg-dark-secondary border-light-secondary border-2 rounded-full">
        {props.image}
      </div>
      <div className=" flex flex-col justify-evenly h-full">
        <h3 className="text-2xl font-bold text-light-secondary text-center">
          {props.title}
        </h3>
        <p className="text-lg font-normal text-light-secondary text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
