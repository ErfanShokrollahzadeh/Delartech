"use client";

import { Button } from "@/components/ui/button";
import { Menu, Users, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/people", label: "People" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-green-500/20 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Users className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-white text-xl font-bold">Delart</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:bg-green-500/20 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-zinc-900/95 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
)}