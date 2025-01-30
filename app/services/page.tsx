"use client";

import { Button } from "@/components/ui/button";
import { Code, Palette, Globe, Cpu } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Palette className="w-12 h-12 text-green-500" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that deliver exceptional user experiences.",
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping"]
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: "Digital Strategy",
      description: "Strategic solutions to help your business thrive in the digital landscape.",
      features: ["Market Analysis", "Digital Transformation", "Growth Strategy", "Analytics"]
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: "AI Solutions",
      description: "Innovative AI-powered solutions to automate and enhance your business.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help businesses innovate and grow in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-800/50 rounded-2xl p-8 transition-all hover:bg-zinc-800"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}