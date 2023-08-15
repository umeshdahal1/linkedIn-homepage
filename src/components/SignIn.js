import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" flex flex-col">
      <div className=" mx-12 my-4">
        <Link to = "/">
        <img
          className=" w-[144px] "
          src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
          alt="LinkedIn Logo"
        /></Link>
        
      </div>
      <div className=" w-auto h-auto shadow-2xl items-center justify-center mx-auto my-10 py-10 px-18">
        <di className="flex flex-col mx-4">
          <h1 className=" text-3xl text-start font-bold my-1">Sign in</h1>
          <p className=" text-xs">Stay updated on your professional world</p>
        </di>
        <form className=" flex flex-col items-center justify-center py-5 ">
          <input className="border-2 border-black w-96 h-12 rounded-lg p-5 my-5 " />
          <input className="border-2 border-black w-96 h-12 rounded-lg p-5" />
        </form>
        <div className=" flex flex-col items-center justify-center">
          <button className="font-bold text-blue-400 hover:text-blue-700  hover:underline flex">
            Forget Password?
          </button>
          <button className=" border w-96 h-12 rounded-full bg-blue-600 mt-4  text-white font-bold">
            Sign in
          </button>
        </div>

        <h1 className=" flex flex-col justify-center items-center my-5">or</h1>
        <di>
          <button className=" flex items-center justify-center mx-20 mt-5 border border-black w-80 h-12 rounded-full">
            <FcGoogle />
            <h1 className=" mx-2">Continue with Google</h1>
          </button>
          <button className=" flex items-center justify-center mx-20 mt-5 border border-black w-80 h-12 rounded-full">
            <BsApple />
            <h1 className=" mx-2">Continue with Google</h1>
          </button>
        </di>
      </div>
      <di className=" flex items-center justify-center ">
        <h1 className=" mx-1">New to LinkedIn? </h1>
        <button className=" text-blue-600 font-bold hover:bg-blue-300 rounded-full hover:underline px-3 py-1">Join Now</button>
        {/* <p  ></p> */}
      </di>

      <Footer />
    </div>
  );
};

export default SignIn;
