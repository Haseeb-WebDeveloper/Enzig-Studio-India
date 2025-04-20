import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study | Enzig Studio India",
  description: "Explore our case studies and see how we've helped brands grow through our creative and digital marketing solutions.",
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
       <Navbar bg="bg-foreground" bgOnScrolled="bg-foreground" />
      {children}
    </div>
  );
} 