"use client";

import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Heart, Coffee } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "London",
      type: "Full-time"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Contract"
    }
  ];

  const benefits = [
    {
      icon: <Building2 className="w-8 h-8 text-green-500" />,
      title: "Flexible Work",
      description: "Work from anywhere, anytime. We believe in work-life balance."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage."
    },
    {
      icon: <Coffee className="w-8 h-8 text-green-500" />,
      title: "Team Events",
      description: "Regular team building and social events."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Join Our <span className="text-green-500">Team</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Be part of a team that's shaping the future of digital experiences. We're always looking for talented individuals to join our mission.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group bg-zinc-800/50 rounded-2xl p-6 transition-all hover:bg-zinc-800"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-zinc-800/50 rounded-2xl">
                <div className="inline-flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-zinc-800/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see the right position?</h2>
          <p className="text-gray-400 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}