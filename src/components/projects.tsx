"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    link: "https://static-resume-by-anoushey.vercel.app/",
    image: "/images/r-static.jpg",
    description:
      "Built using HTML, CSS, and TypeScript. A clean and responsive static resume website showcasing professional details in an elegant layout.",
  },
  {
    link: "https://editable-resume-by-anoushey.vercel.app/",
    image: "/images/e-resume.jpg",
    description:
      "Developed with HTML, CSS, and TypeScript. Features editable fields for a dynamic and customizable resume experience.",
  },
  {
    link: "https://e-commerce-anoushey-project.vercel.app/",
    image: "/images/ui-c.jpg",
    description:
      "Designed a static UI for a clothing e-commerce landing page using Next.js and Tailwind CSS with clean design aesthetics.",
  },
  {
    link: "https://travel-web-anoushey-asignment.vercel.app/",
    image: "/images/travel.jpg",
    description:
      "Created using Next.js and Tailwind CSS. A visually appealing travel web UI with a responsive grid layout.",
  },
  {
    link: "https://uiux-hackathon-anoushey.vercel.app/",
    image: "/images/f-ui.jpg",
    description:
      "Crafted using Next.js and Tailwind CSS. A modern furniture store UI with a focus on layout, spacing, and responsive design.",
  },
  {
    link: "https://hackathon-e-commerce-pearl.vercel.app/",
    image: "/images/ff-ui.jpg",
    description:
      "Developed a fully functional e-commerce platform with Add to Cart feature using Sanity, Next.js, and Tailwind CSS. Demonstrates integration of headless CMS and dynamic routing.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative pt-32 scroll-mt-32 bg-[#fafafa] py-28 px-4 sm:px-6 lg:px-20 z-10 m-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#4f5242]">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#d3d498ad] rounded-2xl shadow-md hover:shadow-[#2C3E50]/40 transition duration-300 overflow-hidden"
            >
              <div className="w-full h-60 relative">
                <Image
                  src={project.image}
                  alt="Project Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-[#656857]">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



