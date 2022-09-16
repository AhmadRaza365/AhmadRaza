import React from "react";
import { HiDesktopComputer } from "react-icons/hi";

const SkillsCard = (props) => {
  return (
    <div className="flex flex-row items-start gap-2 lg:gap-5 px-1 lg:px-4">
      <p className="text-3xl lg:text-5xl">{props.icon}</p>

      <div>
        <h4 className="text-light-secondary text-xl sm:text-2xl lg:text-3xl font-bold">
          {props.title}
        </h4>
        <ul className="list-disc list-outside text-sm  md:text-lg text-light-secondary my-2 pl-2 md:pl-3 ">
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
