import { client } from "@/lib/sanity";
import Image from "next/image";
import { allPostsQuery } from "@/lib/queries";
import PostCard from "@/components/blog/post-card";
import { PostCardProps } from "@/types/interface";

// Revalidate every hour
export const revalidate = 3600;

async function getPosts() {
  try {
    const posts = await client.fetch<PostCardProps[]>(allPostsQuery);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
   <main className="max-w-[1220px] mx-auto px-4 py-12">
     <div className="space-y-8">
      <div className="pb-12 relative">
      <div className="w-full h-full">
      <Image src="/blog/blog-hero.png" alt="Blog Hero" width={1000} height={1000} className="w-full h-full object-cover" />
      </div>
       <div>
        <div className="absolute bottom-0 left-12 p-8 border border-background/50 rounded-lg max-w-lg bg-foreground text-background">
        {/* category */}
          <span className="bg-secondary text-foreground text-[16px] lora-medium px-2.5 py-1.5 rounded-md">
            teachnology
          </span>
          {/* title */}
          <h3 className="mt-4  montserrat-sb-h3">
             The Impact of Technology on the Workplace: How Technology is Changing
          </h3>
          {/* auther */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image src="/blog/author.png" alt="Author" width={1000} height={1000} className="object-cover" />
            </div>
              <p className="lora-m-h4 text-background">Jason Francisco</p>
              <p className="lora-m-h4 text-background">August 20, 2022</p>
          </div>
        </div>
       </div>
      </div>

      <div className="max-w-[1080px] mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {posts.map((post) => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
      </div>
    </div>
   </main>
  );
} 