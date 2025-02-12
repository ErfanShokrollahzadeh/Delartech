"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  Radio, CircuitBoard, Waves, 
  Brain, Target, ChartLine, 
  BookOpen, Users, FileText,
  Clock, Shield, CheckCircle 
} from "lucide-react";

export default function Consulting() {
  const consultingServices = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "RF System Design Review",
      description: "Expert analysis and optimization of RF systems",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      services: [
        "System Architecture Assessment",
        "Performance Optimization",
        "Design Validation",
        "Technical Documentation"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: "Technical Strategy",
      description: "Strategic planning for RF technology implementation",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      services: [
        "Technology Roadmap Development",
        "Market Analysis",
        "Risk Assessment",
        "Innovation Strategy"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Project Consulting",
      description: "End-to-end project guidance and support",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      services: [
        "Project Planning",
        "Technical Leadership",
        "Resource Optimization",
        "Quality Assurance"
      ]
    }
  ];

  const expertiseAreas = [
    {
      title: "RF Design Excellence",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1000",
      points: [
        "Power Amplifier Optimization",
        "MIMO System Design",
        "RF Front-end Architecture",
        "Signal Integrity Solutions"
      ]
    },
    {
      title: "System Integration",
      image: "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=1000",
      points: [
        "5G/6G Implementation",
        "IoT Network Design",
        "Wireless Infrastructure",
        "Protocol Optimization"
      ]
    },
    {
      title: "Technical Innovation",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      points: [
        "Research & Development",
        "Patent Development",
        "Technology Assessment",
        "Innovation Strategy"
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: "Requirements Analysis",
      description: "Detailed assessment of project needs and objectives"
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Strategy Development",
      description: "Custom solution planning and approach definition"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Expert Engagement",
      description: "Deployment of specialized RF engineering team"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Implementation Support",
      description: "Guidance through execution and optimization"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: "Expert Knowledge",
      description: "Access to industry-leading RF engineering expertise"
    },
    {
      icon: <ChartLine className="w-8 h-8 text-green-500" />,
      title: "Optimized Performance",
      description: "Enhanced system efficiency and reliability"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Accelerated Development",
      description: "Faster time-to-market with expert guidance"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Risk Mitigation",
      description: "Reduced technical and project risks"
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
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000"
              alt="RF Consulting"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            RF Engineering Consulting
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Expert guidance and solutions for your RF engineering challenges
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {consultingServices.map((service, index) => (
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
                  {service.services.map((item, i) => (
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

        {/* Expertise Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">{area.title}</h3>
                  <ul className="space-y-3">
                    {area.points.map((point, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Consulting Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="backdrop-blur-md bg-black border border-green-900 
                                        rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Consulting
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

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our RF engineering consulting services can help your project succeed
          </p>
          <Button asChild className="bg-black text-white border border-green-500 hover:bg-green-500 
                               hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
