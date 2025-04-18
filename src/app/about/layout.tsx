import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Enzig Studio India",
  description: "Learn about Enzig Studio, a creative powerhouse dedicated to transforming brands through innovative digital solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Navbar bg="bg-white" bgOnScrolled="bg-white" />
      {children}
    </div>
  );
}
