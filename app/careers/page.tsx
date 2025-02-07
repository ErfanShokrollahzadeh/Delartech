"use client";
import { useState } from "react";
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

  const openPositions = [
    {
      title: "Senior RF Design Engineer",
      type: "Full-time",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      requirements: [
        "10+ years RF/Microwave design experience",
        "Expertise in 5G/6G technologies",
        "Experience with RF simulation tools (ADS, HFSS)",
        "Strong background in antenna design and MIMO systems"
      ],
      responsibilities: [
        "Lead RF system architecture design",
        "Develop mmWave circuits and systems",
        "Optimize RF front-end performance",
        "Mentor junior RF engineers"
      ]
    },
    {
      title: "RF Systems Architect",
      type: "Full-time",
      location: "Cambridge, MA",
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
      title: "Embedded Systems Engineer",
      type: "Full-time",
      location: "Remote",
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
      title: "RF Test Engineer",
      type: "Full-time",
      location: "Boston, MA",
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
      title: "Antenna Design Engineer",
      type: "Full-time",
      location: "Cambridge, MA",
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
    {
      title: "RF Power Amplifier Designer",
      type: "Full-time",
      location: "Remote",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      requirements: [
        "7+ years PA design experience",
        "GaN/GaAs amplifier expertise",
        "Knowledge of DPD techniques",
        "Experience with ADS"
      ],
      responsibilities: [
        "Design high-efficiency PAs",
        "Optimize linearity performance",
        "Develop matching networks",
        "Thermal management solutions"
      ]
    },
    {
      title: "5G Protocol Engineer",
      type: "Contract",
      location: "Remote",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      requirements: [
        "Strong 3GPP standards knowledge",
        "Experience with O-RAN",
        "Protocol stack expertise",
        "System integration skills"
      ],
      responsibilities: [
        "Implement 5G protocols",
        "Develop O-RAN solutions",
        "System integration testing",
        "Performance optimization"
      ]
    },
    {
      title: "RF Hardware Engineer",
      type: "Full-time",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      requirements: [
        "BSEE/MSEE degree",
        "PCB design experience",
        "Signal integrity expertise",
        "High-speed design skills"
      ],
      responsibilities: [
        "RF PCB design",
        "Component selection",
        "EMC compliance testing",
        "Hardware debugging"
      ]
    }
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
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPositions.map((position, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={position.image}
                    alt={position.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-green-400">{position.type}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{position.location}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-green-400 mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-green-400 mb-2">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 
                                   hover:from-green-600 hover:to-green-700" asChild>
                    <Link href={`/careers/apply?position=${position.title}`}>
                      Apply Now
                    </Link>
                  </Button>
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
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-gray-300">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-semibold">Competitive Compensation</h3>
              </div>
              <p>We ensure that your hard work is rewarded with competitive salaries and comprehensive benefits.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-semibold">Comprehensive Benefits Package</h3>
              </div>
              <ul className="list-disc list-inside">
                <li>Low-deductible PPO and HMO health insurance plans, covering medical, dental, and vision for employees and their families</li>
                <li>Life insurance</li>
                <li>Short/long-term disability coverage</li>
                <li>A company-matched 401(k) plan</li>
                <li>Flexible Spending Account (FSA)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-semibold">Generous Paid Time Off</h3>
              </div>
              <ul className="list-disc list-inside">
                <li>Three weeks of paid vacation to relax and recharge</li>
                <li>Additional paid time off and sick leave</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        {/* New Text Section */}
        <div className="text-center my-8 text-white font-light text-xl max-w-3xl mx-auto">
          <p>Join Delart and be part of a team where innovation thrives, and your contributions drive meaningful impact.</p>
          <p>Together, let’s solve the challenges of tomorrow.</p>
        </div>
      </div>
    </main>
  )
}