import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Todo App",
    short_name: "todo",
    description: "A simple todo app built with Next.js and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#BD3F99",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
