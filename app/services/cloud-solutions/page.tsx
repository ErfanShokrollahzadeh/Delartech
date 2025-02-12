"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  Cloud, Server, Network, Database,
  Shield, Cpu, Settings, Lock,
  ChartBar, Wifi, Radio, Link as LinkIcon
} from "lucide-react";

export default function CloudSolutions() {
  const cloudServices = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF Cloud Processing",
      description: "Cloud-based RF signal processing and analysis",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      features: [
        "Real-time Signal Processing",
        "Distributed Computing",
        "Machine Learning Integration",
        "Scalable Processing Pipeline"
      ]
    },
    {
      icon: <Network className="w-8 h-8 text-green-500" />,
      title: "Wireless Network Virtualization",
      description: "Virtual RF network deployment and management",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      features: [
        "Network Function Virtualization",
        "Cloud RAN Solutions",
        "Virtual Network Slicing",
        "Resource Optimization"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "RF Data Analytics",
      description: "Cloud-based analytics for RF system optimization",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      features: [
        "Performance Analytics",
        "Predictive Maintenance",
        "Spectrum Analysis",
        "Coverage Optimization"
      ]
    }
  ];

  const platforms = [
    {
      title: "Private Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1000",
      features: [
        "Dedicated RF Processing",
        "Secure Data Storage",
        "Custom Integration",
        "High Performance Computing"
      ]
    },
    {
      title: "Hybrid Cloud Solutions",
      image: "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=1000",
      features: [
        "Flexible Deployment",
        "Resource Scaling",
        "Data Sovereignty",
        "Cost Optimization"
      ]
    },
    {
      title: "Edge Computing",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      features: [
        "Low Latency Processing",
        "Local Data Analysis",
        "Edge AI Integration",
        "Distributed Architecture"
      ]
    }
  ];

  const benefits = [
    {
      icon: <ChartBar className="w-8 h-8 text-green-500" />,
      title: "Scalable Performance",
      description: "Dynamically scale resources based on processing demands"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security for RF data and processing"
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: "Flexible Management",
      description: "Centralized control of distributed RF resources"
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-green-500" />,
      title: "Seamless Integration",
      description: "Easy integration with existing RF infrastructure"
    }
  ];

  const technologies = [
    {
      icon: <Cloud className="w-6 h-6 text-green-500" />,
      name: "Cloud Infrastructure",
      tools: ["AWS", "Azure", "Google Cloud"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      name: "Processing Tools",
      tools: ["CUDA", "OpenCL", "TensorFlow"]
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      name: "Security Standards",
      tools: ["ISO 27001", "HIPAA", "GDPR"]
    },
    {
      icon: <Wifi className="w-6 h-6 text-green-500" />,
      name: "RF Technologies",
      tools: ["5G NR", "O-RAN", "vRAN"]
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

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2000"
              alt="Cloud Solutions"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            RF Cloud Solutions
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Next-generation cloud infrastructure for RF systems and wireless networks
          </p>
        </div>

        {/* Cloud Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cloudServices.map((service, index) => (
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

        {/* Cloud Platforms */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Cloud Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">{platform.title}</h3>
                  <ul className="space-y-3">
                    {platform.features.map((feature, i) => (
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
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Cloud Benefits
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="backdrop-blur-md bg-black border border-green-900
                                        rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technologies & Standards
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="backdrop-blur-md bg-black border border-green-900 
                                        rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.tools.map((tool, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your RF infrastructure with our cloud solutions
          </p>
          <Button asChild className="bg-black text-white border border-green-500 hover:bg-green-500 
                               hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
