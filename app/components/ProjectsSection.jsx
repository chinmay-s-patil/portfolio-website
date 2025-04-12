"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Guitar Design Project",
    description:
      "Designed a detailed guitar model as part of a first-year modeling course using CAD software.",
    image: ["/images/projects/1.png"],
    tags: ["Design"],
    gitUrl: "",
    previewUrl: "",
    modelUrl: "/models/guitar-project.stl",
    carousel: false
  },
  {
    id: 2,
    title: "Aerodynamics Lab Experiments",
    description:
      "Conducted hands-on experiments with anemometers, Pitot tubes, and wind turbine instrumentation under Dr. Vinayagamurthy.",
    image: "/images/projects/2.png",
    tags: ["Physical",],
    gitUrl: "",
    previewUrl:
      "https://www.youtube.com/playlist?list=PLGVynjVliGdaz7hIhcwvg8gF6SZjPwjnA"
  },
  {
    id: 3,
    title: "CAD Modeling of Wind Tunnel Test Section",
    description:
      "Engineered a 3D model of a wind tunnel section in SolidWorks with 0.01mm tolerance.",
    images:[
      "/images/projects/CAD Modeling of Wind Tunnel Test Section/Actual.jpg",
      "/images/projects/CAD Modeling of Wind Tunnel Test Section/CAD Model.png",
    ],
      tags: ["Design", "Physical"],
    gitUrl: "",
    previewUrl: "",
    modelUrl: "/models/aerodynamics_lab_wind_tunnel_test_compartment.gltf",
    carousel: true
  },
  {
    id: 4,
    title: "Reverse Engineering of S500 Drone",
    description:
      "Captured 3D scans and recreated the S500 drone design in SolidWorks with high precision.",
    images: [
      "/images/projects/Reverse Engineering of a S500 Drone/Disassembled Components.jpg",
      "/images/projects/Reverse Engineering of a S500 Drone/photo_2024-08-21_13-48-46.jpg",
      "/images/projects/Reverse Engineering of a S500 Drone/photo_2024-08-21_13-48-58.jpg",
      "/images/projects/Reverse Engineering of a S500 Drone/photo_2024-08-21_13-48-59.jpg",
      "/images/projects/Reverse Engineering of a S500 Drone/photo_2024-08-21_13-49-01.jpg",
      "/images/projects/Reverse Engineering of a S500 Drone/photo_2024-08-21_13-50-32.jpg",
      "/images/projects/Reverse Engineering of a S500 Drone/photo_2024-08-21_13-54-16.jpg",
    ],
    tags: ["Design", "Physical"],
    gitUrl: "",
    previewUrl: "",
    modelUrl: "/models/s500_drone.gltf",
    carousel: true
  },
  {
    id: 5,
    title: "Hybrid Battery Cooling Optimization",
    description:
      "Developed a thermal management system using TIM, PCM, and liquid coolant, improving cooling efficiency by 67.31%.",
    images: [
      "/images/projects/Battery Thermal Management System/Dual PCM 3C.jpg",
      "/images/projects/Battery Thermal Management System/PCM only HS29 3C.jpg",
      "/images/projects/Battery Thermal Management System/PCM with Serpentine HS36 3C.jpg",
      "/images/projects/Battery Thermal Management System/PCM with Water Cooling HS36 3C.jpg"
    ],
    tags: ["CFD", "Thermal"],
    gitUrl: "",
    previewUrl: "",
    carousel: true
  },
  {
    id: 6,
    title: "Graphite Rupture Strength Prediction",
    description:
      "Built a deep learning model to predict rupture strength of graphite with 98.1% accuracy.",
    image: "/images/projects/6.png",
    tags: ["Deep Learning"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 7,
    title: "Music Language Identification",
    description:
      "Implemented a deep learning model with MFCC feature extraction to identify languages in music with 97% accuracy.",
    image: "/images/projects/7.png",
    tags: ["Deep Learning"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 8,
    title: "Solar Vortex Engine CAD",
    description:
      "Designed a CAD model of a solar vortex engine with 1mm tolerance, establishing a baseline for CFD studies.",
    images: [
        "/images/projects/SVE/CAD Model.png",
        "/images/projects/SVE/Paper Pic.png"
      ],
    tags: ["Design"],
    gitUrl: "",
    previewUrl: "",
    modelUrl: "/models/Aerodynamics Lab Wind Tunnel Test Compartment.stl",
    carousel: true
  },
  {
    id: 9,
    title: "Laser Bed Powder Fusion Simulation",
    description:
      "Simulated melting and solidification in additive manufacturing to optimize LBPF parameters.",
    image: "/images/projects/9.png",
    tags: ["FEA"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 10,
    title: "Immersion Cooling Analysis",
    description:
      "Parametric study on coolant type and inlet velocity, achieving 43.99% improvement in thermal management.",
    image: "/images/projects/10.png",
    tags: ["Thermal", "CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 11,
    title: "Truck Platooning CFD",
    description:
      "Analyzed aerodynamic interactions in truck platooning using OpenFOAM to study drag reduction.",
    image: "/images/projects/11.png",
    tags: ["CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 12,
    title: "Pyrolysis Fuel Yield Optimization",
    description:
      "Created an ML framework to optimize pyrolysis conditions, maximizing fuel yield from plastic waste.",
    image: "/images/projects/12.png",
    tags: ["Deep Learning", "Physical"],
    gitUrl: "",
    previewUrl: ""
  },
  // {
  //   id: 13,
  //   title: "PINN for CFD Simulation",
  //   description:
  //     "Developing a physics-informed neural network to simulate flow around a cylinder with variable geometry.",
  //   image: "/images/projects/13.png",
  //   tags: ["Deep Learning"],
  //   gitUrl: "",
  //   previewUrl: ""
  // },
  {
    id: 14,
    title: "Bullet Impact Simulation",
    description:
      "Performed dynamic simulation in Abaqus Explicit to analyze stress and deformation on a bolted plate.",
    image: "/images/projects/14.png",
    tags: ["FEA"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 15,
    title: "Solar Array Aerodynamics",
    description:
      "Mapped pressure distributions on ground-mounted solar arrays to guide design optimizations.",
    image: "/images/projects/15.png",
    tags: ["CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 16,
    title: "Drone Propeller Downwash CFD",
    description:
      "Simulated downwash effects of a drone propeller to evaluate stability and lift coefficient.",
    image: "/images/projects/16.png",
    tags: ["CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 17,
    title: "Wind Turbine with Vortex Generators",
    description:
      "Compared baseline and vortex generator configurations to assess lift and energy capture improvements.",
    image: "/images/projects/17.png",
    tags: ["CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 18,
    title: "Parapet Roof Solar Panel Aerodynamics",
    description:
      "Investigated wind loads on rooftop panels and parapet effects using custom ABL boundary conditions.",
    image: "/images/projects/18.png",
    tags: ["CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 19,
    title: "Fire Simulation in Multi-Windowed Room",
    description:
      "Used fireFoam to model fire spread and heat transfer with custom turbulence models.",
    image: "/images/projects/19.png",
    tags: ["CFD"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 20,
    title: "Composite Delamination Simulation",
    description:
      "Simulated delamination in composites to study progressive failure and interfacial debonding.",
    image: "/images/projects/20.png",
    tags: ["FEA"],
    gitUrl: "",
    previewUrl: ""
  }
];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tags = ["All", "Design", "CFD", "FEA", "Thermal", "Physical", "Deep Learning"];
  const filtered =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(selectedTag));

  // Define animation variants for the project items.
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="py-12 px-4 sm:px-16 text-white">
      <h2 className="text-center text-4xl font-bold mb-8">Projects</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {tags.map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            isSelected={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3">
        {filtered.map((project, i) => {
          // Normalize image(s) property.
          const normalizedProject = {
            ...project,
            // If there's an 'images' array, use it; otherwise, use the singular 'image'
            images: project.images || [project.image],
            // Ensure carousel is at least false
            carousel: project.carousel || false
          };

          return (
            <motion.li
              key={project.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard {...normalizedProject} />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
