"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Menu, 
  X,
  BarChart2,
  Users,
  Briefcase,
  Rocket,
  Package,
  Palette,
  Hash,
  PenTool,
  Code,
  Search,
  Images,
  FileText,
  MessageSquare,
  BookOpen,
  FileSpreadsheet,
  Download,
  Zap,
  Target,
  TrendingUp,
  Layers,
  Edit3,
  Monitor,
  Globe,
  Database,
  Heart,
  Award,
  ThumbsUp
} from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "#",
        dropdown: [
            { name: "About Us", description: "What we actually do.", href: "/about-us", icon: Target },
            { name: "Our Team", description: "Our accomplished team!", href: "/our-team", icon: Users },
            { name: "Careers", description: "Are you a problem solver?", href: "/careers", icon: Briefcase },
        ],
    },
    {
        name: "Solutions",
        href: "#",
        dropdown: [
            { name: "Strategy And Analysis", description: "Data-driven insights for growth.", href: "/solutions/strategy-analysis", icon: TrendingUp },
            { name: "Marketing", description: "Google Ads, Meta Ads", href: "/solutions/marketing", icon: Zap },
            { name: "Packaging And Printing", description: "Designs that sell impact.", href: "/solutions/packaging-printing", icon: Package },
            { name: "Logo And Branding", description: "Identity that stands out.", href: "/solutions/branding", icon: Palette },
            { name: "Social Media Management", description: "Engage. Grow. Dominate.", href: "/solutions/social-media", icon: Hash },
            { name: "Content Creation", description: "Stories that captivate audiences.", href: "/solutions/content-creation", icon: Edit3 },
            { name: "Website And App Development", description: "Crafting seamless digital experiences.", href: "/solutions/web-dev", icon: Monitor },
            { name: "Search Engine Optimization (SEO)", description: "Rank higher, grow faster.", href: "/solutions/seo", icon: Globe },
        ],
    },
    {
        name: "Our Work",
        href: "#",
        dropdown: [
            { name: "Portfolio", description: "Creativity at its best", href: "/work/portfolio", icon: Layers },
            { name: "Case Studies", description: "Real growth stories", href: "/work/case-studies", icon: FileText },
            // { name: "Testimonials", description: "Who believe in us", href: "/work/testimonials", icon: ThumbsUp },
        ],
    },
    { name: "Blog", href: "/blog" },
    {
        name: "Resources",
        href: "#",
        dropdown: [
            { name: "Our Creative Space", description: "Real growth stories.", href: "/resources/creative-space", icon: Heart },
            { name: "Templates", description: "Creativity at its best", href: "/resources/templates", icon: FileSpreadsheet },
            { name: "E-books", description: "Real growth stories.", href: "/resources/ebooks", icon: BookOpen },
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
    
        // Function to calculate dynamic grid layout
        const calculateGridLayout = (items: number) => {
            if (items <= 4) {
                return "grid-cols-1";
            } else if (items <= 8) {
                return "grid-cols-2";
            }
            return "grid-cols-2";
        };
    
        // Function to calculate grid rows
        const calculateGridRows = (items: number) => {
            if (items <= 4) {
                return `grid-rows-${items}`;
            }
            return "grid-rows-4";
    };

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "pt-4" : "pt-4"}`}>
            <div className="max-w-[1200px] px-6 md:px-8 mx-auto">
                <nav 
                    className={`${scrolled ? "bg-foreground" : "bg-foreground"}  px-[32px] md:px-[60px] py-[16px] backdrop-blur-lg rounded-full  transition-all duration-300`} 
                    aria-label="Global"
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5 inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Enzig Studio"
                                    width={400}
                                    height={200}
                                    className="h-10 w-auto"
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

                        <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className="flex items-center gap-1 text-[16px] lora-medium text-background leading-6 cursor-pointer"
                                        >
                                            {item.name}
                                            <ChevronDown 
                                                className={`h-4 w-4 text-background transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                                                aria-hidden="true" 
                                            />
                                        </button>
                                        
                                        {/* Dynamic Dropdown Menu Style */}
                                        <div 
                                            className={`absolute left-1/2 -translate-x-1/2 top-10 mt-4 w-full ${
                                                item.dropdown.length > 4 ? 'min-w-[720px]' : 'min-w-[320px]'
                                            } rounded-2xl bg-foreground text-background p-8 shadow-2xl ring-1 ring-border transition-all duration-300 origin-top-left 
                                            ${activeDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                        >
                                            <div className="relative">
                                                <div 
                                                    className={`grid ${item.dropdown.length > 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-6 max-h-[320px] w-full overflow-auto relative`}
                                                >
                                                    {item.dropdown.map((subItem, index) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="group w-full flex items-center gap-3 rounded-lg"
                                                        >
                                                            <span className="text-xl text-secondary">
                                                                <subItem.icon className="w-8 h-8" />
                                                            </span>
                                                            <div className="flex flex-col min-w-[200px]">
                                                                <span className="text-[16px] text-secondary inter-medium">
                                                                    {subItem.name}
                                                                </span>
                                                                <span className="text-[14px] text-background/80">
                                                                    {subItem.description}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                    {/* Add divider for two-column layout */}
                                                    {item.dropdown.length > 4 && (
                                                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-[20px] w-[1px] bg-background/40" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                            className="text-[16px] text-background lora-medium  cursor-pointer"
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
                                className="rounded-md bg-primary py-[8px] px-[16px] text-[16px] lora-medium text-background hover:bg-primary/90 transition-colors duration-200"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile menu - Full Screen */}
            <div className={`lg:hidden fixed inset-0 bg-foreground z-50 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-[100dvh] overflow-auto px-6 pt-4">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-4 px-6 py-4 bg-primary rounded-full">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src="/logo.png"
                                alt="Enzig Studio"
                                width={300}
                                height={100}
                                className="h-10 w-auto"
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
                        <div className="space-y-6 py-6 mb-auto">
                            {navigation.map((item) => (
                                <div key={item.name} className="border-b border-background/10 last:border-b-0">
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
                                                className={`mt-2 space-y-2 pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block py-2 text-base font-normal"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xl text-secondary">
                                                                <subItem.icon className="w-5 h-5" />
                                                            </span>
                                                            <div className="flex flex-col">
                                                                <span className="text-secondary">{subItem.name}</span>
                                                                <span className="text-sm text-background/60">{subItem.description}</span>
                                                            </div>
                                                        </div>
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
                                className="block w-full text-center text-base font-medium shadow-sm rounded-md bg-primary py-[16px] px-[16px] text-[16px] lora-medium text-background hover:bg-primary/90 transition-colors duration-200"
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