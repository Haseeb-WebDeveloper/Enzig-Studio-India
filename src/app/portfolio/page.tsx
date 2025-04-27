import { client } from "@/lib/sanity";
import { portfolioQuery } from "@/lib/queries";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import NextPre from "@/components/layout/next-pre";
import { BrandPortfolio } from "@/components/section/brand-portfolio";
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel";
import Link from "next/link";
import UiUxCarousel from "@/components/custom-carousel/ui-ux-carousel";


export default async function PortfolioPage() {
    const data = await client.fetch(portfolioQuery());

    console.dir({ threeDProjectVideo: data.threeDProjectVideo }, { depth: null });

    return (
        <main className="min-h-screen space-y-32">
            {/* Hero Section */}
            <section className="pt-20 px-6 bg-background text-foreground">
                <div className="max-w-[1200px] mx-auto  flex flex-col md:flex-row gap-12">
                    {/* left side */}
                    <div className="flex relative flex-col justify-center items-center">
                        <Image src="/portfolio-page.png" alt={data.title} width={1024} height={768} className="z-2 w-full h-auto" />
                        <Image src="/portfolio-portfolio.png" alt={data.title} width={1024} height={768} className="px-32 z-0 absolute top-1/2 -translate-y-1/2 left-0 w-full h-fit" />
                    </div>

                    {/* right side */}
                    <div className="md:w-1/2">
                        <Image src={data.homeRightSideImage.asset.url} alt={data.title} width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>

                {/* logos carousel */}
                <div className="flex flex-col gap-12 mt-20">
                    <p className="lora-sb-h2 text-center">The Creative Approach that your brand needs</p>
                    <AutoScrollCarousel logos={data.logos} />
                </div>
            </section>

            {/* Brand Grid */}
            <BrandPortfolio brands={data.brands} page="portfolio" />

            {/* Social Media Management */}
            <section className="max-w-[1200px] px-4  space-y-10 mx-auto bg-background text-foreground">
                <div className="space-y-32">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Social Media Management</h1>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 p-0 gap-0">
                    {data.socialMediaTopImages.map((item: any, index: any) => (
                        <div key={index}>
                            <Image src={item.asset.url} alt={item.title} width={1024} height={768} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
                <section className="max-w-[1200px] mx-auto rounded-2xl space-y-32 bg-foreground text-background px-12 py-8">
                    <div className="flex gap-16 justify-between items-center">
                        <div className="space-y-6 w-full">
                            <p className="lora-sb-h2">Grow Your Business with the #1 Creative Marketing Agency!</p>
                            <p>From strategy to design, design to market and market to results—driving ROI every step.</p>
                            <Link href="/content" className="w-full md:w-fit  text-center text-[20px] lora-medium rounded-md px-[16px] md:py-[8px] py-[16px] bg-primary text-background">
                                Get in Touch
                            </Link>
                        </div>

                        <div className="w-fit">
                            <Image src="/add-right-side-image.png" alt={data.title} width={1024} height={768} className="w-full h-auto" />
                        </div>
                    </div>
                </section>
            </section>

            {/* Content Creation */}
            <section className="max-w-[1200px] mx-auto space-y-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Content Creation</h1>
                <div className="columns-1 md:columns-2 lg:columns-3 p-0 gap-0">
                    {data.contentCreationImages.map((item: any, index: any) => (
                        <div key={index}>
                            <Image src={item.asset.url} alt={item.title} width={1024} height={768} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </section>


            {/* Graphics Design */}
            <section className="bg-[#6C7880] py-12">
                <div className="max-w-[1200px] mx-auto space-y-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Graphics Design</h1>
                    <div className="space-y-4">
                        <div className="w-full">
                            <Image
                                src={data.graphicsDesignImages[0].asset.url}
                                alt="Graphics Design"
                                width={1024}
                                height={768}
                                className="w-full h-full object-cover rounded-4xl"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Image
                                    src={data.graphicsDesignImages[1].asset.url}
                                    alt="Graphics Design"
                                    width={512}
                                    height={384}
                                    className="w-full h-full object-cover rounded-4xl"
                                />
                            </div>
                            <div>
                                <Image
                                    src={data.graphicsDesignImages[2].asset.url}
                                    alt="Graphics Design"
                                    width={512}
                                    height={384}
                                    className="w-full h-full object-cover rounded-4xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ui ux */}
            <section className="mx-auto">
                <h1 className="max-w-[1200px] mx-auto text-4xl md:text-5xl lg:text-6xl font-bold">Graphics Design</h1>
                <UiUxCarousel carouselCards={data.uiUxImages} />
            </section>


            {/* 3d */}
            <section className="space-y-10 max-w-[1200px] mx-auto ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">3D Projects</h1>
                <div className="w-full aspect-video">
                    <video
                        src={data.threeDProjectVideo.video.asset.url}
                        className="w-full h-full object-cover rounded-3xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
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
        </main>
    );
}