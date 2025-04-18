"use client";

import React from "react";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Appbell Technologies",
    date: "Sep 2023 – Nov 2023",
    certificate: "Certificate",
    certificateLink: "#",
    points: [
      "Evaluated and enhanced facial recognition algorithms using Python to optimize attendance tracking.",
      "Developed and integrated an API to embed facial recognition into existing systems.",
      "Explored Android application development to improve API accessibility and user experience.",
    ],
  },
  {
    role: "Project Intern",
    company: "VIT Chennai",
    date: "Nov 2023 – Dec 2023",
    certificate: "Certificate",
    certificateLink: "#",
    points: [
      "Simulated an angled crack in a plate with COMSOL Multiphysics to evaluate the J-Integral in fracture mechanics.",
      "Compiled a dataset exceeding 172,000 data points to support advanced research.",
      "Developed machine learning models and Neural Networks to predict simulation outcomes with 99.99% accuracy.",
    ],
  },
  {
    role: "Research Intern",
    company: "CSIR SERC",
    date: "Jun 2024 – Jul 2024",
    certificate: "Certificate",
    certificateLink: "#",
    points: [
      "Gained exposure to advanced labs including Wind Engineering, Advanced Materials, and Seismic Testing.",
      "Learned OpenFOAM independently under the guidance of Keerthana Mohan.",
      "Executed CFD simulations in the Wind Engineering Lab using OpenFOAM to assess drone propeller efficiency.",
    ],
  },
  {
    role: "Research Intern",
    company: "NCMAD Lab, IISc Bangalore",
    date: "Apr 2025 – Current",
    certificate: "Offer Letter",
    certificateLink: "#",
    points: [
      "Given the opportunity to join the Aerodynamics Sub Team in NCMAD Lab.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <ul className="list-disc pl-4 space-y-8">
          {experiences.map((exp, idx) => (
            <li key={idx}>
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <strong>{exp.role}</strong> at {exp.company}
                </div>
                <div className="flex space-x-6 text-sm text-[#ADB7BE]">
                  <span>{exp.date}</span>
                  <a
                    href={exp.certificateLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.certificate}
                  </a>
                </div>
              </div>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
