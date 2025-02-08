"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, Phone, MapPin, Globe, Send,
  Radio, CircuitBoard, Antenna, Network 
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    phone: "",
    budget: "",
    timeline: ""
  });

  const projectTypes = [
    "RF System Design",
    "Antenna Development",
    "PCB Design",
    "RF Testing",
    "Technical Consultation",
    "Research Collaboration"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: "Email",
      details: ["info@delartech.com", "support@delartech.com"],
      link: "mailto:info@delartech.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      title: "Location",
      details: ["100 Technology Drive", "Boston, MA 02116"],
      link: "https://maps.google.com"
    }
  ];

  const expertise = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF Design",
      description: "Custom RF solutions and system optimization"
    },
    {
      icon: <Antenna className="w-8 h-8 text-green-500" />,
      title: "Antenna Systems",
      description: "Advanced antenna design and testing"
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      title: "PCB Design",
      description: "High-frequency PCB layout and optimization"
    },
    {
      icon: <Network className="w-8 h-8 text-green-500" />,
      title: "System Integration",
      description: "End-to-end RF system integration"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Hardware-like Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-1/4 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-16 right-1/3 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-8 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-16 right-1/4 w-28 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/3 left-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2000"
              alt="Contact Us"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <h1 className="text-6xl p-2 md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            Let's Work Together
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Discuss your RF engineering requirements with our expert team
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Project Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    className="bg-white/5 border-green-900/20 text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white/5 border-green-900/20 text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    className="bg-white/5 border-green-900/20 text-white"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    className="bg-white/5 border-green-900/20 text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-white">Project Type</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="bg-white/5 border-green-900/20 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white">Budget Range</Label>
                  <Input
                    id="budget"
                    className="bg-white/5 border-green-900/20 text-white"
                    placeholder="e.g., $50,000 - $100,000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-white">Project Timeline</Label>
                  <Input
                    id="timeline"
                    className="bg-white/5 border-green-900/20 text-white"
                    placeholder="e.g., 3-6 months"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Project Details</Label>
                <Textarea
                  id="message"
                  className="bg-white/5 border-green-900/20 text-white min-h-[150px]"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 
                         hover:from-green-600 hover:to-green-700 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-xl p-6
                           hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Areas of Expertise */}
            <div className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Expertise</h2>
              <div className="grid gap-6">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-white/5 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2000"
            alt="Location Map"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Visit Our Office</h2>
              <p className="text-gray-300">
                Schedule a meeting to discuss your RF engineering needs in person
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
