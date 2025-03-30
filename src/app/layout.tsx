import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/Smooth-scrolling";  

export const metadata: Metadata = {
  title: "Enzig Studio | Creative Digital Marketing Agency in Gurgaon, India",
  description: "Enzig Studio is a creative digital marketing agency in Gurgaon, India that offers a range of services to help businesses grow and succeed online. Specializing in strategy, design, and marketing solutions that drive ROI.",
  keywords: "digital marketing agency, creative agency, Gurgaon, India, web design, branding, marketing strategy, ROI-driven marketing",
  authors: [{ name: "Enzig Studio" }],
  creator: "Enzig Studio",
  publisher: "Enzig Studio",
  openGraph: {
    title: "Enzig Studio | Creative Digital Marketing Agency in Gurgaon, India",
    description: "From strategy to design, design to market and market to results—driving ROI every step. Partner with Enzig Studio for growth-focused digital marketing solutions.",
    url: "https://enzigstudio.com",
    siteName: "Enzig Studio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Enzig Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enzig Studio | Creative Digital Marketing Agency in Gurgaon, India",
    description: "Trusted by brands that believe in growth. Clear pricing. Real results. Always.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="canonical" href="https://enzigstudio.com" />
      </head>
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