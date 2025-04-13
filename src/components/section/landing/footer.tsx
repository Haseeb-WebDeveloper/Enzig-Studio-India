import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[1200px] mx-auto bg-background p-6 pt-24 pb-6 md:pb-2">
      <div className="mx-auto flex flex-col md:flex-row gap-6 justify-between">
        {/* Left section with logo and contact */}
        <div className="w-full flex flex-col justify-between space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Image src="/logo-for-dark-bg.png" alt="Studio Logo" width={100} height={60} className="max-h-[92px] w-fit" />
          </div>

          {/* Work with us */}
          <div className="flex flex-col">
            <h4 className="montserrat-bold text-[20px] leading-[28px] mb-1">WORK WITH US</h4>
            <Link href="mailto:studioenzig@gmail.com" className="text-secondary text-[16px] montserrat-regular">Studioenzig@gmail.com</Link>
            <Link href="tel:+919625831925" className="text-[16px] montserrat-regular">+91 9625831925</Link>
          </div>
        </div>

        {/* Middle section with nav links */}
        <div className="w-full flex flex-col gap-[8px] justify-end bg-secondary py-5 px-7 text-foreground"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        >
          <Link href="#" className="text-end text-[20px] lora-medium leading-[28px]">About</Link>
          <Link href="#" className="text-end text-[20px] lora-medium leading-[28px]">Solutions</Link>
          <Link href="#" className="text-end text-[20px] lora-medium leading-[28px]">Portfolio</Link>
          <Link href="#" className="text-end text-[20px] lora-medium leading-[28px]">Our Studio</Link>
          <Link href="#" className="text-end text-[20px] lora-medium leading-[28px]">Blog</Link>
          <Link href="#" className="text-end text-[20px] lora-medium leading-[28px]">Resources</Link>
        </div>

        {/* Right section with social */}
        <div className="w-full flex flex-col gap-4 justify-between p-6 border border-secondary">
          <div className="flex justify-end items-center mb-4">
            <div className="bg-red-500 w-8 h-8 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 text-sm">
            <p className="montserrat-bold text-[20px] leading-[28px]">FOLLOW US ON</p>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
              <Link target="_blank" href="https://www.instagram.com/studioenzig" className="text-secondary hover:underline text-[16px] montserrat-regular">INSTAGRAM</Link>
              <span>/</span>
              <Link target="_blank" href="https://www.facebook.com/share/1XmpS9Hidu/?mibextid=wwXIfr" className="text-secondary hover:underline text-[16px] montserrat-regular">FACEBOOK</Link>
              <span>/</span>
              <Link target="_blank" href="https://x.com/enzigstudio?s=21" className="text-secondary hover:underline text-[16px] montserrat-regular">X</Link>
              <span>/</span>
              <Link target="_blank" href="https://www.linkedin.com/company/enzig-studio" className="text-secondary hover:underline text-[16px] montserrat-regular">LINKEDIN</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between mt-10 md:mt-12 text-sm ">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start space-y-4">
          <Link href="#" className="text-[16px] lora-regular">Privacy Policy</Link>
          <Link href="#" className="text-[16px] lora-regular">Terms of Use</Link>
          <Link href="#" className="text-[16px] lora-regular">Legal</Link>
          <Link href="#" className="text-[16px] lora-regular">Site Map</Link>
        </div>
        <div>
          <p className="mt-2 md:mt-0 text-center md:text-left text-[16px] lora-regular"><a href="/">Enzig Studio</a> © {currentYear}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}