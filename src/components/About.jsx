import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a0a0a] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#0a0a0a] flex flex-col justify-center items-center w-5/6  border-[#fbfbfb]">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-center pb-4 pl-4">
              <p className="text-6xl font-bold inline border-b-4 border-[#c5c5c5]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4">
            <div className="lg:text-right text-3xl font-bold">
              <p>
              Welcome to my portfolio! I'm Socheat Keo, a dedicated Web Developer 
              focused on turning ideas into engaging visual narratives.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am a web developer with experience in building responsive 
                and scalable web apps. I have a strong understanding of UI/UX principles and practices. 
                In addition to software development, I am also a technical writer, 
                simplifying complex topics and concepts for the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;