import { client } from "@/lib/sanity";
import { graphicsDesignQuery } from "@/lib/queries";
import { GraphicsDesign } from "@/types/interface";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";

export default async function GraphicsDesignPage() {
    const data = await client.fetch<GraphicsDesign>(graphicsDesignQuery());
    // console.dir(data, { depth: null });

    return (
        <>
            {/* Hero Section */}
            <section className="mb-32 md:mb-40 pt-24 px-6 bg-background text-foreground">
                <div className=" max-w-[1024px] mx-auto space-y-12 md:space-y-16">
                    <div className="md:px-12">
                        <Image src="/graphics-design-page.png" alt={data.title} width={1024} height={768} className="w-full h-auto" />
                    </div>
                    {data.homeImages && data.homeImages.length > 0 && (
                        <div className="space-y-4">
                            <div className="w-full h-full">
                                <Image
                                    src={data.homeImages[0].asset.url}
                                    alt={data.title}
                                    width={1024}
                                    height={768}
                                    className="w-full h-full object-cover rounded-4xl"
                                />
                            </div>
                            {data.homeImages.length > 2 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="">
                                        <Image
                                            src={data.homeImages[1].asset.url}
                                            alt={data.title}
                                            width={512}
                                            height={384}
                                            className="w-full h-full object-cover rounded-4xl"
                                        />
                                    </div>
                                    <div className="">
                                        <Image
                                            src={data.homeImages[2].asset.url}
                                            alt={data.title}
                                            width={512}
                                            height={384}
                                            className="w-full h-full object-cover rounded-4xl"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Image Gallery */}
            <section className="bg-background text-foreground mb-20 ">
                <Masonry images={data.image} />
            </section>

            {/* Testimonials */}
            <section className="bg-background text-foreground mb-0">
                <Testimonials testimonials={data.testimonials} />
            </section>

            {/* Next Page Previous Page */}
            <div className="mb-20 mt-12">
                <NextPre nextPage="/social-media" prePage="/branding" />
            </div>


            {/* CTA */}
            <CTA />
        </>
    )
}