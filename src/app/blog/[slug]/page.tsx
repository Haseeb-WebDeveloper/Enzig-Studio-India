"use client"

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { allPostsQuery, blogSidebarImageQuery, singlePostQuery } from "@/lib/queries";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, ChevronDown, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Post } from "@/types/interface";
import PostCard from "@/components/blog/post-card";
import SidebarRelatedPostCard from "@/components/blog/sidebar-related-post-card";
import RichText from "@/components/rich-text";
import Faq from "@/components/ui/faq";
import CTA from "@/components/section/landing/cta";

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [sidebarImage, setSidebarImage] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchPost();
    fetchSidebarImage();
  }, [params.slug]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const fetchPost = async () => {
    try {
      const post = await client.fetch(singlePostQuery, { slug: params.slug });
      if (!post) {
        return;
      }
      setPost(post);
      updateMeta(post);
    } catch (error) {
      console.error("Error fetching post:", error);
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

  const updateMeta = (post: Post) => {
    document.title = `${post.title} | Enzig Studio India`;
  };

  const handleShare = (platform: string) => {
    if (!post) return;

    const currentUrl = window.location.href;
    const text = `Check out this article: ${post.title}`;

    const shareUrls = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${currentUrl}`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      threads: `https://threads.net/intent/post?text=${encodeURIComponent(`${text} ${currentUrl}`)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-screen">
          <Loader2 size={32} className="animate-spin" />
        </div>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-sm py-3 border-b border-gray-100 raleway-medium text-[14px]">
          <Link href="/" className="">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/blog" className="">Blog</Link>
          <span className="text-gray-400">/</span>
          <span className="font-medium raleway-medium">{isMobile ? post.title.slice(0, 30) + '...' : post.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          <div className="lg:col-span-8 space-y-6">
            {/* Main image with category */}
            {post.mainImage && (
              <>
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-contain aspect-video"
                    priority
                  />
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <span className="montserrat-m-h2 bg-foreground text-background backdrop-blur-sm px-3 py-1 text-sm rounded">
                        {post.category.title}
                      </span>
                    </div>
                  )}
                </div>
                <h1 className="montserrat-sb-h3 mt-6">
                  {post.title}
                </h1>
              </>
            )}

            {/* Post metadata and author */}
            <div className="flex items-center py-3 px-4 gap-4 border border-background/[0.05] rounded-lg">
              {post.author.image && (
                <div className="relative h-12 w-12 rounded-[29%] overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="montserrat-m-h2">{post.author.name}</p>
                {post.author.role && (
                  <p className="lora-m-h4 text-secondary">{post.author.role}</p>
                )}
              </div>
            </div>

            {/* updated at */}
            <div>
              <p className="lora-m-h4 text-gray-500 flex items-center gap-2">
                <Calendar size={16} />
                {post.updatedAt ? (
                  <>Updated on {new Date(post.updatedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}</>
                ) : (
                  <>Published on {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}</>
                )}
              </p>
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none text-wrap mb-12 overflow-x-hidden prose-p:lora-blog-h1 prose-h2-montserrat-sb-h3">
              {post.content && (
                <RichText content={post.content} />
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
              <div className="bg-primary p-4 rounded-lg mb-6 md:mb-8 mt-6">
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
              <div className="bg-primary p-4 rounded-lg mb-6 md:mb-8 space-y-3">
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
              <div className="mb-6 md:mb-8">
                <h2 className="lora-medium text-[20px] leading-[28px] mb-3">The Latest</h2>
                <div className="gap-4">
                  {post.relatedPosts && post.relatedPosts.length > 0 && post.relatedPosts.map((relatedPost) => (
                    <SidebarRelatedPostCard post={relatedPost} key={relatedPost._id} redirectPage="blog" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-12 md:mt-2">
          {post.faq && <Faq faq={post.faq} />}
        </div>

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
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {post.relatedPosts.map((relatedPost) => (
                <PostCard post={relatedPost} key={relatedPost._id} />
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="py-12">
        <CTA />
      </div>
    </>
  );
}