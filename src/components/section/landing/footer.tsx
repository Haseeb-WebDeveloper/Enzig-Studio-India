import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="max-w-[1200px] mx-auto bg-background p-4 pt-24 pb-6 md:pb-2">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
        {/* Left section with logo and contact */}
        <div className="flex flex-col justify-between space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Image src="/logo-for-dark-bg.png" alt="Studio Logo" width={100} height={60} />
          </div>
          
          {/* Work with us */}
          <div className="flex flex-col">
            <h4 className="font-medium mb-1 text-lg">WORK WITH US</h4>
            <Link href="mailto:studio42o@gmail.com" className="text-purple-500 text-base">STUDIO42O@GMAIL.COM</Link>
            <Link href="tel:+919696969195" className="text-base">+91 9696969195</Link>
          </div>
        </div>

        {/* Middle section with nav links */}
        <div 
          className="flex flex-col gap-2 justify-end bg-purple-600 py-6 px-8 text-foreground" 
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        >
          <p className="text-end  text-lg">About</p>
          <p className="text-end  text-lg">Solutions</p>
          <p className="text-end  text-lg">Portfolio</p>
          <p className="text-end  text-lg">Our Studio</p>
          <p className="text-end  text-lg">Blog</p>
          <p className="text-end  text-lg">Resources</p>
        </div>

        {/* Right section with social */}
        <div className="flex flex-col gap-4 justify-between p-6 border border-purple-600">
          <div className="flex justify-end items-center mb-4">
            <div className="bg-red-500 w-8 h-8 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 text-sm">
            <p className="font-medium text-lg">FOLLOW US ON</p>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-purple-500 hover:underline text-base">INSTAGRAM</Link>
              <span>/</span>
              <Link href="#" className="text-purple-500 hover:underline text-base">FACEBOOK</Link>
              <span>/</span>
              <Link href="#" className="text-purple-500 hover:underline text-base">X</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between mt-10 md:mt-12 text-sm ">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start space-y-4">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Use</Link>
          <Link href="#" className="hover:text-white">Legal</Link>
          <Link href="#" className="hover:text-white">Site Map</Link>
        </div>
        <div>
          <p className="mt-2 md:mt-0 text-center md:text-left">Emoji Studio © {currentYear}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}