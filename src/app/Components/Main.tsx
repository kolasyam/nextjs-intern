"use client";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import profile from "/images/mainnextjs.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCodepen } from "react-icons/fa6";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Start the animation when the section is 80% into the viewport
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Main"
      className="text-gray-600 body-font"
      ref={sectionRef}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-9">
          <p className="uppercase text-sm tracking-widest text-indigo-600">
            Hey there, my name is
          </p>
          <h1 className="py-2 text-4xl font-bold md:text-6xl">Syam Manikanta</h1>
          <p className="py-2 text-xl italic md:text-2xl">
            A passionate <span className="text-red-300">Web Developer</span>
          </p>

          <p className="mb-5 leading-relaxed">
            I specialize in creating websites that are not only visually stunning
            but also perform smoothly across different browsers and devices.
          </p>
          <p className="mb-8 leading-relaxed">
          If you scroll down a bit, you can check out some of my recent projects and see what Ive been up to
          </p>
          <div className="flex justify-between w-[90%] md:w-[70%]">
            <Link
              href="https://www.linkedin.com/in/syammanikanta-kola-78307b242/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedin size={33} />
              </div>
            </Link>
            <Link href="https://github.com/kolasyam" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={33} />
              </div>
            </Link>
            <Link href="https://outlook.office.com/mail/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <SiMicrosoftoutlook size={33} />
              </div>
            </Link>
            <Link href="https://codepen.io/Syammanikanta" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaCodepen size={33} />
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-[30%] lg:mr-7 md:w-1/2 w-[50%] hover:scale-105 ease-in duration-300 mt-12">
          <Image src={profile} alt="/" width="720" height="400" />
        </div>
      </div>
    </section>
  );
}
