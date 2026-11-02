import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://unescocp.org";

// Same URLs, frequencies and priorities as the source sitemap.
const ROUTES: Array<[string, MetadataRoute.Sitemap[number]["changeFrequency"], number]> = [
  ["/", "weekly", 1.0],
  ["/programs", "monthly", 0.8],
  ["/summer-program", "monthly", 0.8],
  ["/about", "monthly", 0.9],
  ["/publishing-house", "monthly", 0.8],
  ["/regional-coordinators", "monthly", 0.7],
  ["/news", "weekly", 0.8],
  ["/resources", "monthly", 0.6],
  ["/join-us", "monthly", 0.7],
  ["/contact", "monthly", 0.7],
  ["/leadership", "monthly", 0.9],
  ["/about-ucp", "monthly", 0.9],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(([path, changeFrequency, priority]) => ({
    url: `${BASE}${path}`,
    changeFrequency,
    priority,
  }));
}
