import { client } from "@/lib/sanity";
import Image from "next/image";
import { allCaseStudiesCategoryQuery, blogCtaImageQuery, blogSidebarImageQuery, featuredCaseStudiesQuery } from "@/lib/queries";
import ClientPosts from "@/components/blog/client-posts";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import CTA from "@/components/section/landing/cta";

// Revalidate every hour
// export const revalidate = 3600;

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
    const [featuredCaseStudies, categories, posts] = await Promise.all([
      client.fetch<Post>(featuredCaseStudiesQuery),
      client.fetch<Category[]>(allCaseStudiesCategoryQuery),
      client.fetch<Post[]>(`
        *[_type == "caseStudies" && category->title != "featured"] | order(publishedAt desc) {
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
          }
        }
      `)
    ]);

    return {
      featuredCaseStudies,
      categories: categories.filter(cat => cat.title !== "Featured" && cat.title !== "featured"),
      posts
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      featuredCaseStudies: null,
      categories: [],
      posts: []
    };
  }
}


export default async function CaseStudiesPage() {
  const { featuredCaseStudies, categories, posts } = await getInitialData();
  const blogCTAImage = await client.fetch(blogCtaImageQuery);

  return (
    <>
      <main className="max-w-[1220px] mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Leading Post - Always shown regardless of category */}
          {featuredCaseStudies && (
            <div className="pb-12 relative">
              <div className="w-full h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={urlFor(featuredCaseStudies.mainImage).url()}
                  alt={featuredCaseStudies.title}
                  width={1000}
                  height={1000}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <Link href={`/case-studies/${featuredCaseStudies.slug.current}`}>
                <div className="absolute bottom-0 left-4 md:left-12 p-6 md:p-8 border border-background/50 rounded-lg max-w-lg bg-foreground text-background">
                  {featuredCaseStudies.category && (
                    <span className="bg-secondary text-foreground text-[14px] md:text-[16px] lora-medium px-2.5 py-1.5 rounded-md">
                      {featuredCaseStudies.category.title}
                    </span>
                  )}
                  <h3 className="mt-4 montserrat-sb-h3">{featuredCaseStudies.title}</h3>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(featuredCaseStudies.author.image).url()}
                        alt={featuredCaseStudies.author.name}
                        width={1000}
                        height={1000}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                      <p className="lora-m-h4 text-background">
                        {featuredCaseStudies.author.name.slice(0, 12)}
                      </p>
                      <p className="lora-m-h4 text-background">
                        {new Date(featuredCaseStudies.publishedAt).toLocaleDateString(
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
                </div>
              </Link>
            </div>
          )}

          <section className="max-w-[1200px] mx-auto rounded-2xl space-y-32 bg-foreground text-background px-6 md:px-12 md:py-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-between items-center">
              <div className="space-y-6 md:space-y-6 w-full">
                <p className="montserrat-extrabold text-[24px] md:text-[30px] leading-[130%]">Grow Your Business with the #1 Creative Marketing Agency!</p>
                <p className="lora-m-h1 mb-12 md:mb-10">From strategy to design, design to market and market to results—driving ROI every step.</p>
                <Link href="/contact" className="w-full md:w-fit  text-center text-[20px] lora-medium rounded-md px-[16px] md:py-[8px] py-[16px] bg-primary text-background">
                  Get in Touch
                </Link>
              </div>

              <div className="w-full h-full flex justify-center items-center">
                <Image src="/add-right-side-image.png" alt="Blog CTA Image" width={1024} height={768} className="w-full md:h-auto h-full" />
              </div>
            </div>
          </section>


          <div className="flex flex-col max-w-[1080px] mx-auto">
            {/* Client-side Posts Grid with Category Filtering */}
            <ClientPosts categories={categories} initialPosts={posts} redirectPage="case-studies" />
          </div>
        </div>
      </main>
      <CTA />
    </>
  );
} 