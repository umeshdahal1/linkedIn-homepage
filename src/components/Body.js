import React from "react";
import { FcGoogle } from "react-icons/fc";
// import { SimpleSlider } from "./SimpleSlider";


const Body = () => {
  return (
    <main>
      <section className=" flex mx-20">
        <div>
          <h1 className=" text-amber-700 text-5xl mx-20 mt-20">
            Welcome to your proffesional community
          </h1>
          <div className=" flex flex-col mx-20 mt-5">
            <label>Email or Phone</label>
            <div>
              <input className="border-2 border-black w-96 h-12 rounded-lg p-5" />
            </div>
          </div>
          <div className=" flex flex-col mx-20 mt-5">
            <label>Password</label>
            <div>
              <input className="border-2 border-black w-96 h-12 rounded-lg p-5" />
            </div>
          </div>
          <div className=" mx-20 mt-8">
            <h1 className=" font-bold text-blue-400 hover:text-blue-700  hover:underline hover:cursor-pointer ">
              Froget password?
            </h1>
            <button className=" border w-96 h-12 rounded-full bg-blue-600 mt-4  text-white font-bold">
              Sign in
            </button>
          </div>
          <div className=" items-center">
            <h1 className=" mt-4 mx-64">or</h1>

            <button className=" flex items-center justify-center mx-20 mt-5 border border-black w-96 h-12 rounded-full">
              <FcGoogle />
              <h1 className=" mx-2">Continue with Google</h1>
            </button>
            <button className=" items-center mx-20 mt-5 border border-black w-96 h-12 rounded-full">
              <h1>New to LinkedIn? Join Now</h1>
            </button>
          </div>
        </div>

        <div className="mt-20">
          <img
            className=" min-[992px]:"
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="linkedIn-user"
          />
        </div>
      </section>
      <section className=" bg-green-50 flex my-5">
        <div className=" mt-10 mx-40 my-5">
          <h1 className=" text-5xl mb-5">Explore collaborative articles</h1>
          <p2 className=" text-xl">
            We're unlocking community knowledge in a new way. Experts add
            insights directly into each article, started with the help of AI.
          </p2>
        </div>
        <div className=" mt-10 mx-20">
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Marketing
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Public Administration
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Employee Training
          </button>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Health Care
          </button>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Engineering
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Online Marketing
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Talent Management
          </button>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            IT Services
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-green-200">
            Business Administration
          </button>
          <button className=" border border-blue-600 w-28 h-12 rounded-full mx-1 mt-1 hover:bg-green-200">
            Show All
          </button>
        </div>
      </section>
      <section className=" bg-white flex mt-5 my-24">
        <div className=" mt-10 mx-40">
          <h1 className=" text-5xl mb-5">
            Find right job or internship for you
          </h1>
        </div>
        <div className=" mt-10 mx-20">
          <h1 className=" uppercase mb-4">Suggested Search</h1>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1 hover:bg-slate-100">
            Marketing
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Administrative Assistant
          </button>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Operations
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Customer Service
          </button>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Engineering
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Retail Assosicate
          </button>
          <button className=" border border-black w-28 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Finance
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Information Technology
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Business Development
          </button>
          <button className=" border border-black w-48 h-12 rounded-full mx-1 mt-1  hover:bg-slate-100">
            Human Resource
          </button>
          <button className=" border border-black w-28 h-8 rounded-full mx-1 mt-1 hover:bg-slate-100">
            Show more
          </button>
        </div>
      </section>
      <section className=" bg-stone-200 mt-4">
        <div className=" mx-40 flex">
          <h1 className=" text-5xl my-24 text-amber-700">
            Post your job for millions of people to see
          </h1>
          <button className=" my-24 border border-blue-900 hover:bg-blue-50  w-28 h-12  rounded-full ">
            Post a Job
          </button>
        </div>
      </section>
      <section className=" flex bg-orange-50 py-40 px-40 justify-center">
        <div>
          <h1 className="text-5xl text-amber-700">
            Let the right people know you're open to work
          </h1>
          <p className=" text-3xl mt-10 mr-5 ">
            With the Open To Work feature, you can privately tell recruiters or
            publicly share with the LinkedIn community that you are looking for
            new job opportunities.
          </p>
        </div>
        <div className="">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
            alt=""
          />
        </div>
      </section>
     {/* <SimpleSlider/> */}

      <section className=" flex bg-slate-50 items-center justify-around my-10">
        <div className="my-20">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj"
            alt="logo"
          />
          <h1 className=" mt-10 text-3xl">Connect with people who can help</h1>
          <button className=" mt-10 w-48 h-16 border border-black rounded-full hover:bg-slate-200">
            Find people you know
          </button>
        </div>
        <div className="">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv"
            alt="logo"
          />
          <h1 className=" mt-10 text-3xl">
            Learn the skills you need to succeed
          </h1>
          <button className=" mt-10 w-96 h-16 border border-black rounded-lg hover:bg-slate-200">
            Choose a topic to learn about
          </button>
        </div>
      </section>
      <section className=" flex bg-orange-50">
        <div className=" mx-36 my-24 ">
          <h1 className=" text-amber-700  text-3xl my-5">
            Who is LinkedIn for?{" "}
          </h1>
          <p className=" text-3xl my-5">
            Anyone looking to navigate their professional life.
          </p>
          <div className=" flex flex-col my-3">
            <button className=" w-96 h-16 border bg-orange-100 rounded-lg hover:bg-orange-200 text-xl my-2">
              {" "}
              Find a coworker or classmate
            </button>
            <button className="w-96 h-16 border bg-orange-100 rounded-lg hover:bg-orange-200 text-xl my-2">
              Find a new job
            </button>
            <button className="w-96 h-16 border bg-orange-100 rounded-lg hover:bg-orange-200 text-xl my-2">
              {" "}
              Find a course or training
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://static.licdn.com/aero-v1/sc/h/292yd0en6qdvkbezeuj71yu4y "
            alt=""
          />
        </div>
      </section>
      <section className=" bg-slate-300">
        <div className=" flex mx-36 mt-5">
          <img
            className=" h-5 mx-5 mt-10 "
            src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
            alt="LinkedIn Logo"
          />
          <div className=" my-10 mx-20">
            <h1 className=" font-bold">General</h1>
            <ul>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Sign Up
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                About
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Press
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Blog
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Careers
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Developers
              </li>
            </ul>
          </div>
          <div className=" my-10 mx-20">
            <h1 className=" font-bold">Browse LinkedIn</h1>
            <ul>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Learning
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Jobs
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Salary
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Mobile
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Services
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Products
              </li>
            </ul>
          </div>
          <div className=" my-10 mx-20">
            <h1 className=" font-bold">Business Solutions</h1>
            <ul>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Talent
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Marketing
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Sales
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Learning
              </li>
            </ul>
          </div>
          <div className=" my-10 mx-20">
            <h1 className=" font-bold">Directories</h1>
            <ul>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Members
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Jobs
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Companies
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Featured
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Learning
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Posts
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Articles
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Schools
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                News
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                News Letters
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Services
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Products
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                Advice
              </li>
              <li className="hover:text-blue-700 hover:underline hover:cursor-pointer">
                People Search
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
