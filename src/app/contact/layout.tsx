import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Enzig Studio India",
  description: "Get in touch with Enzig Studio for your digital marketing and creative needs. We're here to help you grow your brand.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar bg="bg-white" bgOnScrolled="bg-foreground" />
      {children}
    </div>
  );
} 