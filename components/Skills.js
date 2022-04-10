import React from "react";

const Skills = () => {

  return (
    <div className="my-10 md:my-20">
        <h2 className="text-center text-white font-bold text-4xl md:text-5xl my-5 md:my-8" >My Skills</h2>
        <div className="flex flex-wrap justify-center">
            <div className="text-white mx-5 my-2">
              <h3 className="text-light-primary text-4xl text-center my-1">Development</h3>
              <hr className="text-light-primary"/>
              <ul className="my-2">
                <li className="text-center my-2 text-2xl">React JS</li>
                <li className="text-center my-2 text-2xl">Next JS</li>
                <li className="text-center my-2 text-2xl">Firebase</li>
                <li className="text-center my-2 text-2xl">Node JS</li>
                <li className="text-center my-2 text-2xl">Tailwind CSS</li>
                <li className="text-center my-2 text-2xl">Bootstrap</li>
                <li className="text-center my-2 text-2xl">WordPress</li>
                <li className="text-center my-2 text-2xl">Version Controlling</li>
              </ul>
            </div>
            <div className="text-white mx-5 my-2">
              <h3 className="text-light-primary text-4xl text-center my-1">UI/UX Designing</h3>
              <hr className="text-light-primary" />
              <ul className="my-2">
                <li className="text-center my-2 text-2xl">Prototyping</li>
                <li className="text-center my-2 text-2xl">Figma</li>
                <li className="text-center my-2 text-2xl">Framer</li>
                <li className="text-center my-2 text-2xl">Adobe XD</li>
              </ul>
            </div>
            <div className="text-white mx-5 my-2">
              <h3 className="text-light-primary text-4xl text-center my-1">Content Creation</h3>
              <hr className="text-light-primary" />
              <ul>
                <li className="text-center my-2 text-2xl">Blogging</li>
                <li className="text-center my-2 text-2xl">Video Making</li>
                <li className="text-center my-2 text-2xl">Video Editing</li>
                <li className="text-center my-2 text-2xl">Graphic Designing</li>
              </ul>
            </div>
            
    </div>
    </div>
  );
};

export default Skills;
