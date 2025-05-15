"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

interface UiUxCarouselProps {
  carouselCards: any;
}

export default function UiUxCarousel({ carouselCards }: UiUxCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Animation refs
  const animation = useRef<gsap.core.Tween | null>(null);
  const draggingData = useRef({
    startX: 0,
    startLeft: 0,
    trackWidth: 0,
    containerWidth: 0,
  });

  // Create the smooth loop animation
  useEffect(() => {
    if (!trackRef.current || carouselCards.length === 0) return;

    // Clone images for seamless looping if not enough
    const ensureClones = () => {
      if (trackRef.current) {
        // Get the current width of the track and container
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = containerRef.current?.clientWidth || window.innerWidth;

        // Store for dragging calculations
        draggingData.current.trackWidth = trackWidth;
        draggingData.current.containerWidth = containerWidth;

        // Set initial position
        gsap.set(trackRef.current, { x: 0 });

        // Create the animation
        animation.current = gsap.to(trackRef.current, {
          x: `-=${trackWidth / 2}`, // Move by half the track (we have duplicated the images)
          duration: 15, // Reduced from 25 to 15 for faster animation
          ease: "none",
          repeat: -1, // Infinite looping
          paused: false,
        });
      }
    };

    // Wait for images to load and measure properly
    setTimeout(ensureClones, 100);

    // Clean up animations when component unmounts
    return () => {
      if (animation.current) {
        animation.current.kill();
      }
    };
  }, [carouselCards.length]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current && animation.current) {
        // Kill old animation
        animation.current.kill();

        // Recreate with new dimensions
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = containerRef.current?.clientWidth || window.innerWidth;

        draggingData.current.trackWidth = trackWidth;
        draggingData.current.containerWidth = containerWidth;

        // Reset position
        gsap.set(trackRef.current, { x: 0 });

        // Create new animation
        animation.current = gsap.to(trackRef.current, {
          x: `-=${trackWidth / 2}`,
          duration: 15, // Reduced from 25 to 15 for faster animation
          ease: "none",
          repeat: -1,
          paused: false,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track cursor position
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && trackRef.current && animation.current) {
      e.preventDefault();

      // Calculate new position based on drag
      const deltaX = e.clientX - draggingData.current.startX;
      let newX = draggingData.current.startLeft + deltaX;

      // Apply the new position
      gsap.set(trackRef.current, { x: newX });
    }
  }, [isDragging]);

  // Handle drag start
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current || !animation.current) return;

    e.preventDefault();
    setIsDragging(true);

    // Pause the animation
    animation.current.pause();

    // Get current position and store start data
    const currentX = gsap.getProperty(trackRef.current, "x") as number;
    draggingData.current.startX = e.clientX;
    draggingData.current.startLeft = currentX;
  }, []);

  // Handle drag end and resume animation
  const handleMouseUp = useCallback(() => {
    if (!trackRef.current || !animation.current || !isDragging) return;

    setIsDragging(false);

    if (animation.current && !isHovering) {
      // Get current position
      const currentX = gsap.getProperty(trackRef.current, "x") as number;

      // Calculate what progress we should be at in the animation
      const trackWidth = draggingData.current.trackWidth / 2;
      const progress = Math.abs(currentX) / trackWidth;

      // Set the animation to this progress
      animation.current.progress(progress);

      // Resume the animation
      animation.current.play();
    }
  }, [isDragging, isHovering]);

  // Handle hover events
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    if (animation.current) {
      animation.current.pause();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (animation.current && !isDragging) {
      animation.current.play();
    }
  }, [isDragging]);

  // Create duplicate images for smooth looping
  const duplicatedImages = [...carouselCards, ...carouselCards];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-10"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full">
        <div className="overflow-hidden h-[100%]">
          <div
            ref={trackRef}
            className={`flex gap-6 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d"
            }}
          >
            {duplicatedImages.map((image, index) => (
              <Link
                key={index}
                href={`/portfolio/${image.slug.current}`}
                className="p-4 rounded-lg bg-foreground h-full max-w-[350px] text-background"
                style={{ flex: "0 0 auto" }}
              >
                <Image
                  src={image.image.asset.url}
                  alt="UI/UX"
                  width={400}
                  height={400}
                  className="object-cover rounded-lg w-full h-full "
                  draggable={false}
                  priority={index < carouselCards.length}
                />
                <div className="space-y-3 mt-4">
                  <h3 className="text-2xl font-bold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}   