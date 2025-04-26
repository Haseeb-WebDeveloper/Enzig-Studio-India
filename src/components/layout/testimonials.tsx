"use client"

import { ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials({testimonials}: {testimonials: any}) {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    console.dir(testimonials, { depth: null });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Ensure testimonials is an array and has items before rendering
    const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];

    return (
        <>
         {/* Testimonials Section */}
         <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {testimonialsArray.map((testimonial: any, index: any) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0">
                                        <div className="grid md:grid-cols-2">
                                            <div className="bg-primary text-background p-12 flex flex-col justify-center relative">
                                                <FaQuoteLeft className="absolute text-foreground top-12 left-12 text-[36px]" />
                                                <p className="montserrat-eb-h4 mb-8 mt-8">{testimonial.text}</p>
                                                <div>
                                                    <p className="montserrat-eb-h3">{testimonial.name}</p>
                                                    <p className="lora-blog-h1 text-background/70">{testimonial.category}</p>
                                                </div>
                                            </div>
                                            <div className="relative h-[500px] w-full">
                                                <Image
                                                    src={testimonial.image?.asset.url}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                    style={{
                                                        filter: 'brightness(0.8) contrast(1.2)',
                                                    }}
                                                />
                                                {/* Blue overlay for the image */}
                                                <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            <button
                                className="bg-background text-foreground cursor-pointer p-2 rounded-none"
                                onClick={scrollPrev}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                className="bg-background text-foreground cursor-pointer p-2 rounded-none"
                                onClick={scrollNext}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}