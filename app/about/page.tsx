"use client";

import { Button } from "@/components/ui/button";
import { Award, Users, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do."
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Innovation",
      description: "We push boundaries and embrace new technologies."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="text-green-500">Delart</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We're a team of innovators, creators, and problem-solvers dedicated to transforming ideas into reality.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2013, Delart began with a simple mission: to create digital experiences that matter. What started as a small team of passionate developers has grown into a full-service digital agency.
            </p>
            <p className="text-gray-400 mb-6">
              Today, we work with clients worldwide, helping them transform their digital presence and achieve their business goals through innovative solutions and strategic thinking.
            </p>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="/contact">Work with Us</Link>
            </Button>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-zinc-800/50 rounded-2xl">
                <div className="inline-flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}