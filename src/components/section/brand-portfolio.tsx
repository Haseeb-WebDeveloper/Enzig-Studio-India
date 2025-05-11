"use client";

import Image from "next/image";
import { Raleway } from "next/font/google";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BrandingPortfolio } from "@/types/interface";
import { useState } from "react";
import Link from "next/link";

const raleway = Raleway({ subsets: ['latin'] });

export const BrandPortfolio = ({ brands, page, link }: { brands: BrandingPortfolio['brands'], page: string, link?: string }) => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 space-y-32">
            {brands.map((brand, index) => (
                <div key={index}>
                    {/* Title Section */}
                    <div className="mx-auto px-4 mb-12 flex justify-between items-center gap-3">
                        {page === "portfolio" ? <h1 className="montserrat-eb-h2">Branding & Identity</h1> : <h1 className="montserrat-eb-h2 text-center">{brand.brandName}</h1>}
                        {link && <Link href={link} className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                            Next Project
                            <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                        </Link>}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* First Column - Brand Experience Card & Carousel */}
                        <div className="space-y-4 w-full lg:w-[40%]">
                            {/* Brand Experience Card */}
                            <div className="bg-foreground text-background rounded-4xl p-6 space-y-4">
                                <p className="montserrat-eb-h3 text-center">ENHANCE YOUR</p>
                                <Image src="/brand-strip.png" alt="Brand Experience" width={400} height={400} className="w-80 mx-auto h-auto" />
                                <p className="montserrat-eb-h3 text-center">EXPERIENCE WITH US!</p>
                            </div>

                            {/* Brand Images Carousel */}
                            <BrandCarousel images={brand.brandImages} brandName={brand.brandName} />
                        </div>

                        {/* Second Column - Client Feedback Card */}
                        <div className=" w-full lg:w-[35%] rounded-4xl relative overflow-hidden">
                            <Image
                                src="/brand-2nd-col.png"
                                alt="Brand column background"
                                fill
                                className="object-cover object-[30%_20%] rounded-4xl w-full h-full"
                            />
                            <div className="absolute bottom-3 left-4 right-3 rounded-3xl p-6 flex gap-2 items-center bg-foreground text-background">
                                {/* Content */}
                                <div className="rounded-full border-background/10 border overflow-hidden">
                                    <Image src={brand.clientImage.asset.url} alt="Client" width={400} height={400} className="object-cover w-24 h-full" />
                                </div>
                                <div className="w-full">
                                    <p className="lora-medium text-[16px] md:text-[18px] leading-[130%]">{brand.feedback}</p>
                                </div>
                            </div>
                        </div>

                        {/* Third Column - Logo, Colors, Typography */}
                        <div className="flex flex-col gap-4 justify-between w-full lg:w-[25%]">
                            {/* Logo */}
                            <div className="border border-secondary rounded-4xl px-6">
                                <div className="w-full h-[120px] relative">
                                    <Image
                                        src={brand.logo.asset.url}
                                        alt="Brand Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Brand Colors */}
                            <div className="h-full bg-foreground text-background border border-secondary rounded-4xl p-3">
                                <div className="py-4 border-[2px] bg-primary border-background rounded-4xl h-full">
                                    <div className="gap-3 py-4 border-[2px] h-full border-secondary rounded-4xl bg-background">
                                        <div className="h-full rounded-4xl bg-foreground text-background items-center justify-center">
                                            <div className="flex flex-col p-2 gap-2 items-center justify-center h-full">
                                                <div className="flex items-center justify-center">
                                                    {(brand.brandColors || []).map((color, colorIndex) => (
                                                        <div
                                                            key={colorIndex}
                                                            className="aspect-square rounded-full w-[50px] h-[50px] border-2 border-white"
                                                            style={{
                                                                backgroundColor: color || '#000',
                                                                marginLeft: colorIndex > 0 ? '-15px' : '0', // Creates overlap
                                                                zIndex: colorIndex, // Ensures proper stacking order
                                                                position: 'relative' // Needed for z-index to work
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="lora-blog-h3 text-center">Brand Colors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Typography */}
                            <div className="border border-secondary rounded-4xl p-6">
                                <h3 className="lora-blog-h3 mb-2">Typography</h3>
                                <p className={`${raleway.className} raleway font-[600] md:text-[48px] text-[32px] leading-[130%]`}>{brand.fontName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

interface BrandCarouselProps {
    images: {
        asset: {
            url: string;
        };
    }[];
    brandName: string;
}

function BrandCarousel({ images, brandName }: BrandCarouselProps) {
    const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            dragFree: true,
        },
        [autoplay]
    );

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Triple the images array for smoother infinite looping
    const tripleImages = [...images, ...images, ...images];

    return (
        <>
            <div className="relative overflow-hidden md:py-8 border border-secondary rounded-4xl">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex cursor-grab active:cursor-grabbing">
                        {tripleImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-none w-[300px] h-[200px] relative rounded-xl overflow-hidden mx-2 group"
                                style={{ flex: '0 0 auto' }}
                                onClick={() => {
                                    setSelectedImage(image.asset.url);
                                    autoplay.stop();
                                }}
                            >
                                <Image
                                    src={image.asset.url}
                                    alt={`${brandName} Brand Image ${index + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                                    draggable={false}
                                    priority={index < images.length}
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">Click to view</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Popup Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => {
                        setSelectedImage(null);
                        autoplay.play();
                    }}
                >
                    <div className="relative max-w-7xl w-full max-h-[90vh] aspect-video">
                        <Image
                            src={selectedImage}
                            alt="Selected brand image"
                            fill
                            className="object-contain"
                            priority
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                                autoplay.play();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}