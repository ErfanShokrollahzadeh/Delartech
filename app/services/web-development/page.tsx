"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  Code, Globe, Layout, Database,
  Layers, Cpu, Cloud, Shield,
  Monitor, Terminal, Wifi, Radio
} from "lucide-react";

export default function WebDevelopment() {
  const services = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF Monitoring Dashboards",
      description: "Real-time visualization of RF system performance",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      features: [
        "Real-time Signal Monitoring",
        "Performance Analytics",
        "Interactive Visualizations",
        "System Health Tracking"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "RF Control Interfaces",
      description: "Web-based control systems for RF equipment",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      features: [
        "Remote System Control",
        "Equipment Configuration",
        "Parameter Management",
        "User Access Control"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Data Management Platforms",
      description: "Custom platforms for RF data analysis and storage",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      features: [
        "Data Collection",
        "Analysis Tools",
        "Report Generation",
        "Archive Management"
      ]
    }
  ];

  const technologies = [
    {
      title: "Frontend Development",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1000",
      stack: [
        "React/Next.js",
        "TypeScript",
        "WebGL/Three.js",
        "D3.js for Visualizations"
      ]
    },
    {
      title: "Backend Solutions",
      image: "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=1000",
      stack: [
        "Node.js/Python",
        "WebSocket Protocol",
        "RESTful APIs",
        "Real-time Data Processing"
      ]
    },
    {
      title: "Cloud Integration",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      stack: [
        "AWS/Azure Services",
        "Cloud Data Storage",
        "Serverless Functions",
        "Edge Computing"
      ]
    }
  ];

  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-green-500" />,
      title: "Responsive Design",
      description: "Mobile-first interfaces that work across all devices"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Secure Access",
      description: "Enterprise-grade security for sensitive RF data"
    },
    {
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      title: "API Integration",
      description: "Seamless connection with RF equipment and systems"
    },
    {
      icon: <Wifi className="w-6 h-6 text-green-500" />,
      title: "Real-time Updates",
      description: "Live data streaming and instant system feedback"
    }
  ];

  const developmentProcess = [
    {
      title: "Requirements Analysis",
      steps: [
        "System Requirements Gathering",
        "User Interface Planning",
        "Technology Stack Selection",
        "Architecture Design"
      ]
    },
    {
      title: "Development & Testing",
      steps: [
        "Agile Development Process",
        "Regular Code Reviews",
        "Performance Testing",
        "Security Validation"
      ]
    },
    {
      title: "Deployment & Support",
      steps: [
        "Continuous Integration",
        "Cloud Deployment",
        "24/7 Monitoring",
        "Ongoing Maintenance"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Hardware-like Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-30 left-5 w-12 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/4 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
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
              alt="Web Development"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            RF Web Development
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Custom web solutions for RF systems monitoring and control
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
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
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

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">{tech.title}</h3>
                  <ul className="space-y-3">
                    {tech.stack.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="backdrop-blur-md bg-black border border-green-900 
                                        rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="backdrop-blur-md bg-black border border-green-900 
                                        rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-500 mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.steps.map((step, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Project</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to develop a custom web solution for your RF systems?
          </p>
          <Button asChild className="bg-black text-white border border-green-500 hover:bg-green-500 
                               hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300">
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
