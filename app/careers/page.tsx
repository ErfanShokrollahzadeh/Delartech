"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Radio, Book, GraduationCap, Award, 
  Brain, Users, Target, CircuitBoard,
  Antenna, Waves, Cpu, Network,
  DollarSign, Package, Calendar  // added new icons
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
  // New state for rotating images
  const rotatingImages = [
    "/images/img-c-1.jpg",
    "/images/img-c-2.jpg",
    "/images/img-c-3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingImages.length]);

  const openPositions = [
    {
      title: "Hardware EE Validation Engineer",
      type: "Full-time",
      location: "Sunnyvale, CA",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      requirements: [
        "Conduct validation and testing of...",
        "Perform hardware-level debugging...",
        "Debug electrical systems and circuits...",
        "Flash firmware images onto hardware..."
      ],
      responsibilities: [
        "Lead RF system architecture design",
        "Develop mmWave circuits and systems",
        "Optimize RF front-end performance",
        "Mentor junior RF engineers"
      ]
    },
    {
      title: "IPD and RF Packaging Engineer",
      type: "Full-time",
      location: "San Jose, CA",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      requirements: [
        "PhD in RF/Microwave Engineering",
        "Experience with beamforming systems",
        "Knowledge of O-RAN architecture",
        "Signal processing expertise"
      ],
      responsibilities: [
        "Design RF system architectures",
        "Lead technical innovation",
        "Develop RF testing strategies",
        "Drive technology roadmap"
      ]
    },
    {
      title: "Lab Systems and Network Engineer",
      type: "Full-time",
      location: "Palo Alto, CA",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      requirements: [
        "5+ years embedded systems experience",
        "Expertise in RTOS and bare-metal programming",
        "Strong C/C++ skills",
        "Experience with RF firmware development"
      ],
      responsibilities: [
        "Develop RF control firmware",
        "Optimize system performance",
        "Implement communication protocols",
        "Design driver architecture"
      ]
    },
    {
      title: "PCB Layout Engineer",
      type: "Remote",
      location: "United States",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1000",
      requirements: [
        "5+ years RF testing experience",
        "Expertise in VNA and spectrum analyzers",
        "Knowledge of RF measurement techniques",
        "Experience with automated test systems"
      ],
      responsibilities: [
        "Develop RF test procedures",
        "Perform RF measurements",
        "Calibrate test equipment",
        "Document test results"
      ]
    },
    {
      title: "PCB Layout EngineerNew",
      type: "Remote",
      location: "China",
      image: "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=1000",
      requirements: [
        "MS/PhD in Electrical Engineering",
        "Experience with HFSS or CST",
        "Knowledge of antenna theory",
        "5G mmWave expertise"
      ],
      responsibilities: [
        "Design MIMO antenna arrays",
        "Simulate antenna performance",
        "Optimize radiation patterns",
        "Develop beamforming solutions"
      ]
    },
  ];

  const filteredPositions = openPositions.filter(position =>
    position.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: "Technical Growth",
      description: "Continuous learning in RF engineering",
      perks: [
        "IEEE Membership",
        "Conference Attendance",
        "Research Publications",
        "Patent Development"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Innovation Focus",
      description: "Work on cutting-edge RF technology",
      perks: [
        "Research Budget",
        "Lab Resources",
        "Innovation Rewards",
        "Technical Workshops"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Professional Development",
      description: "Career advancement opportunities",
      perks: [
        "Leadership Training",
        "Certification Support",
        "Industry Events",
        "Mentorship Program"
      ]
    }
  ];

  const learningPaths = [
    {
      title: "RF Design Track",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      resources: [
        "RF Circuit Design Courses",
        "Signal Integrity Training",
        "Power Amplifier Design",
        "Filter Design Workshops"
      ]
    },
    {
      title: "System Architecture",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900",
      resources: [
        "5G NR Architecture",
        "MIMO Systems Design",
        "Beamforming Techniques",
        "RF System Integration"
      ]
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Hardware-like Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-20 right-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-5 right-1/4 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-5 left-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/2 left-12 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/2 right-12 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/3 right-1/2 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
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
              src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2000"
              alt="RF Engineering Careers"
              fill
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            Careers
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
             Join us and be part of a dynamic team that thrives on solving real-world challenges and driving meaningful change.
          </p>
        </div>
        {/* Future Building Section */}
        <div className="mb-32 flex flex-col md:flex-row items-center gap-8 my-10 bg-black rounded-xl p-4 sm:p-6 lg:p-8">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-white space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Build Your Future with Delart
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-200">
              At Delart, we provide our employees with exceptional opportunities to grow and excel in their careers by tackling advanced and challenging problems. Our involvement in cutting-edge technologies and end-to-end product development offers a unique environment for technical growth.
            </p>
          </div>
          
          {/* Right: Rotating Image */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 sm:border-4 border-green-500 shadow-xl">
              <Image
                src={rotatingImages[currentImageIndex]}
                alt="Future at Delart"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* Modern Job Search Bar */}
        <div className="mb-8 flex justify-center">
          <input 
            type="text" 
            placeholder="Search jobs..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md p-3 rounded-xl border border-green-500/40 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          />
        </div>
        {/* Job count display */}
        <div className="mb-4 text-center text-white text-lg">
          {filteredPositions.length} {filteredPositions.length === 1 ? "job" : "jobs"} available
        </div>
        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Current Opportunities
          </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPositions.map((position, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden flex flex-col min-h-[600px]">
                  <div className="absolute inset-0">
                    <Image
                      src={position.image}
                      alt={position.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/95" />
                  </div>
                  <div className="relative p-6 flex flex-col h-full">
                    {/* Header Section */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 line-clamp-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-green-400 text-sm">{position.type}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">{position.location}</span>
                      </div>
                    </div>

                    {/* Scrollable Content Section */}
                    <div className="flex-grow overflow-y-auto custom-scrollbar">
                      <div className="space-y-4">
                        {/* Requirements Section */}
                        <div>
                          <h4 className="text-green-400 text-sm font-semibold mb-2">Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="line-clamp-2">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Responsibilities Section */}
                        <div>
                          <h4 className="text-green-400 text-sm font-semibold mb-2">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((resp, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="line-clamp-2">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Button Section - Fixed at Bottom */}
                    <div className="mt-6 pt-4 border-t border-green-500/20">
                      <Button 
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 
                                 hover:from-green-600 hover:to-green-700 transition-all" 
                        asChild
                      >
                        <Link href={`/careers/apply?position=${position.title}`}>
                          More Info & Apply
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Growth & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}
                className="backdrop-blur-md bg-white/5 border border-green-900/20 
                             rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.perks.map((perk, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technical Learning Paths
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">{path.title}</h3>
                  <ul className="space-y-3">
                    {path.resources.map((resource, i) => (
                      <li key={i} className="text-gray-300 flex items-center gap-3">
                        <Book className="w-5 h-5 text-green-500" />
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* What We Offer Section */}
        <section className="py-20 px-4 text-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group rounded-xl border border-green-500/20 backdrop-blur-sm bg-black/20 p-8 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 space-y-4">
                <div className="flex items-center gap-4 group-hover:translate 0.5s ease-in-out">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <DollarSign className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Competitive Compensation</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We ensure that your hard work is rewarded with competitive salaries and comprehensive benefits that recognize your expertise and contributions.
                </p>
              </div>

              <div className="group rounded-xl border border-green-500/20 backdrop-blur-sm bg-black/20 p-8 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <Package className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Benefits Package</h3>
                </div>
                <ul className="text-gray-400 space-y-3 list-inside">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Premium PPO/HMO health insurance with medical, dental, and vision coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Life and disability insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Company-matched 401(k) plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Flexible Spending Account (FSA)</span>
                  </li>
                </ul>
              </div>

              <div className="group rounded-xl border border-green-500/20 backdrop-blur-sm bg-black/20 p-8 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Generous Time Off</h3>
                </div>
                <ul className="text-gray-400 space-y-3 list-inside">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Three weeks paid vacation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Flexible paid time off policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Comprehensive sick leave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span>Company holidays</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* New Text Section */}
        <div className="relative py-16 px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 rounded-xl" />
          <div className="relative text-center space-y-6">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Join Our Journey
            </h3>
            <div className="text-xl font-light tracking-wide max-w-3xl mx-auto space-y-4">
              <p className="text-gray-200">
          Join Delart and be part of a team where innovation thrives, and your contributions drive meaningful impact.
              </p>
              <p className="text-green-400 font-medium">
          Together, let's solve the challenges of tomorrow.
              </p>
            </div>
            <div className="pt-6">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
          Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}