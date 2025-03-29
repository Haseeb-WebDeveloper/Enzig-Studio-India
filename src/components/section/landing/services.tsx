import Image from "next/image";

export default function Services() {
    const serviceCards = [
        {
            category: "SEO",
            title: "Smart SEO for Real Results",
            description: "From technical SEO to content optimization, we ensure your brand dominates search results and outperforms competitors. SEO strategies built for sustainable growth.",
            mainImage: "/service-seo-main.png",
            secondaryImage: "/service-seo-2.png",
        },
        {
            category: "Website and App Development",
            title: "Seamless Design, Powerful Experiences",
            description: "Custom-built websites and apps designed for smooth performance, enhanced user experience, mobile-friendly and conversion-focused that blend aesthetics with functionality for maximum impact.",
            mainImage: "/web-app-main.png",
            secondaryImage: "/web-app-2.png",
        },
        {
            category: "Design & Content",
            title: "Stories That Sell, Content That Scales",
            description: "Strategic storytelling and high-impact visuals designed to make your brand stand out and drive measurable growth. Bringing brands to life through engaging podcasts, and impactful product shoots.",
            mainImage: "/design-content-main.png",
            secondaryImage: "/design-content-2.png",
        },
        {
            category: "Marketing",
            title: "Strategic Funnels for Unstoppable Growth",
            description: "From awareness to sales, we create powerful marketing funnels that turn leads into loyal customers. Data-driven marketing strategies that optimize every stage of your funnel.",
            mainImage: "/marketing-main.png",
            secondaryImage: "/marketing-2.png",
        }
    ];

    return (
        <section className="bg-[#B0CF2E] mt-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 z-20 py-[15vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceCards.map((card, index) => (
                        <div key={index} className="bg-foreground rounded-lg w-full lg:flex">
                            <div className="space-y-3 p-6">
                                <p className="text-[#E018FA] text-sm text-[16px]">
                                    {card.category}
                                </p>
                                <h3 className="text-background text-2xl font-bold">{card.title}</h3>
                                <p className="text-background text-sm">{card.description}</p>
                            </div>
                            <div className="w-full h-full relative flex items-end justify-end">
                                <Image src={card.mainImage} alt={`${card.category} main`} width={300} height={300} className="object-contain absolute right-4 top-4 h-fit max-h-[200px] w-fit" />
                                <Image src={card.secondaryImage} alt={`${card.category} secondary`} width={300} height={300} className="object-contain absolute -left-4 bottom-4 max-h-[100px] w-fit" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
