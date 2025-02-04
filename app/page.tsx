"use client";

import { Button } from "@/components/ui/button";
import { 
  Radio, Book, Cpu, Network, Database,
  CircuitBoard, Waves, Antenna, Shield, 
  Microchip, Server, Laptop 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const heroImage = "https://images.unsplash.com/photo-1617839625591-e5a789593135?q=80&w=2000&auto=format&fit=crop";
  
  const expertise = [
    {
      icon: <Radio />,
      title: "RF System Design",
      description: "Advanced RF/microwave solutions with focus on 5G/6G technologies",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800"
    },
    {
      icon: <CircuitBoard />,
      title: "Hardware Development",
      description: "Custom PCB design and embedded systems solutions",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800"
    },
    {
      icon: <Antenna />,
      title: "Antenna Systems",
      description: "MIMO antenna design and optimization for wireless systems",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800"
    },
    {
      icon: <Network />,
      title: "Network Optimization",
      description: "Wireless network planning and optimization for performance",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800"
    },
    {
      icon: <Microchip />,
      title: "Firmware Development",
      description: "Low-level firmware development for embedded systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
    },
    {
      icon: <Server />,
      title: "Cloud Integration",
      description: "Integration of cloud services for IoT and wireless applications",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=800"
    }
  ];

  const technicalAreas = [
    {
      title: "RF Design & Engineering",
      topics: [
        "RF Circuit Design and Analysis",
        "Signal Integrity and Power Distribution",
        "High-Frequency PCB Layout",
        "Impedance Matching Networks"
      ],
      resources: [
        "RF Circuit Design by Chris Bowick",
        "Analog Devices Technical Guides",
        "IEEE RF Design Papers",
        "Keysight RF Webinars"
      ]
    },
    {
      title: "Embedded Systems",
      topics: [
        "RTOS Development",
        "Device Driver Implementation",
        "Firmware Architecture",
        "Low-Power Design"
      ],
      resources: [
        "Programming Embedded Systems in C/C++",
        "FreeRTOS Documentation",
        "ARM Cortex-M Guides",
        "Linux Device Drivers"
      ]
    },
    {
      title: "Wireless Communications",
      topics: [
        "5G NR Protocol Stack",
        "MIMO Systems Design",
        "OpenRAN Architecture",
        "Network Optimization"
      ],
      resources: [
        "3GPP Technical Specifications",
        "O-RAN Alliance Documentation",
        "Wireless Communications by Rappaport",
        "IEEE 802 Standards"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "Advanced RF Solutions",
      papers: [
        "Novel MIMO Antenna Configurations for 5G",
        "RF Front-end Design Optimization",
        "Beamforming Techniques in mmWave"
      ]
    },
    {
      title: "System Architecture",
      papers: [
        "Hardware Acceleration in RF Processing",
        "Low-latency Network Design",
        "Power-efficient RF Circuits"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 -z-10">
            <Image
              src={heroImage}
              alt="RF Engineering"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            Next-Gen RF Solutions
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
            Pioneering the future of wireless technology through innovative RF design and systems engineering
          </p>
          <Button asChild className="bg-gradient-to-r from-green-500 to-green-600">
            <Link href="/contact">Explore Solutions</Link>
          </Button>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {expertise.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
              </div>
              <div className="relative p-8">
                <div className="text-green-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalAreas.map((area, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-green-500 mb-6">{area.title}</h3>
                <div className="mb-6">
                  <h4 className="text-white mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-3">Resources:</h4>
                  <ul className="space-y-2">
                    {area.resources.map((resource, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <Book className="w-4 h-4 text-green-500" />
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Research & Innovation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-green-500 mb-6">{area.title}</h3>
                <ul className="space-y-4">
                  {area.papers.map((paper, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      {paper}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 
                                   hover:to-green-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">Start Your RF Project</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}