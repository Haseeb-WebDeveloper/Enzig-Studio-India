import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-16"
            style={{
                backgroundImage: 'url(/cta-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-w-[1000px] mx-auto px-6 md:px-0 py-16 flex flex-col gap-10 justify-center items-center">
                <h3 className="text-[40px] md:text-[56px] leading-[50px] md:leading-[64px] tracking-[-3%] montserrat-bold text-foreground text-center max-w-[750px]">
                    Marketing That Works,
                    Designs That Convert
                </h3>
                <Link href="#" className="w-full md:w-fit  text-center text-[20px] lora-medium rounded-md px-[16px] md:py-[8px] py-[16px] bg-primary text-background">
                    Get a Quote
                </Link>
            </div>
        </section>
    )
}
