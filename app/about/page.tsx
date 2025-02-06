"use client";

import { Button } from "@/components/ui/button";
import { Radio, Antenna, CircuitBoard, Waves, Cpu, Network } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const images = {
    hero: "https://images.unsplash.com/photo-1617839625591-e5a789593135?q=80&w=2000&auto=format&fit=crop",
    expertise: [
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800&auto=format&fit=crop", // RF Systems
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800&auto=format&fit=crop", // Wireless
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop",  // Circuit Design
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", // Network Optimization
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", // Firmware
      "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=800&auto=format&fit=crop" //
    ],
    achievements: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop", // Innovation
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=900&auto=format&fit=crop"
    ],
    tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
  };

  const stats = [
    { number: "25+", label: "Years RF Experience" },
    { number: "150+", label: "RF Projects" },
    { number: "35+", label: "RF Patents" },
    { number: "99.9%", label: "Design Accuracy" }
  ];

  const expertise = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[0],
      title: "RF System Engineering",
      description: "Specializing in advanced RF/microwave circuit design and signal integrity analysis",
      tech: ["Power Amplifiers", "RF Filters", "LNAs"]
    },
    {
      icon: <Waves className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[1],
      title: "Wireless Systems",
      description: "Expert development of MIMO systems and beamforming solutions",
      tech: ["5G NR", "MIMO", "mmWave"]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[2],
      title: "RF Circuit Design",
      description: "Custom RF circuit solutions and impedance matching networks",
      tech: ["ADS", "HFSS", "AWR"]
    },
    {
      icon: <Antenna className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[3],
      title: "Antenna Arrays",
      description: "Innovative antenna array designs and phased array systems",
      tech: ["Beamforming", "Array Optimization", "Antenna Theory"]
    },
    {
      icon: <Network className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[4],
      title: "Network Optimization",
      description: "Wireless network planning and optimization for performance",
      tech: ["Network Planning", "RF Testing", "Network Analysis"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[5],
      title: "Firmware Development",
      description: "Low-level firmware development for embedded systems",
      tech: ["Embedded C", "RTOS", "FPGA"]
    }
  ];

  const technologies = [
    "5G/6G", "MIMO Systems", "RF Circuit Design",
    "Antenna Arrays", "mmWave", "RF Testing",
    "Signal Processing", "Power Amplifiers", "Filter Design"
  ];

  const achievements = [
    {
      title: "RF Innovation",
      description: "Pioneering advancements in RF system design and wireless communications",
      points: [
        "Industry-leading RF circuit designs",
        "Advanced MIMO implementations",
        "Novel antenna array solutions"
      ]
    },
    {
      title: "Research Excellence",
      description: "Pushing boundaries in RF and wireless technology research",
      points: [
        "Multiple RF design patents",
        "Published research papers",
        "Industry standard contributions"
      ]
    },
    {
      title: "Technical Leadership",
      description: "Leading the way in RF engineering and wireless system design",
      points: [
        "Expert RF consulting services",
        "Innovative RF product development",
        "RF training and education"
      ]
    },
    {
      title: "Industry Recognition",
      description: "Recognized for excellence in RF engineering and wireless system design",
      points: [
        "Awards for RF innovation",
        "Industry conference presentations",
        "RF technology partnerships"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div className="fixed inset-0 grid grid-cols-6 gap-4 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border-green-500/10 border-[0.5px]"></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 -z-10">
            <Image
              src={images.hero}
              alt="RF Engineering"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <h1 className="text-7xl text-green-600  font-bold tracking-tight mb-8">
            RF Engineering Excellence
          </h1>
          <p className="text-2xl font-light mb-12">
            Leading the future of wireless technology
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} 
                 className="p-6 rounded-lg border border-green-500/20 backdrop-blur-sm 
                           bg-white/40 hover:border-green-500/40 transition group">
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="relative group h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors rounded-lg" />
                </div>
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col">
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tech.map((t, i) => (
                      <span key={i} 
                            className="text-xs px-2 py-1 rounded-full 
                                     bg-black/50 border border-green-500/20 
                                     text-green-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="relative mb-20 py-16">
          <div className="absolute inset-0">
            <Image
              src={images.tech}
              alt="Technologies Background"
              fill
              className="object-cover rounded-lg opacity-20"
            />
            <div className="absolute inset-0 bg-black/80 rounded-lg" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} 
                      className="px-4 py-2 rounded-full bg-black/5 border 
                               border-green-500/20 text-gray-800 
                               hover:text-green-600 hover:border-green-500/40 
                               transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center relative z-10">
          <Button asChild 
                 className="bg-black hover:bg-black/80 text-green-400 
                           border border-green-500/20 
                           hover:border-green-500/40 px-8 py-6 text-lg">
            <Link href="/contact">Discuss Your RF Requirements</Link>
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-green-500/0 to-green-500/20"></div>
        </div>
      </div>
    </main>
  );
}