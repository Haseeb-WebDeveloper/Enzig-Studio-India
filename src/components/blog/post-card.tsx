import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";


export default function PostCard({ post, redirectPage }: any) {
    return (
        <>
            <Link
                key={post._id}
                href={`/${redirectPage}/${post.slug.current}`}
                className="group h-full"
            >
                <article className="bg-[#F8F8F8] rounded-lg overflow-hidden border border-black/[0.04] transition-all duration-300 flex flex-col p-2 gap-2">
                    {post.mainImage && (
                        <div className="h-48 w-full overflow-hidden rounded-[10px]">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                width={1000}
                                height={1000}
                                className="rounded-[10px] transition-transform duration-300"
                            />
                        </div>
                    )}
                    {post.category && (
                        <span className="text-sm lora-regular text-[16px] px-2 py-1 rounded-full bg-white inline-flex w-fit items-center gap-2 text-secondary">
                            <p className="bg-secondary p-2 rounded-full">
                            </p>
                                {post.category.title}
                        </span>
                    )}
                    <h2 className="text-xl font-semibold montserrat-m-h2 line-clamp-2">
                        {post.title}
                    </h2>
                    {/* <p className="text-background line-clamp-3 montserrat-m-h4">
                        {post.description}
                    </p> */}
                    <p className="text-background lora-regular text-[16px]">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>
                </article>
            </Link>
        </>
    );
}
