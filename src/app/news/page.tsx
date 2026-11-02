import Link from "next/link";
import { ArrowRight, Calendar, ExternalLink, Newspaper } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "News & Press Releases | UNESCO Center for Peace"
  },
  description: "The latest news, announcements, and press releases from the UNESCO Center for Peace, including the launch of the International Publishing House, the West African Spring Conference, and more.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/news"
  },
  openGraph: {
    title: "News & Press Releases | UNESCO Center for Peace",
    description: "The latest news, announcements, and press releases from the UNESCO Center for Peace, including the launch of the International Publishing House, the West African Spring Conference, and more.",
    type: "website",
    url: "/news",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Press Releases | UNESCO Center for Peace",
    description: "The latest news, announcements, and press releases from the UNESCO Center for Peace, including the launch of the International Publishing House, the West African Spring Conference, and more.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://unescocp.org/news#webpage",
  "name": "News & Press Releases | UNESCO Center for Peace",
  "url": "https://unescocp.org/news",
  "description": "The latest news, announcements, and press releases from the UNESCO Center for Peace, including the launch of the International Publishing House, the West African Spring Conference, and more.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function NewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* News & Press Releases */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper size={20} className="text-blue-300" />
            <span className="text-xs uppercase tracking-widest font-bold text-blue-300">Stay Informed</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {"News & Press Releases"}
          </h1>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed max-w-xl">
            The latest announcements, events, and press releases from the UNESCO Center for Peace.
          </p>
        </div>
      </section>
      {/* Under The Leadership of President Guy Djorken, UNESCO Center */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-4">Featured</p>
            <article className="bg-white rounded-lg shadow-md border border-[#d0d0d0] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(200, 16, 46)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(200, 16, 46)" }}>
                  Announcement
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  June 2026
                </time>
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-xl md:text-2xl font-bold text-[#3b355f] mb-4 leading-snug max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Under The Leadership of President Guy Djorken, UNESCO Center for Peace Launches Its International Publishing House
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed max-w-3xl mb-5">
                  Deputy Director, Ambassador Emmett Imani has been appointed to build and lead the Global Publishing Program, a landmark initiative to amplify voices for peace, justice, and human rights on a global scale.
                </p>
                <Link className="inline-flex items-center gap-2 bg-[#3b355f] text-white font-bold text-sm px-5 py-2.5 rounded hover:bg-[#1d1a2e] transition-colors" href="/publishing-house">
                  Read Full Announcement{" "}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
          <div className="mb-4">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-4">{"All Articles & Press Releases"}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(0, 87, 168)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(200, 16, 46)" }}>
                  Announcement
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  June 2026
                </time>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  Ambassador Emmett Imani Appointed Deputy Director of the UNESCO Center for Peace
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed flex-1 mb-4">
                  A distinguished diplomat with extensive experience in international affairs and cultural diplomacy, Ambassador Imani brings a deep commitment to amplifying voices for peace, justice, and human rights on a global scale.
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057a8] hover:underline" href="/publishing-house">
                    Read more{" "}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(0, 87, 168)" }}>
                  Event
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  2025
                </time>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {"UCP West African Spring Conference 2025 | Accra, Ghana"}
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed flex-1 mb-4">
                  {"An immersive educational conference through Ghana's UNESCO World Heritage Sites, combining cultural exploration with peace-building workshops and intercultural dialogue. Participants engaged with local educators, community leaders, and international delegates."}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057a8] hover:underline" href="/programs">
                    Read more{" "}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(0, 87, 168)" }}>
                  Event
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  2025
                </time>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Model UN & Debate Youth Conference"}
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed flex-1 mb-4">
                  {"Young leaders from across the globe gathered for the UCP Model UN & Debate Youth Conference, developing skills in diplomacy, public speaking, and international relations through simulated UN committee sessions."}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057a8] hover:underline" href="/programs">
                    Read more{" "}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(0, 87, 168)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(59, 53, 95)" }}>
                  News
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  2023
                </time>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  USAID Director Cheryl Anderson at National Merit Scholarship Week 2023
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed flex-1 mb-4">
                  Cheryl Anderson participated in the second edition of the National Merit Scholarship Week 2023. Congratulations to all contestants and to Miss Mathematics! #USinGuinea
                </p>
                <div className="flex flex-wrap gap-3 mt-auto" />
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(200, 16, 46)" }}>
                  Press Release
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  2023
                </time>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Hip-Hop Raps Peace Initiative | Press Release"}
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed flex-1 mb-4">
                  The UNESCO Center for Peace launched the Hip-Hop Raps Peace initiative, harnessing the power of music and creative expression as a vehicle for peace education, youth engagement, and cross-cultural dialogue.
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a href="https://ucp-usa.org/wp-content/uploads/2023/01/R4P-Press-Release-FINAL-v-TMT.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0057a8] hover:underline">
                    Download Press Release (PDF){" "}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="px-6 py-3 flex items-center justify-between gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white" style={{ background: "rgb(59, 53, 95)" }}>
                  News
                </span>
                <time className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Calendar size={11} />
                  December 7, 2022
                </time>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  Decision of the 40th Session of the Executive Board of WFUCA
                </h2>
                <p className="text-sm text-[#333333] leading-relaxed flex-1 mb-4">
                  The 40th session of the Executive Board of WFUCA took place online on 5 December 2022. Mr. Mustapha Badreddine (Lebanon) was unanimously elected as the new Acting President of WFUCA. The World Congress will be held in the Republic of Korea in the first half of 2023, hosted by KNFACU.
                </p>
                <div className="flex flex-wrap gap-3 mt-auto" />
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Stay Connected */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Stay Connected</h2>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed mb-8">
            Follow the UNESCO Center for Peace for the latest news, program updates, and announcements. Reach out to learn more or get involved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="inline-flex items-center gap-2 bg-white text-[#3b355f] font-bold text-sm px-6 py-3 rounded hover:bg-blue-50 transition-colors" href="/programs">
              Explore Programs{" "}
              <ArrowRight size={16} />
            </Link>
            <Link className="inline-flex items-center gap-2 border border-white text-white font-semibold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
