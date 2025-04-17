import { client } from "@/lib/sanity";
import Image from "next/image";
import { allCategoriesQuery, allPostsQuery, leadingPostQuery } from "@/lib/queries";
import ClientPosts from "@/components/blog/client-posts";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import CTA from "@/components/section/landing/cta";

// Revalidate every hour
export const revalidate = 3600;

interface Author {
  name: string;
  image: any;
  role?: string;
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

async function getInitialData() {
  try {
    const [leadingPost, categories, posts] = await Promise.all([
      client.fetch<Post>(leadingPostQuery),
      client.fetch<Category[]>(allCategoriesQuery),
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
            image,
            role
          },
          "category": category->{
            title,
            description
          }
        }
      `)
    ]);

    return {
      leadingPost,
      categories: categories.filter(cat => cat.title !== "Leading"),
      posts
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      leadingPost: null,
      categories: [],
      posts: []
    };
  }
}

export default async function BlogPage() {
  const { leadingPost, categories, posts } = await getInitialData();

  return (
   <>
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

        <div className="flex flex-col max-w-[1080px] mx-auto pb-24">
          {/* Client-side Posts Grid with Category Filtering */}
          <ClientPosts categories={categories} initialPosts={posts} />
        </div>
      </div>
    </main>
      <CTA />
   </>
  );
} 