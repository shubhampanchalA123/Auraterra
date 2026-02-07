"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">



      {/* NAVBAR */}
      <div className="bg-white shadow-md fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Auroterra Energy"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-10 font-semibold text-gray-700">
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition">
                About
              </Link>
              <Link href="/products" className="hover:text-blue-600 transition">
                Products
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>

              {/* CTA */}
              <a
                href="https://wa.me/917042997771"
                className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow"
              >
                Get Quote
              </a>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center relative"
              aria-label="Toggle Menu"
            >
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>

        {/* OVERLAY */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute w-full bg-white z-50 transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col border-t">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 border-b font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 border-b font-medium text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 border-b font-medium text-gray-700 hover:bg-gray-100"
            >
              Products
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 border-b font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>

            {/* MOBILE CTA */}
            <a
              href="https://wa.me/917042997771"
              className="m-4 text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition shadow"
            >
              Get Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
