"use client";

import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-green-500/20 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Users className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-white text-xl font-bold">Delart</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/people"
                className="text-gray-300 hover:text-white transition-colors"
              >
                People
              </Link>
              <Link
                href="/careers"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
