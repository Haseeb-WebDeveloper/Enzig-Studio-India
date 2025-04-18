'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  "Google Ads",
  "E-Commerce",
  "Website Development",
  "Graphics & Video",
  "Social Media Management",
  "SEO",
  "Content Creation",
  "Meta Ads",
  "Graphics Design",
  "Analysis & ROI",
  "Branding & Logo"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="relative">
      {/* Hero Section with Form */}
      <section className="min-h-[90vh] px-6 py-20 flex items-center">
        <div className="relative max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-12">
          {/* Left Side - Curved Text and Tags */}
          <div className="flex flex-col justify-center">
            <Image 
            src="/contact/lets-start.png" 
            alt="Contact Hero" 
            width={500} 
            height={500} 
            className="w-full" />

            <div className="absolute top-[70%] left-[45%] -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 300 300" className="w-60 h-full">
                <defs>
                <path id="fullCircle"
                    d="M150,150 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                    fill="none" />
                </defs>

                <text  className="uppercase lora-sb-h3 fill-[#B0CF2E] font-semibold">
                <textPath href="#fullCircle" startOffset="0">
                    & Get in touch & Get in touch
                </textPath>
                </text>
            </svg>
            </div>


            {/* Services Tags */}
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-blur-[35px] text-[16px] md:text-[18px] montserrat-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-foreground text-background p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block montserrat-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-md bg-background/5 border border-background/20 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block montserrat-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-md bg-background/5 border border-background/20 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block montserrat-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-md bg-background/5 border border-background/20 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block montserrat-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full p-3 rounded-md bg-background/5 border border-background/20 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-background py-4 rounded-md montserrat-bold text-lg hover:bg-primary/90 transition-colors"
              >
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2034612372644!2d77.09244827536766!3d28.478632875677825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c11e1c1abb%3A0x9f5253b7ab2ea12d!2sEnzig%20Studio!5e0!3m2!1sen!2sin!4v1709791271135!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="montserrat-bold text-[40px] md:text-[56px] leading-tight mb-6">
                Get in touch with us.<br />
                We're here to assist you.
              </h2>
              <p className="lora-medium text-[20px] text-background/80">
                Grow Your Business with the #1 Digital Marketing Agency!
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/contact/contact-cta.jpg"
                alt="Contact CTA"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 