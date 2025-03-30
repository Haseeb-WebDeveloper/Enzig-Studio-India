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
            <div className="max-w-[1000px] mx-auto px-4 md:px-0 py-16 flex flex-col gap-10 justify-center items-center">
                <h3 className="text-[35px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] font-bold text-foreground text-center">
                    Marketing That Works,<br />
                    Designs That Convert
                </h3>
                <Link href="/contact" className="text-center font-medium rounded-md px-10 py-4 bg-primary text-background">
                    Get a Quote
                </Link>
            </div>
        </section>
    )
}
