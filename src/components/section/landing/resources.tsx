import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function Resources() {
    return (
        <section className="bg-background md:py-16">
            <div className="max-w-[1000px] mx-auto px-4 md:px-0 py-16 md:space-y-10 space-y-8">
                <h3 className="text-[35px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] font-bold text-foreground">
                    Resources
                </h3>
                <div className="flex flex-col gap-5">
                    {/* 1st row */}
                    <div className="flex flex-col md:flex-row justify-between items-stretch gap-5">
                        {/* card 1 */}
                        <div className="space-y-6 md:w-[25%] w-full min-h-[100%] bg-[#B0CF2E] rounded-3xl p-5">
                            <div className="flex items-center justify-center">
                                <Image src="/resources-edit.png" alt="Case Studies" width={100} height={100} className="w-36 h-36 object-cover" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-background text-2xl md:text-4xl font-bold">
                                    Case Studies
                                </h3>
                                <p className="text-background text-base font-normal">
                                    Proven Strategies, Real Results – Explore Our Success Stories.
                                </p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="space-y-6 md:w-[35%] w-full nin-h-[100%] bg-[#E018FA] rounded-3xl p-5">
                            <div className="">
                                <Image src="/resources-video-assets-pic.png" alt="Case Studies" width={400} height={400} className="w-full h-42 object-cover rounded-2xl" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-foreground text-2xl md:text-4xl font-bold">
                                Video Assets
                                </h3>
                                <p className="text-foreground text-base font-normal">
                                Unlock Exclusive Video Assets! Get high quality overlays, transitions, graphics, LUTs, effects, fonts & more.
                                </p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="space-y-6 md:w-[40%] w-full min-h-[100%] bg-[#B0CF2E] rounded-3xl p-5">
                            <div className="flex items-center justify-start">
                                <Image src="/resources-blog-icon.png" alt="Case Studies" width={400} height={400} className="w-36 h-36 object-cover" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-background text-2xl md:text-4xl font-bold">
                                Blogs
                                </h3>
                                <p className="text-background text-base font-normal">
                                Expert insights, marketing strategies, and industry trends—stay ahead with our in-depth blogs designed to grow your brand.
                                </p>
                                <GoArrowRight className="text-background text-5xl font-bold" />
                            </div>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="flex flex-col md:flex-row justify-between items-stretch gap-5">
                        {/* card 1 */}
                        <div className="space-y-6 md:w-[35%] w-full nin-h-[100%] bg-[#E018FA] rounded-3xl">
                            <div className="">
                                <Image src="/resources-event-pic.png" alt="Case Studies" width={400} height={400} className="w-full h-42 object-cover rounded-t-2xl object-right-bottom" />
                            </div>
                            <div className="space-y-3 p-5">
                                <h3 className="text-foreground text-2xl md:text-4xl font-bold">
                                Events
                                </h3>
                                <p className="text-foreground text-base font-normal">
                                From Hosting to Managing – Seamless Event Solutions for Businesses & Brands.
                                </p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="space-y-6 md:w-[40%] w-full min-h-[100%] rounded-3xl p-5 relative" 
                            style={{
                                backgroundImage: 'url(/resources-work-bg.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
                            
                            <div className="flex items-center justify-start relative z-10">
                                <Image src="/resources-work-icon.png" alt="Case Studies" width={400} height={400} className="w-fit h-32 object-contain" />
                            </div>
                            <div className="space-y-3 relative z-10">
                                <h3 className="text-foreground text-2xl md:text-4xl font-bold">
                                Our Work
                                </h3>
                                <p className="text-foreground text-base font-normal">
                                Creative solutions, strategic execution, and impactful results—see how our work transforms brands and drives success.
                                </p>
                                <GoArrowRight className="text-foreground text-5xl font-bold" />
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="space-y-6 md:w-[25%] w-full min-h-[100%]  bg-[#E018FA] rounded-3xl p-5 flex flex-col justify-center">
                            <div className="flex items-center justify-start">
                                <Image src="/resources-contact-us-icon.png" alt="Case Studies" width={100} height={100} className="w-fit h-32 object-contain" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-foreground text-2xl md:text-4xl font-bold">
                                Contact Us
                                </h3>
                                <p className="text-foreground text-base font-normal">
                                Let’s Talk Strategy, Design & Growth – Reach Out Now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
