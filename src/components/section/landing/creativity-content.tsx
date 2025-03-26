import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";

export default function CreativityContent() {
    return (
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[960px] mx-auto relative">
                <div className="flex flex-col gap-16">
                    <div className="space-y-8">
                        <h2 className="text-[24px] md:text-[32px] font-bold text-foreground">
                            Creativity & Content
                        </h2>
                        <h3 className="text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] tracking-[-3%] font-semibold text-foreground">
                            High quality Content<br />
                            by our top creatives
                        </h3>
                    </div>

                    <div className="bg-background py-10 px-12 rounded-4xl overflow-y-hidden"
                        style={{
                            boxShadow: "2px 2px 20px 5px rgba(255, 255, 255, 0.5)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            background: "radial-gradient(circle at top, #930b7a 0%, #1d062d 100%)"
                        }}
                    >

                        <div className="flex gap-20 flex-col">
                            {/* logo */}
                            <div className="w-full flex gap-4 items-center justify-between">
                                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                            </div>

                            <div className="w-full h-full flex">
                                <div className="w-full h-[full flex flex-col gap-32 justify-between">
                                    <div className="flex flex-col gap-10 h-full">
                                        <div className="flex gap-4 items-center">
                                            <IoStarSharp className="h-6 w-6" />
                                            <p className="text-[24px] font-semibold">Storytelling That Connects</p></div>
                                        <div className="flex gap-4 items-center">
                                            <IoStarSharp className="h-6 w-6" />
                                            <p className="text-[24px] font-semibold">Unique Brand Identity</p></div>
                                        <div className="flex gap-4 items-center">
                                            <IoStarSharp className="h-6 w-6" />
                                            <p className="text-[24px] font-semibold">Brand Growth & Recognition</p></div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-[20px]">
                                        <Link href="/">Learn more with our expert team</Link>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-4 ">
                                    <div className="relative">
                                        <Image
                                            src="/creativity-content.png"
                                            alt="Marketing Team"
                                            width={500}
                                            height={400}
                                            className="rounded-lg h-[340px] w-fit overflow-hidden"
                                        />
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