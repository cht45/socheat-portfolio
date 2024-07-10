import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a0a0a]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-4xl font-bold text-[#fbfbfb]">
          I'm a Full Stack Web Developer
        </h2>
        <p className="text-[#fbfbfb] py-4 max-w-sm">
           I am a recent graduated with 2 years of experiences in web development and design.
          I currently enjoy working on web application using technologies such as HTML, CSS, JS, REACT, and MONGODB.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#0a0a0a] from-cyan-500 to-blue-500 cursor-pointer border-2 border-[#fbfbfb]"
          >
            About Me
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-2/3 md:w-md mx-auto aspect-square">
        <img
          src={me}
          alt="my profile"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;