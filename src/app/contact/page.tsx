'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';


const allServices = [
    {
        name: "Google Ads",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 0"
    },
    {
        name: "E-Commerce",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 0"
    },
    {
        name: "Website Development",
        className: "md:rotate-12 inline-block rounded-full px-[30px] py-[25px] bg-primary text-background backdrop-filter: blur(35px) text-backgroundbackdrop-filter: blur(primary/90ansition-all duration-300 hover:bg-primary/90"
    },
    {
        name: "Graphics & Video",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
    },
    {
        name: "Social Media Management",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 "
    },
    {
        name: "SEO",
        className: "z-10 inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
    },
    {
        name: "Content Creation",
        className: "z-[0] md:-rotate-6 nd:-mt-4 inline-block rounded-full px-[30px] py-[25px] bg-primary text-background backdrop-filter: blur(35px) text-backgroundbackdrop-filter: blur(primary/90ansition-all duration-300 hover:bg-primary/90"
    },
    {
        name: "Meta Ads",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10 "
    },
    {
        name: "Graphics Design",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
    },

    {
        name: "Analysis & ROI",
        className: "inline-block rounded-full px-[30px] py-[25px] bg-white/10 backdrop-filter: blur(35px) transition-all duration-300 hover:bg-white/10"
    },

    {
        name: "Branding & Logo",
        className: "z-[0] md:-rotate-6 inline-block rounded-full px-[30px] py-[25px] bg-primary text-background backdrop-filter: blur(35px) transition-all duration-300 hover:bg-primary/90"
    }
]


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus({
                loading: false,
                success: true,
                error: ''
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: error instanceof Error ? error.message : 'Failed to send message'
            });
        }
    };

    return (
        <main className="relative">
            {/* Hero Section with Form */}
            <section className="min-h-[90vh] 2xl:min-h-auto px-6 py-20 flex items-center">
                <div className="relative max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-12">
                    {/* Left Side - Curved Text and Tags */}
                    <div className=" flex flex-col justify-center">
                        <Image
                            src="/contact/lets-start.png"
                            alt="Contact Hero"
                            width={500}
                            height={500}
                            className="w-full" />

                        <div className='absolute top-[60%] left-[40%] hidden md:flex'>
                            <Image src="/contact/get-in-touch.png" alt='get in touch' width={500} height={500} className='w-40' />
                        </div>

                        {/* for small */}
                        <div className="mt-12 flex flex-wrap gap-2 md:hidden justify-center items-center">
                            {allServices.map((service, index) => (
                                <div key={index}>
                                    <div className={`${service.className}`}>
                                        <p className="montserrat-medium text-[16px] md:text-[20px] text-nowrap">{service.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* For large screen */}
                        <div className="hidden md:flex gap-4 md:justify-center md:items-center">
                            <div className="flex flex-col gap-1 md:justify-end md:items-end h-full">
                                {/* first 5 services */}
                                {allServices.slice(0, 5).map((service, index) => (
                                    <div key={index}>
                                        <div className={`${service.className}`}>
                                            <p className="font-medium text-sm md:text-base text-nowrap">{service.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-1 justify-start items-start">
                                {/* last 5 services */}
                                {allServices.slice(5, 10).map((service, index) => (
                                    <div key={index}>
                                        <div className={` ${service.className}`}>
                                            <p className="font-medium text-sm md:text-base text-nowrap">{service.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className=" text-background pl-5 pb-5 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/contact/mask-bg.png)' }}>
                        <form onSubmit={handleSubmit} className="space-y-6 rounded-b-lg rounded-t-lg bg-white">
                            <div className='space-y-6 p-10'>
                                <p className="lora-m-h1  text-end pl-8 pb-4"><span className='text-primary'>You can find us</span> writing a brand story or busy growing the brand to new heights.</p>
                                
                                {status.error && (
                                    <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
                                        {status.error}
                                    </div>
                                )}
                                
                                {status.success && (
                                    <div className="bg-green-50 text-green-500 p-3 rounded-md mb-4">
                                        Thank you for your message! We'll get back to you soon.
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="name" className="block montserrat-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full lora-blog-h2 border-b-[2px] border-background/50 focus:outline-none ring-0"
                                        required
                                        disabled={status.loading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block montserrat-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full lora-blog-h2 border-b-[2px] border-background/50 focus:outline-none ring-0"
                                        required
                                        disabled={status.loading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block montserrat-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full lora-blog-h2 border-b-[2px] border-background/50 focus:outline-none ring-0"
                                        required
                                        disabled={status.loading}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={status.loading}
                                className="cursor-pointer w-full lora-sb-h3 rounded-b-lg bg-primary text-foreground py-5 montserrat-bold text-lg hover:bg-primary/90 transition-colors flex justify-center items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status.loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <>
                                        <p>Let's Connect</p>
                                        <Image src="/arrow.png" alt='arrow right' width={400} height={400} className='w-fit h-6 font-bold' />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2034612372644!2d77.09244827536766!3d28.478632875677825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c11e1c1abb%3A0x9f5253b7ab2ea12d!2sEnzig%20Studio!5e0!3m2!1sen!2sin!4v1709791271135!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="py-20 px-6 bg-foreground text-background">
                <div className="max-w-[1200px] mx-auto">
                    <div className="w-full flex flex-col md:flex-row gap-12 items-center justify-between">
                        <div className=''>
                            <h2 className=" max-w-4xl montserrat-bold text-[40px] md:text-[56px] lg:text-[65px] leading-tight mb-6">
                                Get in touch with us. <br /> We're here to assist you.
                            </h2>
                        </div>
                        <div className="flex flex-row md:flex-col md:justify-end justify-start items-center w-full md:w-auto gap-4">
                            <Link href="https://www.instagram.com/studioenzig" target='_blank'>
                                <Image
                                    src="/social/instagram-primary.png"
                                    alt="Contact CTA"
                                    width={100}
                                    height={100}
                                    className="w-[40px] h-full"
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/company/enzig-studio" target='_blank'>
                                <Image
                                    src="/social/linkedin-primary.png"
                                    alt="Contact CTA"
                                    width={100}
                                    height={100}
                                    className="w-[40px] h-full"
                                />
                            </Link>
                            <Link href="https://www.facebook.com/share/1XmpS9Hidu/?mibextid=wwXIfr" target='_blank'>
                                <Image
                                    src="/social/facebook-primary.png"
                                    alt="Contact CTA"
                                    width={100}
                                    height={100}
                                    className="w-[40px] h-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 