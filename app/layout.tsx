import "@/styles/globals.css";
import React from "react";
import { Providers } from "./providers";
import Layout from "@/components/layout";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <html lang="en" className="dark">
      <body>
        <Layout>
          <Providers>{props.children}</Providers>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
