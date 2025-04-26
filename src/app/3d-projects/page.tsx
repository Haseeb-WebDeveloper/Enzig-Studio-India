import { client } from "@/lib/sanity";
import { threeDProjectsQuery } from "@/lib/queries";
import { ThreeDProject } from "@/types/interface";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";

export default async function ThreeDProjectsPage() {
    const data = await client.fetch(threeDProjectsQuery());
    console.dir(data, { depth: null });

    return (
        <>
            {/* Hero Section */}
            <section className="mb-40 md:mb-40 pt-24 px-6 bg-background text-foreground">
                <div className=" max-w-[1024px] mx-auto space-y-12 md:space-y-16">
                    <div className="md:px-12">
                        <Image src="/3d-project-title.png" alt={data.title} width={1024} height={768} className="w-full h-auto" />
                    </div>
                    {data.video && (
                        <div className="w-full aspect-video">
                            <video
                                src={data.video.asset.url}
                                className="w-full h-full object-cover rounded-4xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
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
            <div className="mb-20">
                <NextPre />
            </div>


            {/* CTA */}
            <CTA />
        </>
    )
}