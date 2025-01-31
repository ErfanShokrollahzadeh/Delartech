"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Smartphone, Wifi } from "lucide-react";
import { useState } from "react";

const serviceCategories = [
  {
    title: "Hardware Design",
    icon: <Cpu className="h-6 w-6" />,
    services: [
      {
        name: "RF Circuit Design",
        description: "Expert design of RF circuits, amplifiers, mixers, and filters with advanced impedance matching techniques",
        tags: ["RF", "Amplifiers", "Circuit Design"]
      },
      {
        name: "PCB Design & Layout",
        description: "High-speed PCB design with focus on signal integrity, power distribution, and EMC compliance",
        tags: ["PCB", "Signal Integrity", "EMC"]
      },
      {
        name: "Embedded Systems",
        description: "End-to-end embedded system design using latest microcontrollers and IoT platforms",
        tags: ["MCU", "IoT", "Firmware"]
      }
    ]
  },
  {
    title: "Wireless Communications",
    icon: <Wifi className="h-6 w-6" />,
    services: [
      {
        name: "5G Technology",
        description: "Implementation of 5G NR protocols, RAN architecture, and network slicing solutions",
        tags: ["5G", "RAN", "NR"]
      },
      {
        name: "Antenna Design",
        description: "Custom antenna design and optimization using advanced EM simulation tools",
        tags: ["MIMO", "EM", "Radiation Pattern"]
      }
    ]
  },
  {
    title: "Telecommunications",
    icon: <Radio className="h-6 w-6" />,
    services: [
      {
        name: "OpenRAN Development",
        description: "Design and implementation of OpenRAN solutions with focus on network disaggregation",
        tags: ["O-RAN", "vRAN", "Network"]
      },
      {
        name: "RF System Integration",
        description: "End-to-end RF system design and integration services for wireless applications",
        tags: ["RF Systems", "Integration", "Wireless"]
      }
    ]
  },
  {
    title: "Mobile Solutions",
    icon: <Smartphone className="h-6 w-6" />,
    services: [
      {
        name: "IoT Development",
        description: "Custom IoT solutions with focus on low-power design and wireless connectivity",
        tags: ["BLE", "LoRa", "IoT"]
      },
      {
        name: "Hardware Acceleration",
        description: "Implementation of hardware acceleration for AI and signal processing applications",
        tags: ["FPGA", "AI", "DSP"]
      }
    ]
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredServices = selectedCategory
    ? serviceCategories.find(cat => cat.title === selectedCategory)?.services
    : serviceCategories.flatMap(cat => cat.services);

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Leveraging cutting-edge technology to deliver innovative solutions in RF, wireless,
            and embedded systems design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !selectedCategory
                ? "bg-green-500 text-white"
                : "bg-zinc-800/50 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            All
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
                selectedCategory === category.title
                  ? "bg-green-500 text-white"
                  : "bg-zinc-800/50 text-gray-300 hover:bg-zinc-800"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices?.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-800/70 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-full bg-green-500/10 text-green-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}