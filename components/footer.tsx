
"use client";

import { Button } from "@/components/ui/button";
import { 
  Radio, Antenna, CircuitBoard, 
  Waves, Cpu, Network 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const stats = [
    { number: "25+", label: "Years RF Experience" },
    { number: "150+", label: "RF Projects" },
    { number: "35+", label: "RF Patents" },
    { number: "99.9%", label: "Design Accuracy" }
  ];

  // Local fallback images that exist in /public/images
  const expertiseImages = [
    "/images/img-15.jpg",
    "/images/img-16.jpg",
    "/images/img-17.jpg",
  ];

  const achievementImages = [
    "/images/img-18.jpg",
    "/images/img-19.jpg",
  ];

  const expertise = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF System Engineering",
      description: "Specializing in advanced RF/microwave circuit design and signal integrity analysis",
      tech: ["Power Amplifiers", "RF Filters", "LNAs"]
    },
    {
      icon: <Waves className="w-8 h-8 text-green-500" />,
      title: "Wireless Systems",
      description: "Expert development of MIMO systems and beamforming solutions",
      tech: ["5G NR", "MIMO", "mmWave"]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      title: "RF Circuit Design",
      description: "Custom RF circuit solutions and impedance matching networks",
      tech: ["ADS", "HFSS", "AWR"]
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
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section with Background Image */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/rf-hero-bg.jpg"
              alt="RF Engineering Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            RF Engineering Excellence
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Leading the future of wireless technology through innovative RF solutions and expert system design.
          </p>
        </div>

        {/* Stats Section */}
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

        {/* Expertise Section with Images */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} 
                   className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8
                             hover:bg-green-900/20 transition-all duration-300">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={expertiseImages[index % expertiseImages.length]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
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

        {/* Achievements Section with Images */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} 
                   className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8
                             hover:bg-green-900/20 transition-all duration-300">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={achievementImages[index % achievementImages.length]}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-500 mb-4">{achievement.title}</h3>
                <p className="text-gray-400 mb-6">{achievement.description}</p>
                <ul className="space-y-2">
                  {achievement.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section with Background Image */}
        <div className="relative mb-20 p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/tech-bg.jpg"
              alt="RF Technologies Background"
              fill
              className="object-cover opacity-10"
            />
          </div>
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

        {/* Contact CTA */}
        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 
                                   hover:to-green-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">Discuss Your RF Requirements</Link>
          </Button>
        </div>
      </div>
      <footer className="bg-zinc-900"> {/* change from class to className */}
        <div className="container"> {/* change from class to className */}
          {/* ...rest of footer content... */}
        </div>
      </footer>
    </main>
  );
}