import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";

export default function MarketStrategy() {
    return (
        <section className="bg-background ">
            <div className="max-w-[960px] py-16 px-6 lg:px-0 mx-auto">
                <div className="flex flex-col gap-16">
                    <div className="space-y-[16px]">
                        <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] montserrat-bold text-foreground">
                            Market & Strategy
                        </h2>
                        <h3 className="text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] montserrat-bold text-foreground">
                            Work with our expert<br />
                            marketing team
                        </h3>
                    </div>

                    <div className="bg-background md:py-12 md:px-16 rounded-4xl md:relative overflow-y-hidden"
                        style={{
                            boxShadow: "2px 2px 20px 5px rgba(255, 255, 255, 0.5)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            background: "radial-gradient(circle at top, #930b7a 0%, #1d062d 100%)"
                        }}
                    >

                        <div className="flex gap-20 flex-col">
                            {/* logo */}
                            <div className="w-full flex flex-wrap pt-8 px-8 md:pt-0 md:px-0 gap-4 items-center justify-between">
                                <Link href="#" className="flex gap-[8px] items-center">
                                    <Image src="/Strategies.svg" alt="Strategies Logo" width={100} height={100} className="w-[22px] h-[22px] hidden md:block" />
                                    <p className="text-[18px] md:text-[20px] montserrat-bold">Strategies</p>
                                </Link>
                                <Link href="#" className="flex gap-[8px] items-center">
                                    <Image src="/Google-Ads.svg" alt="Google Ads Logo" width={100} height={100} className="w-[22px] h-[22px] hidden md:block" />
                                    <p className="text-[18px] md:text-[20px] montserrat-bold">Google Ads</p>
                                </Link>
                                <Link href="#" className="flex gap-[8px] items-center">
                                    <Image src="/Meta-Ads.svg" alt="Meta Ads Logo" width={100} height={100} className="w-[22px] h-[22px] hidden md:block" />
                                    <p className="text-[18px] md:text-[20px] montserrat-bold">Meta Ads</p>
                                </Link>
                                <Link href="#" className="flex gap-[8px] items-center">
                                    <Image src="/Analysis-ROI.svg" alt="Analysis ROI Logo" width={100} height={100} className="w-[22px] h-[22px] hidden md:block" />
                                    <p className="text-[18px] md:text-[20px] montserrat-bold">Analysis ROI</p>
                                </Link>
                            </div>

                            <div className="w-full h-full md:flex space-y-16 md:space-y-0">
                                <div className="w-full h-full px-8 md:px-0 flex flex-col md:gap-32 gap-16 justify-between">
                                    <div className="flex flex-col gap-10 h-full">
                                        <div className="flex gap-4 items-center">
                                            <Image src="/star.svg" alt="Star Logo" width={100} height={100} className="w-[22px] h-[22px]" />
                                            <p className="text-[18px] md:text-[20px] montserrat-bold">Multi-Platform Expertise</p></div>
                                        <div className="flex gap-4 items-center">
                                            <Image src="/star.svg" alt="Star Logo" width={100} height={100} className="w-[22px] h-[22px]" />
                                            <p className="text-[18px] md:text-[20px] montserrat-bold">Performance Optimization</p></div>
                                        <div className="flex gap-4 items-center">
                                            <Image src="/star.svg" alt="Star Logo" width={100} height={100} className="w-[22px] h-[22px]" />
                                            <p className="text-[18px] md:text-[20px] montserrat-bold">Data Driven Growth Strategies</p></div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-[16px] lora-regular">
                                        <Link href="/" className="underline">Learn more with our expert team</Link>
                                    </div>
                                </div>
                                <div className="md:absolute md:bottom-0 md:right-4 px-2">
                                    <div className="relative">
                                        <Image
                                            src="/market-Strategy.png"
                                            alt="Marketing Team"
                                            width={500}
                                            height={400}
                                            className="rounded-lg h-[340px] w-fit overflow-hidden"
                                        />

                                        <Image
                                            src="/market--Strategy-home.png"
                                            alt="Marketing Team"
                                            width={200}
                                            height={200}
                                            className="rounded-lg absolute top-0 left-8 h-[120px] w-fit overflow-hidden"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}