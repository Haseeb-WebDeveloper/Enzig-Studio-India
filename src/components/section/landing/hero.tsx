import Image from "next/image";
import Link from "next/link";

export default function Hero() {


    const allServices = [
        {
            name: "Google Ads",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 0"
        },
        {
            name: "E-Commerce",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 0"
        },
        {
            name: "Website Development",
            className: "md:rotate-12 inline-block rounded-full px-6 py-5 bg-primary text-background backdrop-filter: blur(35px) text-backgroundbackdrop-filter: blur(primary/90ansition-all duration-300 hover:bg-primary/90"
        },
        {
            name: "Graphics & Video",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },
        {
            name: "Social Media Management",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 "
        },
        {
            name: "SEO",
            className: "z-10 inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },
        {
            name: "Content Creation",
            className: "z-[0] md:-rotate-6 nd:-mt-4 inline-block rounded-full px-6 py-5 bg-primary text-background backdrop-filter: blur(35px) text-backgroundbackdrop-filter: blur(primary/90ansition-all duration-300 hover:bg-primary/90"
        },
        {
            name: "Meta Ads",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 "
        },
        {
            name: "Graphics Design",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },

        {
            name: "Analysis & ROI",
            className: "inline-block rounded-full px-6 py-5 bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
        },

        {
            name: "Branding & Logo",
            className: "z-[0] md:-rotate-6 inline-block rounded-full px-6 py-5 bg-primary text-background backdrop-filter: blur(35px) transition-all duration-300 hover:bg-primary/90"
        }
    ]


    return (
        <section className="relative sm:min-h-screen 2xl:min-h-auto h-full overflow-hidden flex flex-col justify-center items-center bg-background">
            {/* Gradient Background */}
            {/* <div className="z-10 absolute top-0 right-28 w-1/2 h-full  -rotate-16 bg-gradient-to-r from-background to-transparent"></div> */}
            <div className="z-10 absolute top-0 right-0 w-full md:w-[50%] h-full bg-gradient-to-br from-background from-25% to-transparent"></div>
            <div className="z-10 absolute top-0 right-20 w-full md:w-1/2 h-full bg-gradient-to-r from-background to-transparent"></div>
            <div className="z-1 absolute top-0 right-0 w-full md:w-1/2 h-full">
                <Image src="/hero-gradient.png" alt="Hero Background" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="max-w-7xl mx-auto px-6 z-20 py-[15vh] md:py-[20vh]">
                <div className="grid gap-16 md:gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <h1 className="text-4xl text-center md:text-left font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                            <span className="block">The Best</span>
                            <span className="block">Digital Marketing</span>
                            <span className="block">Company</span>
                        </h1>

                        <p className="text-lg text-center md:text-left text-muted-foreground md:text-xl">
                            We create impactful marketing, high-converting designs, and data-driven campaigns to grow your brand. Our aesthetic studio offers photoshoots, reels, podcasts, and more—bringing your brand to life!
                        </p>

                        <Link href="/contact" className="w-full md:w-fit mt-8 text-center font-medium rounded-md px-10 py-4 bg-primary text-background">
                            Get in Touch
                        </Link>

                    </div>

                    {/* Right Content - Service Cards */}
                    {/* for small screens */}
                    <div className="flex flex-wrap gap-2 md:hidden justify-center items-center">
                        {allServices.map((service, index) => (
                            <div key={index}>
                                <div className={`${service.className}`}>
                                    <p className="font-medium text-sm md:text-base text-nowrap">{service.name}</p>
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


