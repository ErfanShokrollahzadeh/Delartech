"use client";

import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FloatingElement {
  top: number;
  left: number;
  duration: number;
}

export default function Home() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const elements = Array.from({ length: 10 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Meet The Bright<br />
            <span className="text-green-500">Minds Of Delart</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
            We're a team of passionate individuals dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Chen",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              },
              {
                name: "Sarah Johnson",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
              },
              {
                name: "Michael Park",
                role: "Technical Lead",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 p-6 transition-all hover:bg-zinc-800">
                <div className="aspect-square overflow-hidden rounded-xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-green-500/20 rounded-full"
            style={{
              top: `${element.top}%`,
              left: `${element.left}%`,
              animation: `float ${element.duration}s infinite linear`
            }}
          />
        ))}
      </div>
    </main>
  );
}