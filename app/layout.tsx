import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: metaData.title }],
    },
  },
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    // `url` is deliberately not set here: on a root layout it would stamp every
    // page as the homepage. Each page sets its own.
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
    site: metaData.xHandle,
    creator: metaData.xHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // next-themes mutates <html> before hydration; this scopes the expected
    // mismatch to this element's own attributes.
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head />
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-0 lg:mt-0 mb-0 lg:mb-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <div className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
            <header>
              <Navbar />
            </header>
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
