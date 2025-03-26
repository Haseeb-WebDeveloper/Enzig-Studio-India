import Hero from "@/components/section/landing/hero";
import Family from "@/components/section/landing/family";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      {/* <div className="relative min-h-screen h-full overflow-hidden">
        <div className="z-10 absolute top-0 right-0 w-full md:w-[50%] h-full bg-gradient-to-br from-background from-25% to-transparent"></div>
        <div className="z-10 absolute top-0 right-20 w-full md:w-1/2 h-full bg-gradient-to-r from-background to-transparent"></div>
        <div className="z-1 absolute top-0 right-0 w-full md:w-1/2 h-full">
          <Image src="/hero-gradient.png" alt="Hero Background" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
        <Navbar />
        <Hero />
      </div> */}
      <Family />
    </main>
  );
}
