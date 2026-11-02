import { SummerProgramTabs } from "@/components/sites/unescocp/summer-program-tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Summer Program 2026 | UNESCO Center for Peace"
  },
  description: "The UNESCO Center for Peace Summer Program 2026 was a transformative two-week experience held July 19 to August 1, bringing together students and young leaders in peace, human rights, and intercultural dialogue.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/summer-program"
  },
  openGraph: {
    title: "Summer Program 2026 | UNESCO Center for Peace",
    description: "The UNESCO Center for Peace Summer Program 2026 was a transformative two-week experience held July 19 to August 1, bringing together students and young leaders in peace, human rights, and intercultural dialogue.",
    type: "website",
    url: "/summer-program",
    images: [
      "/sites/unescocp/images/stock/summer-program-hero.jpg"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer Program 2026 | UNESCO Center for Peace",
    description: "The UNESCO Center for Peace Summer Program 2026 was a transformative two-week experience held July 19 to August 1, bringing together students and young leaders in peace, human rights, and intercultural dialogue.",
    images: [
      "/sites/unescocp/images/stock/summer-program-hero.jpg"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  "@id": "https://unescocp.org/summer-program#event",
  "name": "UNESCO Center for Peace Summer Program 2026",
  "url": "https://unescocp.org/summer-program",
  "description": "The UNESCO Center for Peace Summer Program 2026 was a transformative two-week experience held July 19 to August 1, bringing together students and young leaders in peace, human rights, and intercultural dialogue.",
  "startDate": "2026-07-19",
  "endDate": "2026-08-01",
  "eventStatus": "https://schema.org/EventScheduled",
  "organizer": {
    "@id": "https://unescocp.org/#organization"
  },
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  }
};

export default function SummerProgramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* UNESCO Center for Peace Summer Program 2026 */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-3">{"July 19 – August 1, 2026 | Completed"}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            UNESCO Center for Peace Summer Program 2026
          </h1>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed max-w-2xl">
            Two transformative weeks for future peacemakers, exploring science, human rights, cultural identity, and intercultural communication. The 2026 program has concluded successfully.
          </p>
        </div>
      </section>
      <section className="py-10 bg-white border-t border-[#d0d0d0]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-[#efefef] rounded-lg p-5 border border-[#d0d0d0]">
              <p className="text-base font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                July 19 – Aug 1, 2026
              </p>
              <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Dates</p>
            </div>
            <div className="text-center bg-[#efefef] rounded-lg p-5 border border-[#d0d0d0]">
              <p className="text-base font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>2 Weeks</p>
              <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Duration</p>
            </div>
            <div className="text-center bg-[#efefef] rounded-lg p-5 border border-[#d0d0d0]">
              <p className="text-base font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>In-Person</p>
              <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Format</p>
            </div>
            <div className="text-center bg-[#efefef] rounded-lg p-5 border border-[#d0d0d0]">
              <p className="text-base font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>Completed</p>
              <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Status</p>
            </div>
          </div>
        </div>
      </section>
      {/* Program Overview */}
      <section className="bg-[#efefef] border-t border-[#d0d0d0]">
        <SummerProgramTabs />
      </section>
    </>
  );
}
