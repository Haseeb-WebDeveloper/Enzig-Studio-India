"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const columns = [
    {
        images: [
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
        ],
    },
    {
        images: [
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
        ],
    },
    {
        images: [
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
        ],
    },
    {
        images: [
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
        ],
    },
    {
        images: [
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
            "/blog/blog-hero.png",
        ],
    },
];

export default function RotatedColumnsParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const columnRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        columnRefs.current.forEach((colEl, i) => {
            if (!colEl) return;
            const inner = colEl.querySelector<HTMLDivElement>(".inner")!;
            const direction = i % 2 === 0 ? "-20%" : "20%";

            gsap.to(inner, {
                y: direction,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-gray-900"
        >
            <div
                className="absolute inset-0 flex h-full gap-6"
                style={{
                    width: "130vw", // Increased from 125vw to cover more area
                    marginLeft: "-15vw", // Adjusted margin to center it properly
                    transform: "rotate(-10deg)",
                    transformOrigin: "top center",
                    display: "flex",
                    height: "130%", // Increased from 120% to ensure full coverage
                    top: "-20%", // Pull it up slightly to ensure the top corner is covered
                }}
            >
                {columns.map((col, i) => (
                    <div
                        key={i}
                        ref={(el) => (columnRefs.current[i] = el)}
                        className="overflow-hidden w-1/3"
                        style={{
                            flex: "0 0 25%", // 5 columns (25% each of 120vw)
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <div
                            className="inner absolute top-[-20%] left-0 w-full flex flex-col gap-6"
                            style={{
                                height: "140%", // taller to allow vertical parallax
                            }}
                        >
                            {col.images.map((src, idx) => (
                                <Image
                                    key={idx}
                                    src={src}
                                    alt={`col${i}-img${idx}`}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}





















"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brandingImage from "@/assets/branding-page-cover.webp"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const columns = [
    {
        images: [
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
        ],
    },
    {
        images: [
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
        ],
    },
    {
        images: [
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
        ],
    },
    {
        images: [
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
        ],
    },
    {
        images: [
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
        ],
    },
    {
        images: [
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
            brandingImage,
        ],
    },
];

export default function RotatedColumnsParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const columnRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        columnRefs.current.forEach((colEl, i) => {
            if (!colEl) return;
            const inner = colEl.querySelector<HTMLDivElement>(".inner")!;
            const direction = i % 2 === 0 ? "-20%" : "20%";

            gsap.to(inner, {
                y: direction,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-gray-900"
        >
            <div
                className="absolute inset-0 flex h-full gap-3 md:gap-6"
                style={{
                    width: "180vw", // Increased width for better coverage on mobile
                    marginLeft: "-45vw", // Adjusted margin for mobile
                    transform: "rotate(-10deg)",
                    transformOrigin: "center center",
                    display: "flex",
                    height: "150%",
                    top: "-15%",
                }}
            >
                {columns.map((col, i) => (
                    <div
                        key={i}
                        ref={(el) => (columnRefs.current[i] = el)}
                        className="overflow-hidden w-1/4"
                        style={{
                            flex: "0 0 15%",
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <div
                            className="inner absolute top-[-20%] left-0 w-full flex flex-col gap-3 md:gap-6"
                            style={{
                                height: "140%",
                            }}
                        >
                            {col.images.map((src, idx) => (
                                <Image
                                    key={idx}
                                    src={src}
                                    alt={`col${i}-img${idx}`}
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-cover"
                                    priority={idx === 0} // Prioritize loading of first images
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
