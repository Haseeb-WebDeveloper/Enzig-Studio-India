import { client } from "@/lib/sanity";
import { teamQuery } from "@/lib/queries";
import TeamSection from "@/components/section/team/team-section";
import Image from "next/image";
import CTA from "@/components/section/landing/cta";
import Creator from "@/components/section/landing/creator";

export const metadata = {
    title: "Our Team | Enzig Studio India",
    description: "Meet our talented team of professionals at Enzig Studio India.",
};

export default async function TeamPage() {
    const teamMembers = await client.fetch(teamQuery);

    return (
        <>
            <div className="mt-24 md:mt-28 mb-12 md:mb-16 px-6 md:px-12 max-w-[1024px] mx-auto space-y-12">
                <Image src="/team-page.png" alt="Team Page" width={1024} height={768} className="w-full h-fit max-h-[200px] object-contain" />
                <p className="lora-blog-h3 text-center">{teamMembers.heroSectionPara}</p>
            </div>
            <div className="mb-12 md:mb-16">
                <Creator />
            </div>
            <div className="mb-12 md:mb-16">
                <TeamSection teamMembers={teamMembers} />
            </div>
            <CTA />
        </>
    );
} 