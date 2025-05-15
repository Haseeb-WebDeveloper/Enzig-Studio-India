"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

interface CarouselCard {
  image: {
    asset: {
      url: string;
    };
  };
  link: string;
  title: string;
}

interface SolutionsCarouselProps {
  carouselCards: CarouselCard[];
}

export default function SolutionsCarousel({ carouselCards }: SolutionsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current || !carouselCards || carouselCards.length === 0) return;

    const setupAnimation = () => {
      if (!trackRef.current) return null;
      
      // Get single card width (approximate as they might vary slightly)
      const cards = trackRef.current.querySelectorAll('.carousel-card');
      if (!cards.length) return null;
      
      const cardWidth = cards[0].getBoundingClientRect().width;
      const cardGap = 24; // 6 * 4 = 24px (gap-6 in Tailwind is 1.5rem or 24px)
      const singleCardFullWidth = cardWidth + cardGap;
      
      // Kill any existing animation
      if (animation) {
        animation.kill();
      }
      
      // Reset position
      gsap.set(trackRef.current, { x: 0 });
      
      // Create the animation with repeat
      const newAnimation = gsap.to(trackRef.current, {
        x: `-=${singleCardFullWidth * carouselCards.length}`,
        duration: carouselCards.length * 4, // Adjust speed based on number of cards
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          // When it completes a full cycle, reset to beginning with no visual jump
          gsap.set(trackRef.current, { x: 0 });
        }
      });
      
      // Add pause/resume on hover functionality (optional)
      containerRef.current?.addEventListener('mouseenter', () => newAnimation.pause());
      containerRef.current?.addEventListener('mouseleave', () => newAnimation.resume());
      
      return newAnimation;
    };

    // Wait for layout to stabilize and images to load
    const timeoutId = setTimeout(() => {
      const anim = setupAnimation();
      setAnimation(anim);
      
      // Handle window resize for responsive behavior
      const handleResize = () => {
        if (anim) {
          anim.kill();
        }
        const newAnim = setupAnimation();
        setAnimation(newAnim);
      };

      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
        if (anim) {
          anim.kill();
        }
      };
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animation) {
        animation.kill();
      }
    };
  }, [carouselCards]);

  // Create enough copies to ensure continuous looping
  const renderCards = () => {
    // Create 3 copies of the cards to ensure continuous loop
    const copies = [...carouselCards, ...carouselCards, ...carouselCards];
    
    return copies.map((card, index) => (
      <Link
        key={`card-${index}`}
        href={card.link}
        className="carousel-card relative cursor-pointer rounded-lg bg-foreground border-2 border-[#4d4d4d] h-full max-w-[350px] text-background overflow-hidden flex flex-col"
        style={{ flex: "0 0 auto" }}
      >
        <div className="px-4 pb-2 absolute bottom-2 left-0">
          <h3 className="text-2xl font-bold text-shadow text-foreground">{card.title}</h3>
        </div>
        <div className="flex-1">
          <Image
            src={card.image.asset.url}
            alt={card.title}
            width={400}
            height={400}
            className="object-cover w-full h-full"
            priority={index < carouselCards.length}
          />
        </div>
      </Link>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-10"
    >
      <div className="h-full">
        <div className="overflow-hidden h-[100%]">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              willChange: "transform"
            }}
          >
            {carouselCards && Array.isArray(carouselCards) && renderCards()}
          </div>
        </div>
      </div>
    </section>
  );
}