"use client";
import React, { useState, useEffect } from "react";
import CADModal from "./CADModal";

const ProjectCard = ({
  title,
  description,
  images = [],
  tags,
  previewUrl,
  modelUrl,
  carousel = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carousel && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [carousel, images]);

  // Determine the image to display: use the currentIndex if carousel is enabled, otherwise display the first image.
  const imageToShow = images.length > 0 ? (carousel ? images[currentIndex] : images[0]) : null;

  return (
    <div className="bg-gray-800 p-4 rounded shadow relative">
      {imageToShow && (
        <img
          src={imageToShow}
          alt={`${title}-image`}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>

      {previewUrl && (
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline block mb-2"
        >
          Preview
        </a>
      )}

      {tags.includes("Design") && modelUrl && (
        <div className="mt-2">
          <CADModal modelUrl={modelUrl} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
