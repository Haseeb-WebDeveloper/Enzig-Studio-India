import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Enzig Studio India",
  description: "Explore our latest insights, tips, and stories about design, development, and digital marketing.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white text-background">
        <Navbar bg="bg-transparent" bgOnScrolled="bg-foreground" />
        {children}
    </div>
  );
} 