import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Acceleron Solutions | Enterprise IT Consulting",
    template: "%s | Acceleron Solutions",
  },
  description:
    "Acceleron Solutions delivers SAP, Salesforce, Zoho, cloud, cyber security and custom software engineering services for enterprise transformation.",
  keywords: [
    "SAP consulting",
    "Salesforce implementation",
    "Zoho Suite",
    "IT consulting",
    "software development",
    "cloud migration",
    "cyber security",
    "digital transformation",
    "Acceleron Solutions",
    "Gainwell Group",
  ],
  authors: [{ name: "Acceleron Solutions" }],
  creator: "Acceleron Solutions",
  metadataBase: new URL("https://acceleronsolutions.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://acceleronsolutions.io",
    siteName: "Acceleron Solutions",
    title: "Acceleron Solutions | Enterprise IT Consulting",
    description:
      "SAP, Salesforce, Zoho, cloud, cyber security and custom software engineering. Part of the Gainwell Group.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acceleron Solutions | Enterprise IT Consulting",
    description:
      "Enterprise technology consulting and software engineering for modern business operations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
