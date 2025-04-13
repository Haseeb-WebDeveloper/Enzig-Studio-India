"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreativityContent() {
    const [activeCategory, setActiveCategory] = useState('branding');

    const categories = {
        branding: {
            title: "Branding",
            features: [
                "Storytelling That Connects",
                "Unique Brand Identity", 
                "Brand Growth & Recognition"
            ],
            button: "Learn more with our expert team",
            image: "/creativity-content/branding.png",
            logo: "/creativity-content/branding-logo.svg",
        },
        contentCreation: {
            title: "Content Creation",
            features: [
                "Story-Driven Content",
                "Viral & Trend-Based Content",
                "Scroll-Stopping Visuals & Graphics"
            ],
            button: "Learn more with our expert team",
            image: "/creativity-content/content-creation.png",
            logo: "/creativity-content/content-creation-logo.svg", 
        },
        smm: {
            title: "SMM",
            features: [
                "Customized Strategy for Each Platform",
                "Hashtag & SEO Optimization",
                "Content Planning & Scheduling"
            ],
            button: "Learn more with our expert team",
            image: "/creativity-content/smm.png",
            logo: "/creativity-content/smm-logo.svg",
        },
        packagingPrint: {
            title: "Packaging & Print",
            features: [
                "Custom Packaging Design",
                "High-Quality Print Materials",
                "Industry-Specific Solutions"
            ],
            button: "Learn more with our expert team",
            image: "/creativity-content/packaging-print.png",
            logo: "/creativity-content/packaging-print-logo.svg",
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
                            Creativity & Content
                        </h2>
                        <h3 className="text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] montserrat-bold text-foreground">
                        High quality Content<br />
                        by our top creatives
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
                            <div className="w-full flex flex-row overflow-x-auto md:overflow-x-visible pt-8 px-4 md:pt-0 md:px-0 gap-12 items-center justify-between">
                                <button 
                                    onClick={() => handleCategoryClick('branding')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'branding' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/creativity-content/branding-logo.svg" alt="Strategies Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Branding</p>
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick('contentCreation')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'contentCreation' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/creativity-content/content-creation-logo.svg" alt="Content Creation Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Content Creation</p>
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick('smm')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'smm' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/creativity-content/smm-logo.svg" alt="SMM Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">SMM</p>
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick('packagingPrint')}
                                    className={`cursor-pointer flex-shrink-0 flex gap-[8px] items-center pb-2 ${activeCategory === 'packagingPrint' ? 'border-b-[5px] border-primary' : 'border-b-[5px] border-transparent'}`}
                                >
                                    <Image src="/creativity-content/packaging-print-logo.svg" alt="Packaging & Print Logo" width={100} height={100} className="md:w-[22px] md:h-[22px] w-[16px] h-[16px]" />
                                    <p className="text-[14px] md:text-[20px] montserrat-bold">Packaging & Print</p>
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
                                            className="rounded-lg md:h-[340px] w-full p-2 md:p-0 md:w-fit overflow-hidden"
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