'use client';

import Image from 'next/image';

interface TeamMember {
    name: string;
    bio: string;
    favouriteTools: string[];
    image: {
        asset: {
            url: string;
        };
    };
}

interface TeamData {
    heroSectionPara: string;
    teamMembers: TeamMember[];
}

interface TeamSectionProps {
    teamMembers: TeamData;
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-[1200px] mx-auto">
                <h5 className="mb-12 text-center text-[35px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] montserrat-extrabold text-foreground">
                    Our Accomplished Team!
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.teamMembers.map((member: TeamMember, index: number) => (
                        <div key={index} className="overflow-hidden relative bg-foreground text-background rounded-xl md:p-6 p-4">
                            {/* Card with magenta top section and green bottom section */}
                            <div className="flex flex-col h-full bg-secondary">
                                {/* Top section - Magenta with image */}
                                <div className="px-12 md:px-16 py-4 pb-6">
                                    <div className="w-full aspect-square overflow-hidden">
                                        <Image
                                            src={member.image.asset.url}
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover"
                                        />
                                        <Image
                                            src="/patch.png"
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="absolute top-[7%] left-[16%] rotate-12 w-fit h-auto max-w-[50px] object-contain"
                                        />
                                        <Image
                                            src="/patch.png"
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="absolute top-[22%] right-[14%] rotate-12 w-fit h-fit max-w-[50px] object-contain"
                                        />
                                    </div>

                                    {/* Name tag overlapping the sections */}
                                    <div className="bg-foreground text-background px-8 mt-2 rotate-3 py-1">
                                        <p className="montserrat-eb-h3 text-center">{member.name}</p>
                                    </div>
                                </div>

                                {/* Bottom section - Green with bio and tools */}
                                <div className=" p-4 flex-grow flex flex-col">
                                    {/* Bio Text */}
                                    <div className="z-[2] mb-4 flex-grow bg-[#55CD8C] p-4 rounded-xl -rotate-2 border-4 border-foreground">
                                        <p className="montserrat-eb-h4 text-[#3c9062] mb-1 text-center">SUPERPOWERS</p>
                                        <p className="lora-blog-h1 text-center">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Favorite Tools Section */}
                                    <div className="w-[80%] mx-auto bg-[#80C2FF] -mt-8 px-4 py-6 rounded-xl -rotate-3 border-4 border-foreground">
                                        <p className="montserrat-eb-h4 text-[#5a88b3] mb-1 text-center">FAVOURITE TOOLS</p>
                                        <div className="flex flex-wrap justify-center items-center gap-2">
                                            {member.favouriteTools.map((tool: string, idx: number) => (
                                                <span
                                                    key={idx}
                                                    className="lora-blog-h1"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}