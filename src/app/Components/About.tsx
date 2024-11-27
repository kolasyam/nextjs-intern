"use client";
import React, { useEffect, useRef } from "react";
import profile from "/images/nextjs.svg";
import Image from "next/image";
import { gsap } from "gsap";

export default function About() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(aboutSectionRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      });
      if (textRef.current) {
        gsap.from(Array.from(textRef.current.children), {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="About"
      className="w-full md:h-screen p-2 md:flex md:flex-row flex-col items-center py-16"
      ref={aboutSectionRef}
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-[55%] lg:w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={profile} alt="/" width="720" height="400"></Image>
        </div>
        <div className="col-span-2" ref={textRef}>
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I’m Syam Manikanta Kola, a passionate Web developer with
            experience in building dynamic web applications. I enjoy turning
            ideas into functional and visually appealing products. I’ve worked
            on projects like a GeminiAI Chatbot, where I honed my skills in
            technologies like React.js, Next.js, TailwindCSS, and TypeScript.
          </p>
          <p className="py-2 text-gray-600">
            With a strong foundation in front-end and back-end development, I
            aim to create scalable and efficient applications. I’m always eager
            to learn new technologies and contribute to impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}
