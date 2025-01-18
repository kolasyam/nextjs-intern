"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import weather from "/projects/weather-app.jpg";
import { IoCodeSlash } from "react-icons/io5";
import { DiGithubFull } from "react-icons/di";
import todo from "/projects/todo-app.jpg";
import dicegame from "/projects/dice-game.jpg";
import calculator from "/projects/geminiai.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="Projects" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] mb-10">
          projects
        </p>
        <div className="flex flex-wrap -m-4" data-aos="fade-up">
          <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                <Image src={calculator} alt="/" width="700" height="401" />
              </div>
              <div className="p-6 mt-7">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  GeminiAI API chatbot
                </h1>
                {/* <div className='flex flex-row justify-between items-center flex-wrap'>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700 mr-10">reactjs</div>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">Bootstrap</div>
                        
                    </div> */}
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Tailwindcss
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Nextjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Nypescript
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Supabase
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  GeminiAI is an AI-powered chatbot built using Supabase,
                  Next.js, and TailwindCSS, leveraging advanced natural language
                  processing for dynamic conversations. The project integrates
                  an API to provide real-time, context-aware responses across
                  various domains. It demonstrates my proficiency in AI, API
                  integration, and modern front-end development.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://github.com/kolasyam/gemini-ai-chatbot"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center ">
                <Image src={weather} alt="/" width="720" height="401" />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Weather App
                </h1>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    reactjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    tailwindcss
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    nextjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    typescript
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  This weather app utilizes the AccuWeather API to fetch
                  accurate weather data and presents it in a user-friendly
                  interface. The application is responsive, ensuring seamless
                  functionality and optimal user experience across both mobile
                  and desktop devices.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://github.com/kolasyam/Weather-App"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                <Image src={todo} alt="/" width="720" height="401" />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Todo-app
                </h1>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700 mr-10">
                    reactjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Bootstrap
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  This project aims to develop a simple ToDo-list web
                  application using React.js for the frontend and Bootstrap for
                  styling. The app allows users to add, delete, and mark tasks
                  as completed.
                </p>
                <div className="flex justify-center flex-wrap mt-8">
                  <Link
                    href="https://github.com/kolasyam/todo-project"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                <Image src={dicegame} alt="/" width="700" height="401" />
              </div>
              <div className="p-6 mt-1">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Dice-Game
                </h1>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    css
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    javascript
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    html
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  The Dice game project is a two-player game that allows users
                  to roll dice and compete against each other. It incorporates
                  interactive gameplay elements, where each player takes turns
                  rolling the dice and accumulating points. The project
                  showcases my ability to implement simple game logic and
                  enhance user engagement.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://github.com/kolasyam/Dice-Game"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                <Image src={calculator} alt="/" width="700" height="401" />
              </div>
              <div className="p-6 mt-7">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  GeminiAI API chatbot
                </h1>
                <div className='flex flex-row justify-between items-center flex-wrap'>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700 mr-10">reactjs</div>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">Bootstrap</div>
                        
                    </div>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Tailwindcss
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Nextjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Nypescript
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Supabase
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  GeminiAI is an AI-powered chatbot built using Supabase,
                  Next.js, and TailwindCSS, leveraging advanced natural language
                  processing for dynamic conversations. The project integrates
                  an API to provide real-time, context-aware responses across
                  various domains. It demonstrates my proficiency in AI, API
                  integration, and modern front-end development.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://github.com/kolasyam/gemini-ai-chatbot"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
