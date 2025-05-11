import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Enzig Studio India",
  description: "Explore our comprehensive portfolio of branding and strategies to grow your brand.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {children}
    </div>
  );
} 