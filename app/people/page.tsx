"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function People() {
  const team = [
    {
      name: "Alireza Tarighat Mehrabani",
      role: "founder Wireless Seystem",
      bio: "Wireless and RF System Engineer",
      image: "/images/img1.webp",  // Updated path to use local image
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/alireza-tarighat-mehrabani/",
        github: "#"
      }
    },
    {
      name: "Bill Fujimoto",
      role: "RF Engineering",
      bio: " Automation Engineer",
      image: "/images/img2.jpeg",
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/billfujimoto/",
        github: "#"
      }
    },
    {
      name: "Payam Torab",
      role: "Wireless systems",
      bio: "Systems and software | Inviting software developers (all levels)",
      image: "/images/img3.jpeg",
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/ptorab/",
        github: "#"
      }
    },
    {
      name: "Rajesh Rasalkar",
      role: "Technical lead",
      bio: "Technical lead, access, transport, core networks, cloud native networks",
      image: "/images/image-4.jpeg",
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/rajesh-rasalka/",
        github: "#"
      }
    },
    {
      name: "DR. Vignesh Manohar",
      role: "CEO",
      bio: "Delart Canada",
      image: "/images/img-5.jpeg",
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/vignesh-manohar-antenna/",
        github: "#"
      }
    },
    {
      name: "Tim Danford",
      role: "Head of Corporate Strategy",
      bio: "CEO | Board Member| Entrepreneur | Leader | Investor | Advisor | Mentor | Grateful",
      image: "/images/img-6.jpeg",
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/timdanford/",
        github: "#"
      }
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Diagonal Stripes */}
        <div className="absolute inset-0 diagonal-stripes opacity-20" />
        
        {/* Floating Pulsing Circles */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] pulse-bg float-bg" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] pulse-bg float-bg" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] pulse-bg float-bg" style={{ animationDelay: '-1.5s' }} />

        {/* Existing Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/50 to-zinc-900" />

        {/* Updated Hardware-like Elements with additional lines and balls */}
        {/* Existing elements */}
        <div className="absolute top-10 left-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-28 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-5 right-1/4 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-5 left-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-2/3 left-1/2 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        {/* Additional lines */}
        <div className="absolute top-20 right-1/2 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        {/* Additional bouncing balls */}
        <div className="absolute top-1/3 right-5 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
      </div>

      {/* Background Dots */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
        key={i}
        className="absolute w-1 h-1 bg-green-100/10 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
          />
        ))}
      </div>
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
        key={i}
        className="absolute border border-green-400/10 rounded-full"
        style={{
          width: `${(i + 1) * 20}%`,
          height: `${(i + 1) * 20}%`,
        }}
          ></div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative">
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Meet Our <span className="text-green-500">Team</span>
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
                  <Link href={member.social.twitter} className="text-gray-300 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href={member.social.github} className="text-gray-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
                <Link 
                  href={`/people/${encodeURIComponent(member.name)}`}
                  className="mt-4 block text-sm text-gray-400 hover:text-green-500 transition-colors">
                  More Info
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text mb-4">Want to Join Our Team?</h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals to join our growing team.
            </p>
            <Button asChild className="bg-black hover:bg-green-400 hover:text-black text-white 
                           border border-green-500 
                           hover:border-green-500/40 px-8 py-6 text-lg">
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}