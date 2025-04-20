'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTA from '@/components/section/landing/cta';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    description: "To be more than just a creative agency — to be your brand's growth partner.",
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

const approachSteps = [
  {
    step: "Q1",
    title: "Discover",
    description: "Every great brand starts with a story. We begin by understanding your business, audience, challenges, and vision. This helps us craft a strategic roadmap aligned with your goals.",
  },
  {
    step: "Q2",
    title: "Define",
    description: "We analyze the data and insights gathered to define your brand's unique positioning, target audience personas, and key messaging pillars that will resonate with your market.",
  },
  {
    step: "Q3",
    title: "Design",
    description: "Our creative team brings your brand to life through stunning visuals, engaging content, and immersive experiences that capture your brand's essence and connect with your audience.",
  },
  {
    step: "Q4",
    title: "Deliver",
    description: "We implement, test, and optimize your brand assets across all channels, ensuring consistent quality and maximum impact to drive real business results.",
  }
];

export default function AboutPage() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const lineRef = useRef(null);
  const dotRefs = useRef<any[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a context to batch animations
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const progressLine = lineRef.current;
      
      if (!section || !progressLine) return;

      // Set initial transform to improve performance
      gsap.set(section, {
        willChange: "transform",
        force3D: true,
      });

      // Setup animation for the progress line
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            // Update the progress line width based on scroll progress
            requestAnimationFrame(() => {
              gsap.set(progressLine, {
                width: `${self.progress * 100}%`,
                force3D: true,
              });
            });
          }
        }
      });

      // Animation for horizontal scrolling
      timeline.to(section, {
        xPercent: -75, // Using percentage for responsive design
        ease: "none",
        duration: 1,
      });

      // Animate dots to appear as scrolling progresses
      dotRefs.current.forEach((dot, index) => {
        if (index > 0) { // Skip the first dot which is always visible
          const progress = index / (dotRefs.current.length - 1);
          
          timeline.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "power1.inOut"
          }, progress * 0.75); // Stagger the animations
        }
      });

      return () => {
        timeline.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-background h-full min-h-[620px] px-6 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full px-2">
          <Image
            src="/about/hero.png"
            alt="About Hero"
            width={1000}
            height={1000}
            className="h-full md:max-w-[680px] rotate-270 md:rotate-0 mx-auto w-full"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6 space-y-6">
          <h1 
            className="montserrat-bold text-4xl md:text-6xl"
          >
            "We're not just a creative agency
          </h1>
          <h1 
            className="montserrat-bold text-4xl md:text-6xl"
          >
            we're your brand's growth partner."
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
             Enzig is derived from the German word "Einzig".
            </p>
            <p className="lora-medium">
              Einzig is a German adjective that means "only" or "sole." It can also imply "unique" or "single.". For example, "das einzig wahre" can mean "the real deal,"
            </p>
            <p className="lora-medium">
            Enzig Studio is destined on a mission to give your brand a "unique" brand identity and make you stand out of your competitor's making you the "only" one to shine bright.
            </p>
          </div>

          <div 
            className="flex flex-wrap items-center gap-2"
          >
            <span className="text-[14px] md:text-[16px] montserrat-medium pr-3">similar:</span>
            {tags.map((tag, index) => (
              <span
                key={index}
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
                key={index}
                className={`bg-foreground md:max-w-[270px] w-full p-8 rounded-md border-3 border-secondary ${card.rotation}`}
              >
                <h3 className="montserrat-bold text-[28px] md:text-[32px] leading-[40px] mb-3 text-secondary">{card.title}</h3>
                <p className="lora-blog-h3">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      {/* Our Approach Section */}
      <section 
        ref={triggerRef} 
        className="relative bg-black overflow-hidden will-change-transform"
        style={{ perspective: "1000px" }}
      >
        <div className="h-screen">
          <div 
            ref={sectionRef} 
            className="relative h-screen w-[400vw] flex"
            style={{ 
              willChange: "transform",
              backfaceVisibility: "hidden"
            }}
          >
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="h-screen w-screen flex items-center justify-center p-6"
                style={{ 
                  willChange: "transform",
                  transform: "translateZ(0)"
                }}
              >
                <div className="max-w-3xl mx-auto text-left relative">
                  <span className="absolute top-[-80px] left-0 text-[#a4ff00] text-4xl font-bold">
                    {step.step}
                  </span>
                  
                  <h3 className="font-bold text-5xl text-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/90 max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Line */}
          <div className="absolute bottom-32 left-0 w-full px-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative h-[2px] bg-white/10">
                <div
                  ref={lineRef}
                  className="absolute top-0 left-0 h-full bg-[#a4ff00] origin-left"
                  style={{ 
                    willChange: "width",
                    transform: "translateZ(0)",
                    width: "0%" // Initial width
                  }}
                />
              </div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="absolute bottom-32 left-0 w-full px-16">
            <div className="max-w-6xl mx-auto flex justify-between">
              {approachSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center relative"
                  style={{ transform: "translateZ(0)" }}
                >
                  {/* Green dot */}
                  <div 
                    ref={(el: any) => dotRefs.current[index] = el}
                    className="w-3 h-3 bg-[#a4ff00] rounded-full absolute -top-[7px]"
                    style={{ 
                      opacity: index === 0 ? 1 : 0.5,
                      scale: index === 0 ? 1 : 0.5,
                      transition: "opacity 0.3s, scale 0.3s"
                    }}
                  ></div>
                  
                  {/* Only show step name */}
                  <span className="absolute top-6 text-xl font-bold text-[#a4ff00]">
                    {step.step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}
