"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function People() {
  const team = [
    {
      name: "David Chen",
      role: "Creative Director",
      bio: "10+ years of experience in creative direction and brand strategy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      bio: "Passionate about creating beautiful and intuitive user experiences.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Michael Park",
      role: "Technical Lead",
      bio: "Full-stack developer with expertise in modern web technologies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "UX Researcher",
      bio: "Specializes in user research and creating data-driven design solutions.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Frontend Developer",
      bio: "Expert in creating responsive and performant web applications.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Chen",
      role: "Product Manager",
      bio: "Experienced in leading cross-functional teams and delivering successful products.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our <span className="text-green-500">Team</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Meet the talented individuals who make our vision come to life through creativity, innovation, and dedication.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-zinc-800/50 rounded-2xl p-6 transition-all hover:bg-zinc-800"
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-green-500 mb-4">{member.role}</p>
              <p className="text-gray-400 mb-6">{member.bio}</p>
              <div className="flex space-x-4">
                <Link href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-400 mb-8">
            We're always looking for talented individuals to join our growing team.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}