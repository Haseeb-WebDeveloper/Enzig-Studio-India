import Image from "next/image";
import { FaMeta, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaFigma, } from "react-icons/fa6";

export default function Creator() {
    return (
        <section className="bg-background">
            <div className="max-w-[980px] mx-auto px-6 py-16 md:space-y-16 space-y-8">
                <h3 className="text-[35px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] montserrat-extrabold text-foreground">
                    Creator & Strategist
                </h3>
                <div className="flex flex-col md:flex-row md:gap-24 gap-10 justify-center">
                    {/* left side card*/}
                    <div className="flex flex-col md:w-[409px] bg-foreground rounded-md p-3 md:rotate-3">
                        <div className="rounded-t-lg">
                            <Image src="/akkshhat.png" alt="Creator" width={400} height={400} className="w-full h-full object-cover shadow-lg" />
                        </div>
                        <div className="bg-secondary p-4 flex flex-col relative">
                            <div className="bg-foreground rounded-md rounded-br-[60px] p-4 border-4 border-background flex flex-col gap-2">
                                <div>
                                    <span className="text-background/80 montserrat-regular text-[16px]leading-[20px]">SUPERPOWER</span>
                                    <p className="text-[16px] lora-regular text-background">Details, Team Building, Story-Writing</p>
                                </div>
                                <div>
                                    <span className="text-background/80 montserrat-regular text-[16px]leading-[20px]">WEAKNESS</span>
                                    <p className="text-[16px] lora-regular text-background">Patience, Being super hard on myself</p>
                                </div>
                                <div>
                                    <span className="text-background/80 montserrat-regular text-[16px]leading-[20px]">FAVOURITE TOOL</span>
                                    <div className="flex gap-1">
                                        <div className="rounded-md bg-background p-2 flex justify-center items-center">
                                            <FaMeta className="w-5 h-4" />
                                        </div>
                                        <div className="rounded-md bg-background p-1.5 flex justify-center items-center">
                                            <Image src="/figma-logo.svg" alt="Figma" width={20} height={20} />
                                        </div>
                                        <div className="rounded-md bg-background p-1 flex justify-center items-center">
                                            <Image src="/adobe-ps.svg" alt="Figma" width={25} height={25} />
                                        </div>
                                        <div className="rounded-md bg-background p-1 flex justify-center items-center">
                                            <Image src="/adobe-ai.svg" alt="Figma" width={25} height={25} />
                                        </div>
                                        <div className="rounded-md bg-background p-1 flex justify-center items-center">
                                            <Image src="/adobe-ae.svg" alt="Figma" width={25} height={25} />
                                        </div>
                                        <div className="rounded-md bg-background p-1 flex justify-center items-center">
                                            <Image src="/canva-logo.svg" alt="Instagram" width={25} height={25} />
                                        </div>
                                        <div className="rounded-md bg-background p-1.5 flex justify-center items-center">
                                            <Image src="/instagram-logo.svg" alt="Twitter" width={20} height={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block absolute bottom-0 right-0">
                                <Image src="/figma-cursor.png" alt="Creator" width={300} height={300} className="w-full h-full object-cover max-w-36 max-h-36" />
                            </div>
                        </div>
                    </div>
                    {/* right side card*/}
                    <div className="bg-foreground flex flex-col md:w-[400px] p-3 rounded-md md:-rotate-3">
                        <div className="bg-secondary rounded-md md:p-5 p-6 flex flex-col justify-center gap-6  w-full h-full">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[20px] montserrat-extrabold leading-tight">I WANT TO BE GOOD AT</h4>
                                <p className="text-[16px] lora-medium text-foreground">Being a good teammate and leader, crafting unique and converting brand strategies and high-impact digital brands which delivers business growth.</p>
                            </div>
                            <div className="h-[2.5px] bg-foreground/80 w-full rounded-full"></div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[20px] montserrat-extrabold leading-tight">FAVOURITE PARTS OF THE WORK</span>
                                <p className="text-[16px] lora-medium text-foreground">Knowing there are many unknowns. It’s a blank canvas, and we’re about to collaboratively fill it up into a powerful brand with creative storytelling.</p>
                            </div>
                            <div className="h-[2.5px] bg-foreground/80 w-full rounded-full"></div>
                            <div className="flex flex-col gap-2">
                           <div className="flex items-center justify-between">
                           <span className="text-[20px] montserrat-extrabold leading-tight">Introvert</span>
                           <span className="text-[20px] montserrat-extrabold leading-tight">Extrovert</span>
                           </div>
                                <div className="flex gap-2 h-2 w-full bg-primary relative rounded-full my-4">
                                    <div className="w-8 h-8 border-8 border-foreground rounded-full bg-primary absolute top-1/2 -translate-y-1/2 left-[10%]"></div>
                                    <div className="w-8 h-8 border-8 border-foreground rounded-full bg-primary absolute top-1/2 -translate-y-1/2 right-[10%]"></div>
                                </div>
                                <p className="text-[16px] lora-medium text-foreground">I tend to go between these extremes. Short bursts of extrovertism, followed by a downtime to charge my batteries again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

