import React from "react";
import { FcGoogle } from "react-icons/fc";

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
            {" "}
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
      <section></section>
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
      <section>
        <div className=" mx-36 flex my-3 items-center">
          <h1 className=" flex text-xs items-center">
            <img className=" mx-2 h-14" src="data:image/png;base64,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" alt="linkedIn logo" /> &copy;{" 2023"}
          </h1>
          <ul className=" flex mx-2  text-xs ">
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">About</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Accessibility</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">User Agreement</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Privacy Policy</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Cookie Policy</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Copyright Policy</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Brand Policy</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Guest Controls</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Community Guidelines</li>
            <li className=" px-4 hover:text-blue-700 hover:underline hover:cursor-pointer">Language</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Body;
