"use client"

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { allPostsQuery, blogSidebarImageQuery, singlePostQuery } from "@/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, ChevronDown, Loader2 } from "lucide-react";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { Post } from "@/types/interface";
import PostCard from "@/components/blog/post-card";
import SidebarRelatedPostCard from "@/components/blog/sidebar-related-post-card";


export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [sidebarImage, setSidebarImage] = useState<any>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchPost();
    fetchSidebarImage();
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      const post = await client.fetch(singlePostQuery, { slug: params.slug });
      console.log("post", post);
      if (!post) {
        console.log("Post not found");
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

  if (!post) {
    return <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-screen">
          <Loader2 size={32} className="animate-spin" />
        </div>
      </div>
    </>;
  }


  console.log("content", post.content);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null); // Close if already open
    } else {
      setOpenFaqIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 text-sm py-3 border-b border-gray-100
raleway-medium text-[14px]">
        <Link href="/" className="">Home</Link>
        <span className="text-gray-400">/</span>
        <Link href="/blog" className=" ">Blog</Link>
        <span className="text-gray-400">/</span>
        <span className=" font-medium raleway-medium">{post.title.slice(0, 100)}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-8 space-y-6">
          {/* Main image with overlaid category and title */}
          {post.mainImage && (
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              {post.category && (
                <div className="absolute top-4 left-4">
                  <span className="montserrat-m-h2 bg-foreground text-background backdrop-blur-sm px-3 py-1 text-sm rounded">
                    {post.category.title}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h1 className="text-white drop-shadow-xl  montserrat-sb-h3">
                  {post.title}
                </h1>
              </div>
              {/* overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-[1%] to-transparent"></div> */}
            </div>
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
          <div className="prose prose-lg max-w-none text-wrap mb-12 overflow-x-hidden prose-p:lora-blog-h1 prose-h2-montserrat-sb-h3 ">
            {post.content && (
              <PortableText
                value={post.content}
                components={{
                  types: {
                    image: ({ value }) => (
                      <div className="relative border border-gray-200 min-h-fit h-full w-full mb-8 rounded-lg overflow-hidden">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || "Blog post image"}
                          width={500}
                          height={500}
                          className="object-contain h-full w-full"
                        />
                      </div>
                    ),
                  },
                }}
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-12">
            {sidebarImage && (
              <div className="w-full h-fit overflow-hidden mb-2">
                <Image
                  src={urlFor(sidebarImage).url()}
                  alt="Blog sidebar image"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
            )}
            {/* author */}
            <div className="bg-primary p-4 rounded-lg mb-8">
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="relative h-14 w-14 rounded-[20%] overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="montserrat-semibold text-[20px] leading-[28px]">{post.author.name}</p>
                  {post.author.role && (
                    <p className="montserrat-m-h2">{post.author.role}</p>
                  )}
                  {post.author.bio && (
                    <div className="prose prose-p:lora-blog-h1">
                      <PortableText value={post.author.bio} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* social links */}
            <div className="bg-primary p-4 rounded-lg mb-8 space-y-3">
              <p className="lora-b-h2 text-foreground">Share with your community!</p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link href="https://wa.me/919625831925" target="_blank" className="">
                  <Image src="/social/whatsapp.png" alt="Whatsapp" width={100} height={100} className="w-[25px] h-full cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com/share/1XmpS9Hidu/?mibextid=wwXIfr" target="_blank" className="">
                  <Image src="/social/faceook.png" alt="Facebook" width={100} height={100} className="w-[25px] h-full cursor-pointer" />
                </Link>
                <Link href="https://x.com/enzigstudio?s=21" target="_blank" className="">
                  <Image src="/social/x.png" alt="Whatsapp" width={100} height={100} className="w-[25px] h-full cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/company/enzig-studio" target="_blank" className="">
                  <Image src="/social/linkedin.png" alt="Whatsapp" width={100} height={100} className="w-[25px] h-full cursor-pointer" />
                </Link>
                <Link href="https://wa.me/919625831925" target="_blank" className="">
                  <Image src="/social/thread.png" alt="Whatsapp" width={100} height={100} className="w-[25px] h-full cursor-pointer" />
                </Link>
              </div>
            </div>

            {/* related posts */}
            <div className="mb-8">
              <h2 className="lora-medium text-[20px] leading-[28px] mb-3">The Latest</h2>
              <div className="gap-4">
                {post.relatedPosts && post.relatedPosts.length > 0 && post.relatedPosts.map((relatedPost) => (
                  <SidebarRelatedPostCard post={relatedPost} key={relatedPost._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      {/* FAQ section */}
      {post.faq && post.faq.length > 0 && (
        <div className="mt-16">
          <h2 className="montserrat-sb-h3  mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {post.faq.map((item, index) => (
              <div key={index} className="border border-background/[0.05] rounded-lg overflow-hidden">
                <button
                  className={`cursor-pointer w-full text-left flex justify-between items-center px-4 py-4 ${openFaqIndex === index
                      ? "bg-purple-50 text-purple-600"
                      : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="space-y-2 w-full">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="montserrat-m-h2">{item.question}</h3>
                      <p className="text-xl font-medium">
                        {openFaqIndex === index ? "−" : "+"}
                      </p>
                    </div>
                    {openFaqIndex === index && (
                      <div className="prose text-background prose-p:lora-blog-h1">
                        <PortableText value={item.answer} />
                      </div>
                    )}
                  </div>
                </button>

              </div>
            ))}
          </div>
        </div>
      )}

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
  );
}