"use client"

import Testimonials from "@/components/layout/testimonials";
import NextPre from "@/components/layout/next-pre";
import CTA from "@/components/section/landing/cta";
import { singleProjectsQuery } from "@/lib/queries"
import { client } from "@/lib/sanity"
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";
// import { CarPage } from "@/components/Image-carousel-with-speed";

export default function SingleProjectPage() {
    const params = useParams();
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!params.slug) return; // guard check
            const data = await client.fetch(singleProjectsQuery(params.slug as string));
            setProject(data);
        }
        fetchProject();
    }, [params.slug]);

    if (!project) return <div className="flex justify-center items-center h-screen"><FaSpinner className="text-secondary animate-spin text-4xl" /></div>

    return (
        <>

            <section className="h-full pt-16  ">
                <div className=" max-w-[1024px] mx-auto space-y-12 md:space-y-16">
                    <div className="grid grid-cols-2 gap-16 items-center justify-center h-full text-background">
                        {/* text */}
                        <div className="space-y-6 w-full">
                            <Image src={project.logo} alt={project.title} width={1024} height={768} className="w-full max-w-[200px] h-auto px-6 py-4 bg-[#074633] rounded-xl" />
                            <h1 className="montserrat-eb-h2">{project.title}</h1>
                            <p className="lora-blog-h3 text-foreground">{project.description}</p>
                        </div>
                        <div className="w-full h-full">
                            <Image src={project.rightSideImage} alt={project.title} width={1024} height={768} className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Second Section */}
            <div className="bg-foreground text-background">
                <section className="py-24">
                    <div className="max-w-[1024px] mx-auto space-y-12">
                        <h2 className="montserrat-eb-h2 text-center">{project.secondSectionHeading}</h2>
                        <p className="lora-blog-h3 text-center">{project.secondSectionDescription}</p>
                        <Image src={project.secondSectionImage} alt={project.title} width={1024} height={768} className="w-full h-auto" />
                    </div>
                </section>

                {/* Project Overview */}
                <div className="text-background max-w-[1200px] bg-[#FFFFF0] p-12 mx-auto space-y-4 mb-16">
                    <p className="montserrat-eb-h2 text-secondary">Project Overview</p>
                    <p className="lora-blog-h3 max-w-[900px]">{project.projectOverviewDescription}</p>
                </div>

                {/* Third Section */}
                <div className="text-background max-w-[1200px] mx-auto bg-[#FFFFF0] space-y-16 p-12">
                    <p className="montserrat-eb-h2 text-center text-secondary">Project Goals</p>
                    <section className="flex flex-col md:flex-row justify-center items-center gap-20">
                        {project.projectGoals.map((goal: any, index: number) => (
                            <div key={index} className="w-full flex flex-col gap-4 items-center justify-center h-full">
                                <Image src={goal.icon} alt={goal.goal} width={1024} height={768} className="w-full max-w-16 h-auto p-4 rounded-full bg-secondary" />
                                <p className="lora-blog-h2 text-center max-w-[200px]">{goal.goal}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Fourth Section */}
                <div className="text-background  mt-16 space-y-16 px-4 md:px-12 mb-24">
                    {project.projectImages.map((image: any, index: number) => (
                        <div key={index} className="w-full flex flex-col gap-4 items-center justify-center h-full">
                            {image.title && <p className="montserrat-eb-h2 text-center text-secondary">{image.title}</p>}
                            <Image src={image.image} alt={image.title} width={1024} height={768} className="w-full h-auto" />
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <section className="mb-12">
                    <Testimonials testimonials={project.testimonials} />
                </section>

                {/* Next Page Previous Page */}
                <div className="mb-20">
                    <div>
                        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
                            <Link href="/" className="lora-blog-h3 flex flex-col gap-3">
                                Previous Project
                                <Image src="/page-arrow-left-dark.svg" alt="Previous Project" width={200} height={200} className="w-32 color-foreground" />
                            </Link>
                            <Link href="/" className="lora-blog-h3 flex flex-col justify-end items-center gap-3">
                                Next Project
                                <Image src="/page-arrow-right-dark.svg" alt="Next Project" width={200} height={200} className="w-32 color-foreground" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <CTA />
            </div>
        </>
    )
}
