import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { client } from "../../client";
import { urlFor } from "../../client";

export default function Project() {
    const router = useRouter();
    const { id } = router.query;
    const [projectBrif, setProjectBrif] = useState([]);
    const [isloading, setIsloading] = useState(true);

    useEffect(() => {
        const projectQuery = `*[_type == "works" && _id == "${id}"]{
          _id,
          title,
          projectBrifImg
        }`
    
        client.fetch(projectQuery).then((projectData) => {
          setProjectBrif(projectData);
          setIsloading(false);
        });
      }, []);

    return (
        <div className="pt-20">
      <div>
        {projectBrif.map((item, index) => (
          <div className="m-auto justify-center max-w-screen flex flex-wrap" key={index}>
          <img className="w-screen" src={urlFor(item.projectBrifImg).url()} alt={item.title} /> 
          </div>
        ))}

      </div>
      <div className={`bg-dark-secondary min-h-screen min-w-[100vw] z-[100] fixed top-0 left-0 flex justify-center items-center ${isloading? " " : "hidden"}`}>
          <AiOutlineLoading3Quarters className="text-light-primary text-6xl animate-spin" />
      </div>
    </div>
    );
}