import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../client";
import WorkItem from "./WorkItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Worklist = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [Catagoires, setCatagoires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "works"]';
    const tagsquery = '*[_type == "workTags"]';
    client.fetch(tagsquery).then((tagsdata) => {
      setCatagoires(tagsdata);
    });

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
      setLoading(false);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return !loading ? (
    <div className="overflow-y-hidden">
      {Catagoires.map((item, index) => (
        <div
          className="flex flex-wrap m-auto justify-center gap-2 my-4 max-w-[95vw]"
          key={index}
        >
          {item.tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleWorkFilter(tag)}
              className={`hover:text-light-primary  bg-transparent border-2  hover:border-light-primary px-2 py-1 my-2 text-lg font-bold rounded-md transition-all duration-300 ease-in ${
                activeFilter === tag
                  ? "border-light-primary text-light-primary"
                  : "border-white text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      ))}

      <div className="flex flex-wrap justify-center gap-5 my-4">
        {filterWork.map((work, index) => (
          <WorkItem
            key={index}
            imgUrl={work.imgUrl}
            title={work.title}
            description={work.description}
            projectBrif={work._id}
            isBrif={work.isBrif}
            projectLink={work.projectLink}
            codeLink={work.codeLink}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={`bg-dark-secondary py-10 flex justify-center items-center`}>
      <AiOutlineLoading3Quarters className="text-light-primary text-6xl animate-spin" />
    </div>
  );
};

export default Worklist;
