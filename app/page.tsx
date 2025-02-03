"use client";

import { Button } from "@/components/ui/button";
import { Radio, Cpu, Waves } from "lucide-react";
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
            Advanced RF &<br />
            <span className="text-green-500">Wireless Solutions</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
            Pioneering next-generation RF systems, antenna design, and embedded solutions for wireless communications.
          </p>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Radio className="w-12 h-12 text-green-500" />,
                title: "RF System Design",
                description: "Advanced RF/microwave circuit design including power amplifiers, mixers, filters and impedance matching. Expertise in RF simulation and signal integrity analysis."
              },
              {
                icon: <Waves className="w-12 h-12 text-green-500" />,
                title: "Antenna & Wireless",
                description: "Design and optimization of antenna systems, MIMO techniques, beamforming, and radiation pattern analysis using industry-standard tools like HFSS and CST Studio."
              },
              {
                icon: <Cpu className="w-12 h-12 text-green-500" />,
                title: "Embedded Systems",
                description: "Full-stack embedded development including RTOS, drivers, hardware acceleration and real-time processing optimized for wireless applications."
              }
            ].map((item, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Research & Development Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-500">Wireless Technologies</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• 5G NR and OpenRAN architecture development</li>
                <li>• MIMO systems and beamforming optimization</li>
                <li>• RF circuit design and signal integrity</li>
                <li>• Antenna design and EM simulation</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-500">Embedded Systems</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• RTOS and real-time processing</li>
                <li>• Hardware acceleration and FPGA</li>
                <li>• Low-level firmware development</li>
                <li>• PCB design and signal routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Innovate?</h2>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
            <Link href="/contact">Discuss Your RF Project</Link>
          </Button>
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