import { client } from "@/lib/sanity";
import { socialMediaQuery, uiUxQuery } from "@/lib/queries";
import Testimonials from "@/components/layout/testimonials";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Link from "next/link";
import NextPre from "@/components/layout/next-pre";
import Masonry from "@/components/layout/masonry";
import UiUxCarousel from "@/components/custom-carousel/ui-ux-carousel";

export default async function UiUxPage() {
    const data = await client.fetch(uiUxQuery());

    return (
        <>

          


            {/* CTA */}
            <CTA />
        </>
    )
}