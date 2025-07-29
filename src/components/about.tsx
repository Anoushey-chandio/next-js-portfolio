"use client";

import React from "react";

const AboutMe = () => {
  return (
    <section
      className="bg-[#f8f8f8] text-[#353a1c] pt-28 pb-16 px-6 lg:px-20 m-4"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/hero1.jpg"
            alt="Anoushey Baig Chandio"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-transparent bg-gradient-to-br from-[#d3d498] to-[#4f5242] p-1"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#4f5242] mb-6 relative inline-block group">
            <span className="relative z-10">About Me</span>
            <span className="absolute left-0 bottom-1 h-1 w-full bg-[#d3d498ad] rounded-full z-0 group-hover:opacity-100 opacity-60 transition-all duration-300"></span>
          </h2>

          <p className="text-base md:text-lg text-[#23241f] leading-relaxed tracking-wide">
            Hi, I'm{" "}
            <span className="font-semibold text-[#75770cc4]">Anoushey Baig Chandio</span>, a creative and fast-learning web developer with a growing skill set in both development and design.
            I'm passionate about crafting clean, responsive, and user-focused websites using{" "}
            <span className="text-[#75770cc4] font-semibold">HTML</span>,{" "}
            <span className="text-[#75770cc4] font-semibold">CSS</span>,{" "}
            <span className="text-[#75770cc4] font-semibold">Tailwind CSS</span>,{" "}
            <span className="text-[#75770cc4] font-semibold">TypeScript</span>, and{" "}
            <span className="text-[#75770cc4] font-semibold">Next.js</span>.
            <br /><br />
            I{" "}
            <span className="text-[#75770cc4] font-semibold">leverage AI tools</span> to streamline my workflow in{" "}
            <span className="text-[#75770cc4] font-semibold">coding and content creation</span>, helping me build efficiently and explore innovative ideas.
            I’ve also completed a certified course in{" "}
            <span className="text-[#75770cc4] font-semibold">Social Media Marketing</span>, and I design content using{" "}
            <span className="text-[#75770cc4] font-semibold">Canva</span>, along with basic video editing skills.
            <br /><br />
            Currently, I’m exploring{" "}
            <span className="text-[#75770cc4] font-semibold">AI chatbot development</span> and always eager to learn new technologies.
            I’m focused, self-driven, and always excited to turn ideas into digital experiences.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-3xl font-bold text-[#4f5242] mb-6 text-center">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {[
            "HTML", "CSS", "Tailwind CSS", "TypeScript",
            "Next.js", "UI/UX Design", "Responsive Design", "Creative Problem Solving",
            "Storytelling", "Digital Marketing", "Canva", "AI Tools"
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-[#d3d498ad] text-[#4f5242] font-semibold py-2 px-4 rounded-2xl shadow hover:shadow-lg hover:bg-[#e4e5be] transition-all duration-200 transform hover:-translate-y-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



