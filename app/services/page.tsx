"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  Radio, CircuitBoard, Cpu, 
  Network, Settings, Server,
  Antenna, Waves, Shield,
  Book
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "RF Testing & Measurement",
      description: "Comprehensive RF testing and validation services for wireless products",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
      features: [
        "Network Analyzer Testing",
        "Spectrum Analysis",
        "Power Measurements",
        "Signal Quality Testing"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: "EMC/EMI Testing",
      description: "Full electromagnetic compatibility and interference testing solutions",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
      features: [
        "EMC Compliance Testing",
        "EMI Measurements",
        "Radiation Testing",
        "Immunity Testing"
      ]
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-green-500" />,
      title: "RF Performance Testing",
      description: "Advanced performance characterization and validation",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800",
      features: [
        "Gain/Loss Testing",
        "Phase Measurements",
        "Noise Figure Analysis",
        "Intermodulation Testing"
      ]
    },
    {
      icon: <Waves className="w-8 h-8 text-green-500" />,
      title: "Wireless Protocol Testing",
      description: "Protocol conformance and interoperability testing",
      image: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=800",
      features: [
        "5G Protocol Testing",
        "Bluetooth Testing",
        "WiFi Certification",
        "IoT Protocol Testing"
      ]
    },
    {
      icon: <Antenna className="w-8 h-8 text-green-500" />,
      title: "Antenna Testing",
      description: "Comprehensive antenna characterization and measurement",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
      features: [
        "Radiation Pattern Testing",
        "Gain Measurements",
        "VSWR Testing",
        "Impedance Analysis"
      ]
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Environmental Testing",
      description: "RF performance testing under various environmental conditions",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900",
      features: [
        "Temperature Testing",
        "Humidity Testing",
        "Vibration Analysis",
        "Altitude Testing"
      ]
    }
  ];

  const consulting = [
    {
      title: "System Architecture",
      description: "RF system architecture design and optimization",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      areas: ["5G/6G Systems", "IoT Networks", "Wireless Infrastructure"]
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on RF and wireless technologies",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900",
      areas: ["Technology Strategy", "System Optimization", "Performance Analysis"]
    }
  ];

  const advancedServices = [
    {
      title: "RF System Design & Integration",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1000",
      categories: [
        {
          name: "Circuit Design",
          topics: [
            "Power Amplifiers & LNAs",
            "RF Mixers & Filters",
            "Impedance Matching Networks",
            "RF Front-end Components",
            "Oscillators & Synthesizers",
            "RF Switches & Multiplexers",
            "RF Power Dividers",
            "Directional Couplers"
          ],
          resources: [
            "RF Circuit Design by Chris Bowick",
            "Analog Devices RF Design Guide",
            "IEEE Xplore Technical Papers",
            "Keysight RF Webinars"
          ]
        },
        {
          name: "Signal Integrity",
          topics: [
            "High-Speed PCB Design",
            "Power Distribution",
            "EMC Compliance",
            "Signal Routing Optimization",
            "Crosstalk Analysis",
            "Grounding Techniques",
            "Transmission Line Theory",
            "Noise Reduction"
          ]
        }
      ]
    },
    {
      title: "Wireless Communications",
      image: "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=1000",
      categories: [
        {
          name: "5G/6G Technologies",
          topics: [
            "MIMO Systems Design",
            "Beamforming Solutions",
            "Network Slicing",
            "O-RAN Architecture",
            "Massive MIMO",
            "mmWave Communications",
            "Carrier Aggregation",
            "Small Cell Deployment"
          ],
          resources: [
            "3GPP Technical Specifications",
            "O-RAN Alliance Documentation",
            "Wireless Communications by Rappaport",
            "Nokia/Ericsson White Papers"
          ]
        },
        {
          name: "IoT Networks",
          topics: [
            "LPWAN Technologies",
            "IoT Security",
            "Edge Computing",
            "IoT Protocols",
            "Smart Sensors",
            "IoT Data Analytics",
            "Device Management",
            "IoT Cloud Platforms"
          ]
        }
      ]
    },
    {
      title: "Antenna Design & Analysis",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1000",
      categories: [
        {
          name: "Antenna Types",
          topics: [
            "Dipole Antennas",
            "Patch Antennas",
            "Yagi-Uda Antennas",
            "Log-Periodic Antennas",
            "Helical Antennas",
            "Parabolic Reflectors",
            "Slot Antennas",
            "Horn Antennas"
          ],
          resources: [
            "Antenna Theory by Constantine Balanis",
            "IEEE Antennas and Propagation Society",
            "Antenna Design Software Tutorials",
            "Antenna Measurement Techniques"
          ]
        },
        {
          name: "Antenna Performance",
          topics: [
            "Radiation Patterns",
            "Gain and Directivity",
            "Bandwidth and Efficiency",
            "Polarization",
            "VSWR and Return Loss",
            "Antenna Arrays",
            "Beamforming Techniques",
            "Antenna Impedance Matching"
          ]
        }
      ]
    }
  ];

  const technicalResources = {
    books: [
      {
        title: "RF Circuit Design",
        author: "Chris Bowick",
        topics: ["Power Amplifiers", "Impedance Matching", "RF Components"]
      },
      {
        title: "Antenna Theory: Analysis and Design",
        author: "Constantine Balanis",
        topics: ["Antenna Design", "Radiation Patterns", "MIMO Systems"]
      },
      {
        title: "High-Speed Digital Design",
        author: "Howard Johnson",
        topics: ["Signal Integrity", "PCB Layout", "Power Distribution"]
      }
    ],
    tools: [
      {
        name: "ANSYS HFSS",
        category: "EM Simulation",
        image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=1000"
      },
      {
        name: "Altium Designer",
        category: "PCB Design",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000"
      },
      {
        name: "Keysight ADS",
        category: "RF Design",
        image: "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=1000"
      }
    ]
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      {/* Hardware-like Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-16 right-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-8 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/2 left-8 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute bottom-1/2 right-8 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-5 right-1/4 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/4 right-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-1/3 right-8 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/3 left-8 w-6 h-6 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-green-500 rounded-full animate-[bounce_2s_infinite]" />
      </div>
      {/* Background Dots */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
        key={i}
        className="absolute w-1 h-1 bg-green-400/10 rounded-full"
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
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            RF Engineering Services
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive RF solutions from concept to implementation
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
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
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

        {/* Consulting Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Consulting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {consulting.map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.areas.map((area, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Technical Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Technical Services
          </h2>
          <div className="space-y-12">
            {advancedServices.map((service, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-green-900/20 rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60">
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8">
                  {service.categories.map((category, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-semibold text-green-400 mb-4">{category.name}</h4>
                      <ul className="space-y-2 mb-6">
                        {category.topics.map((topic, j) => (
                          <li key={j} className="text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                      {category.resources && (
                        <div className="mt-4">
                          <h5 className="text-white mb-2">Recommended Resources:</h5>
                          <ul className="space-y-2">
                            {category.resources.map((resource, k) => (
                              <li key={k} className="text-gray-400 flex items-center gap-2">
                                <Book className="w-4 h-4 text-green-500" />
                                {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technical Resources & Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalResources.tools.map((tool, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-green-400">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 
                                   hover:to-green-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}