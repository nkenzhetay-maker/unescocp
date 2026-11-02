import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { CookieBanner } from "@/components/sites/unescocp/cookie-banner";
import { SiteFooter } from "@/components/sites/unescocp/site-footer";
import { SiteHeader } from "@/components/sites/unescocp/site-header";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unescocp.org"),
  title: "UNESCO Center for Peace",
  description:
    "The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences.",
  verification: { google: "googleec258f948e4cd12e" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body>
        <div className="min-h-screen bg-background flex flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
