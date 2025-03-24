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

    const cardCol3row1Brands = [
        {
            name: "loops",
            logo: "https://assets.rapidui.dev/brands/loops.svg",
            width: 100,
            height: 100,
        },
        {
            name: "pwc",
            logo: "https://assets.rapidui.dev/brands/pwc.svg",
            width: 100,
            height: 100,
        },
        {
            name: "resend",
            logo: "https://assets.rapidui.dev/brands/resend.svg",
            width: 100,
            height: 100,
        },
        {
            name: "udio",
            logo: "https://assets.rapidui.dev/brands/udio.svg",
            width: 100,
            height: 100,
        },
        {
            name: "krea",
            logo: "https://assets.rapidui.dev/brands/krea.svg",
            width: 100,
            height: 100,
        },
        {
            name: "gopuff",
            logo: "https://assets.rapidui.dev/brands/gopuff.svg",
            width: 100,
            height: 100,
        },
    ];

    const demoData = {
        heading: "Trusted by these companies",
        logos: [
            {
                id: "logo-1",
                description: "Astro",
                image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
                className: "h-7 w-auto",
            },
            {
                id: "logo-2",
                description: "Figma",
                image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
                className: "h-7 w-auto",
            },
            {
                id: "logo-3",
                description: "Next.js",
                image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
                className: "h-7 w-auto",
            },
            {
                id: "logo-4",
                description: "React",
                image: "https://www.shadcnblocks.com/images/block/logos/react.png",
                className: "h-7 w-auto",
            },
            {
                id: "logo-5",
                description: "shadcn/ui",
                image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
                className: "h-7 w-auto",
            },
            {
                id: "logo-6",
                description: "Supabase",
                image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
                className: "h-7 w-auto",
            },
            {
                id: "logo-7",
                description: "Tailwind CSS",
                image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
                className: "h-4 w-auto",
            },
            {
                id: "logo-8",
                description: "Vercel",
                image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
                className: "h-7 w-auto",
            },
        ],
    };


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
                    <div className="row-span-2 col-start-1 row-start-2 rounded-2xl p-6 bg-primary text-black h-auto">
                        <div className="text-2xl font-bold mb-2">Our Mission</div>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    {/* 1th row 2nd column*/}
                    <div className="col-start-2 row-start-2 rounded-2xl p-6 bg-primary text-black flex justify-center items-center h-auto">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    {/* 1th row 2nd column*/}
                    <div className="col-span-2 col-start-2 row-start-3 rounded-2xl p-6 bg-primary text-black h-auto">
                        <div className="text-2xl font-bold mb-2">Our Values</div>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    {/* 1th row 3rd column*/}
                    <div className="row-span-2 col-start-3 row-start-1 rounded-2xl py-4 bg-foreground text-background h-full flex flex-col justify-between overflow-hidden relative">
                        <div className="px-4">
                            <span className="text-6xl font-bold">Brands that believe in growth trust us.</span>
                        </div>
                        {/* <div className="flex flex-wrap">
                            {cardCol3row1Brands.map((brand, index) => (
                                <Image
                                    key={index}
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={brand.width}
                                    height={brand.height}
                                    className="object-contain w-16 h-full"
                                />
                            ))}
                        </div> */}
                        <div className="">
                            <Logos3 {...demoData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}