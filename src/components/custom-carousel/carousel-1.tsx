"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Carousel1Props {
  images: any[];
  title: string;
}

export default function Carousel1({ images, title }: Carousel1Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Animation refs
  const animation = useRef<gsap.core.Tween | null>(null);
  const baseSpeed = useRef(15); // seconds for one complete loop (lower = faster)
  const currentSpeed = useRef(15);
  const draggingData = useRef({
    startX: 0,
    startLeft: 0,
    trackWidth: 0,
    containerWidth: 0,
  });

  // Create the smooth loop animation
  useEffect(() => {
    if (!trackRef.current || images.length === 0) return;
    
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
          duration: currentSpeed.current,
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
  }, [images.length]);

  // Handle scroll events to adjust speed
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isDragging || !animation.current) return;
      
      // Increase speed on scroll (lower duration = faster)
      currentSpeed.current = baseSpeed.current * 1; // Changed from 0.5 to 0.3 for faster speed
      
      // Apply the new speed to the animation
      animation.current.timeScale(10); // Changed from 2 to 3.5 for increased speed
      
      // Reset speed after a short delay
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Gradually reset to normal speed
        gsap.to(animation.current, {
          timeScale: 1,
          duration: 0.5,
          onUpdate: () => {
            currentSpeed.current = baseSpeed.current / animation.current!.timeScale();
          },
        });
      }, 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isDragging]);

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
          duration: currentSpeed.current,
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
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
    
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
    
    if (animation.current) {
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
  }, [isDragging]);
  
  // Create duplicate images for smooth looping
  const duplicatedImages = [...images, ...images];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        if (isDragging) {
          setIsDragging(false);
          handleMouseUp();
        }
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Custom cursor */}
      {isHovering && !isDragging && (
        <div
          className="pointer-events-none fixed z-50 mix-blend-difference"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-medium">Explore</span>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto relative">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={`flex ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ 
              willChange: "transform",
              backfaceVisibility: "hidden", 
              transformStyle: "preserve-3d"
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className={`relative min-w-[300px] h-[400px] mx-2 ${
                  !isDragging && "cursor-none"
                }`}
                style={{ flex: "0 0 auto" }}
              >
                <Image
                  src={image.asset.url}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                  draggable={false}
                  priority={index < images.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}