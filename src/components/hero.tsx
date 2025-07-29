"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-20 pb-10 min-h-screen flex items-center justify-center bg-[#fafafa] text-[#4f5242] m-4 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 ">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center lg:text-left space-y-6 m-1">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Hello,
            <br />
            I'm{" "}
            <span className="text-[#535806] text-2xl sm:text-3xl">
              Anoushey Baig Chandio
            </span>
          </h2>

          <p className="text-lg sm:text-2xl font-medium animate-pulse">
            <span className="block">Frontend Developer</span>
            <span className="block text-[#656857]">UI/UX Designer</span>
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#d3d498ad] hover:bg-[#d3d498] text-[#23241f] rounded-2xl shadow-md transition duration-300"
          >
            💬 Get in touch
          </a>
        </div>

      {/* Right Section (Image) */}
<div className="flex-1 mt-6 lg:mt-0 flex justify-center">
  <div className="w-full max-w-[400px] md:max-w-[500px]">
    <Image
      src="/images/hero1.jpg"
      alt="Anoushey Baig Chandio"
      width={500}
      height={500}
      className="w-full h-auto rounded-xl shadow-lg object-cover"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;

