"use client";
// import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import weather from "/projects/weather-app.jpg";
import { IoCodeSlash } from "react-icons/io5";
import { DiGithubFull } from "react-icons/di";
import todo from "/projects/todo-app.jpg";
import dicegame from "/projects/dice-game.jpg";
import calculator from "/projects/geminiai.png";
import tasktracker from "/projects/task tracker.png";
import listsystem from "/projects/list system.png";
import restaurent from "/projects/restaurent.png";
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
              <div className="lg:h-48 md:h-36 w-full object-cover object-center ">
                <Image src={listsystem} alt="/" width="720" height="407" />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  List Management System
                </h1>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Mongodb
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Express.js
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Next.js
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Node.js
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  The List Management System is a full-stack web app where
                  admins can upload CSV files, which are then parsed and stored
                  in MongoDB. <br />
                  Admins can distribute the list entries as tasks to agents, and
                  agents can create sub-agents to delegate work. <br />
                  The app includes role-based login using JWT, task tracking,
                  and dashboards for both admins and agents.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    // href="https://euphonious-phoenix-5d9ecd.netlify.app/"
                    href="https://list-project-frontend-sjbl.vercel.app/"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      {/* <DiGithubFull size={30} /> */}
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                <Image src={tasktracker} alt="/" width="720" height="401" />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Task Tracker Application
                </h1>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Mongodb
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Express.js
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    React.js
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Node.js
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  Users can create tasks, write what needs to be done, set
                  deadlines, and assign them to others.
                  <br /> It Shows the current status of each task (like To Do,
                  In Progress, or Done) and sends reminders when needed. <br />A
                  simple screen where users can see all tasks and filter them by
                  person, status, or due date.
                </p>
                <div className="flex justify-center flex-wrap mt-8">
                  <Link
                    // href="https://task-tracker-frontend-3jwc.onrender.com/"
                    href="https://task-tracker-frontend-4vlc.vercel.app/"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      {/* <DiGithubFull size={30} /> */}
                      Link
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
                  interface. <br />
                  The application is responsive, ensuring seamless functionality
                  and optimal user experience across both mobile and desktop
                  devices.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://weather-app-nextjs-seven-rho.vercel.app/"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      {/* <DiGithubFull size={30} /> */}
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center ">
                <Image src={restaurent} alt="/" width="720" height="401" />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Restaurant Table Booking System
                </h1>
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    reactjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Node.js
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    nextjs
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Express.js
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  The Restaurant Table Booking System is a full-stack web app
                  built with Next.js and Node.js/Express that lets users reserve
                  tables by selecting a date, time, and number of guests. <br />
                  It validates user input, checks for slot availability, and
                  prevents double bookings. After booking, a confirmation with
                  reservation details is shown.
                  <br /> The app is fully responsive and includes a calendar
                  view for visual slot selection. Basic backend APIs handle
                  creating, fetching, and deleting bookings.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://restaurant-frontend-ejph.vercel.app/"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      {/* <DiGithubFull size={30} /> */}
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
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
          </div> */}
        <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="lg:h-48 md:h-36 w-full object-cover object-center">
                <Image src={calculator} alt="/" width="700" height="401" />
              </div>
              <div className="p-6 mt-7">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  GeminiAI API Clone
                </h1>
                {/* <div className='flex flex-row justify-between items-center flex-wrap'>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700 mr-10">reactjs</div>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">Bootstrap</div>
                        
                    </div> */}
                {/* <div className="flex flex-row justify-between items-center flex-wrap">
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
                </div> */}
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Next.js
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Typescript
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    tailwindCSS
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    reactjs
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  {/* GeminiAI is an AI-powered chatbot built using Supabase,
                  Next.js, and TailwindCSS, leveraging advanced natural language
                  processing for dynamic conversations. The project integrates
                  an API to provide real-time, context-aware responses across
                  various domains. It demonstrates my proficiency in AI, API
                  integration, and modern front-end development. */}
                  This project is a clone of Google’s Gemini AI interface that
                  allows users to chat with an AI model using Google’s Gemini
                  API, similar to GeminiAI.
                  <br />
                  This project helped me understand how to integrate large
                  language models into web apps, manage chat state, and build a
                  real-time, interactive frontend using Next.js
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://github.com/kolasyam/gemini-ai-chatbot"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                      {/* Link */}
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
              <div className="p-6 mt-7">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Dice-Game
                </h1>
                {/* <div className='flex flex-row justify-between items-center flex-wrap'>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700 mr-10">reactjs</div>
                        <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">Bootstrap</div>
                        
                    </div> */}
                {/* <div className="flex flex-row justify-between items-center flex-wrap">
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
                </div> */}
                <div className="flex flex-row justify-between items-center flex-wrap">
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    HTML
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    CSS
                  </div>
                  <div className="text-white bg-indigo-500 rounded-md px-2 hover:bg-indigo-700">
                    Javascript
                  </div>
                </div>
                <p className="leading-relaxed mb-3">
                  {/* GeminiAI is an AI-powered chatbot built using Supabase,
                  Next.js, and TailwindCSS, leveraging advanced natural language
                  processing for dynamic conversations. The project integrates
                  an API to provide real-time, context-aware responses across
                  various domains. It demonstrates my proficiency in AI, API
                  integration, and modern front-end development. */}
                  The Dice game project is a two-player game that allows users
                  to roll dice and compete against each other. It incorporates
                  interactive gameplay elements, where each player takes turns
                  rolling the dice and accumulating points. The project
                  showcases my ability to implement simple game logic and
                  enhance user engagement.
                </p>
                <div className="flex justify-center flex-wrap">
                  <Link
                    href="https://gemini-ai-chatbot-eqmj.vercel.app/"
                    passHref
                    target="_blank"
                  >
                    <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-400 rounded text-lg">
                      <DiGithubFull size={30} />
                      {/* Link */}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="p-4 md:w-1/3 hover:scale-105 ease-in duration-300">
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
          </div> */}
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
