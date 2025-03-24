"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Solutions",
        href: "#",
        dropdown: [
            { name: "Web Development", href: "/solutions/web-development" },
            { name: "Digital Marketing", href: "/solutions/digital-marketing" },
            { name: "Branding", href: "/solutions/branding" },
        ],
    },
    {
        name: "Our Work",
        href: "#",
        dropdown: [
            { name: "Case Studies", href: "/work/case-studies" },
            { name: "Portfolio", href: "/work/portfolio" },
        ],
    },
    { name: "Blog", href: "/blog" },
    {
        name: "Resources",
        href: "#",
        dropdown: [
            { name: "Guides", href: "/resources/guides" },
            { name: "Templates", href: "/resources/templates" },
            { name: "Tools", href: "/resources/tools" },
        ],
    },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    const toggleDropdown = (name: string | null) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
            <div className="max-w-7xl mx-auto px-4">
                <nav 
                    className={`${scrolled ? "bg-foreground/90" : "bg-foreground"} backdrop-blur-lg rounded-full px-4 md:px-8 transition-all duration-300`} 
                    aria-label="Global"
                >
                    <div className="flex items-center justify-between py-3">
                        {/* Logo */}
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <Image
                                    src="/logo.png"
                                    alt="Enzig Studio"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-background"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Toggle menu</span>
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6 text-background" aria-hidden="true" />
                                ) : (
                                    <Menu className="h-6 w-6 text-background" aria-hidden="true" />
                                )}
                            </button>
                        </div>

                        {/* Desktop navigation */}
                        <div className="hidden lg:flex lg:gap-x-8">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center gap-1 text-sm text-background font-medium leading-6 cursor-pointer"
                                            >
                                                {item.name}
                                                <ChevronDown 
                                                    className={`h-4 w-4 text-background transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                                                    aria-hidden="true" 
                                                />
                                            </button>
                                            
                                            {/* Dropdown menu */}
                                            <div 
                                                className={`absolute left-0 top-full mt-2 w-48 rounded-md bg-background py-2 shadow-lg ring-1 ring-border transition-all duration-200 origin-top-left 
                                                ${activeDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-sm text-background font-medium leading-6 cursor-pointer"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link
                                href="/contact"
                                className="rounded-md bg-[#B0CF2E] px-6 py-3 text-sm font-medium text-background shadow-sm hover:bg-primary/90 transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile menu - Full Screen */}
            <div className={`lg:hidden fixed inset-0 bg-foreground z-50 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full overflow-auto px-6 py-8">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src="/logo.png"
                                alt="Enzig Studio"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            className="rounded-md p-2 text-background"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6 text-background" aria-hidden="true" />
                        </button>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <div className="flex-1 flex flex-col">
                        <div className="space-y-4 py-6 mb-auto">
                            {navigation.map((item) => (
                                <div key={item.name} className="border-b border-background/10 pb-4 last:border-b-0">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex w-full items-center justify-between py-2 text-xl font-medium text-background"
                                            >
                                                {item.name}
                                                <ChevronDown 
                                                    className={`h-5 w-5 text-background transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                                                    aria-hidden="true" 
                                                />
                                            </button>
                                            <div 
                                                className={`mt-2 space-y-1 pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block py-2 text-lg font-normal text-background/80 hover:text-background"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block py-2 text-xl font-medium text-background"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        {/* Mobile CTA */}
                        <div className="mt-6 py-6">
                            <Link
                                href="/contact"
                                className="block w-full rounded-md bg-[#B0CF2E] px-6 py-4 text-center text-base font-medium text-background shadow-sm hover:bg-primary/90 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}