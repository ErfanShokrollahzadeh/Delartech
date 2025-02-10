"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, AtSign, Phone, User, Calendar, Briefcase, File, Send } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "next/navigation"; // New import

export default function Apply() {
  const searchParams = useSearchParams();
  const appliedPosition = searchParams?.get("position") || "";
  
  // Updated mapping with richer details; added new entry for "Hardware EE Validation Engineer"
  const jobDetails: Record<string, string> = {
    "Senior RF Design Engineer": 
      "Focus on advanced RF circuit design, signal integrity analysis, and system optimization.\n\nIn this role, you'll work on cutting-edge technologies, collaborate with cross-functional teams, and bring your expertise in RF theory to life.",
    
    // New job details for
    "RF Systems Architect": 
      "Architect complex RF systems integrating various wireless solutions.\n\nYou will be responsible for designing system-level architectures, collaborating with product teams, and ensuring that our designs meet the highest performance and reliability standards.",
    
    // New job details for
    "Embedded Systems Engineer": 
      "Develop embedded hardware and firmware for innovative products.\n\nLeverage your skills in low-level programming and hardware interfacing to build robust systems in a fast-paced environment.",
    
    // New job details for
    "RF Test Engineer": 
      "Execute testing and validation of RF equipment for high-performance reliability.\n\nDesign and run comprehensive test suites to guarantee product quality across a range of challenging operating conditions.",
    
    // New job details for
    "PCB Layout EngineerNew": 
        `About the job

Delart is home to a team of world-class engineers and project leaders dedicated to developing the next generation of advanced networking technologies, consumer devices, and innovative technology solutions. Trusted by some of the world’s leading technology companies, we deliver highly scalable, mission-critical solutions that power both consumer and business applications globally. Since our founding in 2017, we have been at the forefront of designing cutting-edge networking, telecommunications, and consumer products, while driving end-to-end project execution and creating transformative technology applications.

Job Description: In this role you will be working with JDM, hardware engineers and PCB/Assembly vendors to determine PCB stack-up, apply design constraints, perform component placement and signal routing and DFM. You will assist hardware engineers to perform signal integrity and power integrity analysis, and release fab and assembly packages.

Responsibilities: 

• Own and improve PCB/FPC design processes, work with Portal hardware team and JDM PCB team to deliver ok2fab.
• Own complex PCB/FPC designs, containing analog, digital, RF, Camera, Display, Audio, Sensors and power charging components.
• Manage and coach JDM and PCB vendors on placement/routing/DFM/Working Gerber review to meet design quality.
• Create and manage PCB documentation including fabrication and assembly packages, such as Gerber, ODB, BoM, fab and assembly drawings.
• Interface with board fabrication vendor to select proper materials and stack-up, use correct impedance and DFX rulesets.
• Work with assembly vendors to supply data and seek assembly design requirements. Resolve DFM and manufacturing related issue.
• Work with hardware engineers and document control departments to release fab and assembly packages into a company-wide PLM system. Author ECO’s if necessary.
• Work closely with ECAD librarians on maintaining and expanding the company-wide library.

Minimum Qualifications:

• BS in EE or equivalent practical experience.
• 7+ years of PCB design experience using Cadence tool sets.
• Experience in managing and coaching JDM and PCB vendors.
• Experience interpreting datasheets and schematics, generating netlists and constraints, and using schematic for layout and routing reference.
• Experience with PLM systems such as Agile.
• Knowledge and understanding of IPC, JEDEC, IEEE, and other electronic standards.
• Experience with HDI design. Knowledge of multilayer PCB layout, fabrication and assembly techniques including blind/buried vias, and microvias.
• Experience with Rigid, Flex, and Rigid-Flex boards design and manufacturing.
• Experience in PCB layout design constraints for mixed/RF signal, high speed signal impedance control, memory interfaces, power distribution, heat dissipation, and optimization for EMI performance.

Preferred Qualifications:

• 10+ years experience of PCB layout design using Cadence Allegro.
• Proven track record to design & manage all aspects of the printed board design used in high volume consumer products.
• Experience in cost effective consumer electronics design.
• Knowledge in EMC compliance, environmental safety compliance.

Benefits

Delart provides competitive benefits and compensation across all regions where we operate. In the United States, our benefits package includes premium PPO and HMO medical insurance, dental and vision coverage, flexible spending accounts (FSA), life insurance, short- and long-term disability insurance, a company-matched 401(k) plan, and a generous paid time off policy.

Join us in shaping the future of technology. Apply today!

Delart is an equal opportunity employer. We celebrate diversity and are dedicated to fostering an inclusive workplace for all employees. We strictly prohibit discrimination or harassment of any kind based on race, color, religion, age, sex, national origin, disability, genetics, veteran status, sexual orientation, gender identity, or any other characteristic protected by law.`,
    
    // New job details for
    "PCB Layout Engineer": 
      `About the job

Delart is home to a team of world-class engineers and project leaders dedicated to developing the next generation of advanced networking technologies, consumer devices, and innovative technology solutions. Trusted by some of the world’s leading technology companies, we deliver highly scalable, mission-critical solutions that power both consumer and business applications globally. Since our founding in 2017, we have been at the forefront of designing cutting-edge networking, telecommunications, and consumer products, while driving end-to-end project execution and creating transformative technology applications.

Job Description: In this role you will be working with JDM, hardware engineers and PCB/Assembly vendors to determine PCB stack-up, apply design constraints, perform component placement and signal routing and DFM. You will assist hardware engineers to perform signal integrity and power integrity analysis, and release fab and assembly packages.

Responsibilities: 

• Own and improve PCB/FPC design processes, work with Portal hardware team and JDM PCB team to deliver ok2fab.
• Own complex PCB/FPC designs, containing analog, digital, RF, Camera, Display, Audio, Sensors and power charging components.
• Manage and coach JDM and PCB vendors on placement/routing/DFM/Working Gerber review to meet design quality.
• Create and manage PCB documentation including fabrication and assembly packages, such as Gerber, ODB, BoM, fab and assembly drawings.
• Interface with board fabrication vendor to select proper materials and stack-up, use correct impedance and DFX rulesets.
• Work with assembly vendors to supply data and seek assembly design requirements. Resolve DFM and manufacturing related issue.
• Work with hardware engineers and document control departments to release fab and assembly packages into a company-wide PLM system. Author ECO’s if necessary.
• Work closely with ECAD librarians on maintaining and expanding the company-wide library.

Minimum Qualifications: 

• BS in EE or equivalent practical experience.
• 7+ years of PCB design experience using Cadence tool sets.
• Experience in managing and coaching JDM and PCB vendors.
• Experience interpreting datasheets and schematics, generating netlists and constraints, and using schematic for layout and routing reference.
• Experience with PLM systems such as Agile.
• Knowledge and understanding of IPC, JEDEC, IEEE, and other electronic standards.
• Experience with HDI design. Knowledge of multilayer PCB layout, fabrication and assembly techniques including blind/buried vias, and microvias.
• Experience with Rigid, Flex, and Rigid-Flex boards design and manufacturing.
• Experience in PCB layout design constraints for mixed/RF signal, high speed signal impedance control, memory interfaces, power distribution, heat dissipation, and optimization for EMI performance.

Preferred Qualifications:

• 10+ years experience of PCB layout design using Cadence Allegro.
• Proven track record to design & manage all aspects of the printed board design used in high volume consumer products.
• Experience in cost effective consumer electronics design.
•Knowledge in EMC compliance, environmental safety compliance.

Benefits

Delart provides competitive benefits and compensation across all regions where we operate. In the United States, our benefits package includes premium PPO and HMO medical insurance, dental and vision coverage, flexible spending accounts (FSA), life insurance, short- and long-term disability insurance, a company-matched 401(k) plan, and a generous paid time off policy.

Join us in shaping the future of technology. Apply today!

Delart is an equal opportunity employer. We celebrate diversity and are dedicated to fostering an inclusive workplace for all employees. We strictly prohibit discrimination or harassment of any kind based on race, color, religion, age, sex, national origin, disability, genetics, veteran status, sexual orientation, gender identity, or any other characteristic protected by law.`,    
    
    // New job details for
    "Lab Systems and Network Engineer": 
      `About the job

Delart is home to a team of world-class engineers and project leaders dedicated to developing the next generation of advanced networking technologies, consumer devices, and innovative technology solutions. Trusted by some of the world’s leading technology companies, we deliver highly scalable, mission-critical solutions that power both consumer and business applications globally. Since our founding in 2017, we have been at the forefront of designing cutting-edge networking, telecommunications, and consumer products, while driving end-to-end project execution and creating transformative technology applications.

Overview:

Delart is seeking a hands-on, detail-oriented Lab Systems and Network Engineer to manage and maintain continuous lab services for a high-tech and networking testing environment. You will be the first line of defense for system issues, ensuring operational excellence, troubleshooting, and supporting systems engineers with networking and testbed requirements. This role is critical to the efficient operation of our state-of-the-art lab, and you'll work closely with a dynamic team of software and network engineers and lab program managers.

Responsibilities:

• Perform daily system health checks and respond to on-call requirements for lab services.
• Monitor and maintain: Lab network infrastructure, lab VMs (NUCs/Servers), wireless connectivity infra (Cellular, WiFi), and various hardware/software test stations.
• Proactively identify, manage, and resolve system issues, escalating to SMEs as needed.
• Deploy, configure, and tear down testbeds as required.
• Rack, stack, and cable equipment.
• Provision new servers, virtual machines, and devices (e.g., Test Phones, WiFi APs).
• Configure basic network registration and labnet systems.
• Develop automation scripts and tools/dashboard for streamlining above operations
• Perform and execute system and end-to-end tests and create test reports
• Serve as the on-site point of contact for lab and support requests.
• Conduct cable, network, and inventory checks during debugging sessions.
• Collaborate with other stakeholders engineers on operational needs and initiatives.
• Track and update inventory locations, project associations, and equipment allocations.
• Identify and procure frequently used items to ensure adequate stock levels.
• Drive quarterly efficiency projects, such as standardizing monitoring and auditing under-utilized testbeds.

Qualifications: 

• Experience working in a lab environment, with a focus on operational excellence.
• Familiarity with network equipment and wireless systems (WiFi, cellular).
• Proficiency with all major operating systems, command-line interfaces, and scripting/automation.
• Strong attention to detail and thorough documentation practices.
• Hands-on experience with cabling (USB, RF) and hardware setups.
• Familiarity with Android/iOS devices and cellular/wireless/app testing setups.
• BS/MS in engineering or relevant fields
• Preferred: prior exposure to lab monitoring tools and runbook creation.
• Preferred: Knowledge of Amarisoft, ESXi, and testbed provisioning.
• Lab Systems and Network Engineer Range

Lab Systems and Network Engineer Range
$110,000 - $150,000 USD

Benefits

Delart provides competitive benefits and compensation across all regions where we operate. In the United States, our benefits package includes premium PPO and HMO medical insurance, dental and vision coverage, flexible spending accounts (FSA), life insurance, short- and long-term disability insurance, a company-matched 401(k) plan, and a generous paid time off policy.

Join us in shaping the future of technology. Apply today!

Delart is an equal opportunity employer. We celebrate diversity and are dedicated to fostering an inclusive workplace for all employees. We strictly prohibit discrimination or harassment of any kind based on race, color, religion, age, sex, national origin, disability, genetics, veteran status, sexual orientation, gender identity, or any other characteristic protected by law.`,
    
    // New job details for
    "IPD and RF Packaging Engineer": 
      `About the job

Delart is home to a team of world-class engineers and project leaders dedicated to developing the next generation of advanced networking technologies, consumer devices, and innovative technology solutions. Trusted by some of the world’s leading technology companies, we deliver highly scalable, mission-critical solutions that power both consumer and business applications globally. Since our founding in 2017, we have been at the forefront of designing cutting-edge networking, telecommunications, and consumer products, while driving end-to-end project execution and creating transformative technology applications.

Responsibilities:

• Design, simulate and validate RF/mmWave package/IPD solutions from prototype to mass production.
• Partner with fabrication vendors to manufacture and qualify the RF/mmWaveF package with high yield.
• Ensure seamless integration of the RF packages into wireless systems, including reliability and manufacturability.
• RF lab debug, tuning and characterization of RF/mmWave packages.
• Understand fabrication vendor's technology/capabilities and down-select suitable vendors for implementation.
• Flash firmware images onto hardware systems as part of the testing and debugging process.
• Utilize lab equipment such as VNAs, MIPI analyzers, and other high-speed interface tools for testing and troubleshooting.
• Develop and execute tests based on specifications, ensuring accuracy and completeness of results.
• Create detailed test reports to document findings and provide actionable insights.
• Implement basic automation scripts in LabVIEW; Python scripting is a plus.
• Collaborate with design teams to validate and troubleshoot hardware, contributing to design improvements.

Qualifications: 

• BS or MS in Electrical/Electronic engineering with at least 5 years of RF/mmWave packaging experience.
• Excellent knowledge/experience in the following area.
  • Wafer-level packaging, including RDL design.
  • Silicon/LTCC/TFS passives design, including IPDs.
  • FEM package design.
  • SAW/BAW filters package design.
  • mmWave package design, including design of mmWave components on substrate.
• Excellent knowledge/experience of RF/mmWave measurement techniques and lab equipment, including load pull techniques and RF/mmWave probe station.
• Good understanding of wireless standards and compliance requirements (e.g. FCC)
• Excellent understanding of RF concepts such as power and noise matching, Smith charts, coupling, supply isolation, radar, de-sense, power supply rejection, transmission lines and mmWave components (e.g. coupler, filters, etc)
• Experienced in developing test plans, test procedures and compliance matrices.
• Familiar with circuit simulation tools (e.g. ADS), EM tools (e.g. HFSS), PCB design and layout tools (e.g. Allegro) and scripting languages (e.g. Python).
• Knowledge of wireless standards and wireless systems (e.g. WiFi/BT, Cellular, GNSS, UWB)

RF Design Engineer - IPD and Passives on Silicon Range
$165,000 - $210,000 USD

Benefits

Delart provides competitive benefits and compensation across all regions where we operate. In the United States, our benefits package includes premium PPO and HMO medical insurance, dental and vision coverage, flexible spending accounts (FSA), life insurance, short- and long-term disability insurance, a company-matched 401(k) plan, and a generous paid time off policy.

Join us in shaping the future of technology. Apply today!

Delart is an equal opportunity employer. We celebrate diversity and are dedicated to fostering an inclusive workplace for all employees. We strictly prohibit discrimination or harassment of any kind based on race, color, religion, age, sex, national origin, disability, genetics, veteran status, sexual orientation, gender identity, or any other characteristic protected by law.`,

    // New job details for
    "Hardware EE Validation Engineer":
     `About the job

Delart is home to a team of world-class engineers and project leaders dedicated to developing the next generation of advanced networking technologies, consumer devices, and innovative technology solutions. Trusted by some of the world’s leading technology companies, we deliver highly scalable, mission-critical solutions that power both consumer and business applications globally. Since our founding in 2017, we have been at the forefront of designing cutting-edge networking, telecommunications, and consumer products, while driving end-to-end project execution and creating transformative technology applications.

Job Summary:

Delart Technologies is seeking a skilled HW EE Validation Engineer to join our team. This role focuses on the validation and testing of consumer electronics hardware in the electrical engineering domain, with an emphasis on debugging and troubleshooting at both the hardware and electrical levels. The ideal candidate will have hands-on experience with high-speed interfaces, lab test equipment, and scripting for automation and data analysis.

Responsibilities:

• Conduct validation and testing of embedded hardware systems, focusing on electrical engineering aspects.
• Perform hardware-level debugging and troubleshooting to identify and resolve design and functional issues.
• Debug electrical systems, ensuring proper operation and signal integrity.
• Work with MIPI interfaces and protocols, and I2C and SPI.
• Perform power consumption measurements using current probes and other tools.
• Flash firmware images onto hardware systems as part of the testing and debugging process.
• Utilize lab equipment such as VNAs, MIPI analyzers, and other high-speed interface tools for testing and troubleshooting.
• Develop and execute tests based on specifications, ensuring accuracy and completeness of results.
• Create detailed test reports to document findings and provide actionable insights.
• Implement basic automation scripts in LabVIEW; Python scripting is a plus.
• Collaborate with design teams to validate and troubleshoot hardware, contributing to design improvements.

Qualifications:

• Bachelor’s degree in Electrical Engineering or a related field.
• Strong ability to debug and troubleshoot issues at both the electrical and hardware levels.
• Familiarity with MIPI, I2C, and SPI protocols and interfaces.
• Experience in EE design is a strong advantage.
• Proficiency in using lab test equipment and conducting hands-on testing.
• Ability to analyze power consumption and signal integrity measurements.
• Knowledge of scripting for test automation and data analysis (LabVIEW; Python preferred).

Hardware EE Validation Engineer Range:

$130,000 - $170,000 USD

Benefits:

Delart provides competitive benefits and compensation across all regions where we operate. In the United States, our benefits package includes premium PPO and HMO medical insurance, dental and vision coverage, flexible spending accounts (FSA), life insurance, short- and long-term disability insurance, a company-matched 401(k) plan, and a generous paid time off policy.

Join us in shaping the future of technology. Apply today!

Delart is an equal opportunity employer. We celebrate diversity and are dedicated to fostering an inclusive workplace for all employees. We strictly prohibit discrimination or harassment of any kind based on race, color, religion, age, sex, national origin, disability, genetics, veteran status, sexual orientation, gender identity, or any other characteristic protected by law.`
  };

  const [formData, setFormData] = useState({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    education: "",
    experience: "",
    linkedin: "",
    resume: null as File | null,
    coverLetter: "",
    portfolio: ""
  });

  const positions = [
    "Senior RF Design Engineer",
    "RF Systems Architect",
    "Embedded Systems Engineer",
    "RF Test Engineer",
    "Antenna Design Engineer",
    "RF Power Amplifier Designer",
    "5G Protocol Engineer",
    "RF Hardware Engineer"
  ];

  const educationLevels = [
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other"
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            Job Application Form
          </h1>
          <p className="text-gray-400">
            Please fill out the form below to apply for your selected position
          </p>
        </div>
        
        {/* Job Explanation Section */}
        {appliedPosition && (
          <div className="mb-8 p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-2">{appliedPosition}</h2>
            <p className="text-gray-400 whitespace-pre-line">
              {jobDetails[appliedPosition] || "Additional job details coming soon."}
            </p>
          </div>
        )}
        
        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Position Selection */}
          {/* <div className="space-y-2">
            <Label htmlFor="position" className="text-white">Position</Label>
            <Select
              value={formData.position}
              onValueChange={(value) => setFormData({ ...formData, position: value })}
            >
              <SelectTrigger className="bg-white/5 border-green-900/20 text-white">
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">First Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="firstName"
                  className="bg-white/5 border-green-900/20 text-white pl-10"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">Last Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="lastName"
                  className="bg-white/5 border-green-900/20 text-white pl-10"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  className="bg-white/5 border-green-900/20 text-white pl-10"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  className="bg-white/5 border-green-900/20 text-white pl-10"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Gender and Birth Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-white">Gender</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="text-white">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="text-white">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="text-white">Other</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-white">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="dateOfBirth"
                  type="date"
                  className="bg-white/5 border-green-900/20 text-white pl-10"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Education and Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="education" className="text-white">Education Level</Label>
              <Select
                value={formData.education}
                onValueChange={(value) => setFormData({ ...formData, education: value })}
              >
                <SelectTrigger className="bg-white/5 border-green-900/20 text-white">
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-white">Years of Experience</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="experience"
                  type="number"
                  className="bg-white/5 border-green-900/20 text-white pl-10"
                  placeholder="5"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-white">Resume</Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="resume"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-green-900/20 
                           border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">PDF, DOC, DOCX (MAX. 10MB)</p>
                </div>
                <input
                  id="resume"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-white">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              className="bg-white/5 border-green-900/20 text-white min-h-[150px]"
              placeholder="Tell us about yourself and why you're interested in this position..."
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            />
          </div>

          {/* Portfolio/LinkedIn */}
          <div className="space-y-2">
            <Label htmlFor="portfolio" className="text-white">Portfolio/LinkedIn URL</Label>
            <Input
              id="portfolio"
              type="url"
              className="bg-white/5 border-green-900/20 text-white"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 
                     hover:from-green-600 hover:to-green-700 text-white py-6"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Application
          </Button>
        </form>
      </div>
    </main>
  );
}
