import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphics Design | Enzig Studio India",
  description: "Explore our comprehensive graphics design and strategies to grow your brand.",
};

export default function GraphicsDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen  ">
      <Navbar bg="bg-foreground" bgOnScrolled="bg-foreground" />
      {children}
    </div>
  );
} 