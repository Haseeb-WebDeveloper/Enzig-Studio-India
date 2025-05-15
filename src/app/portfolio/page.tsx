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
import Navbar from "@/components/layout/navbar";


export default async function PortfolioPage() {
    const data = await client.fetch(portfolioQuery());

    // console.dir({ threeDProjectVideo: data.threeDProjectVideo }, { depth: null });

    return (
        <>
            <Navbar bg="bg-foreground" bgOnScrolled="bg-foreground" />
            <main className="min-h-screen space-y-32">
                {/* Hero Section */}
                <section className="pt-20 px-6 ">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12">
                        {/* left side */}
                        <div className="md:w-[60%] w-full flex relative flex-col justify-center items-center">
                            <Image src="/portfolio-page.png" alt={data.title} width={1024} height={768} className="absolute top-1/2 -translate-y-1/2 left-0 z-2 w-[120%] h-auto" />
                            <Image src="/portfolio-portfolio.png" alt={data.title} width={1024} height={768} className=" md:px-32 px-8 w-full" />
                        </div>

                        {/* right side */}
                        <div className="md:w-[40%] w-full">
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
                <BrandPortfolio brands={data.brands} page="portfolio" link="/branding" />

                {/* Social Media Management */}
                <section className="max-w-[1200px] px-6 space-y-10 mx-auto">
                    <Link href="/social-media" className="flex justify-between items-center gap-3">
                        <h1 className="montserrat-eb-h2">Social Media Management</h1>
                        <div className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                            Next Project
                            <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                        </div>
                    </Link>
                    <div className="columns-1 md:columns-2 lg:columns-3 p-0 gap-0">
                        {data.socialMediaTopImages.map((item: any, index: any) => (
                            <div key={index}>
                                <Image src={item.asset.url} alt={item.title} width={1024} height={768} className="w-full h-auto" />
                            </div>
                        ))}
                    </div>
                    <section className="max-w-[1200px] mx-auto rounded-2xl space-y-32 bg-foreground text-background px-6 md:px-12 md:py-8 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-between items-center">
                            <div className="space-y-6 md:space-y-6 w-full">
                                <p className="montserrat-extrabold text-[24px] md:text-[30px] leading-[130%]">Grow Your Business with the #1 Creative Marketing Agency!</p>
                                <p className="lora-m-h1 mb-12 md:mb-10">From strategy to design, design to market and market to results—driving ROI every step.</p>
                                <Link href="/contact" className="w-full md:w-fit  text-center text-[20px] lora-medium rounded-md px-[16px] md:py-[8px] py-[16px] bg-primary text-background">
                                    Get in Touch
                                </Link>
                            </div>

                            <div className="w-full h-full flex justify-center items-center">
                                <Image src="/add-right-side-image.png" alt="Blog CTA Image" width={1024} height={768} className="w-full md:h-auto h-full" />
                            </div>
                        </div>
                    </section>
                </section>

                {/* Content Creation */}
                <section className="max-w-[1200px] px-6 mx-auto space-y-10">
                    <Link href="/content" className="flex justify-between items-center gap-3">
                        <h1 className="montserrat-eb-h2">Content Creation</h1>
                        <div className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                            Next Project
                            <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                        </div>
                    </Link>
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
                    <div className="max-w-[1200px] px-6 mx-auto space-y-10">
                        <Link href="/graphics-design" className="flex justify-between items-center gap-3">
                            <h1 className="montserrat-eb-h2">Graphics Design</h1>
                            <div className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                                Next Project
                                <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                            </div>
                        </Link>
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
                    <Link href="/ui-ux" className="max-w-[1200px] px-6 mx-auto flex justify-between items-center gap-3">
                        <h1 className="montserrat-eb-h2">Website and Apps (UI/UX)</h1>
                        <div className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                            Next Project
                            <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                        </div>
                    </Link>
                    <UiUxCarousel carouselCards={data.uiUxImages} />
                </section>


                {/* 3d */}
                <section className="space-y-10 px-6 max-w-[1200px] mx-auto ">
                    <Link href="/3d-projects" className="flex justify-between items-center gap-3">
                        <h1 className="montserrat-eb-h2">3D Projects</h1>
                        <div className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                            Next Project
                            <Image src="/page-arrow-right.svg" alt="Next Project" width={200} height={200} className="w-32" />
                        </div>
                    </Link>
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
                <section className="  mb-0">
                    <Testimonials testimonials={data.testimonials} />
                </section>


                {/* CTA */}
                <div className="mt-20">
                    <CTA />
                </div>
            </main>
        </>
    );
}