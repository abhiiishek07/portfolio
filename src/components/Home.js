import React from "react";
import profilePic from "../assets/profile_pic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row ">
        <div className="flex flex-col ">
          <h2 className="text-white text-4xl md:text-7xl font-bold">
            I'm a Frontend Develope<span className="text-yellow-300">r</span>
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            I love building projects on React, MUI and Tailwind CSS. Currently,
            I'm also expanding my skill set by learning Golang to further
            enhance my abilities in back-end development.
          </p>
          <div>
            <button className="group text-white font-bold width-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-orange-500 cursor-pointer">
              Projects{" "}
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={profilePic}
            alt="profile"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
