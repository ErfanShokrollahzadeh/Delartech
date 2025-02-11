"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Radio, Antenna, CircuitBoard, Waves, Cpu, Network, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dynamically import LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import("../components/LeafletMap"), { ssr: false });

export default function About() {
  const images = {
    hero: "https://images.unsplash.com/photo-1617839625591-e5a789593135?q=80&w=2000&auto=format&fit=crop",
    expertise: [
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800&auto=format&fit=crop", // RF Systems
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800&auto=format&fit=crop", // Wireless
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop",  // Circuit Design
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", // Network Optimization
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", // Firmware
      "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=800&auto=format&fit=crop" //
    ],
    achievements: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop", // Innovation
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=900&auto=format&fit=crop"
    ],
    tech: "/images/img-7.jpg",
    culture: "/images/img-8.jpg",
    expertise_2: [
      "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1735585849722-NDLBMCMTLUNYM4YYQLIR/21443.jpg?format=2500w",
      "https://images.squarespace-cdn.com/content/v1/673ca833f29ece2c9aeef137/1736636310922-XW4PLOOB9OHKU4WZP2BW/2148816366.jpg?format=2500w"
    ],
  };

  const stats = [
    { number: "8+", label: "Years RF Experience" },
    { number: "100+", label: "RF Projects" },
    { number: "35+", label: "RF Patents" },
    { number: "90%", label: "Design Accuracy" }
  ];

  const expertise = [
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[0],
      title: "RF System Engineering",
      description: "Specializing in advanced RF/microwave circuit design and signal integrity analysis",
      tech: ["Power Amplifiers", "RF Filters", "LNAs"]
    },
    {
      icon: <Waves className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[1],
      title: "Wireless Systems",
      description: "Expert development of MIMO systems and beamforming solutions",
      tech: ["5G NR", "MIMO", "mmWave"]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[2],
      title: "RF Circuit Design",
      description: "Custom RF circuit solutions and impedance matching networks",
      tech: ["ADS", "HFSS", "AWR"]
    },
    {
      icon: <Antenna className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[3],
      title: "Antenna Arrays",
      description: "Innovative antenna array designs and phased array systems",
      tech: ["Beamforming", "Array Optimization", "Antenna Theory"]
    },
    {
      icon: <Network className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[4],
      title: "Network Optimization",
      description: "Wireless network planning and optimization for performance",
      tech: ["Network Planning", "RF Testing", "Network Analysis"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      bgImage: images.expertise[5],
      title: "Firmware Development",
      description: "Low-level firmware development for embedded systems",
      tech: ["Embedded C", "RTOS", "FPGA"]
    }
  ];

  const technologies = [
    "5G/6G", "MIMO Systems", "RF Circuit Design",
    "Antenna Arrays", "mmWave", "RF Testing",
    "Signal Processing", "Power Amplifiers", "Filter Design"
  ];

  const achievements = [
    {
      title: "RF Innovation",
      description: "Pioneering advancements in RF system design and wireless communications",
      points: [
        "Industry-leading RF circuit designs",
        "Advanced MIMO implementations",
        "Novel antenna array solutions"
      ]
    },
    {
      title: "Research Excellence",
      description: "Pushing boundaries in RF and wireless technology research",
      points: [
        "Multiple RF design patents",
        "Published research papers",
        "Industry standard contributions"
      ]
    },
    {
      title: "Technical Leadership",
      description: "Leading the way in RF engineering and wireless system design",
      points: [
        "Expert RF consulting services",
        "Innovative RF product development",
        "RF training and education"
      ]
    },
    {
      title: "Industry Recognition",
      description: "Recognized for excellence in RF engineering and wireless system design",
      points: [
        "Awards for RF innovation",
        "Industry conference presentations",
        "RF technology partnerships"
      ]
    }
  ];

  // New code: Image Slider State and Effect
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex(prev => (prev + 1) % images.expertise.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.expertise.length]);

  // Pre-calculate dot positions using a grid pattern instead of random
  const dotPositions = Array.from({ length: 100 }, (_, i) => ({
    left: `${(i % 10) * 10 + 5}%`,
    top: `${Math.floor(i / 10) * 10 + 5}%`
  }));

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Hardware-like Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-24 right-1/3 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-12 left-12 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-5 right-1/4 w-28 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-9 right-3/4 w-28 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/3 left-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/4 right-1/2 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/2 right-1/3 w-12 h-1 bg-green-500 animate-pulse" />
      </div>
      {/* Updated Background Dots */}
      <div className="fixed inset-0 pointer-events-none">
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-100/10 rounded-full"
            style={{
              left: pos.left,
              top: pos.top
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <div className="relative text-center mb-20">
          <div className="absolute inset-0 -z-10">
            <Image
              src={images.hero}
              alt="RF Engineering"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <h1 className="text-7xl text-green-600  font-bold tracking-tight mb-8">
            RF Engineering Excellence
          </h1>
          <p className="text-2xl text-white font-light mb-12">
            Leading the future of wireless technology
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} 
                 className="p-6 rounded-lg border border-green-500/20 backdrop-blur-sm 
                           bg-black hover:border-green-500/40 transition group">
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-start mb-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-white mb-4">ABOUT</h2>
            <h3 className="text-5xl font-bold text-green-700 mb-4">Shaping Tomorrow, <span className="text-7xl">Together</span></h3>
            <p className="text-gray-100 font-extralight">
              Since 2017, Delart's world-class engineers have contributed to the design and development of some of the most advanced telecommunications and consumer products globally. With the agility of a startup, we deliver specialized engineering services, including hardware and software development, systems engineering, and the creation of cutting-edge networking and wireless communication standards.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* ...optional content or leave empty... */}
          </div>
        </div>
        <br />

        {/* New Section */}
        <div className="flex flex-col  md:flex-row items-center mb-20">
          <div className="md:w-1/2 p-4">
            <p className="font-mono text-2xl text-white mt-5">EMPOWERING TECHNOLOGY LEADERS</p>
            <h2 className="text-5xl md:text-7xl text-green-500 mt-2">What We Do</h2>
            <p className="text-gray-100 text-lg mb-6 mt-4 font-sans">
              We partner with top technology leaders to drive innovation and bring their long-term product visions to life. Our specialized engineering services support the creation of groundbreaking consumer and telecommunications products — and the standards that make them possible.
              Whether we’re advancing wireless technologies like mmWave, Wi-Fi, Bluetooth, and Ultra-Wideband (UWB), shaping the future of AR/VR, or building open, accessible 5G infrastructure, our team stays at the forefront of transformative technology development.
            </p>
            <Button className="bg-black hover:bg-green-500 hover:text-black text-white border border-green-500 hover:border-green-500/40 px-8 py-4 text-lg">
              <Link href="/contact">LEARN MORE</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-80">
            <Image
              src={images.tech}
              alt="Innovative Technology"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
        <br />

        {/* New Culture Section */}
        <div className="flex flex-col md:flex-row items-center bg-black mb-20 min-h-[600px]">
          <div className="md:w-1/2 relative h-[600px] mr-20">
            <Image
              src={images.culture}
              alt="Our Culture"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl text-white mb-4">Driving Innovation, Together</h2>
            <h3 className="text-6xl font-bold text-green-700 mb-6">Culture</h3>
            <p className="text-gray-100 text-lg mb-4">
              Collaboration, innovation, and strategic impact define our culture. We are a dynamic team of engineers, architects, and problem-solvers dedicated to pushing technological boundaries and enabling clients to achieve long-term goals. With a mission-driven focus, we prioritize decisions that align with the best interests of every project.
            </p>
            <p className="text-gray-100 text-lg mb-4">
              We embrace open-minded, solution-oriented thinking at the core of everything we do. By blending talent from diverse industries, we uncover unique insights and smarter solutions. Flexibility is key—whether working remotely, on-site, or in a hybrid capacity, our approach balances creativity with efficiency.
            </p>
            <p className="text-gray-100 text-lg">
              Communication and feedback are integral to our success, fostering an environment where ideas thrive and every team member feels empowered. Independent thinking, combined with a highly collaborative framework, ensures each person’s expertise is valued and leveraged effectively. Dynamic, innovative, and synergistic, our culture fuels curiosity, growth, and the relentless pursuit of excellence.
            </p>
          </div>
        </div>
        <br />

        {/* New Image Slider Section */}
        
        <div className="mb-20">
          <div className="relative w-full h-[700px] border-2 border-green-500 rounded-lg overflow-hidden">
            <Image
              src={images.expertise_2[sliderIndex % images.expertise_2.length]}
              alt={`Slider Image ${sliderIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>
        </div>
        <br />

        {/* map image Section */}
        <div className="mb-20 h-[650px] w-full rounded-2xl overflow-hidden">
            <div className="top-0 z-10 w-full flex items-center justify-center py-4 space-x-4">
            <MapPin className="w-12 h-12 text-green-500" />
            <h2 className="text-5xl bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">Delart's Global Operations</h2>
            </div>
          <LeafletMap />
        </div>
        <br />

        {/* Team Section */}
        <div className="mb-20  p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Side */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                A Global Team <br />
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                  of Innovators
                </span>
              </h2>
            </div>
            
            {/* Right Side */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-green-500 mb-6">of Innovators</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team unites talented professionals from across the globe, blending diverse expertise, 
                experiences, and perspectives. From wireless engineers to systems architects, our 
                multidisciplinary teams tackle complex challenges with creativity and precision. 
                We foster a culture of collaboration and inclusivity, driving engaging work experiences 
                and delivering exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
        <br />

        {/* Achievements Section */}

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="relative group h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors rounded-lg" />
                </div>
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col">
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tech.map((t, i) => (
                      <span key={i} 
                            className="text-xs px-2 py-1 rounded-full 
                                     bg-black/50 border border-green-500/20 
                                     text-green-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="relative mb-20 py-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0  rounded-lg" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} 
                      className="px-4 py-2 rounded-full bg-black/5 border 
                               border-green-500 text-white
                               hover:text-green-600 hover:border-green-500/40 
                               transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <br />

        {/* new topic text inside image */}
        <div className="mb-20">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden group">
            {/* Background Image */}
            <Image
              src="/images/img-11.jpg"
              alt="Technology Background"
              fill
              className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Headquartered in
                <span className="block mt-2 text-green-400">Santa Monica, California.</span>
              </h2>
            </div>
          </div>
        </div>
        <br />

        {/* New Section: Scaling Business Globally */}
        <div className="mb-20 flex flex-col md:flex-row items-start">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text'>Scaling Business Globally</span>
            </h2>
            <p className="text-gray-100 text-lg">
              We collaborate with partners and clients around the world to combine strategy, innovation, and engineering excellence, unlocking the potential of technology to create the future.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* ...optional content or leave empty... */}
          </div>
        </div>

        {/* New Section with h2 tag on the right side */}
        <div className="flex flex-col md:flex-row items-start ml-96 mb-20">
          <div className="md:w-1/2">
            {/* ...optional content or leave empty... */}
          </div>
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold text-white">One Day</h2>
            <h3 className="text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">at a Time.</h3>
          </div>
        </div>
        <br /> <br />

        {/* anoter text section */}
        

        {/* delart offices location */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
            Delart’s <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">Offices</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Santa Monica Office */}
            <div className="p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 
                          transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 
                          backdrop-blur-sm bg-black/20 group">
              <div className="flex flex-col items-center text-center mb-6">
                <MapPin className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-white mb-2">Santa Monica</h3>
                <span className="text-green-500 text-sm uppercase tracking-wider">California</span>
              </div>
              <p className="text-gray-400 text-center text-lg">
                312 Arizona Ave,<br />
                Santa Monica, CA 90401
              </p>
            </div>

            {/* Sunnyvale Office */}
            <div className="p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 
                          transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 
                          backdrop-blur-sm bg-black/20 group">
              <div className="flex flex-col items-center text-center mb-6">
                <MapPin className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-white mb-2">Sunnyvale</h3>
                <span className="text-green-500 text-sm uppercase tracking-wider">California</span>
              </div>
              <p className="text-gray-400 text-center text-lg">
                1309 S Mary Ave,<br />
                Suite 206,<br />
                Sunnyvale CA 94087
              </p>
            </div>

            {/* Ontario Office */}
            <div className="p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 
                          transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 
                          backdrop-blur-sm bg-black/20 group">
              <div className="flex flex-col items-center text-center mb-6">
                <MapPin className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-white mb-2">Mississauga</h3>
                <span className="text-green-500 text-sm uppercase tracking-wider">Ontario</span>
              </div>
              <p className="text-gray-400 text-center text-lg">
                2 Robert speck pkwy,<br />
                Mississauga, Ontario L4Z1H8
              </p>
            </div>

            {/* Shanghai Office */}
            <div className="p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 
                          transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 
                          backdrop-blur-sm bg-black/20 group">
              <div className="flex flex-col items-center text-center mb-6">
                <MapPin className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-white mb-2">Shanghai</h3>
                <span className="text-green-500 text-sm uppercase tracking-wider">China</span>
              </div>
              <p className="text-gray-400 text-center text-lg">
                NO.35 Boxia RD,<br />
                Pudong Shanghai,<br />
                201203
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center relative z-10">
          <Button asChild 
                 className="bg-black hover:bg-green-400 hover:text-black text-white 
                           border border-green-500 
                           hover:border-green-500/40 px-8 py-6 text-lg">
            <Link href="/contact" className='font-extralight'>GET IN TOUCH</Link>
          </Button>
        </div>

        {/* delart offices location */}

        {/* Decorative Element */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-green-500/0 to-green-500/20"></div>
        </div>
      </div>
    </main>
  );
}