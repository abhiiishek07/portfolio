import React from "react";
import HtmlImg from "../assets/html.png";
import CssImg from "../assets/css.png";
import JavascriptImg from "../assets/Javascript.png";
import StyledImg from "../assets/styled.png";
import TailwindImg from "../assets/Tailwind.png";
import MuiImg from "../assets/Mui.png";
import ReactImg from "../assets/React.png";
import ReduxImg from "../assets/redux.png";
import FirebaseImg from "../assets/Firebase.png";
import GithubImg from "../assets/github.png";
import GolangImg from "../assets/golang.png";
function Skills() {
  const skillsArr = [
    {
      id: 0,
      src: HtmlImg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 1,
      src: CssImg,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: JavascriptImg,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: StyledImg,
      title: "Styled Components",
      style: "shadow-pink-500",
    },
    {
      id: 4,
      src: TailwindImg,
      title: "Tailwind CSS",
      style: "shadow-sky-300",
    },
    {
      id: 5,
      src: MuiImg,
      title: "Material UI",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: ReactImg,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: ReduxImg,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: FirebaseImg,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: GolangImg,
      title: "Golang",
      style: "shadow-cyan-400",
    },
    {
      id: 10,
      src: GithubImg,
      title: "Github",
      style: "shadow-gray-200",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillsArr.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={
                  "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                  " " +
                  style
                }
              >
                <img src={src} alt="html" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
