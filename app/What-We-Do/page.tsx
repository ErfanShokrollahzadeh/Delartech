"use client";

import { Button } from "@/components/ui/button";
import { 
  Radio, Book, Cpu, Network, Database,
  CircuitBoard, Waves, Antenna, Shield, 
  Microchip, Server, Laptop 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "@/styles/animations.css"; // add import for animation styles

export default function Home() {
  const heroImage = "https://images.unsplash.com/photo-1617839625591-e5a789593135?q=80&w=2000&auto=format&fit=crop";
  
  const expertise = [
    {
      icon: <Radio />,
      title: "RF System Design",
      description: "Advanced RF/microwave solutions with focus on 5G/6G technologies",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800"
    },
    {
      icon: <CircuitBoard />,
      title: "Hardware Development",
      description: "Custom PCB design and embedded systems solutions",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800"
    },
    {
      icon: <Antenna />,
      title: "Antenna Systems",
      description: "MIMO antenna design and optimization for wireless systems",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800"
    },
    {
      icon: <Network />,
      title: "Network Optimization",
      description: "Wireless network planning and optimization for performance",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800"
    },
    {
      icon: <Microchip />,
      title: "Firmware Development",
      description: "Low-level firmware development for embedded systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
    },
    {
      icon: <Server />,
      title: "Cloud Integration",
      description: "Integration of cloud services for IoT and wireless applications",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=800"
    }
  ];

  const technicalAreas = [
    {
      title: "RF Design & Engineering",
      topics: [
        "RF Circuit Design and Analysis",
        "Signal Integrity and Power Distribution",
        "High-Frequency PCB Layout",
        "Impedance Matching Networks"
      ],
      resources: [
        "RF Circuit Design by Chris Bowick",
        "Analog Devices Technical Guides",
        "IEEE RF Design Papers",
        "Keysight RF Webinars"
      ]
    },
    {
      title: "Embedded Systems",
      topics: [
        "RTOS Development",
        "Device Driver Implementation",
        "Firmware Architecture",
        "Low-Power Design"
      ],
      resources: [
        "Programming Embedded Systems in C/C++",
        "FreeRTOS Documentation",
        "ARM Cortex-M Guides",
        "Linux Device Drivers"
      ]
    },
    {
      title: "Wireless Communications",
      topics: [
        "5G NR Protocol Stack",
        "MIMO Systems Design",
        "OpenRAN Architecture",
        "Network Optimization"
      ],
      resources: [
        "3GPP Technical Specifications",
        "O-RAN Alliance Documentation",
        "Wireless Communications by Rappaport",
        "IEEE 802 Standards"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "Advanced RF Solutions",
      papers: [
        "Novel MIMO Antenna Configurations for 5G",
        "RF Front-end Design Optimization",
        "Beamforming Techniques in mmWave"
      ]
    },
    {
      title: "System Architecture",
      papers: [
        "Hardware Acceleration in RF Processing",
        "Low-latency Network Design",
        "Power-efficient RF Circuits"
      ]
    }
  ];

  // New state for accordion section
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionItems = [
    {
      title: "Smart Glasses Development",
      details: `Delart contributed to the development and productization of various systems within today's leading smart glasses.
       Our expertise has advanced:

        • Wireless connectivity systems and RF modules for seamless communication.
        • lectrical engineering and sensing subsystems critical to modern wearable technologies.`
    },
    {
      title: "Augmented Reality (AR) Glasses",
      details: `Our team contributed to the development of prototype AR glasses by designing and optimizing:
        • Core systems, firmware, and hardware.
        • Advanced algorithms for enhanced user experiences.`
    },
    {
      title: "Fixed-Wireless Broadband Solutions",
      details: `Delart has contributed to cutting-edge broadband solutions, including:
        • Advanced mmWave technology for high-speed data delivery.
        • Mesh network solutions optimized for dense urban environments.`
    },
    {
      title: "ORAN-Based Systems",
      details: `Our engineers have contributed to the integration, validation, and testing of ORAN-based Radio Units (RUs) by:
        • Conducting lab trials for Massive MIMO (maMIMO) technology.
        • Ensuring interoperability and performance optimization in next-generation networks.`
    },
    {
      title: "IEEE & 3GPP Standards Contributions",
      details: `In collaboration with our partners, Delart has significantly impacted global technology standards by:
        • Delivering hundreds of technical contributions to IEEE 802.11 (Wi-Fi) standards.
        • Driving key innovations within 5G standardization efforts.`
    }
  ];
  function toggleAccordion(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  // New state for rotating image showcase
  const imageShowcaseImages = [
    "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1734192460527-KQC8B4BLQPKK430ZVNZP/2151039378.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1734193233782-IV7Z5XF6ZB6CICWK0TEW/89671.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1734362759351-JAGLXPEECC533YS94DM4/8864%2B%25281%2529.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1734649762646-5UG9TV8ZTEP89X30FVDH/eyeglasses-lens-reflects-fashion-modern-technology-illustration-generated-by-ai.jpg?format=2500w",
  ];
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowcaseIndex(prev => (prev + 1) % imageShowcaseImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imageShowcaseImages.length]);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Hardware-like Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-20 right-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-30 left-5 w-12 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/4 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/3 right-10 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/3 right-5 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/3 left-5 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/4 left-5 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
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
          <p className="text-white mb-7 text-2xl font-black"> Engineering Excellence, Tailored for You</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-500 to-green-600">
            What We Do
          </h1>
        </div>
              
        {/* New Text Topics Section */}
        <section className="pb-32 px-4 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              { title: "Wireless Systems Engineering", icon: <Antenna className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "RF and Antenna Solutions", icon: <Radio className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "Embedded Firmware Development", icon: <Cpu className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "Embedded Hardware Design and Prototyping", icon: <CircuitBoard className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "Silicon Design and Productization", icon: <Microchip className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "High-Performance Networking Infrastructure", icon: <Network className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "Software and Machine Learning Development", icon: <Laptop className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "Mechanical Engineering & Prototyping", icon: <Shield className="w-10 h-10 text-green-500 mx-auto" /> },
              { title: "Technical Program Management (TPM)", icon: <Book className="w-10 h-10 text-green-500 mx-auto" /> }
            ].map((topic, index) => (
              <div key={index} className="flex flex-col items-center">
                {topic.icon}
                <p className="text-1xl font-light mt-2 text-center">{topic.title}</p>
                {index < 9 && (
                  <hr className="w-full mt-4 h-[2px] border-0 bg-gradient-to-r from-pink-700 via-green-500 to-orange-500 animate-gradient" />
                )}
              </div>
            ))}
          </div>
              </section>
        <br />

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {expertise.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
              </div>
              <div className="relative p-8">
                <div className="text-green-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <br />

        {/* Video Area */}
        <div className="mb-20">
          <video playsInline className="w-full max-w-7xl mx-auto rounded-xl shadow-xl" autoPlay loop muted>
            <source src="/videos/v-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Ensure the file is located at /Users/delart/Desktop/Delartech/public/videos/v-1.mp4 */}
        </div>
        <br />
              
        {/* text Areas */}
        <div className="mb-20 bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Side */}
            <div className="md:w-1/2">
              <h2 className="text-6xl md:text-6xl font-bold text-white">
                Engineering, Research &<br />
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                  Development.
                </span>
              </h2>
            </div>
            
            {/* Right Side */}
            <div className="md:w-1/2">
              <p className="text-gray-50 text-lg leading-relaxed">
                We don’t just offer services — we partner with you to bring ideas to life.
                Whether it’s cutting-edge hardware, software innovation, or advanced wireless systems,
                we customize our expertise to fit your vision. Your products, our engineering — shaping the future, together.
              </p>
            </div>
          </div>
        </div>
        <br />

        {/* Research Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Research & Innovation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-green-500 mb-6">{area.title}</h3>
                <ul className="space-y-4">
                  {area.papers.map((paper, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      {paper}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
            <Button asChild className="bg-black text-white border border-green-500 hover:bg-green-500 
                         hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300">
            <Link href="/contact">Start Your RF Project</Link>
            </Button>
        </div>
        <br />
        {/* New Section: Pioneering the Future */}
        <section className="py-16 px-4 bg-gray-900 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            PIONEERING THE FUTURE
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            One Breakthrough At a Time
          </h3>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            We bring together the brightest engineering minds to turn bold ideas into reality. With world-class expertise in systems and software, we advance the frontier of wireless technology through innovative research and development. Our mission is clear, deliver impactful solutions that push boundaries, shape industries, and drive meaningful progress.
          </p>
        </section>
        <br /><br />
        
        {/* New Accordion Section */}
        <section className="py-16 px-4 bg-gray-800 text-white relative">
          <h2 className="text-4xl text-green-600 font-bold text-center mb-8">
            Select Ideas We Helped Bring to Life
          </h2>
          <p className="max-w-3xl mx-auto text-center mb-12 text-lg">
            At Delart Technologies, we take pride in collaborating with industry leaders to bring groundbreaking products and solutions to life. Here are some of the projects and innovations that our team has contributed to:
          </p>
          <div className="relative">
            {accordionItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full p-4"
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-green-400 text-3xl font-bold">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mb-1 p-4 animate-slideDown transition-all duration-300 ease-out">
                    <p className="whitespace-pre-wrap">{item.details}</p>
                  </div>
                )}
                {index < accordionItems.length - 1 && <hr className="my-2 border-green-500" />}
              </div>
            ))}
          </div>
        </section>
        <br />
        
        {/* New Image Showcase Section */}
        <section className="py-8 px-4 text-center">
          <div className="relative mx-auto w-full max-w-7xl h-screen rounded-xl overflow-hidden border-2 border-green-500 shadow-lg">
            <img
              src={imageShowcaseImages[currentShowcaseIndex]}
              alt="Showcase"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </section>
        <br />
      </div>
    </main>
  );
}