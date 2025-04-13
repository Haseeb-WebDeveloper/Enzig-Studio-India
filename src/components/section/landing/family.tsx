import Image from "next/image";
import { fetchBrandingForLanding, fetchSecondSectionLogo } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

export default async function Family() {

    const secondSectionLogos = await fetchSecondSectionLogo();

    const card1pics = [
        {
            src: "/avatar/avatar-1.png",
            alt: "family",
            width: 200,
            height: 200,
            className: "absolute top-2 right-[30%] w-auto h-26 rotate-4"
        },
        {
            src: "/avatar/avatar-2.png",
            alt: "family",
            width: 100,
            height: 100,
            className: "absolute top-4 right-4 w-auto h-40"
        },
        // {
        //     src: "/avatar/avatar-3.png",
        //     alt: "family",
        //     width: 100,
        //     height: 100,
        //     className: " absolute top-2 left-[30%] w-auto h-24"
        // }
    ]

    const card1PicsMobile = [
        {
            src: "/avatar/avatar-1.png",
            alt: "family",
            width: 200,
            height: 200,
            className: "absolute top-2 left-8 w-auto h-26 rotate-4"
        },
        {
            src: "/avatar/avatar-2.png",
            alt: "family",
            width: 100,
            height: 100,
            className: "absolute top-2 right-2 w-auto h-32"
        },
        // {
        //     src: "/avatar/avatar-3.png",
        //     alt: "family",
        //     width: 100,
        //     height: 100,
        //     className: " absolute top-2 left-[30%] w-auto h-24"
        // }
    ]

    return (
        <section className="bg-background  py-[15vh] md:py-[20vh]">
            <div className="max-w-[960px] mx-auto h-full px-6 xl:px-0 z-20">
                <div className="hidden md:grid grid-cols-[40%_20%_40%] grid-rows-[38%_24%_38%] relative gap-4">

                    {/* 1st row */}
                    <div className="col-span-2 relative rounded-4xl px-6 py-4 flex flex-col justify-end bg-primary text-black h-full w-full">
                        <div className="flex flex-col justify-end h-full">
                            <div className=" overflow-hidden">
                                {card1pics.map((pic, index) => (
                                    <Image
                                        key={index}
                                        src={pic.src}
                                        alt={pic.alt}
                                        width={500}
                                        height={500}
                                        className={pic.className}
                                    />
                                ))}
                            </div>
                            <p className="montserrat-regular text-[20px] leading-[24px]">Enzig Studio Family</p>
                            <p className="montserrat-bold text-[32px] md:text-[56px] leading-[40px] md:leading-[64px]">Happy clients <br /> Family style.</p>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="row-span-2 col-start-1 row-start-2 rounded-4xl p-6 pb-0 bg-foreground h-auto">
                        <div className="montserrat-extrabold text-[32px] md:text-[72px] leading-[40px] md:leading-[80px] bg-gradient-to-r from-[#E018FA] to-[#B0CF2E] bg-clip-text text-transparent">Clear Pricing. Real Results. Always.</div>
                    </div>

                    {/* 2nd row 2nd column*/}
                    <div className="col-start-2 row-start-2 rounded-4xl bg-foreground text-black flex justify-center items-center h-auto">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={400}
                            height={400}
                            className="object-contain w-full max-h-[73px]"
                        />
                    </div>

                    {/* 1th row 2nd column*/}
                    <div className="col-span-2 col-start-2 row-start-3 flex justify-center items-center gap-6 rounded-4xl p-6 bg-secondary h-auto">
                        <div className="w-fit">
                            <Image alt="s" src="/family-last-card-pic.png" width={200} height={200} className="w-fit min-h-[200px] object-contain"></Image>
                        </div>
                        <div className="w-full montserrat-bold text-[20px] md:text-[26px] leading-[30px] md:leading-[40px]">From strategy to design, design to market and market to results—driving ROI every step.</div>
                    </div>

                    {/* 1th row 3rd column*/}
                    <div className="row-span-2 col-start-3 row-start-1 rounded-4xl pt-5  bg-foreground text-background h-auto flex flex-col justify-between overflow-hidden relative">
                        <div className="px-7 bg-gradient-to-r from-[#E018FA] to-[#B0CF2E] bg-clip-text text-transparent">
                            <span className=" montserrat-extrabold text-[32px] md:text-[56px] leading-[40px] md:leading-[64px]">Brands that believe in growth trust us.</span>
                            <div className="-mb-12 pt-4 flex flex-row flex-wrap  items-center gap-x-4 gap-y-4">
                                {secondSectionLogos[0].logos.map((logo: any, index: any) => (
                                    <Image
                                        key={index}
                                        src={logo.logo.asset.url}
                                        alt={logo.alt}
                                        width={100}
                                        height={100}
                                        className="object-contain h-fit max-h-[20px] w-fit"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:hidden">
                    <div className="flex flex-col gap-4">
                        <div className="rounded-4xl px-6 py-4 flex flex-col justify-end bg-primary text-black h-full w-full">
                            <div className="flex flex-col justify-end h-full">
                                <div className="relative h-36 overflow-hidden">
                                    {card1PicsMobile.map((pic, index) => (
                                        <Image
                                            key={index}
                                            src={pic.src}
                                            alt={pic.alt}
                                            width={500}
                                            height={500}
                                            className={pic.className}
                                        />
                                    ))}
                                </div>
                                <p className="montserrat-regular text-[20px] leading-[24px]">Enzig Studio Family</p>
                                <p className="montserrat-bold text-[32px] md:text-[56px] leading-[40px] md:leading-[64px]">Happy clients <br /> Family style.</p>
                            </div>
                        </div>
                        <div className="rounded-4xl bg-foreground h-auto">
                            <div className="montserrat-extrabold text-[32px] md:text-[72px] leading-[40px] md:leading-[80px] bg-gradient-to-r from-[#E018FA] to-[#B0CF2E] bg-clip-text text-transparent p-6 ">Clear Pricing. Real Results. Always.</div>
                        </div>
                        <div className="p-6 rounded-4xl bg-foreground text-black flex justify-center items-center h-auto">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={400}
                                height={400}
                                className="object-contain w-full max-h-[73px]"
                            />
                        </div>
                        <div className="space-y-4 rounded-4xl p-6 bg-secondary h-auto">
                            <div className="w-full px-2 pt-2 md:p-0">
                                <Image alt="s" src="/family-last-card-pic.png" width={200} height={200} className="w-full  h-full object-contain md:rounded-4xl rounded-sm"></Image>
                            </div>
                            <div className="w-full montserrat-bold text-[20px] leading-[30px]">From strategy to design, design to market and market to results—driving ROI every step.</div>
                        </div>
                        <div className="rounded-4xl py-5 bg-foreground text-background h-auto flex flex-col justify-between overflow-hidden relative">
                            <div className="px-7 bg-gradient-to-r from-[#E018FA] to-[#B0CF2E] bg-clip-text text-transparent">
                                <span className="montserrat-bold text-[32px] md:text-[56px] leading-[40px] md:leading-[64px]">Brands that believe in growth trust us.</span>
                            </div>
                            <div className="px-6 pb-3 pt-8 flex flex-row flex-wrap  items-center gap-x-4 gap-y-4">
                                {secondSectionLogos[0].logos.map((logo: any, index: any) => (
                                    <Image
                                        key={index}
                                        src={logo.logo.asset.url}
                                        alt={logo.alt}
                                        width={300}
                                        height={300}
                                        className="object-contain h-fit max-h-[20px] w-fit"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}