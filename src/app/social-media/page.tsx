import { client } from "@/lib/sanity";
import { socialMediaQuery, threeDProjectsQuery } from "@/lib/queries";
import { ThreeDProject } from "@/types/interface";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";

export default async function SocialMediaPage() {
    const data = await client.fetch(socialMediaQuery());
    // console.dir(data, { depth: null });

    return (
        <>

            <div className="space-y-20">
                {/* Hero Section */}
                <section className="pt-24 px-6  ">
                    <div className=" max-w-[1200px] mx-auto  space-y-12 md:space-y-16">
                        <div className="md:px-12  max-w-[1024px] mx-auto ">
                            <Image src="/social-media-page.png" alt={data.title} width={1024} height={768} className="w-full h-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.topImage.map((image: any, index: number) => (
                                <div key={index} className="w-full h-full">
                                    <Image src={image.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom Image */}
                <section className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        {data.bottomImage.map((image: any, index: number) => (
                            <div key={index} className="w-full h-full">
                                <Image src={image.asset.url} alt={data.title} width={1024} height={768} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="  mb-0">
                    <Testimonials testimonials={data.testimonials} />
                </section>

                {/* Next Page Previous Page */}
                <div className="mb-20 mt-12">
                    <NextPre nextPage="/content" prePage="/branding" />
                </div>
            </div>


            {/* CTA */}
            <CTA />
        </>
    )
}