"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Add scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/people", label: "People" },
    { href: "/careers", label: "Careers" },
    { href: "/What-We-Do", label: "What We Do" },
  ];

  const isActive = (path: string) => {
    if (!pathname) return false;
    return pathname === path || pathname === `${path}/`;
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-green-500/20 backdrop-blur-md z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-white text-3xl font-bold">Delart</span>
                <div className="relative ml-2">
                  {/* Shadow ball */}
                  <div className="absolute w-5 h-5 rounded-full bg-green-500 -top-2 -right-2" />
                  {/* Main ball */}
                  <div className="relative w-5 h-5 rounded-full bg-green-500/50" />
                </div>
              </Link>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className="relative w-12 h-12 rounded-full hover:bg-green-500/20 transition-all duration-300 flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu 
                className={`absolute w-6 h-6 text-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <X 
                className={`absolute w-6 h-6 text-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Container */}
      <div className="fixed inset-0 z-[90] pointer-events-none">
        {/* Left Panel */}
        <div
          className={`fixed top-0 left-0 w-1/2 h-full bg-black pointer-events-auto transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        />
        {/* Right Panel */}
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-black pointer-events-auto transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        />
        
        {/* Menu Content */}
        <div 
          className={`fixed inset-0 pointer-events-auto ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-opacity duration-300 delay-200`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-100 transition-all py-5 text-4xl font-light transform
                  ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                  ${isActive(link.href) 
                    ? "text-green-500 font-normal scale-110" 
                    : "hover:text-green-400"}
                `}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="h-1 w-full bg-green-500 mt-2 rounded-full" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className={`mt-16 bg-black hover:bg-black/90 text-white text-xl 
              px-12 py-8 h-auto w-64 rounded-[30px] transform transition-all duration-500
              border-2 border-green-500 hover:border-green-400 hover:bg-green-400 hover:text-black
              ${isMenuOpen 
                ? "translate-y-0 opacity-100 scale-100" 
                : "translate-y-full opacity-0 scale-95"
              }
              ${isActive('/contact') ? 'border-green-400 scale-105 shadow-lg shadow-green-500/20' : ''}
              `}
              style={{ transitionDelay: `${navLinks.length * 0.2}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}