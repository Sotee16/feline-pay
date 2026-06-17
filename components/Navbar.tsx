"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-sm text-white w-full">
      {/* Top Banner */}
      <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
        <p>
          Exclusive Price Drop! Hurry,{" "}
          <span className="underline underline-offset-2">
            Offer Ends Soon!
          </span>
        </p>
      </div>

      {/* Navbar */}
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-violet-600">
          FelinePay
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:inline border border-gray-300 px-8 py-2 rounded-full hover:bg-gray-50 active:scale-95 transition-all">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="currentColor"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg text-gray-900">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>

            <button className="border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full text-gray-900">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}