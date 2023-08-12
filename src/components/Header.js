import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import {MdOutlineVideoLibrary } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className=" flex mt-5">
      <div className=" mx-40">
        <img
          className=" w-[144px] "
          src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
          alt="LinkedIn Logo"
        />
      </div>
      <div className="flex mx-44hover: cursor-pointer">
        <div className="mx-5">
          <FiTrendingUp className=" fill-black hover:fill-cyan-700 hover:text-cyan-700" />
          <h1>Trending</h1>
        </div>
        <div className="mx-5 ">
          <RiArticleLine className=" fill-black hover:fill-cyan-700 hover:text-cyan-700" />
          <h>Article</h>
        </div>
        <div className="mx-5">
          <MdPeopleAlt className=" fill-black hover:fill-cyan-700  hover:text-cyan-700" />
          <h1>People</h1>
        </div>
        <div className="mx-5">
          <MdOutlineVideoLibrary className=" fill-black hover:fill-cyan-700  hover:text-cyan-700" />
          <h1>Learning</h1>
        </div>
        <div className="mx-5">
          <PiHandbagSimpleFill className=" fill-black hover:fill-cyan-700  hover:text-cyan-700" />
          <h1>Jobs</h1>
        </div>
        <div className="hover: cursor-pointer">
          <button className="mx-5  fill-white hover:bg-slate-400 rounded-full hover:text-black py-[12px] px-[24px]">
            Join Now
          </button>
          <button className=" mx-5 border border-solid fill-white hover:bg-gray-400 border-blue-800 rounded-full text-blue-500 py-[12px] px-[24px]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
