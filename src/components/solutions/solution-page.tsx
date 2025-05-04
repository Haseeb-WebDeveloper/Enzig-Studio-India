'use client';

import { client } from "@/lib/sanity";
import { solutionPageQuery } from "@/lib/queries";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRightIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { SolutionPageData } from "@/types/solutions-interface";
import CTA from "@/components/section/landing/cta";
import { FaQuoteLeft } from "react-icons/fa";
import SectionLoading from "./loading";
import NotFound from "./not-found";
import Testimonials from "../layout/testimonials";

export default function SolutionPage({ pageName }: { pageName: string }) {
    const [data, setData] = useState<SolutionPageData | null>(null);
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
                const result = await client.fetch<SolutionPageData>(solutionPageQuery(pageName));
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
        return <SectionLoading />;
    }



    if (data === null || data === undefined) {
        return <NotFound />;
    }

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="pb-28 pt-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="space-y-12">
                            <h1 className="montserrat-eb-h2 text-primary">
                                {data.homeHeading}
                            </h1>
                            <p className="lora-medium text-[16px] md:text-[20px] leading-[150%]">
                                {data.homePara}
                            </p>

                            {/* buttons */}
                            <div className="flex w-full items-center gap-4 mt-4 lora-sb-h4">
                                <button className="cursor-pointer bg-primary text-background px-6 py-3 rounded-full flex gap-4 items-center">
                                    <span>Get in Touch</span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                                <button className="cursor-pointer text-primary px-4 py-2 rounded-full">
                                    View Case Study
                                </button>
                            </div>

                            {/* logos */}
                            <div className="flex w-full items-center gap-4 mt-4">
                                <p className="lora-m-h1 w-[200px]">Trusted by<br /> top brands</p>
                                <div className="flex w-full gap-4">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="montserrat-sb-h2 mb-8 ">{data.secondSectionHeading}</h2>
                            <Image
                                src={data.secondSectionImage.asset.url}
                                alt="Second section"
                                width={465}
                                height={290}
                                className="object-cover rounded-lg "
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
            <Testimonials testimonials={data.testimonials} />

            {/* Services Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto space-y-16">
                    <div className="space-y-8 max-w-3xl mx-auto text-center">
                        <h2 className="montserrat-sb-h2">{data.fourthSectionHeading}</h2>
                        <p className="lora-blog-h1">{data.fourthSectionPara}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {data.services.map((service, index) => (
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