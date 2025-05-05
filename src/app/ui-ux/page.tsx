import { client } from "@/lib/sanity";
import { socialMediaQuery, uiUxQuery } from "@/lib/queries";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";
import UiUxCarousel from "@/components/custom-carousel/ui-ux-carousel";

export default async function UiUxPage() {
    const data = await client.fetch(uiUxQuery());
    // console.dir(data, { depth: null });

    return (
        <>

            <div className="space-y-20">
                {/* Hero Section */}
                <section className="pt-24 bg-background text-foreground">
                    <div className="space-y-12 md:space-y-16">
                        <div className="px-12 max-w-[1024px] mx-auto ">
                            <Image src="/ui-ux-page.png" alt={data.title} width={1024} height={768} className="w-fit h-auto mx-auto" />
                        </div>
                        <div className="w-full">
                            <UiUxCarousel carouselCards={data.carouselCards} />
                        </div>
                    </div>
                </section>

                {/* Bottom Image */}
                <section className="max-w-[1200px] mx-auto">
                    <div className="space-y-20 w-full">
                        {data.secondSectionImage.map((image: any, index: number) => (
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
                <div className="mb-20 mt-12">
                    <NextPre />
                </div>
            </div>


            {/* CTA */}
            <CTA />
        </>
    )
}