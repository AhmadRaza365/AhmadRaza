import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../client";
import WorkItem from "./WorkItem";

const Worklist = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ opacity: 1, scale: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [Catagoires, setCatagoires] = useState([]);
 
  useEffect(() => {
    const query = '*[_type == "works"]';
    const tagsquery = '*[_type == "workTags"]';
    client.fetch(tagsquery).then((tagsdata) => {
      setCatagoires(tagsdata);
    });

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.8 });

    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1 });
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="overflow-y-hidden">
      {Catagoires.map((item, index) => (
        <div className="flex flex-wrap m-auto justify-center gap-2 my-4 max-w-[95vw]" key={index} >
          {item.tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleWorkFilter(tag)}
              className={`hover:text-light-primary text-white bg-transparent border-2 border-white hover:border-light-primary px-2 py-1 my-2 text-lg font-bold rounded-md transition-all duration-300 ease-in ${
                activeFilter === tag
                  ? "border-light-primary text-light-primary"
                  : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      ))}

      <motion.div
        initial={{ scale: 0.5 }}
        animate={animateCard}
        transition={{ duration: 0.1, delayChildren: 0.1 }}
        className="flex flex-wrap justify-center gap-5 my-4"
      >
        {filterWork.map((work, index) => (
          <WorkItem
            key={index}
            imgUrl={work.imgUrl}
            title={work.title}
            description={work.description}
            
            projectBrif={work._id}
            isBrif = {work.isBrif}
            
            
            projectLink={work.projectLink}
            codeLink={work.codeLink}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Worklist;
