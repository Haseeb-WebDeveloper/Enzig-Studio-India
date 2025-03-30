'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Starts animating when 80% of the viewport is reached
          end: 'top 20%', // Ends when 20% of the viewport is reached
          scrub: 1, // Smooth parallax effect
        },
      }
    );
  }, []);

  return (
    <section className="max-w-[1600px] mx-auto px-6 pb-16 pt-26 md:pb-24 md:pt-26 flex flex-col gap-12">
      <div className='flex flex-col items-center justify-center'>
        <h2 ref={textRef} className='montserrat-extrabold text-[32px] md:text-[56px] leading-[40px] md:leading-[60px] text-center'>Where we do Magic</h2>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {[
          '/studio-1.avif',
          '/studio-2.avif',
          '/studio-3.avif',
          '/studio-4.avif',
          '/studio-4.avif',
          '/studio-2.avif',
          '/studio-6.avif',
          '/studio-6.avif',
          '/studio-7.avif',
        ].map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden">
            <Image
              className='rounded hover:scale-105 transition transform duration-300 ease-in-out'
              src={src}
              alt="Studio"
              width={500}
              height={500}
            />
          </div>
        ))}

        <div className="break-inside-avoid overflow-hidden bg-gray-100 h-80 flex items-center justify-center rounded"
          // style={{
          //   backgroundImage: "url('/studio-1.avif')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <p className='montserrat-mediem text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-background'>Learn More</p>
        </div>
      </div>
    </section>
  );
}
