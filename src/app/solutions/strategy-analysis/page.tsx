'use client';

import { client } from "@/lib/sanity";
import { solutionStratergyAnalysisQuery } from "@/lib/queries";
import Image from "next/image";
import { Service } from "@/types/solutions-interface";
import { urlFor } from "@/lib/sanity";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { StrategyAnalysisData } from "@/types/solutions-interface";
import CTA from "@/components/section/landing/cta";
import { FaQuoteLeft } from "react-icons/fa";

export default function StrategyAnalysisPage() {
    const [data, setData] = useState<StrategyAnalysisData | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch<StrategyAnalysisData>(solutionStratergyAnalysisQuery);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="pb-20 pt-12 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="space-y-12">
                            <h1 className="montserrat-eb-h2 text-primary">
                                {data.homeHeading}
                            </h1>
                            <p className="lora-medium text-[16px] md:text-[20px] leading-[150%]">
                                {data.homePara}
                            </p>
                            <div className="flex w-full flex-wrap gap-4 mt-4">
                                {data.trustedByLogos?.map((logo, index) => (
                                    <Image
                                        key={index}
                                        src={urlFor(logo).url()}
                                        alt="Trusted by logo"
                                        width={100}
                                        height={100}
                                        className="w-fit h-[60px]"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="h-full w-full">
                            <Image
                                src={data.homeImages.asset.url}
                                alt="Hero image"
                                width={1000}
                                height={1000}
                                className="object-cover h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="bg-foreground text-background py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="montserrat-sb-h2 mb-8 w-lg">{data.secondSectionHeading}</h2>
                            <Image
                                src={data.secondSectionImage.asset.url}
                                alt="Second section"
                                width={465}
                                height={290}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-6 flex flex-col gap-4 justify-between">
                            {data.secondSectionContent.map((para, index) => (
                                <p key={index} className="lora-blog-h3">{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {data?.testimonials?.map((testimonial, index) => (
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
                                                    src={testimonial.image.asset.url}
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
                                className="bg-black text-white p-2 rounded-none"
                                onClick={scrollPrev}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                className="bg-black text-white p-2 rounded-none"
                                onClick={scrollNext}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto space-y-16">
                    <div className="space-y-8 max-w-3xl mx-auto text-center">
                        <h2 className="montserrat-sb-h2">{data.fourthSectionHeading}</h2>
                        <p className="lora-blog-h1">{data.fourthSectionPara}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {data.services.map((service: Service, index: number) => (
                            <div key={index} className="border-2 border-foreground/20 p-7 space-y-4">
                                <Image src={service.icon.asset.url} alt={service.title} width={24} height={24} className="h-[40px] w-[40px]" />
                                <h3 className="montserrat-sb-h4">{service.title}</h3>
                                <p className="lora-normal text-[16px] leading-[150%]">{service.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="montserrat-eb-h2 text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4 max-w-[1000px] mx-auto">
                        {data.faq?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[20px] overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-black"
                                >
                                    <h3 className="text-[18px] montserrat-medium text-left">
                                        {item.question}
                                    </h3>
                                    <span className="text-[#E91E63] text-2xl font-bold">
                                        {openFaqIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                {openFaqIndex === index && (
                                    <div className="px-6 pb-6">
                                        <div className="text-black">
                                            {item.answer.map((block, blockIndex) => (
                                                <p key={blockIndex} className="lora-blog-h1 text-black/70">
                                                    {block.children.map(child => child.text).join('')}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}