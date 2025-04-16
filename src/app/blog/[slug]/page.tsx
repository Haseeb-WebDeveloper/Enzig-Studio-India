import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { singlePostQuery } from "@/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, Bookmark, Calendar } from "lucide-react";

// Types
interface Author {
  name: string;
  image: any;
  role: string;
  bio: any[];
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  mainImage: any;
  publishedAt: string;
  updatedAt: string;
  content: any[];
  author: Author;
  category: {
    title: string;
    description: string;
  };
  faq: Array<{
    question: string;
    answer: any[];
  }>;
  relatedPosts: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: any;
  }>;
}

// Revalidate every hour
export const revalidate = 3600;

async function getPost(slug: string) {
  try {
    const post = await client.fetch<Post>(singlePostQuery, { slug });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  // const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

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
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
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
              <p className="text-sm text-secondary">{post.author.role}</p>
            </div>
          </div>
          {/* updated at */}
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2"><Calendar size={16} /> Updated on {new Date(post.updatedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</p>
          </div>

          {/* Post content */}
          <div className="prose prose-lg max-w-none text-wrap mb-12 overflow-x-hidden">
            <PortableText
              value={post.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="relative h-[400px] w-full my-8 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog post image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
              }}
            />
          </div>

          {/* FAQ section */}
          {post.faq && post.faq.length > 0 && (
            <div className="mb-12">
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
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              {post.author.image && (
                <div className="relative h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-bold text-sm">About the author</p>
                <p className="text-gray-700">{post.author.name}</p>
              </div>
            </div>
            {post.author.bio && (
              <div className="prose prose-sm">
                <PortableText value={post.author.bio} />
              </div>
            )}
          </div>

          {/* CTA box */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">Grow Your Business with the #1 Digital Marketing Agency!</h3>
            <p className="text-gray-700 mb-4">Transform your digital presence and compete to rank—the right way, every step.</p>
            <a href="/contact" className="bg-black text-white px-4 py-2 rounded inline-block font-medium hover:bg-gray-800">
              Talk to us →
            </a>
          </div>

          {/* Related posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Related Posts</h3>
              <div className="space-y-4">
                {post.relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Link
                    key={relatedPost._id}
                    href={`/blog/${relatedPost.slug.current}`}
                    className="group flex gap-3 items-center"
                  >
                    {relatedPost.mainImage && (
                      <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={urlFor(relatedPost.mainImage).url()}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h4 className="text-sm font-medium group-hover:text-blue-600">
                      {relatedPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}