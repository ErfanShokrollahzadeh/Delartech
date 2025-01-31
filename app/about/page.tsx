"use client";

import { Button } from "@/components/ui/button";
import { 
  Radio, Cpu, Wifi, WifiIcon, CircuitBoard, 
  Waves, Server, Network 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "15+", label: "Years in RF Design" },
    { number: "100+", label: "Patents Filed" },
    { number: "99.9%", label: "Signal Integrity" },
    { number: "5G/6G", label: "Research" }
  ];

  const expertise = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF Engineering",
      description: "Advanced RF circuit design, mixers, filters, and impedance matching",
      tech: ["ANSYS HFSS", "RF ICs", "Power Amplifiers"]
    },
    {
      icon: <Waves className="w-8 h-8 text-green-400" />,
      title: "Antenna Systems",
      description: "MIMO systems, beamforming, radiation pattern optimization",
      tech: ["CST Studio", "Phased Arrays", "EM Simulation"]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      title: "Embedded Systems",
      description: "RTOS, driver development, low-level firmware",
      tech: ["ARM Cortex-M", "FreeRTOS", "Linux Drivers"]
    }
  ];

  const technologies = [
    "5G NR", "OpenRAN", "FPGA", "RF Design", "Signal Processing",
    "PCB Layout", "MIMO", "Wireless Protocols", "Hardware Acceleration"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            Engineering Innovation
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Pioneering advanced wireless technologies and RF solutions for next-generation communication systems.
          </p>
        </div>

        {/* Stats with Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} 
                 className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-6 
                           hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-500 
                            bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technical Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} 
                   className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8
                             hover:bg-green-900/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-green-900/20 text-green-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} 
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-green-900/10 to-green-800/10 
                              border border-green-900/20 text-gray-300 hover:text-green-400 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Button asChild 
                 className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 
                           hover:to-green-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">Discuss Your RF Project</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}