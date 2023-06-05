import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-fit md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Abhishek, a final-year B.Tech student in Computer and
          Communication Engineering at Manipal University Jaipur. With a passion
          for frontend development, I specialize in creating immersive user
          experiences through clean and responsive web design. Beyond frontend
          development, I have developed a keen interest in solving data
          structure problems. The challenge of analyzing algorithms, optimizing
          code efficiency, and finding elegant solutions drives me to
          continually enhance my problem-solving skills.
        </p>
        <p className="text-xl mt-8">
          My journey in web development has equipped me with a strong foundation
          in HTML, CSS, and JavaScript. I have worked extensively with React JS
          to build dynamic and interactive websites. I believe in the power of
          combining aesthetics and functionality to craft visually appealing and
          user-friendly interfaces.
        </p>
      </div>
    </div>
  );
}

export default About;
