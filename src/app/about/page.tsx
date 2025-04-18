'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTA from '@/components/section/landing/cta';

const tags = [
  "only",
  "sole",
  "single unique",
  "singular",
  "unrivalled",
  "unparalleled",
];

const cards = [
  {
    title: "Our Goal",
    description: "To be more than just a creative agency — to be your brand’s growth partner.",
    rotation: "rotate-[-3deg]"
  },
  {
    title: "Our Vision",
    description: "To position Enzig Studio as a trusted creative partner for ambitious brands globally.",
    rotation: "rotate-[1deg]"
  },
  {
    title: "Our Mission",
    description: "To create design and content that speaks, connects, and converts.",
    rotation: "rotate-[-2deg]"
  }
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-background h-full min-h-[600px] px-6 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full px-6">
          <Image
            src="/about/hero.png"
            alt="About Hero"
            width={1000}
            height={1000}
            className="h-full md:max-w-[560px] max-w-full"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6 space-y-6">
          <h1 
            className="montserrat-bold text-4xl md:text-6xl"
          >
            “We’re not just a creative agency
          </h1>
          <h1 
            className="montserrat-bold text-4xl md:text-6xl"
          >
            we’re your brand’s growth partner.”
          </h1>
         
        </div>
      </section>

      {/* About Section with Tags */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className=" max-w-[1000px] mx-auto">
          <div 
            className="mb-12 space-y-4 text-[18px] md:text-[20px]"
          >
            <h2 className="montserrat-bold text-[60px] md:text-[72px] leading-[60px] md:leading-[72px] mb-6">Enzig</h2>
            <p className="lora-medium">
             Enzig is derived from the German word “Einzig”.
            </p>
            <p className="lora-medium">
              Einzig is a German adjective that means "only" or "sole." It can also imply "unique" or "single.". For example, "das einzig wahre" can mean "the real deal,"
            </p>
            <p className="lora-medium">
            Enzig Studio is destined on a mission to give your brand a “unique” brand identity and make you stand out of your competitor’s making you the “only” one to shine bright.
            </p>
          </div>

          <div 
            className="flex flex-wrap items-center gap-2"
          >
            <span className="text-[14px] md:text-[16px] montserrat-medium pr-3">similar:</span>
            {tags.map((tag, index) => (
              <span
                className="border border-background/30 px-3 py-1 rounded-full text-[18px] md:text-[20px] montserrat-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-28 px-6 bg-background text-foreground">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 justify-center items-center">
            <p className="lora-medium text-center max-w-md mx-auto text-[28px] md:text-[32px] leading-[150%]">
            Enzig Studio is a creative agency specializing in branding, social media management, content creation, packaging design, print collaterals, and UI/UX design. We help businesses build bold, memorable, and impactful brand stories.
            </p>
          
          <div
            className="w-full flex justify-center items-start overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-fit md:max-w-[300px] w-full aspect-[9/16]  bg-red-50"
            >
              <source src="/about-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-4 bg-primary text-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 w-fit mx-auto justify-center items-center">
            {cards.map((card, index) => (
              <div
                className={`bg-foreground md:max-w-[270px] w-full p-8 rounded-md border-3 border-secondary ${card.rotation}`}
              >
                <h3 className="montserrat-bold text-[28px] md:text-[32px] leading-[40px] mb-3 text-secondary">{card.title}</h3>
                <p className="lora-blog-h3">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-background text-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="montserrat-bold text-[40px] md:text-[56px] leading-[40px] md:leading-[56px] mb-6 text-center">Our Approach</h2>
        </div>
      </section>

      {/* Cta */}
      <CTA />
    </main>
  );
}

