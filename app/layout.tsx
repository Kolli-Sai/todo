import "@/styles/globals.css";
import React from "react";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import { Divider } from "@nextui-org/divider";
import Layout from "@/components/layout";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { baseUrl } from "@/lib/base-url";
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  title: {
    default: "Todo App",
    template: "%s | Todo App",
  },
  description:
    "A simple todo app built with Next.js , NextUI, NextAuth and Prisma",
  creator: "Kolli Sai",
  publisher: "Kolli Sai",
  generator: "Next.js",
  applicationName: "Todo App",
  authors: [{ name: "Kolli Sai", url: "https://sai-portofolio.vercel.app/" }],
  referrer: "strict-origin-when-cross-origin",
  keywords: ["todo app", "sai todo app", "kolli sai todo app"],
  colorScheme: "dark light",
  themeColor: "#BD3F99",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: "google",
    yahoo: "yahoo",
    yandex: "yandex",
    me: ["saik98187@gmail.com", "https://sai-portofolio.vercel.app/"],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  openGraph: {
    title: "Todo App",
    description:
      "A simple todo app built with Next.js , NextUI, NextAuth and Prisma",
    type: "website",
    url: `${baseUrl}`,
    siteName: "Todo App",
    locale: "en_US",
  },
  twitter: {
    title: "Todo App",
    description:
      "A simple todo app built with Next.js , NextUI, NextAuth and Prisma",
    card: "summary_large_image",
    creator: "@saik98187",
  },
};

const RootLayout = (props: Props) => {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Toaster position="top-center" />
          <Navbar />
          <Divider className=" mb-5" />
          <Layout>{props.children}</Layout>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
