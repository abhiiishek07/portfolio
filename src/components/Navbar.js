import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Navbar() {
  const [crossBar, setCrossBar] = useState(false);
  const links = [
    {
      id: 0,
      link: "Home",
    },
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Projects",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 ">
      <div>
        <h1 className="text-5xl font-signature ml-2 cursor-pointer">
          <Link to="Home" smooth duration={500}>
            Abhishek
          </Link>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200  "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setCrossBar(!crossBar)}
      >
        {crossBar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {crossBar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer font-medium py-6 text-4xl "
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setCrossBar(!crossBar)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
