"use client";

import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#d3d498] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-16 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            My Portfolio
          </h2>
        </div>

        {/* Navigation */}
        <nav className="relative">
          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2">
            <button
              onClick={toggleMenu}
              className="text-white font-bold text-3xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 lg:gap-6 items-center">
            <li>
              <Link href="/" onClick={closeMenu} className="hover:text-[#535806]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu} className="hover:text-[#535806]">
                About
              </Link>
            </li>
            <li>
              <Link href="/service" onClick={closeMenu} className="hover:text-[#535806]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={closeMenu} className="hover:text-[#535806]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu} className="hover:text-[#535806]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden absolute right-0 top-14 bg-[#d3d498] text-white w-64 rounded shadow-lg p-4 z-50 space-y-4">
              <li>
                <Link href="/" onClick={closeMenu} className="hover:text-[#535806]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu} className="hover:text-[#535806]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={closeMenu} className="hover:text-[#535806]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={closeMenu} className="hover:text-[#535806]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu} className="hover:text-[#535806]">
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;


