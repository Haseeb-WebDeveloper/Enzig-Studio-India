import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/Smooth-scrolling";  

export const metadata: Metadata = {
  title: "Enzig Studio | Creative Digital Marketing Agency in Gurgaon,India",
  description: "Enzig Studio is a creative digital marketing agency in Gurgaon, India that offers a range of services to help businesses grow and succeed online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}