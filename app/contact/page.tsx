"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-green-500" />,
      title: "Email",
      details: "hello@delart.com",
      link: "mailto:hello@delart.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-500" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      title: "Office",
      details: "123 Innovation Street, Tech City, TC 12345",
      link: "https://maps.google.com"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center p-6 bg-zinc-800/50 rounded-2xl hover:bg-zinc-800/70 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-center">{item.details}</p>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  className="bg-zinc-800/50 border-zinc-700 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-zinc-800/50 border-zinc-700 text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                className="bg-zinc-800/50 border-zinc-700 text-white"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                className="bg-zinc-800/50 border-zinc-700 text-white min-h-[150px]"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
