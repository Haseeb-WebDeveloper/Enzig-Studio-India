"use client";

import Image from "next/image";
import { Raleway } from "next/font/google";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BrandingPortfolio } from "@/types/interface";

const raleway = Raleway({ subsets: ['latin'] });

export const BrandPortfolio = ({ brands }: { brands: BrandingPortfolio['brands'] }) => {
    return (
        <section className="max-w-[1200px] mx-auto px-4 space-y-32">
            {brands.map((brand, index) => (
                <div key={index}>
                    {/* Title Section */}
                    <div className="mx-auto px-4 mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">{brand.brandName}</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* First Column - Brand Experience Card & Carousel */}
                        <div className="space-y-4 w-full lg:w-[40%]">
                            {/* Brand Experience Card */}
                            <div className="bg-foreground text-background rounded-4xl p-6 space-y-4">
                                <h3 className="text-xl text-center font-bold">ENHANCE YOUR</h3>
                                <Image src="/brand-strip.png" alt="Brand Experience" width={1024} height={768} className="w-
                                [80%] mx-auto h-auto" />
                                <p className="text-lg text-gray-400 text-center">EXPERIENCE WITH US!</p>
                            </div>

                            {/* Brand Images Carousel */}
                            <BrandCarousel images={brand.brandImages} brandName={brand.brandName} />
                        </div>

                        {/* Second Column - Client Feedback Card */}
                        <div className="w-full lg:w-[35%] rounded-4xl relative overflow-hidden">
                            <Image
                                src="/brand-2nd-col.png"
                                alt="Brand column background"
                                fill
                                className="object-cover object-[30%_20%] rounded-4xl w-full h-full"
                            />
                            <div className="absolute bottom-3 left-4 right-3 rounded-3xl p-6 flex gap-2 items-center bg-foreground text-background">
                                {/* Content */}
                                <div className="rounded-full border-background/10 border overflow-hidden">
                                    <Image src={brand.clientImage.asset.url} alt="Client" width={400} height={400} className="object-cover w-20 h-full" />
                                </div>
                                <div className="w-full">
                                    <p>{brand.feedback}</p>
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
                                            <div className="flex flex-col gap-2 items-center justify-center h-full">
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
                                                <p className="text-xl text-center">Brand Colors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Typography */}
                            <div className="border border-secondary rounded-4xl p-6">
                                <h3 className="text-xl font-medium mb-2">Typography</h3>
                                <p className={`${raleway.className} text-4xl`}>{brand.fontName}</p>
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
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            dragFree: true,
        },
        [
            Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                rootNode: (emblaRoot) => emblaRoot.parentElement,
            })
        ]
    );

    // Triple the images array for smoother infinite looping
    const tripleImages = [...images, ...images, ...images];

    return (
        <div className="relative overflow-hidden py-8 border border-secondary rounded-4xl">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex cursor-grab active:cursor-grabbing">
                    {tripleImages.map((image, index) => (
                        <div
                            key={index}
                            className="flex-none w-[300px] h-[200px] relative rounded-xl overflow-hidden mx-2"
                            style={{ flex: '0 0 auto' }}
                        >
                            <Image
                                src={image.asset.url}
                                alt={`${brandName} Brand Image ${index + 1}`}
                                fill
                                className="object-cover"
                                draggable={false}
                                priority={index < images.length}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}