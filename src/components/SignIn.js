import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };
  return (
    <div className=" flex flex-col">
      <div className=" mx-12 my-4">
        <Link to="/">
          <img
            className=" w-[144px] "
            src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
            alt="LinkedIn Logo"
          />
        </Link>
      </div>
      <div className=" w-auto h-auto shadow-2xl items-center justify-center mx-auto my-10 py-10 px-18">
        <div className="flex flex-col mx-4">
          <h1 className=" text-3xl text-start font-bold my-1">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          <p className=" text-xs">Stay updated on your professional world</p>
        </div>
        <form className=" flex flex-col items-center justify-center py-5 ">
          {!isSignInform && <input type="Name" className="border-2 border-black w-96 h-12 rounded-lg p-5 m-auto " placeholder="Full Name" />}
          <input type="Email"
            className="border-2 border-black w-96 h-12 rounded-lg p-5 my-5 "
            placeholder={
              isSignInform ? "Your email or User Name" : "Valid Email Adress"
            }
          />
          <input
          type="Password"
            className="border-2 border-black w-96 h-12 rounded-lg p-5"
            placeholder="Password"
          />
        </form>
        <div className=" flex flex-col items-center justify-center">
          {isSignInform && <button className="font-bold text-blue-400 hover:text-blue-700  hover:underline flex">
            Forget Password?
          </button>}
          <button className=" border w-96 h-12 rounded-full bg-blue-600 mt-4  text-white font-bold">
            {isSignInform ? "Sign in" : "Agree & Join"}
          </button>
        </div>

        <h1 className=" flex flex-col justify-center items-center my-5">or</h1>
        <div>
          <button className=" flex items-center justify-center mx-20 mt-5 border border-black w-80 h-12 rounded-full">
            <FcGoogle />
            <h1 className=" mx-2">
              {isSignInform ? "Continue with Google" : "Sign Up with Google"}
            </h1>
          </button>
          <button className=" flex items-center justify-center mx-20 mt-5 border border-black w-80 h-12 rounded-full">
            <BsApple />
            <h1 className=" mx-2">
              {isSignInform ? "Continue with Apple" : "Sign Up with Apple"}
            </h1>
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <h1 className=" mx-1">
          {isSignInform ? "New to LinkedIn?" : "Already a Registered?"}
        </h1>
        <button
          onClick={toggleSignInForm}
          className=" text-blue-600 font-bold hover:bg-blue-300 rounded-full hover:underline px-3 py-1"
        >
          {isSignInform ? "Join Now" : "Sign In Now"}
        </button>
        {/* <p  ></p> */}
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
