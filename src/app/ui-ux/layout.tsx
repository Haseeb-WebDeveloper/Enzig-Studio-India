import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX | Enzig Studio India",
  description: "Explore our comprehensive UI/UX and strategies to grow your brand.",
};

export default function UiUxLayout({
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