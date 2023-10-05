import "@/styles/globals.css";
import React from "react";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import { Divider } from "@nextui-org/divider";
import Layout from "@/components/layout";
import { Toaster } from "sonner";
type Props = {
  children: React.ReactNode;
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
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
