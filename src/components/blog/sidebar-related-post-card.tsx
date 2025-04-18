import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function SidebarRelatedPostCard({ post }: any) {
    return (
        <>
            <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block mb-4"
            >
                <article className="relative">
                    {post.mainImage && (
                        <div className="h-32 w-full relative overflow-hidden">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-3 w-full">
                                <h2 className="text-white montserrat-m-h2 line-clamp-2 mb-1">
                                    {post.title}
                                </h2>
                                <p className="text-white/90 text-sm lora-regular">
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    )}
                </article>
            </Link>
        </>
    );
}
