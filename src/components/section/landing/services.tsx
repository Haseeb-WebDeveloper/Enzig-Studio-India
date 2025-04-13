import Image from "next/image";

export default function Services() {
    const serviceCards = [
        {
            category: "SEO",
            title: "Smart SEO for Real Results",
            description: "From technical SEO to content optimization, we ensure your brand dominates search results and outperforms competitors. SEO strategies built for sustainable growth.",
            image: "/services/seo.png",
            imageWidth: 264,
            imageHeight: 269
        },
        {
            category: "Website and App Development",
            title: "Seamless Design, Great Experiences",
            description: "Custom-built websites and apps designed for smooth performance, enhanced user experience, mobile-friendly and conversion-focused that blend aesthetics with functionality for maximum impact.",
            image: "/services/web-app.png",
            imageWidth: 232,
            imageHeight: 249
        },
        {
            category: "Design & Content",
            title: "Stories Sell, Content Scales",
            description: "Strategic storytelling and high-impact visuals designed to make your brand stand out and drive measurable growth. Bringing brands to life through engaging podcasts, and impactful product shoots.",
            image: "/services/design-content.png",
            imageWidth: 235,
            imageHeight: 268
        },
        {
            category: "Marketing",
            title: "Growth Funnels that Work",
            description: "From awareness to sales, we create powerful marketing funnels that turn leads into loyal customers. Data-driven marketing strategies that optimize every stage of your funnel.",
            image: "/services/marketing.png",
            imageWidth: 213,
            imageHeight: 268
        }
    ];

    return (
        <section className="bg-primary mt-20">
            <div className="max-w-[1200px] mx-auto px-6  py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-foreground rounded-xl p-6 flex flex-col md:flex-row gap-4"
                        >
                            {/* Text Section */}
                            <div className="space-y-3 md:w-[60%] w-full">
                                <p className="text-secondary montserrat-regular text-[16px]">
                                    {card.category}
                                </p>
                                <h3 className="text-background montserrat-extrabold text-[24px] md:text-[26px] leading-tight">
                                    {card.title}
                                </h3>
                                <p className="text-background montserrat-medium text-[16px] leading-[22px]">
                                    {card.description}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="md:w-[40%] w-full px-2 pt-2 md:p-0">
                                <Image
                                    src={card.image}
                                    alt={card.category}
                                    width={480}
                                    height={480}
                                    className={`object-contain w-full h-full`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
