"use client";

import React from 'react';

interface MemberProps {
  params: {
    member: string;
  };
}

const MemberDetail = ({ params }: MemberProps) => {
  const memberName = decodeURIComponent(params.member);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8 rounded-md shadow-lg bg-gray-800">
        <h1 className="text-3xl font-bold mb-4">Member Details</h1>
        <h2 className="text-xl font-semibold mb-2">Name: {memberName}</h2>
        <p>More details about {memberName} will be displayed here.</p>
      </div>
    </main>
  );
};

export default MemberDetail;
