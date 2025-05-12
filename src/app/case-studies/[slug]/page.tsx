"use client"

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { allPostsQuery, blogSidebarImageQuery, singleCaseStudyQuery, singlePostQuery } from "@/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, ChevronDown, Loader2 } from "lucide-react";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { CaseStudy, Post } from "@/types/interface";
import PostCard from "@/components/blog/post-card";
import SidebarRelatedPostCard from "@/components/blog/sidebar-related-post-card";
import RichText from "@/components/rich-text";
import Faq from "@/components/ui/faq";
import CTA from "@/components/section/landing/cta";


export default function CaseStudyPost() {
  const params = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [sidebarImage, setSidebarImage] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchPost();
    fetchSidebarImage();
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      const caseStudy = await client.fetch(singleCaseStudyQuery, { slug: params.slug });
      // console.log("caseStudy", caseStudy);
      if (!caseStudy) {
        // console.log("Post not found");
        return;
      }
      setCaseStudy(caseStudy);
      updateMeta(caseStudy);
    } catch (error) {
      console.error("Error fetching case study:", error);
    }
  };

  const fetchSidebarImage = async () => {
    try {
      const sidebarImageData = await client.fetch(blogSidebarImageQuery);
      if (sidebarImageData && sidebarImageData.imageUrl) {
        setSidebarImage(sidebarImageData.imageUrl);
      }
    } catch (error) {
      console.error("Error fetching sidebar image:", error);
    }
  };

  const updateMeta = (caseStudy: CaseStudy) => {
    document.title = `${caseStudy.title} | Enzig Studio India`;
  };

  const handleShare = (platform: string) => {
    if (!caseStudy) return;

    const currentUrl = window.location.href;
    const text = `Check out this article: ${caseStudy.title}`;

    const shareUrls = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${currentUrl}`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      threads: `https://threads.net/intent/post?text=${encodeURIComponent(`${text} ${currentUrl}`)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  if (!caseStudy) {
    return <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-screen">
          <Loader2 size={32} className="animate-spin" />
        </div>
      </div>
    </>;
  }

  // console.log("content", caseStudy.content);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null); // Close if already open
    } else {
      setOpenFaqIndex(index); // Open the clicked item
    }
  };

  return (
    <div className=" ">
      <div className="mt-4">
        {/* Top section with 2 columns */}
        <div className="max-w-[1100px]  px-6 md:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
          <div className="space-y-7">
            <div className="flex items-center justify-start">
              <Image src={urlFor(caseStudy.logo).url()} alt={caseStudy.title} width={300} height={300} className="object-contain max-h-[100px]" />
            </div>
            {caseStudy.firstDescription && (
              <div className="prose prose-lg max-w-none text-primary montserrat-semibold text-[20px] leading-[28px]">
                <p>{caseStudy.firstDescription}</p>
              </div>
            )}
            {caseStudy.secondDescription && (
              <div className="prose prose-lg max-w-none lora-blog-h3">
                <p>{caseStudy.secondDescription}</p>
              </div>
            )}
          </div>
          {caseStudy.mainImage && (
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={urlFor(caseStudy.mainImage).url()}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Stats section */}
        <div className="bg-primary text-background py-12 px-6 md:px-0">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.stats && caseStudy.stats.length > 0 && caseStudy.stats.map((stat, index) => (
              <div key={index} className={`flex items-center justify-center ${index < caseStudy.stats.length - 1 ? "md:border-r border-background pr-4" : ""}`}>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <p className="montserrat-sb-h3 text-secondary">{stat.value}</p>
                  <p className="lora-m-h1 text-background">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post content */}
        <div className="bg-foreground text-background py-12  px-6 md:px-0">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              {/* Post metadata and author */}
              <div className="flex items-center py-3 px-4 gap-4 border border-background/[0.05] rounded-lg">
                {caseStudy.author.image && (
                  <div className="relative h-12 w-12 rounded-[29%] overflow-hidden">
                    <Image
                      src={urlFor(caseStudy.author.image).url()}
                      alt={caseStudy.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="montserrat-m-h2">{caseStudy.author.name}</p>
                  {caseStudy.author.role && (
                    <p className="lora-m-h4 text-secondary">{caseStudy.author.role}</p>
                  )}
                </div>
              </div>
              {/* updated at */}
              <div>
                <p className="lora-m-h4 text-gray-500 flex items-center gap-2">
                  <Calendar size={16} />
                  {caseStudy.updatedAt ? (
                    <>Updated on {new Date(caseStudy.updatedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}</>
                  ) : (
                    <>Published on {new Date(caseStudy.publishedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}</>
                  )}
                </p>
              </div>

              {/* Post content */}
              <div className="prose prose-lg max-w-none text-wrap mb-12 overflow-x-hidden prose lora-blog-h1 prose-h2-montserrat-sb-h3 ">
                {caseStudy.content && (
                  <RichText content={caseStudy.content} />
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div>
                {sidebarImage && (
                  <Link href="/contact" className="w-full h-fit overflow-hidden mb-2">
                    <Image
                      src={urlFor(sidebarImage).url()}
                      alt="Blog sidebar image"
                      width={500}
                      height={500}
                      className="object-contain w-full h-full"
                    />
                  </Link>
                )}
                {/* author */}
                <div className="bg-primary p-4 rounded-lg mb-8 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-foreground flex items-center justify-center p-2 aspect-square">
                      <Image
                        src="/logo.png"
                        alt="Enzig Studio"
                        width={200}
                        height={200}
                        className="object-contain p-2 w-32 max-h-32"
                      />
                    </div>
                    <div>
                      <p className="montserrat-bold text-[20px] leading-[28px]">Akkshhat Khurania</p>
                      <p className="montserrat-m-h2">Founder & CEO</p>
                      <div className="lora-blog-h2">
                        <p>Dominate the Digital Space with the Best in the Business!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* social links */}
                <div className="bg-primary p-4 rounded-lg mb-8 space-y-3">
                  <p className="lora-b-h2 text-foreground">Share with your community!</p>
                  <div className="flex items-center gap-6 flex-wrap">
                    <button onClick={() => handleShare('whatsapp')} className="cursor-pointer">
                      <Image src="/social/whatsapp.png" alt="Share on WhatsApp" width={100} height={100} className="w-[25px] h-full" />
                    </button>
                    <button onClick={() => handleShare('facebook')} className="cursor-pointer">
                      <Image src="/social/faceook.png" alt="Share on Facebook" width={100} height={100} className="w-[25px] h-full" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="cursor-pointer">
                      <Image src="/social/x.png" alt="Share on Twitter" width={100} height={100} className="w-[25px] h-full" />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="cursor-pointer">
                      <Image src="/social/linkedin.png" alt="Share on LinkedIn" width={100} height={100} className="w-[25px] h-full" />
                    </button>
                    <button onClick={() => handleShare('threads')} className="cursor-pointer">
                      <Image src="/social/thread.png" alt="Share on Threads" width={100} height={100} className="w-[25px] h-full" />
                    </button>
                  </div>
                </div>

                {/* related posts */}
                <div className="mb-8">
                  <h2 className="lora-medium text-[20px] leading-[28px] mb-3">The Latest</h2>
                  <div className="gap-4">
                    {caseStudy.relatedPosts && caseStudy.relatedPosts.length > 0 && caseStudy.relatedPosts.map((relatedPost) => (
                      <SidebarRelatedPostCard post={relatedPost} key={relatedPost._id} redirectPage="case-studies" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ section */}
          <div className="max-w-[1200px] mx-auto py-12">
            <Faq faq={caseStudy.faq} />

            {/* social links */}
            <div className="bg-primary my-12 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="lora-b-h2 text-foreground flex items-center h-full">Like what you read? Share with a friend.</p>
              <div className="flex items-center gap-6 flex-wrap">
                <button onClick={() => handleShare('whatsapp')} className="cursor-pointer">
                  <Image src="/social/whatsapp.png" alt="Share on WhatsApp" width={100} height={100} className="w-[25px] h-full" />
                </button>
                <button onClick={() => handleShare('facebook')} className="cursor-pointer">
                  <Image src="/social/faceook.png" alt="Share on Facebook" width={100} height={100} className="w-[25px] h-full" />
                </button>
                <button onClick={() => handleShare('twitter')} className="cursor-pointer">
                  <Image src="/social/x.png" alt="Share on Twitter" width={100} height={100} className="w-[25px] h-full" />
                </button>
                <button onClick={() => handleShare('linkedin')} className="cursor-pointer">
                  <Image src="/social/linkedin.png" alt="Share on LinkedIn" width={100} height={100} className="w-[25px] h-full" />
                </button>
                <button onClick={() => handleShare('threads')} className="cursor-pointer">
                  <Image src="/social/thread.png" alt="Share on Threads" width={100} height={100} className="w-[25px] h-full" />
                </button>
              </div>
            </div>

            {/* Related Posts Section */}
            {caseStudy.relatedPosts && caseStudy.relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudy.relatedPosts.map((relatedPost) => (
                    <PostCard post={relatedPost} key={relatedPost._id} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <div className="py-12">
        <CTA />
      </div>
    </div>
  );
}