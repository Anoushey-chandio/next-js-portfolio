"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#fafafa] text-[#23241f] pt-28 px-6 lg:px-20 m-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#4f5242] mb-4 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          Need a personal portfolio or custom website?
I create clean, modern, and responsive websites tailored to your goals.
This is a paid service for individuals and businesses.
Fill out the form below.I’ll get back to you shortly.
        </p>

        {/* ✅ Contact Form (Connected to Formspree) */}
        <form
          action="https://formspree.io/f/xkgbeklz"
          method="POST"
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6 text-left"
        >
          <input type="hidden" name="_subject" value="New Contact Message" />

          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d3d498]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d3d498]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d3d498]"
            ></textarea>
          </div>

          {/* ✅ Styled Send Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#4f5242] to-[#6b6e5a] text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold tracking-wide"
          >
            🚀 Send Message
          </button>
        </form>
      </div>

    <footer className="mt-20 border-t border-gray-300 pt-10 pb-6 text-center">
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6">
    {/* WhatsApp */}
    <a
      href="https://wa.me/923068292369"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center bg-white border border-[#25D366] text-[#25D366] rounded-full shadow-sm hover:bg-[#25D366] hover:text-white transition-all duration-300"
    >
      <FaWhatsapp className="text-xl" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/anoushey-chandio-71264b301"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center bg-white border border-[#076496] text-[#076496] rounded-full shadow-sm hover:bg-[#076496] hover:text-white transition-all duration-300"
    >
      <FaLinkedin className="text-xl" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Anoushey-chandio"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center bg-white border border-[#171515] text-[#171515] rounded-full shadow-sm hover:bg-[#171515] hover:text-white transition-all duration-300"
    >
      <FaGithub className="text-xl" />
    </a>
  </div>

  <p className="text-sm text-[#4f5242]">
    &copy; {new Date().getFullYear()} Anoushey Chandio. All rights reserved.
  </p>
</footer>

    </section>
  );
};

export default Contact;

