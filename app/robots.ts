import { baseUrl } from "@/lib/base-url";
import { type MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/auth/", "/todos/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
