import { Logos3 } from "@/components/logos3";
import Image from "next/image";

export default function Family() {

    const card1pics = [
        {
            src: "/avatar/avatar-1.png",
            alt: "family",
            width: 200,
            height: 200,
            className: "absolute top-2 left-8 w-auto h-32"
        },
        {
            src: "/avatar/avatar-2.png",
            alt: "family",
            width: 100,
            height: 100,
            className: "absolute top-8 right-8 w-auto h-32"
        },
        {
            src: "/avatar/avatar-3.png",
            alt: "family",
            width: 100,
            height: 100,
            className: " absolute top-2 left-1/2 -translate-x-1/2 w-auto h-32"
        }
    ]


    return (
        <section className="bg-background  py-[15vh] md:py-[20vh]">
            <div className="max-w-4xl mx-auto h-full px-6 z-20">
                <div className="grid grid-cols-[40%_20%_40%] grid-rows-[38%_24%_38%] relative gap-4">

                    {/* 1st row */}
                    <div className="col-span-2 relative rounded-2xl px-6 py-4 flex flex-col justify-end bg-primary text-black h-full w-full">
                        <div className="flex flex-col justify-end h-full">
                            <div className="min-h-[250px] overflow-hidden">
                                {card1pics.map((pic, index) => (
                                    <Image
                                        key={index}
                                        src={pic.src}
                                        alt={pic.alt}
                                        width={500}
                                        height={500}
                                        className={pic.className}
                                    />
                                ))}
                            </div>

                            <p className="text-5xl font-bold">Happy clients <br /> Family style.</p>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="row-span-2 col-start-1 row-start-2 rounded-2xl p-6 bg-foreground h-auto">
                        <div className="text-6xl font-bold bg-gradient-to-r from-[#E018FA] to-[#B0CF2E] bg-clip-text text-transparent">Clear Pricing. Real Results. Always.</div>
                    </div>

                    {/* 2nd row 2nd column*/}
                    <div className="col-start-2 row-start-2 rounded-2xl p-6 bg-foreground text-black flex justify-center items-center h-auto">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="object-contain w-full h-full"
                        />
                    </div>

                    {/* 1th row 2nd column*/}
                    <div className="col-span-2 col-start-2 row-start-3 grid grid-cols-2 justify-center items-center rounded-2xl p-6 bg-[#E018FA] text-white h-auto">
                        <div className="w-full h-full">
                            <Image alt="s" src="/family-last-card-pic.png" width={200} height={200} className=""></Image>
                        </div>
                        <div className="text-[1.9vw] flex items-center font-bold  h-full w-full">From strategy to design, design to market and market to results—driving ROI every step.</div>
                    </div>

                    {/* 1th row 3rd column*/}
                    <div className="row-span-2 col-start-3 row-start-1 rounded-2xl py-4 bg-foreground text-background h-auto flex flex-col justify-between gap-8 overflow-hidden relative">
                        <div className="px-6 bg-gradient-to-r from-[#E018FA] to-[#B0CF2E] bg-clip-text text-transparent">
                            <span className="text-6xl font-bold ">Brands that believe in growth trust us.</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {/* <Logos3 /> */}
                            <Logos3 />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}