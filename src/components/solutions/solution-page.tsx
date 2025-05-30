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
import SectionLoading from "./loading";
import NotFound from "./not-found";
import Testimonials from "../layout/testimonials";
import Link from "next/link";
import Faq from "../ui/faq";
import SolutionsCarousel from "../custom-carousel/solutions-page-carousel";

export default function SolutionPage({ pageName, homePageLink, homePageText }: { pageName: string, homePageLink: string, homePageText: string }) {
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
                            <div className="flex w-full items-center gap-4 md:mt-4 mt-6 lora-sb-h4">
                                <Link href="/contact" className="cursor-pointer bg-primary text-background px-6 py-3 rounded-full flex gap-4 items-center">
                                    <span>Get in Touch</span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                                <Link href={homePageLink} className="cursor-pointer text-primary px-4 py-2 rounded-full">
                                    {homePageText}
                                </Link>
                            </div>

                            {/* logos */}
                            <div className="flex flex-col md:flex-row w-full items-center gap-x-4 gap-y-6 md:mt-4 mt-6">
                                <p className="lora-m-h1 w-[200px] hidden md:block">Trusted by<br /> top brands</p>
                                <p className="lora-m-h1 text-left w-full block md:hidden">Trusted by top brands</p>
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
            <section className="bg-foreground text-background md:py-24 py-16">
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
                                <p key={index} className="lora-blog-h3 text-background/80">{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="md:pb-20 pb-16 pt-16 px-4 bg-foreground">
                <div className="bg-background max-w-7xl px-4 md:px-0 pt-16 pb-2 mx-auto rounded-2xl">
                    <h2 className="px-8 max-w-4xl mx-auto montserrat-sb-h3 mb-8 text-center">{data.thirdSectionHeading}</h2>
                    <SolutionsCarousel carouselCards={data.thirdSectionItems} />
                </div>
            </section>

            {/* Testimonials Section */}
            <div className="md:py-20 py-16">
            <Testimonials testimonials={data.testimonials} />
            </div>

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
            <section className="py-20 px-6 max-w-[1200px] mx-auto">
                <Faq faq={data.faq} />
            </section>

            <CTA />
        </main>
    );
}