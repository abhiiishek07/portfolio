import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function SocialMedia() {
  const links = [
    {
      id: 0,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/abhishek-k-96abb6210/",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/abhiiishek07",
    },
    {
      id: 2,
      child: (
        <>
          Leetcode
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/abhiiishek07/",
    },
    {
      id: 3,
      child: (
        <>
          gfg
          <SiGeeksforgeeks size={30} />
        </>
      ),
      href: "https://auth.geeksforgeeks.org/user/abhiiishek07/",
    },
    {
      id: 4,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abhi885990@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[28%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialMedia;
