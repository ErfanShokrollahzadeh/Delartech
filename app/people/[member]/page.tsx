"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MemberProps {
  params: {
    member: string;
  };
}

const memberData: Record<string, { image: string; info: string; scholarLink?: string }> = {
  "Alireza Tarighat Mehrabani": {
    image: "/images/img1.webp",
    info: `Alireza is the Delart founder, and a wireless systems expert with a deep understanding of RF systems and architectures, communications theory, and analog and digital silicon design and manufacturing. He has extensive experience with millimeter-wave, Wi-Fi, and 4G and 5G cellular technologies.  

Alireza has had senior technical positions with leading communications companies, including Director of Engineering at SpaceX and Broadcom, where he was instrumental in the development of advanced millimeter-wave phased arrays and cellular radio chipsets. At Broadcom, he patented and productized a novel architecture to realize large millimeter-wave phased-array RF frontends through “tilting" modular subsystems. This novel architecture enabled a generation of low-cost, low-power, large-phased arrays for emerging terrestrial and satellite networks. He also led the RF systems team behind some of Broadcom's cellular radio chipsets. Prior to Broadcom, he was Director of Engineering at WiLinx, where he developed the first CMOS wide band (3-10 GHz) RF frontend and the baseband ASIC, Compliant with the WiMedia Alliance Ultra-Wideband (UWB) standard.

Alireza has made significant contributions to IEEE 802.11ad and 802.11ay standards, which extend Wi-Fi operation to the 60GHz spectrum. Alireza holds a Ph.D. and M.S. degree in electrical engineering from UCLA, where he received an outstanding Ph.D. dissertation award and a B.S. degree in electrical engineering from Sharif University of Technology. He is a co-inventor on 35+ patents and a co-author on 55+ cited IEEE journals and conference publications:`,scholarLink: "https://scholar.google.com/citations?user=tY-aHdQAAAAJ&hl=en"
  },
  "Bill Fujimoto": {
    image: "/images/img2.jpeg",
    info: `Bill Fujimoto is an accomplished RF engineering expert with deep expertise in RF systems, validation, and productization. His experience includes system-level wireless hardware development across platforms like 60GHz, 4G LTE, and WiMAX, focusing on RF front-end architectures, analysis, and optimization.

At Facebook, Bill designed 60GHz radio and antenna subsystems for the Terragraph project. Previously, he was a Senior Principal Engineer at Broadcom, specializing in RF front-end design for smartphones, and a Principal Engineer at Beceem Communications.

Bill holds a Bachelor of Science in Electrical Engineering from California Polytechnic State University and brings a wealth of knowledge to advancing wireless technologies.`,
  },
  "Payam Torab": {
    image: "/images/img3.jpeg",
    info: `Payam is a systems architect with a unique combination of skills ranging from systems and control theory to Internet architecture to wireless protocols and software development. He has developed embedded systems, all-optical network switching products for the Internet core, IPv4 and IPv6 protocol stacks, cutting-edge wireless chips and technologies, and much of the software that fuels these products.  

Previously, he was a Senior Principal Scientist at Broadcom, developing millimeter-wave systems while contributing to IEEE802.11 standards. He also developed embedded IPv4/v6 protocol stacks for mobile devices in a different role. Prior to that, he was a Director of Software and Protocols at WiLinx Corporation, where he developed MAC architecture for an Ultra-Wide band (UWB) SoC Based on Wikimedia Alliance standards. Before WiLinx, He had various systems and software engineering roles in multiple networking companies, including ADVA Optical Networking, where he developed the first routing and path computation engine for a Generalized Multi-Protocol Label Switching (GMPLS) control plane for all-optical switches.  

Payam has received multiple IEEE appreciation awards for his contributions to IEEE 802.11ad and 802.11ay standards, which extend Wi-Fi operation to the 60GHz spectrum. He is currently contributing to the 802.11be standard, the basis for the next generation of Wi-Fi after Wi-Fi 6.  

Payam holds a Ph.D. and M.S. degree in Electrical Engineering from Georgia Institute of Technology, and a B.S. degree in Electrical Engineering from Sharif University of Technology.

He holds 20+ granted U.S. and worldwide patents.`,
  },
  "Rajesh Rasalkar": {
    image: "/images/image-4.jpeg",
    info: `Rajesh is a seasoned network engineering expert with profound knowledge of access, transport, and core network technologies, down to the protocol level. His blend of research, telecom, and software expertise drives advancements in 5G cloud-native networks. He has led initiatives in network architecture design, planning models, automated tools, and technical specifications for service providers and smart cities.

With leadership roles at Bell Labs, Alcatel-Lucent, Oracle, and successful startups, Rajesh brings a wealth of experience to the team. He holds a Master’s in Management Science and a Bachelor’s in Electronics Engineering, along with multiple patents and published research in Telco Cloud and Mobile Networks.`,
  },
  "DR. Vignesh Manohar": {
    image: "/images/img-5.jpeg",
    info: `Vignesh is a highly skilled antenna engineer with expertise in all stages of antenna development, from conceptualization and simulation to fabrication and measurement. He specializes in designing cellular, Wi-Fi, and GNSS antennas for next-generation AR/VR devices and leads the development of wireless charging coils for upcoming technologies.

His postdoctoral research at Florida International University focused on compact, foldable ultra-wideband phased arrays with bandwidths exceeding 8:1, while his doctoral work at UCLA advanced reflector antennas for CubeSats and small satellites. With over 10 peer-reviewed publications and awards like the EMTS Young Scientist Award and Outstanding MS Thesis Award, Vignesh brings exceptional expertise to Delart.

As CEO of Delart's Canadian operations, he is driving the company's growth in the U.S. and Canada.`,
  },
  "Lisa Chen": {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop",
    info: `Lisa is the Product Manager leading our teams.
Add your custom info here.`,
  },
};

const MemberDetail = ({ params }: MemberProps) => {
  const memberName = decodeURIComponent(params.member);
  const member = memberData[memberName];

  if (!member) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto p-8 rounded-md shadow-lg bg-gray-800">
          <h1 className="text-3xl font-bold mb-4">Member Not Found</h1>
          <p>No data available for {memberName}.</p>
        </div>
      </main>
    );
  }

  // Split long info into paragraphs based on double newline
  // Only take up to three paragraphs
  const paragraphs = member.info.split('\n\n').slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      {/* Updated container with top margin */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-16">
        
        {/* Image Section with updated size, without rounded corners, and with green border */}
        <div className="flex items-center justify-center p-8 mt-10">
          {/* Added rounded-md class for slight border radius */}
          <div className="relative w-96 h-96 overflow-hidden border-4 border-green-500 shadow-xl rounded-md">
            <Image 
              src={member.image} 
              alt={memberName} 
              layout="fill" 
              objectFit="cover" 
              className="object-cover" 
            />
          </div>
        </div>
        
        {/* Text Section with added margin-top */}
        <div className="p-5 flex flex-col justify-center w-full mt-10">
          <h1 className="text-3xl font-bold text-green-500 mb-4">{memberName}</h1>
          <div className="max-w-prose">
            {paragraphs.map((para, i) => {
              // For the last paragraph, add the Google Scholar link
              if (i === paragraphs.length - 1 && member.scholarLink) {
                return (
                  <p key={i} className="mb-4 text-lg leading-relaxed">
                    {para}
                    {/* Google Scholar link inserted here */}
                    <Link href={member.scholarLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 ml-1">
                      Google Scholar
                    </Link>
                  </p>
                );
              } else {
                return (
                  <p key={i} className="mb-4 text-lg leading-relaxed">{para}</p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MemberDetail;
