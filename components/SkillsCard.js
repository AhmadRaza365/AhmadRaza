import React from "react";
import { HiDesktopComputer } from "react-icons/hi";

const SkillsCard = () => {
  return (
    <div className="flex flex-row items-start gap-2 lg:gap-5 px-1 lg:px-4">
      <p className="text-3xl lg:text-5xl">
        <HiDesktopComputer className="text-light-primary " />
      </p>

      <div>
        <h4 className="text-light-secondary text-xl sm:text-2xl lg:text-3xl font-bold">WordPress</h4>
        <ul className="list-disc list-inside text-sm  md:text-lg text-light-secondary my-2">
          <li>WordPress 12345</li>
          <li>WordPress12345</li>
          <li>WordPress12345</li>
          <li>WordPress12345</li>
          <li>WordPress12345</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
