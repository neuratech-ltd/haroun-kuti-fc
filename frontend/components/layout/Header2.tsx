"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/HKM-white.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative w-full bg-logo-black/70 backdrop-blur-md border-b border-white/10 px-6 py-4 md:px-12 flex items-center justify-between min-h-[90px]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-50 h-14 flex items-center justify-center">
              <Image
                width={110}
                height={80}
                src={logo.src}
                alt="Dhaka Athletic Academy"
                className="object-contain "
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`rounded-full border px-6 py-2 text-[15px] font-medium tracking-wide transition-all duration-300 backdrop-blur-sm 
                ${
                  activeItem === item.name
                    ? "border-white bg-white/20 text-white shadow-lg"
                    : "border-white/20 text-white/90 hover:bg-white/10 hover:border-white/40"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#1152D1] hover:border-white/50 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#AE3590] hover:border-white/50 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163s-.233-1.64-.946-2.36c-.905-.95-1.916-.955-2.38-.1c-3.324-.24-8.31-.24-11.635 0-.464-.545-1.475-.55-2.38.1-.713.72-.946 2.36-.946 2.36s-.236 1.914-.236 3.827v1.794c0 1.913.236 3.827.236 3.827s.233 1.64.946 2.36c.905.95 2.08.91 2.61.1.98.093 3.334.24 11.64.24.464-.55 1.475-.545 2.38-.1.713-.72.946-2.36.946-2.36s.236-1.914.236-3.827v-1.794c0-1.913-.236-3.827-.236-3.827zm-14.16 8.27v-6.8l6.804 3.4-6.804 3.4z" />
            </svg>
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white/80 focus:outline-none p-2"
          >
            <svg
              className="h-6 w-6 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden w-full bg-[#111f2c]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-col gap-4 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsOpen(false);
              }}
              className={`rounded-full border text-center py-2.5 text-sm font-medium tracking-wide transition-all 
                ${
                  activeItem === item.name
                    ? "border-white bg-white/20 text-white"
                    : "border-white/10 text-white/80 hover:bg-white/5"
                }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center justify-center gap-4 py-2 border-t border-white/10 mt-2">
            <a
              href="https://facebook.com"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163s-.233-1.64-.946-2.36c-.905-.95-1.916-.955-2.38-.1c-3.324-.24-8.31-.24-11.635 0-.464-.545-1.475-.55-2.38.1-.713.72-.946 2.36-.946 2.36s-.236 1.914-.236 3.827v1.794c0 1.913.236 3.827.236 3.827s.233 1.64.946 2.36c.905.95 2.08.91 2.61.1.98.093 3.334.24 11.64.24.464-.55 1.475-.545 2.38-.1.713-.72.946-2.36.946-2.36s.236-1.914.236-3.827v-1.794c0-1.913-.236-3.827-.236-3.827zm-14.16 8.27v-6.8l6.804 3.4-6.804 3.4z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
