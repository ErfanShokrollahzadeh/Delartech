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

    
 // New state for accordion section
    
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  function toggleAccordion(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  // New state for rotating image showcase
  const imageShowcaseImages = [
    "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1734192460527-KQC8B4BLQPKK430ZVNZP/2151039378.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1734193233782-IV7Z5XF6ZB6CICWK0TEW/89671.jpg?format=2500w",
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
        <div className="absolute top-20 left-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-20 right-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-30 left-5 w-12 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/4 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/3 right-10 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute left left-10 w-16 h-1 bg-green-500 animate-pulse" />
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
              
        {/* compare of text and image */}
        <section className="bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Side (Left) */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Wireless Systems Engineering</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Development of wireless technologies, including 4G/5G, Bluetooth, Wi-Fi, and implementation of mmWave and ORAN Infra.</li>
                <li>Expertise in wireless protocols, system integration, and firmware for cellular/Wi-Fi solutions.</li>
                <li>Architecture design and simulations for emerging technologies, such as next-generation IEEE and 3GPP standards and beamforming for satellite applications.</li>
              </ul>
            </div>
            {/* Image Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <img 
                src="/images/img-12.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

         <section className=" bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Image Side (Left) */}
            <div className="md:w-1/2">
              <img 
                src="/images/img-13.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
            {/* Text Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <h2 className="text-4xl font-bold text-green-400 mb-4">RF and Antenna Solutions</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Design of highly integrated RF modules encompassing RF SoC and Front-End components and antenna solutions.</li>
                <li>Optimization of advanced phased-array RF solutions supporting emerging satellite and mmWave applications.</li>
                <li>RF system-level integration and comprehensive testing and optimization for wireless coexistence and performance.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Side (Left) */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Embedded Firmware Development</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Development of C/C++ firmware for embedded systems.</li>
                <li>High-performance firmware optimized for commercial or custom AI silicon accelerators.</li>
                <li>Expertise in RTOS, hardware interfaces (USB, PCIe), and driver development for Wi-Fi, Bluetooth, 5G, sensors, displays, cameras, and more.</li>
              </ul>
            </div>
            {/* Image Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <img 
                src="/images/img14.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
          </div>
        </section>      
        
        <section className=" bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Image Side (Left) */}
            <div className="md:w-1/2">
              <img 
                src="/images/img-15.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
            {/* Text Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Embedded Hardware Design & Prototyping</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Hardware design, prototyping, and system-level bring-up for high-speed interfaces.</li>
                <li>Expertise in PCB/module design, signal integrity, and power optimization.</li>
                <li>System bring-up and optimization for complex hardware architectures.</li>
              </ul>
            </div>
          </div>
        </section>
              
        <section className="bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Side (Left) */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Silicon Design and Productization</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>RTL design, verification, and emulation for custom silicon solutions.</li>
                <li>Reference design development, including hardware, firmware, and FPGA-based systems.</li>
                <li>Silicon-level optimization and design validation for advanced applications.</li>
              </ul>
            </div>
            {/* Image Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <img 
                src="/images/img-16.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className=" bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Image Side (Left) */}
            <div className="md:w-1/2">
              <img 
                src="/images/img-17.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
            {/* Text Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <h2 className="text-4xl font-bold text-green-400 mb-4">High-Performance Networking Infrastructure</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Expertise in networking technologies, protocols, edge deployments, and e2e performance optimization.</li>
                <li>Development of robust networking systems for high-performance computing (HPC) data centers and emerging use cases.</li>
                <li>Optimizing end-to-end audio/video quality-of-experience (QoE) for seamless delivery from data centers to mobile devices.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Side (Left) */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Software and Machine Learning Development</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Machine learning applications, including: training custom AI models and algorithm optimization at SW and FW levels.</li>
                <li>Development of highly scalable and high-performance software solutions tailored for real-time applications that handle billions of events at scale.</li>
                <li>Development of scalable test automation frameworks and tools.</li>
              </ul>
            </div>
            {/* Image Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <img 
                src="/images/img-18.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        
        <section className=" bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Image Side (Left) */}
            <div className="md:w-1/2">
              <img 
                src="/images/img-19.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
            {/* Text Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Mechanical Engineering & Prototyping</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Packaging design and rapid prototyping services, including solutions for consumer devices, and industrial applications.</li>
                <li>Advanced thermal modeling, simulation, and optimization.</li>
                <li>Fabrication of enclosures and mechanical components with system-level integration.</li>
              </ul>
            </div>
          </div>
        </section>
              
        <section className="mb-20 bg-gray-800 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Side (Left) */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-green-400 mb-4">Technical Program Management (TPM)</h2>
              <ul className="text-white list-disc pl-4 space-y-4">
                <li>Provision of Technical Program Management services with a strong emphasis on technical expertise for engineering programs.</li>
                <li>Specializing in managing complex hardware, software projects, development labs, and networking initiatives.</li>
                <li>Ensuring seamless coordination, timely delivery, and alignment with technical objectives for complex engineering programs.</li>
              </ul>
            </div>
            {/* Image Side (Right) */}
            <div className="md:w-1/2 ml-12">
              <img 
                src="/images/img-20.jpg" 
                alt="Compare Image" 
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
              

        {/* CTA Section */}
        <div className="text-center">
            <Button asChild className="bg-black text-white border border-green-500 hover:bg-green-500 
                         hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300">
            <Link href="/contact">Start Your RF Project</Link>
            </Button>
        </div>
        <br />


      </div>
    </main>
  );
}