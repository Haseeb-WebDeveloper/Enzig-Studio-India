"use client"

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { blogSidebarImageQuery, singlePostQuery } from "@/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Loader2 } from "lucide-react";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { Post } from "@/types/interface";
import PostCard from "@/components/blog/post-card";
import SidebarRelatedPostCard from "@/components/blog/sidebar-related-post-card";

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [sidebarImage, setSidebarImage] = useState<any>(null);

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 text-sm py-3 border-b border-gray-100">
        <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="text-gray-400">/</span>
        <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-medium">{post.title.slice(0, 100)}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-8 space-y-4">
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
                  <span className="bg-foreground text-background backdrop-blur-sm px-3 py-1 text-sm font-medium rounded">
                    {post.category.title}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
              </div>
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
              <p className="font-medium">{post.author.name}</p>
              {post.author.role && (
                <p className="text-sm text-secondary">{post.author.role}</p>
              )}
            </div>
          </div>
          {/* updated at */}
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
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
          <div className="prose prose-lg max-w-none text-wrap mb-12 overflow-x-hidden">
            {post.content && (
              <PortableText
                value={post.content}
                components={{
                  types: {
                    image: ({ value }) => (
                      <div className="relative border border-gray-200 min-h-fit h-full w-full my-8 rounded-lg overflow-hidden">
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
          <div className="bg-primary/80 p-4 rounded-lg mb-8">
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
                <p className="">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-sm ">{post.author.role}</p>
                )}
                {post.author.bio && (
                  <div className="prose prose-sm">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* social links */}
          <div className="bg-primary/80 p-4 rounded-lg mb-8 space-y-3">
          <p className="text-sm text-gray-500">Share with your community!</p>
         <div className="flex items-center gap-2">
         <Link href="https://wa.me/919625831925" target="_blank" className="">
                <Image src="/whatsapp-icon.png" alt="Whatsapp" width={100} height={100} className="w-[30px] h-[30px] cursor-pointer" />
              </Link>
          <Link href="https://wa.me/919625831925" target="_blank" className="">
                <Image src="/whatsapp-icon.png" alt="Whatsapp" width={100} height={100} className="w-[30px] h-[30px] cursor-pointer" />
              </Link>
          <Link href="https://wa.me/919625831925" target="_blank" className="">
                <Image src="/whatsapp-icon.png" alt="Whatsapp" width={100} height={100} className="w-[30px] h-[30px] cursor-pointer" />
              </Link>
          <Link href="https://wa.me/919625831925" target="_blank" className="">
                <Image src="/whatsapp-icon.png" alt="Whatsapp" width={100} height={100} className="w-[30px] h-[30px] cursor-pointer" />
              </Link>
         </div>
          </div>

            {/* related posts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3">The Latest</h2>
              <div className="gap-4">
                {post.relatedPosts && post.relatedPosts.length > 0 && post.relatedPosts.map((relatedPost) => (
                  <SidebarRelatedPostCard post={relatedPost} key={relatedPost._id} />
                ))}
              </div>
            </div>
        </div>
      </div>

        {/* FAQ section */}
        {post.faq && post.faq.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {post.faq.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  {item.question}
                </h3>
                <div className="prose">
                  <PortableText value={item.answer} />
                </div>
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