import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Enzig Studio India",
  description: "Explore our comprehensive digital marketing solutions and strategies to grow your brand.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Navbar bg="bg-foreground" bgOnScrolled="bg-foreground" />
      {children}
    </div>
  );
} 