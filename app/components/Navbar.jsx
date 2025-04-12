"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#0b0b0b] border-b border-[#33353F]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-[#b3b3b3]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="hover:text-purple-400 transition duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="text-white">
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

// const HeroSection = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center text-center bg-[#0b0b0b] text-white">
//       <h1 className="text-5xl font-bold">
//         Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Ritu Singh</span>
//       </h1>

//       {/* Typing Animation for "UI/UX Design" */}
//       <TypeAnimation
//         sequence={["UI/UX Design", 2000, "Frontend Developer", 2000, "Creative Coder", 2000]}
//         speed={50}
//         repeat={Infinity}
//         className="text-2xl text-gray-400 mt-2"
//       />

//       <p className="max-w-2xl text-gray-400 mt-4 px-4">
//         I'm a passionate Frontend Developer dedicated to crafting exceptional digital experiences.
//         With expertise in modern web technologies and performance optimization, I create intuitive
//         and responsive solutions that solve real-world problems efficiently.
//       </p>

//       {/* CTA Buttons */}
//       <div className="mt-6 flex space-x-4">
//         <Link href="#contact">
//           <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-md">
//             Get in Touch
//           </button>
//         </Link>
//         <Link href="#projects">
//           <button className="px-6 py-3 border border-gray-400 text-white rounded-full font-semibold">
//             View Projects
//           </button>
//         </Link>
//       </div>

//       {/* Social Icons */}
//       <div className="flex space-x-6 mt-6">
//         <Link href="https://github.com" target="_blank">
//           <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
//         </Link>
//         <Link href="https://linkedin.com" target="_blank">
//           <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
//         </Link>
//       </div>

//       {/* Scroll Down Indicator */}
//       <div className="mt-10 animate-bounce">
//         <span className="text-gray-500 text-3xl">↓</span>
//       </div>
//     </section>
//   );
// };

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
    </>
  );
}
