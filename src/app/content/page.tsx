import { client } from "@/lib/sanity";
import { contentQuery } from "@/lib/queries";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";
import CarouselSection from "@/components/layout/carousel-section";
import Carousel1 from "@/components/custom-carousel/carousel-1";

export default async function ContentPage() {
    const data = await client.fetch(contentQuery());
    console.dir(data, { depth: null });

    return (
        <>
            <div className="space-y-20">
                {/* Hero Section */}
                <section className="pt-24 px-6 bg-background text-foreground">
                    <div className="md:px-12 max-w-[1024px] mx-auto ">
                        <Image src="/social-media-page.png" alt={data.title} width={1024} height={768} className="w-full h-auto" />
                    </div>
                </section>

                {/* First Section */}
                <section className="bg-[#1F1F1F]">
                    <div className="max-w-[1200px] mx-auto  columns-2 md:columns-3 lg:columns-3 xl:columns-5 gap-0 space-y-0 p-0 overflow-x-hidden">
                        {data.firstSectionImage.map((image: any, index: number) => (
                            <div
                                key={index}
                                className={`w-full h-full 
                                ${index === 0 && 'xl:pt-[7vw]'}
                                ${index === 2 && 'xl:pt-[13vw]'}
                                ${index === 3 && 'xl:pt-[7vw]'}
                                `}>
                                <Image src={image.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Second Section */}
                <section className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {data.secondSectionImage.map((image: any, index: number) => (
                            <div key={index} className="w-full h-full">
                                <Image src={image.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Carousel Section */}
                <CarouselSection images={data.carouselImage} title={data.title} />

                {/* Fourth Section (single image) */}
                <section className="max-w-[1200px] mx-auto">
                    <div className="w-full h-full">
                        <Image src={data.fourthSectionImage.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* Fifth Section (same as second section) */}
                <section className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {data.fifthSectionImage.map((image: any, index: number) => (
                            <div key={index} className="w-full h-full">
                                <Image src={image.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sixth Section (same as second section) */}
                <section className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {data.sixthSectionImage.map((image: any, index: number) => (
                            <div key={index} className="w-full h-full">
                                <Image src={image.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-background text-foreground mb-0">
                    <Testimonials testimonials={data.testimonials} />
                </section>

                {/* Next Page Previous Page */}
                <div className="mb-20">
                    <NextPre  nextPage="/ui-ux" prePage="/social-media" />
                </div>
            </div>

            {/* CTA */}
            <CTA />
        </>
    )
}