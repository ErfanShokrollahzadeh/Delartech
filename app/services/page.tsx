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
import { 
  Database,
  Microchip,Laptop 
} from "lucide-react";
import { useState, useEffect } from "react";
import "@/styles/animations.css"; // add import for animation styles

export default function Services() {
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
        <div className="absolute top-20 left-1/3 w-20 h-1 bg-green-500 animate-pulse" />
        <div className="absolute top-20 right-1/4 w-24 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-16 h-1 bg-green-500 animate-pulse" />
        <div className="absolute bottom-32 left-2/3 w-20 h-1 bg-green-500 animate-pulse" />
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
                        <hr className="w-full mt-4 h-[2px] border-0 bg-gradient-to-r from-green-600 via-green-500 to-green-400 animate-gradient" />
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
            </div>
              
      {/* ========================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-8 p-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
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
          <Button asChild className="bg-black text-white border border-green-500 hover:bg-green-500 
                               hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300">
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
        <br /><br />
      </div>
    </main>
  );
}