'use client';

import { client } from "@/lib/sanity";
import Image from "next/image";
import { allCategoriesQuery, leadingPostQuery } from "@/lib/queries";
import PostCard from "@/components/blog/post-card";
import { CategoryTabs } from "@/components/blog/category-tabs";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { useState, useEffect } from "react";

// Posts per page
const POSTS_PER_PAGE = 6;

interface Author {
  name: string;
  image: any;
}

interface Category {
  title: string;
  description: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  mainImage: any;
  publishedAt: string;
  author: Author;
  category: Category;
}

export default function BlogPage() {
  const [leadingPost, setLeadingPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    async function fetchInitialData() {
      try {
        const [leadingPostData, categoriesData, postsData] = await Promise.all([
          // Fetch leading post
          client.fetch<Post>(leadingPostQuery),
          // Fetch categories
          client.fetch<Category[]>(allCategoriesQuery),
          // Fetch all posts (excluding Leading category)
          client.fetch<Post[]>(`
            *[_type == "post" && category->title != "Leading"] | order(publishedAt desc) {
              _id,
              title,
              slug,
              description,
              mainImage,
              publishedAt,
              "author": author->{
                name,
                image
              },
              "category": category->{
                title,
                description
              }
            }
          `)
        ]);

        setLeadingPost(leadingPostData);
        setCategories(categoriesData);
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchInitialData();
  }, []);

  // Filter posts based on active category
  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter(post => post.category?.title.toLowerCase() === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  if (loading) {
    return (
      <main className="max-w-[1220px] mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Leading Post Skeleton */}
          <div className="pb-12 relative">
            <div className="w-full h-[500px] rounded-xl overflow-hidden bg-foreground/20 animate-pulse" />
            <div className="absolute bottom-0 left-12 p-8 border border-background/50 rounded-lg max-w-lg bg-foreground">
              <div className="w-24 h-6 bg-foreground/20 rounded-md animate-pulse" />
              <div className="mt-4 w-full h-8 bg-foreground/20 rounded-md animate-pulse" />
              <div className="flex items-center gap-4 pt-4 border-t border-border mt-4">
                <div className="h-10 w-10 rounded-full bg-foreground/20 animate-pulse" />
                <div className="w-24 h-6 bg-foreground/20 rounded-md animate-pulse" />
                <div className="w-32 h-6 bg-foreground/20 rounded-md animate-pulse" />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-[1080px] mx-auto">
            {/* Category Tabs Skeleton */}
            <div className="flex flex-wrap justify-start gap-6 border-b border-background/10 pt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-6 bg-foreground/20 rounded-md animate-pulse" />
              ))}
            </div>

            {/* Posts Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-foreground/70 rounded-lg overflow-hidden border border-black/[0.04] p-2 space-y-2">
                  <div className="h-48 w-full bg-foreground/20 rounded-[10px] animate-pulse" />
                  <div className="w-24 h-6 bg-foreground/20 rounded-full animate-pulse" />
                  <div className="w-full h-6 bg-foreground/20 rounded-md animate-pulse" />
                  <div className="w-32 h-6 bg-foreground/20 rounded-md animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[1220px] mx-auto px-4 py-12">
      <div className="space-y-12">
        {/* Leading Post - Always shown regardless of category */}
        {leadingPost && (
          <div className="pb-12 relative">
            <div className="w-full h-[500px] rounded-xl overflow-hidden">
              <Image
                src={urlFor(leadingPost.mainImage).url()}
                alt={leadingPost.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <Link href={`/blog/${leadingPost.slug.current}`}>
              <div className="absolute bottom-0 left-12 p-8 border border-background/50 rounded-lg max-w-lg bg-foreground text-background">
                {leadingPost.category && (
                  <span className="bg-secondary text-foreground text-[16px] lora-medium px-2.5 py-1.5 rounded-md">
                    {leadingPost.category.title}
                  </span>
                )}
                <h3 className="mt-4 montserrat-sb-h3">{leadingPost.title}</h3>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(leadingPost.author.image).url()}
                      alt={leadingPost.author.name}
                      width={1000}
                      height={1000}
                      className="object-cover"
                    />
                  </div>
                  <p className="lora-m-h4 text-background">
                    {leadingPost.author.name.slice(0, 12)}
                  </p>
                  <p className="lora-m-h4 text-background">
                    {new Date(leadingPost.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

       <div className="flex flex-col max-w-[1080px] mx-auto">
         {/* Category Tabs */}
         <CategoryTabs 
          categories={categories} 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Posts Grid - Changes based on category selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredPosts.map((post) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
       </div>
      </div>
    </main>
  );
} 