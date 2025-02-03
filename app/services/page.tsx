"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  Radio, CircuitBoard, Cpu, 
  Network, Settings, Server,
  Antenna, Waves, Shield
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF Design Services",
      description: "Expert RF circuit design and optimization for wireless applications",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      features: [
        "Power Amplifier Design",
        "Low Noise Amplifiers",
        "RF Filter Design",
        "Impedance Matching"
      ]
    },
    {
      icon: <Antenna className="w-8 h-8 text-green-500" />,
      title: "Antenna Solutions",
      description: "Custom antenna design and optimization for modern wireless systems",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      features: [
        "MIMO Antenna Arrays",
        "Beamforming Systems",
        "mmWave Antennas",
        "Custom Antenna Design"
      ]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      title: "PCB Design",
      description: "High-frequency PCB layout and signal integrity optimization",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      features: [
        "RF PCB Layout",
        "Signal Integrity",
        "Thermal Management",
        "EMC Compliance"
      ]
    }
  ];

  const consulting = [
    {
      title: "System Architecture",
      description: "RF system architecture design and optimization",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      areas: ["5G/6G Systems", "IoT Networks", "Wireless Infrastructure"]
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on RF and wireless technologies",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900",
      areas: ["Technology Strategy", "System Optimization", "Performance Analysis"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            RF Engineering Services
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive RF solutions from concept to implementation
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
              </div>
              <div className="relative p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Consulting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {consulting.map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.areas.map((area, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 
                                   hover:to-green-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}