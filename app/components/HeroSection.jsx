"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full text-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7928ca] to-[#f81ce5]">
          Chinmay S Patil
        </span>
      </h1>

      {/* Typing Animation */}
      <div className="text-xl md:text-3xl mb-6 text-[#b3b3b3]">
        <TypeAnimation
          sequence={[
            "Mechanical Engineer", 2000,
            "Simulation Specialist", 2000,
            "CAD & Design Expert", 2000,
            "AI/ML Researcher", 2000,
            "Full Stack Developer", 2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <p className="max-w-xl text-center text-[#b3b3b3] mb-8 px-4">
        I am a Mechanical Engineering student at VIT Chennai with a minor in AI/ML.
        I specialize in advanced simulation, CAD modeling, and full stack development,
        with proven experience in CFD, deep learning, and innovative design solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="#contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#7928ca] to-[#f81ce5] rounded-md text-white hover:opacity-90 transition"
        >
          Hire Me
        </Link>
        <Link
          href="/CV%20ATS%20Friendly%2025-04-04.pdf"
          className="inline-block px-6 py-3 border border-[#7928ca] rounded-md text-white hover:bg-[#7928ca] transition"
        >
          Download CV
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 text-2xl mt-8">
        <Link href="https://github.com/chinmay-s-patil" target="_blank">
          <FiGithub className="hover:text-[#7928ca] transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/chinmay-shashikant-patil/" target="_blank">
          <FiLinkedin className="hover:text-[#7928ca] transition" />
        </Link>
        <Link href="https://www.youtube.com/@ChinDoesCFD" target="_blank">
          <FiYoutube className="hover:text-[#7928ca] transition" />
        </Link>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8">
        <a href="#next-section">
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
