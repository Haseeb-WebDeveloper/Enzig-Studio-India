import Link from "next/link";

export default function Hero() {


    const allServices = [
        {
            name: "Google Ads",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 0"
        },
        {
            name: "E-Commerce",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 0"
        },
        {
            name: "Website Development",
            className: "md:rotate-12 inline-block rounded-full px-[30px] py-[25px] bg-primary text-background backdrop-filter: blur(35px) text-backgroundbackdrop-filter: blur(primary/90ansition-all duration-300 hover:bg-primary/90"
        },
        {
            name: "Graphics & Video",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },
        {
            name: "Social Media Management",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 "
        },
        {
            name: "SEO",
            className: "z-10 inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },
        {
            name: "Content Creation",
            className: "z-[0] md:-rotate-6 nd:-mt-4 inline-block rounded-full px-[30px] py-[25px] bg-primary text-background backdrop-filter: blur(35px) text-backgroundbackdrop-filter: blur(primary/90ansition-all duration-300 hover:bg-primary/90"
        },
        {
            name: "Meta Ads",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 "
        },
        {
            name: "Graphics Design",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },

        {
            name: "Analysis & ROI",
            className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },

        {
            name: "Branding & Logo",
            className: "z-[0] md:-rotate-6 inline-block rounded-full px-[30px] py-[25px] bg-primary text-background backdrop-filter: blur(35px) transition-all duration-300 hover:bg-primary/90"
        }
    ]


    return (
        <section className="flex flex-col justify-center items-center bg-background">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-20 z-20 pt-[3rem] pb-[5rem] md:py-[10vh] 2xl:py-[20vh]">
                <div className="grid gap-16 md:gap-8 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <h1 className="text-[45px] md:text-[60px] text-center md:text-left font-bold leading-tight tracking-tighter lg:leading-[1.1]">
                            <span className="block text-primary montserrat-bold">The Best <br /> Digital Marketing <br />Company</span>
                        </h1>

                        <p className="text-[18px] md:text-[20px] leading-[28px] text-center md:text-left text-muted-foreground md:text-xl lora-medium">
                            We create impactful marketing, high-converting designs, and data-driven campaigns to grow your brand. Our aesthetic studio offers photoshoots, reels, podcasts, and more—bringing your brand to life!
                        </p>

                        <Link href="#" className="w-full md:w-fit  text-center text-[20px] lora-medium rounded-md px-[16px] md:py-[8px] py-[16px] bg-primary text-background">
                            Get in Touch
                        </Link>

                    </div>

                    {/* Right Content - Service Cards */}
                    {/* for small screens */}
                    <div className="flex flex-wrap gap-2 md:hidden justify-center items-center">
                        {allServices.map((service, index) => (
                            <div key={index}>
                                <div className={`${service.className}`}>
                                    <p className="montserrat-medium text-[16px] md:text-[20px] text-nowrap">{service.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* for large screens */}
                    <div className="hidden md:flex gap-4 md:justify-center md:items-center">
                        <div className="flex flex-col gap-1 md:justify-end md:items-end h-full">
                            {/* first 5 services */}
                            {allServices.slice(0, 5).map((service, index) => (
                                <div key={index}>
                                    <div className={`${service.className}`}>
                                        <p className="font-medium text-sm md:text-base text-nowrap">{service.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 justify-start items-start">
                            {/* last 5 services */}
                            {allServices.slice(5, 10).map((service, index) => (
                                <div key={index}>
                                    <div className={` ${service.className}`}>
                                        <p className="font-medium text-sm md:text-base text-nowrap">{service.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


