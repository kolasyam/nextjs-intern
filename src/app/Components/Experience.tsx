// import React from 'react'

// const Experience = () => {
//   return (
//     <div>
//       Experience
//     </div>
//   )
// }

// export default Experience
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="Experience"
      className="w-full lg:h-screen p-6 md:p-12 bg-[#f9fafb] flex items-center"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        {/* Section Header */}
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">
          Where I’ve Worked
        </h2>

        {/* Experience Card */}
        <div
          className="mt-6 p-6 shadow-xl rounded-xl bg-white hover:scale-[1.02] transition-transform ease-in duration-300"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#5651e5]">
                MERN Stack Intern
              </h3>
              <p className="text-gray-700 font-medium">Zentosys</p>
            </div>
            <p className="text-gray-500 italic mt-2 md:mt-0">
              June 2025 – August 2025
            </p>
          </div>

          <div className="mt-4 text-gray-600 leading-relaxed">
            <p className="mb-2">
              Collaborated with the core development team and backend developers
              to design and deploy full-stack web applications.
            </p>
            <p className="mb-2">
              Focused on building responsive, scalable front-end interfaces using{" "}
              <span className="font-semibold">
                React.js, Next.js, TailwindCSS, and TypeScript.
              </span>
            </p>
            <p>
              Worked closely with backend developers to integrate APIs, debug
              issues, and optimize performance for seamless front-end–back-end
              interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
