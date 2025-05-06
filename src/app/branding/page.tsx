import { client } from "@/lib/sanity";
import { brandingPortfolioQuery } from "@/lib/queries";
import { BrandingPortfolio } from "@/types/interface";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";
import { Raleway } from "next/font/google";
import { BrandPortfolio } from "@/components/section/brand-portfolio";

const raleway = Raleway({ subsets: ["latin"] });

export default async function BrandingPage() {
    const data = await client.fetch<BrandingPortfolio>(brandingPortfolioQuery());
    // console.dir(data, { depth: null });

    return (
        <main className="min-h-screen space-y-20 md:space-y-32">
            {/* Hero Section */}
            <section className="pt-20 px-6 bg-background text-foreground">
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                    <div className="md:px-12">
                        <Image src="/branding-page.png" alt={data.title} width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* Brand Grid */}
            <BrandPortfolio brands={data.brands} page="branding" />

            {/* Testimonials */}
            <section className="bg-background text-foreground mb-0">
                <Testimonials testimonials={data.testimonials} />
            </section>

            {/* Next Page Previous Page */}
            <div className="mb-20">
                <NextPre nextPage="/graphics-design" prePage="/3d-projects" />
            </div>

            {/* CTA */}
            <CTA />
        </main>
    );
}