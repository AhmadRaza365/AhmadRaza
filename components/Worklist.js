import React, { useState, useEffect } from "react";
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
              className={`hover:text-light-primary  bg-transparent border-2  hover:border-light-primary px-2 py-1 my-2 text-lg 2xl:text-2xl font-bold rounded-md transition-all duration-300 ease-in ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 lg:gap-8 2xl:gap-12 my-4 px-5 md:px-10 2xl:px-16">
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
