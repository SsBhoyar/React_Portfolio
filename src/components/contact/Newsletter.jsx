import React from "react";
import { FaStar } from "react-icons/fa";
import {
  MdAlternateEmail,
  MdVisibilityOff,
  MdVisibility,
} from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { useState } from "react";

const Newsletter = () => {
  const [showPwd , setShowPwd] = useState(false);
  const [inputType, setInputType] = useState("password");
  return (
    <>
      <section className="bg-rose-100 dark:bg-zinc-800 py-10 px-8 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* First half */}
          <div className="w-full md:w-1/2 lg:pl-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gap-2 text-black dark:text-slate-200">
              <ImNewspaper size={50} className="text-fuchsia-500 inline-block mr-3 align-text-bottom" />
              Sign up for our weekly newsletter
            </h2>

            <p className="text-left text-gray-600  dark:text-gray-500 mt-4 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            
            <div className="mt-4">
              <p className="text-gray-800 dark:text-gray-400 font-semibold">
                Trusted by over 100,000+ businesses and individuals
              </p>
              <div className="flex items-center mt-2">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-gray-800 dark:text-gray-400 text-xs font-semibold">
                    4.8/5 . 3420 Reviews
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Second Half */}
          <div className="mt-10 lg:mt-0 w-full md:w-1/2 ">
            <form className="flex justify-center">
              <div className="flex flex-col w-full max-w-md space-y-4">
                <div className="relative">
                  <input
                    className=" w-full rounded-md border-2 border-gray-400 bg-transparent py-2 px-3 text-sm placeholder:font-semibold dark:placeholder:text-orange-600 caret-orange-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-amber-700 dark:text-gray-50 dark:focus:ring-amber-500 dark:focus:ring-offset-gray-900"
                    type="email"
                    placeholder="Email"
                  />
                  <MdAlternateEmail
                    size={28}
                    className="absolute right-2 bottom-1 p-1 rounded-md bg-rose-100 dark:bg-zinc-900 text-amber-500  hover:bg-red-500/20"
                  />
                </div>
                <div className="relative">
                  <input
                    type={inputType}
                    name=""
                    id=""
                    placeholder="Password"
                    className="py-2 px-3 w-full rounded-md bg-transparent border-2 border-gray-400 text-sm placeholder:font-semibold dark:placeholder:text-orange-600 caret-orange-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-amber-700 dark:text-gray-50 dark:focus:ring-amber-500 dark:focus:ring-offset-gray-900"
                  />
                  <span className="absolute bottom-1 right-3 bg-rose-100 dark:bg-zinc-900 rounded-md text-amber-500 hover:bg-red-400/20"
                    
                  >
                    {
                      showPwd === false ? 
                        <MdVisibility size={24} 
                          onClick={() => (setShowPwd(!showPwd) , setInputType('text'))}
                        />
                         : 
                        <MdVisibilityOff size={24} 
                          onClick={() => (setShowPwd(!showPwd) , setInputType('password'))}
                        />
                    }
                  </span>
                </div>

                <button className="w-full active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:from-pink-600 dark:hover:to-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-purple-700 disabled:pointer-events-none dark:focus:ring-offset-gray-900 bg-indigo-600 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4
                
                 bg-gradient-to-r from-pink-500 to-purple-600">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2 text-center text-gray-600 dark:text-gray-400 text-sm">
              By signing up, you agree to our terms of service and privacy
              policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
