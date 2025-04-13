import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScrolling from "@/components/Smooth-scrolling";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL('https://enzigstudio.com'),
  title: "Enzig Studio | Creative Digital Marketing Agency in Gurgaon, India",
  description:
    "Enzig Studio is a creative digital marketing agency in Gurgaon, India that offers a range of services to help businesses grow and succeed online. Specializing in strategy, design, and marketing solutions that drive ROI.",
  keywords:
    "digital marketing agency, creative agency, Gurgaon, India, web design, branding, marketing strategy, ROI-driven marketing",
  authors: [{ name: "Enzig Studio" }],
  creator: "Enzig Studio",
  publisher: "Enzig Studio",
  openGraph: {
    title: "Enzig Studio | Creative Digital Marketing Agency in Gurgaon, India",
    description:
      "From strategy to design, design to market and market to results—driving ROI every step. Partner with Enzig Studio for growth-focused digital marketing solutions.",
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
    description:
      "Trusted by brands that believe in growth. Clear pricing. Real results. Always.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://enzigstudio.com" />

        {/* Google Analytics */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PX9PM707FF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PX9PM707FF');
            `,
          }}
        /> */}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MHFM7GCH');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHFM7GCH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <main className="relative">
              {/* Whatsapp Chat */}
              <Link href="https://wa.me/919625831925" target="_blank" className=" fixed bottom-5 right-5 z-50">
                <Image src="/whatsapp-icon.png" alt="Whatsapp" width={100} height={100} className="w-[50px] h-[50px] cursor-pointer" />
              </Link>
              {children}
            </main>
            {/* <Analytics /> */}
            {/* <SpeedInsights /> */}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
