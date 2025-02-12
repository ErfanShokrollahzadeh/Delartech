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
    timeline: "",
    referralSource: "" // Add this line
  });

  const projectTypes = [
    "RF System Design",
    "Antenna Development",
    "PCB Design",
    "RF Testing",
    "Technical Consultation",
    "Research Collaboration"
  ];

  const referralSources = [
    "Search Engine",
    "Social Media",
    "Professional Referral",
    "Conference/Event",
    "Industry Publication",
    "LinkedIn",
    "Other"
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
      details: ["312 Arizona Ave", "Santa Monica, CA 90401"],
      link: "https://www.google.com/maps/place/312+Arizona+Ave,+Santa+Monica,+CA+90401,+USA/@34.0171161,-118.5021195,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2a4cf828fe6fb:0x98334bfc7af2a7bf!8m2!3d34.0171162!4d-118.4972486!16s%2Fg%2F11c21l9g43?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
    },
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
            Contact Us
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Discuss your RF engineering requirements with our expert team
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">GET IN TOUCH</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    className="bg-white/5 border-green-900/20 text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
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
                    required
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
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    className="bg-white/5 border-green-900/20 text-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
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
                    required
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
                    required

                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="referralSource" className="text-white">How did you hear about us?</Label>
                <Select
                  value={formData.referralSource}
                  onValueChange={(value) => setFormData({ ...formData, referralSource: value })}
                >
                  <SelectTrigger className="bg-white/5 border-green-900/20 text-white">
                    <SelectValue placeholder="Select referral source" />
                  </SelectTrigger>
                  <SelectContent>
                    {referralSources.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Project Details</Label>
                <Textarea
                  id="message"
                  className="bg-white/5 border-green-900/20 text-white min-h-[150px]"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
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
        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
          <Image
            src="https://www.worldatlas.com/upload/7d/db/c3/shutterstock-1558058690.jpg"
            alt="Location Map"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="absolute bottom-0 w-full p-8 transform transition-all duration-300 group-hover:translate-y-[-10px]">
              <div className="flex items-center space-x-3 mb-4">
          <MapPin className="w-6 h-6 text-green-500" />
          <h2 className="text-3xl font-bold text-white">Visit Our Office</h2>
              </div>
              <p className="text-gray-300 max-w-xl">
          Schedule a meeting to discuss your RF engineering needs in person. 
          Our state-of-the-art facility is equipped with the latest RF testing equipment.
              </p>
              <Button 
          className="mt-6 bg-green-500/20 border border-green-500 hover:bg-green-500/30 text-white"
          onClick={() => window.open('https://www.google.com/maps/place/312+Arizona+Ave,+Santa+Monica,+CA+90401,+USA/@34.0171161,-118.5021195,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2a4cf828fe6fb:0x98334bfc7af2a7bf!8m2!3d34.0171162!4d-118.4972486!16s%2Fg%2F11c21l9g43?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D', '_blank')}
              >
          <MapPin className="w-4 h-4 mr-2" />
          Get Directions
              </Button>
            </div>
          </div>
          {/* Interactive Elements */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500/60 rounded-full animate-pulse delay-150" />
            <div className="w-3 h-3 bg-green-500/30 rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </main>
  );
}
