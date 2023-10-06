import { baseUrl } from "@/lib/base-url";
import { type MetadataRoute } from "next";
export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/auth/", "/todos/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
