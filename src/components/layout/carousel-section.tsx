"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSectionProps {
    images: any[];
    title: string;
}

export default function CarouselSection({ images, title }: CarouselSectionProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            align: 'start',
            containScroll: false
        },
        [Autoplay()]
    );

    useEffect(() => {
        if (emblaApi) {
            const updateSlidesPerView = () => {
                const width = window.innerWidth;
                const slideNodes = emblaApi.slideNodes();
                let slideFlex = '0 0 100%';
                
                if (width >= 1280) { // xl
                    slideFlex = '0 0 20%';
                } else if (width >= 1024) { // lg
                    slideFlex = '0 0 33.333%';
                } else if (width >= 768) { // md
                    slideFlex = '0 0 50%';
                }

                // Update all slides including clones
                slideNodes.forEach(slide => {
                    slide.style.flex = slideFlex;
                });

                emblaApi.reInit();
            };

            // Initial update
            updateSlidesPerView();

            // Update on resize
            window.addEventListener('resize', updateSlidesPerView);

            return () => {
                window.removeEventListener('resize', updateSlidesPerView);
            };
        }
    }, [emblaApi]);

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    // Double the slides array to ensure looping works
    const doubledImages = [...images, ...images];

    return (
        <section className="max-w-[1200px] mx-auto relative px-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex cursor-grab">
                    {doubledImages.map((image: any, index: number) => (
                        <div 
                            key={index} 
                            className="embla__slide"
                            style={{ flex: '0 0 100%'}}
                        >
                                <Image 
                                    src={image.asset.url} 
                                    alt={title} 
                                    width={1024} 
                                    height={768} 
                                    className="w-full max-h-[420px] object-cover"
                                />
                        </div>
                    ))}
                </div>
            </div>

            {/* <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 transition-all duration-300 hover:scale-110"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 transition-all duration-300 hover:scale-110"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <ChevronRight className="w-6 h-6" />
            </button> */}
        </section>
    );
} 