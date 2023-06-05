import React from "react";
import DSA180 from "../assets/180dsa.png";
import Devsfordev from "../assets/devsfordev.png";
import RecipeFinder from "../assets/recipeFinder.png";
import Youtube from "../assets/youtube.png";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function Projects() {
  const projectsRef = [
    {
      id: 0,
      title: "180dsa",
      src: DSA180,
      githubLink: "https://github.com/abhiiishek07/180DSA",
      liveLink: "https://180dsa.netlify.app/",
    },
    {
      id: 1,
      title: "DevsForDev",
      src: Devsfordev,
      githubLink: "https://github.com/abhiiishek07/devs_for_dev",
      liveLink: "https://devsfordev.netlify.app/",
    },
    {
      id: 2,
      title: "Basic Youtube",
      src: Youtube,
      githubLink: "https://github.com/abhiiishek07/grocare_assignment",
      liveLink: "https://grocaretube.netlify.app/",
    },
    {
      id: 3,
      title: "Recipe Finder",
      src: RecipeFinder,
      githubLink: "https://github.com/abhiiishek07/recipefinder",
      liveLink: "https://abhiiishek07.github.io/recipefinder/recipefinder",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 md:px-0">
          {projectsRef.map(({ id, title, src, githubLink, liveLink }) => {
            return (
              <div className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt="project"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className="px-4 py-2 mt-2 text-xl">{title}</p>
                <div className="flex items-center justify-center mb-1">
                  <a
                    className="w-1/2 px-6  m-4 duration-200 hover:scale-105  flex justify-center items-center cursor-pointer "
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbWorld size={33} />
                  </a>
                  <a
                    className="w-1/2 px-6  m-4 duration-200 hover:scale-105 text-white  flex justify-center items-center cursor-pointer "
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
