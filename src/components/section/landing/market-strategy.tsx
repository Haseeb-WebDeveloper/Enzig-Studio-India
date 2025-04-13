"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MarketStrategy() {
    const [activeCategory, setActiveCategory] = useState('strategies');

    const categories = {
        strategies: {
            title: "Strategies",
            features: [
                "Multi-Platform Expertise",
                "Performance Optimization", 
                "Data Driven Growth Strategies"
            ],
            button: "Learn more with our expert team",
            image: "/market-strategy/strategy.png",
            logo: "/market-strategy/strategy-logo.svg",
        },
        googleAds: {
            title: "Google Ads",
            features: [
                "Keywords Optimization",
                "Maximize Reach, Minimize Spend",
                "Smart Bidding, Better ROI"
            ],
            button: "Learn more with our expert team",
            image: "/market-strategy/google-ads.png",
            logo: "/market-strategy/google-ads-logo.svg", 
        },
        metaAds: {
            title: "Meta Ads",
            features: [
                "Optimized Campaigns, Maximum ROI",
                "Targeted Ads, Higher Conversions",
                "High-Conversion Ad Strategies"
            ],
            button: "Learn more with our expert team",
            image: "/market-strategy/meta-ads.png",
            logo: "/market-strategy/meta-ads-logo.svg",
        },
        analysisRoi: {
            title: "Analysis ROI",
            features: [
                "Conversion Rate Optimization (CRO)",
                "Real-Time Data & Insights",
                "Customer Behavior Analysis"
            ],
            button: "Learn more with our expert team",
            image: "/market-strategy/analysis-roi.png",
            logo: "/market-strategy/analysis-roi-logo.svg",
        }
    };

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    const activeContent = categories[activeCategory as keyof typeof categories];

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
                        <div className="flex gap-12 md:gap-20 flex-col">
                            {/* logo */}
                            <div className="w-full flex flex-row overflow-x-auto md:overflow-x-visible pt-8 px-6 md:pt-0 md:px-0 gap-12 items-center justify-between">
                                <button 
                                    onClick={() => handleCategoryClick('strategies')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'strategies' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/market-strategy/strategy-logo.svg" alt="Strategies Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Strategies</p>
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick('googleAds')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'googleAds' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/market-strategy/google-ads-logo.svg" alt="Google Ads Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Google Ads</p>
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick('metaAds')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'metaAds' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/market-strategy/meta-ads-logo.svg" alt="Meta Ads Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Meta Ads</p>
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick('analysisRoi')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'analysisRoi' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/market-strategy/analysis-roi-logo.svg" alt="Analysis ROI Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Analysis & ROI</p>
                                </button>
                            </div>

                            <div className="w-full h-full md:flex space-y-16 md:space-y-0">
                                <div className="w-full h-full px-4 md:px-0 flex flex-col md:gap-32 gap-16 justify-between">
                                    <div className="flex flex-col gap-10 h-full">
                                        {activeContent.features.map((feature, index) => (
                                            <div key={index} className="flex gap-4 items-center">
                                                <Image src="/star.svg" alt="Star Logo" width={100} height={100} className="w-[22px] h-[22px]" />
                                                <p className="text-[18px] md:text-[20px] montserrat-bold">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-2 text-[16px] lora-regular">
                                        <Link href="/" className="underline">{activeContent.button}</Link>
                                    </div>
                                </div>
                                <div className="md:absolute md:bottom-0 md:right-0 px-2">
                                    <div className="relative">
                                        <Image
                                            src={activeContent.image}
                                            alt={`${activeContent.title} Main Image`}
                                            width={500}
                                            height={400}
                                            className="rounded-lg md:h-[340px] p-2 md:p-0 w-fit overflow-hidden"
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