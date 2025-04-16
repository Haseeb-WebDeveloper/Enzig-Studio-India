import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { singlePostQuery } from "@/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

// Types
interface Author {
  name: string;
  image: any;
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

  return (
    <article className="max-w-4xl mx-auto">
      <div className="space-y-4 text-center">
        {post.category && (
          <span className="text-secondary montserrat-medium">
            {post.category.title}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold montserrat-bold">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground montserrat-regular max-w-2xl mx-auto">
          {post.description}
        </p>
      </div>

      <div className="flex items-center gap-4 justify-center mt-8">
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
          <p className="font-medium montserrat-semibold">{post.author.name}</p>
          <p className="text-sm text-muted-foreground montserrat-regular">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {post.mainImage && (
        <div className="relative h-[400px] md:h-[500px] w-full mt-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
        <PortableText
          value={post.content}
          components={{
            types: {
              image: ({ value }) => (
                <div className="relative h-[400px] w-full my-8 rounded-xl overflow-hidden">
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

      {post.faq && post.faq.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold montserrat-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {post.faq.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold montserrat-semibold">
                  {item.question}
                </h3>
                <div className="prose dark:prose-invert">
                  <PortableText value={item.answer} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold montserrat-bold mb-8">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <a
                key={relatedPost._id}
                href={`/blog/${relatedPost.slug.current}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden border border-border">
                  {relatedPost.mainImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={urlFor(relatedPost.mainImage).url()}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold montserrat-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
} 