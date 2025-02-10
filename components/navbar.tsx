"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        {href: "/What-We-Do", label: "What We Do"}
    ];

    const isActive = (path: string) => pathname === path;

    return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 
                      bg-clip-text text-transparent hover:from-green-300 hover:to-green-500 
                      transition-all duration-300"
          >
            DelarTech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium
                          transition-all duration-300 group
                          ${isActive(link.href) 
                            ? 'text-green-400' 
                            : 'text-gray-300 hover:text-green-400'
                          }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                                from-green-400 to-green-600 transform origin-left scale-x-0 
                                transition-transform duration-300 group-hover:scale-x-100
                                ${isActive(link.href) ? 'scale-x-100' : ''}`} 
                />
              </Link>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 
                        hover:to-green-500 transition-all duration-300 ml-4"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded-lg text-gray-400 hover:text-green-400 
                transition-colors duration-300"
    >
      <Menu className="h-6 w-6" />
    </button>
  </div>
</div>

{/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium
                            transition-all duration-300
                            ${isActive(link.href)
                              ? 'bg-green-900/20 text-green-400'
                              : 'text-gray-300 hover:bg-green-900/10 hover:text-green-400'
                            }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 
                          hover:to-green-500 transition-all duration-300 w-full mt-4"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
