"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/market-strategy/analysis-roi.png",
  "/market-strategy/analysis-roi.png",
  "/market-strategy/analysis-roi.png",
  "/market-strategy/analysis-roi.png",
];

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const speedRef = useRef({ current: 1 }); // Make current inside object for GSAP to animate better

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const clones: HTMLElement[] = [];
    const totalImages = track.children.length;

    // Duplicate until track is 2x the screen width
    while (track.scrollWidth < window.innerWidth * 2) {
      for (let i = 0; i < totalImages; i++) {
        const clone = track.children[i].cloneNode(true) as HTMLElement;
        track.appendChild(clone);
        clones.push(clone);
      }
    }

    const totalWidth = track.scrollWidth;

    const tween = gsap.to(track, {
      x: `-=${totalWidth / 2}`,
      ease: "none",
      duration: 20,
      repeat: -1,
      modifiers: {
        x: (x) => {
          return `${parseFloat(x) % (totalWidth / 2)}px`;
        },
      },
    });

    tweenRef.current = tween;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // Smoothly increase the speed
      gsap.to(speedRef.current, {
        current: 5, // You can adjust this number if you want even faster
        duration: 0.3,
        ease: "power1.out",
        overwrite: "auto", // avoid glitchy stacking animations
        onUpdate: () => {
          tween.timeScale(speedRef.current.current);
        },
      });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Smoothly come back to normal speed
        gsap.to(speedRef.current, {
          current: 1,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto",
          onUpdate: () => {
            tween.timeScale(speedRef.current.current);
          },
        });
      }, 100); // small delay to feel more natural
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      tween.kill();
      clones.forEach((clone) => clone.remove());
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full h-[200px] relative">
      <div ref={trackRef} className="flex">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel ${index}`}
            className="w-[300px] h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
