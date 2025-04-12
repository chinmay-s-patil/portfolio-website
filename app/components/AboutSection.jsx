"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Profile",
    id: "profile",
    content: (
      <div className="space-y-4">
        <p>
          I'm <strong>Chinmay S Patil</strong>, a Bachelor of Mechanical Engineering student at VIT Chennai, graduating in August 2025 with a minor in AI/ML and a CGPA of 8.74. I am passionate about combining engineering fundamentals with advanced simulation and full-stack development to solve complex problems.
        </p>
        <p>
          My journey includes hands-on projects in CFD simulations, deep learning research, and full-stack development internships, where I developed facial recognition APIs and optimized thermal management systems. I thrive on innovation and continuous learning.
        </p>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li><strong>Design Software:</strong> SolidWorks, FreeCAD</li>
        <li><strong>Simulation Software:</strong> Ansys, Simcenter STARCCM+, OpenFOAM, DualSPHysics, Comsol, LS-Dyna, Geomagic DesignX, Abaqus</li>
        <li><strong>Coding Languages:</strong> Python, Java, Ansys Mechanical APDL</li>
        <li><strong>Full Stack:</strong> Node.js, Express, PostgreSQL, Sequelize, React</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-4 space-y-4">
        <li>
          <strong>Full Stack Development Intern</strong> at Appbell Technologies (Sep 2023 – Nov 2023)
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Evaluated and enhanced facial recognition algorithms using Python to optimize attendance tracking.</li>
            <li>Developed and integrated an API to embed facial recognition into existing systems.</li>
            <li>Explored Android application development to improve API accessibility and user experience.</li>
          </ul>
        </li>
        <li>
          <strong>Project Intern</strong> at VIT Chennai (Nov 2023 – Dec 2023)
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Simulated an angled crack in a plate with COMSOL Multiphysics to evaluate the J-Integral in fracture mechanics.</li>
            <li>Compiled a dataset exceeding 172,000 data points to support advanced research.</li>
            <li>Developed machine learning models to predict simulation outcomes with 99.99% accuracy.</li>
          </ul>
        </li>
        <li>
          <strong>Research Intern</strong> at CSIR SERC (Jun 2024 – Jul 2024)
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Executed CFD simulations in the Wind Engineering Lab using OpenFOAM to assess drone propeller efficiency.</li>
            <li>Gained exposure to advanced labs including Wind Engineering, Advanced Materials, and Seismic Testing.</li>
            <li>Learned OpenFOAM independently under the guidance of Keerthana Mohan.</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  const currentTab = TAB_DATA.find((tab) => tab.id === activeTab)?.content;

  return (
    <section id="about" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
        <div className="flex justify-center">
          <Image
            src="/images/Me.png"
            alt="Profile image"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Mechanical Engineering student at VIT Chennai with a strong foundation in AI/ML and a passion for simulation and development. I excel at turning complex challenges into innovative solutions.
          </p>
          <div className="flex mt-8 space-x-4">
            {TAB_DATA.map((tab) => (
              <TabButton
                key={tab.id}
                selectTab={() => handleTabChange(tab.id)}
                active={activeTab === tab.id}
              >
                {tab.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">{currentTab}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
