"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, AtSign, Phone, User, Calendar, Briefcase, File, Send } from "lucide-react";
import { useState } from "react";

export default function Apply() {
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

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Position Selection */}
          <div className="space-y-2">
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
          </div>

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
