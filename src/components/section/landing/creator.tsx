import Image from "next/image";
import { FaMeta, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaFigma, } from "react-icons/fa6";

export default function Creator() {
    return (
        <section className="bg-background">
            <div className="max-w-[980px] mx-auto px-4 py-16 space-y-16">
                <h3 className="4xt-4px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] font-bold text-foreground">
                    Creator & Strategist
                </h3>
                <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
                    <div className="flex flex-col bg-foreground rounded-md p-3 rotate-3">
                        <div className="rounded-t-lg">
                            <Image src="/akkshhat.png" alt="Creator" width={400} height={400} className="w-full h-full object-cover max-w-[320px] shadow-lg" />
                        </div>
                        <div className="bg-[#E018FA] p-4 flex flex-col">
                            <div className="bg-foreground rounded-md rounded-br-[50px] p-4 border-4 border-background flex flex-col gap-2">
                                <div>
                                    <span className="text-background/80 text-xs">SUPERPOWER</span>
                                    <p className="text-sm text-background">Details, Team Building, Story-Writing</p>
                                </div>
                                <div>
                                    <span className="text-background/80 text-xs">WEAKNESS</span>
                                    <p className="text-sm text-background">Patience, Being super hard on myself</p>
                                </div>
                                <div>
                                    <span className="text-background/80 text-xs">FAVOURITE TOOL</span>
                                    <div className="flex gap-1">
                                        <div className="rounded-md bg-background p-1.5 flex justify-center items-center">
                                            <Image src="/meat-logo.svg" alt="Canva" width={20} height={20} />
                                        </div>
                                        <div className="rounded-md bg-background p-1.5 flex justify-center items-center">
                                            <Image src="/figma-logo.svg" alt="Figma" width={20} height={20} />
                                        </div>
                                        <div className="rounded-md bg-background p-1.5 flex justify-center items-center">
                                            <Image src="/instagram-logo.svg" alt="Instagram" width={20} height={20} />
                                        </div>
                                        <div className="rounded-md bg-background p-1.5 flex justify-center items-center">
                                            <Image src="/twitter-logo.svg" alt="Twitter" width={20} height={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

