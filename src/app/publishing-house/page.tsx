import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "International Publishing House | UNESCO Center for Peace"
  },
  description: "The UNESCO Center for Peace launches its International Publishing House under President Guy Djorken, with Deputy Director, Ambassador Emmett Imani appointed to lead the Global Publishing Program.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/publishing-house"
  },
  openGraph: {
    title: "International Publishing House | UNESCO Center for Peace",
    description: "The UNESCO Center for Peace launches its International Publishing House under President Guy Djorken, with Deputy Director, Ambassador Emmett Imani appointed to lead the Global Publishing Program.",
    type: "article",
    url: "/publishing-house",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "International Publishing House | UNESCO Center for Peace",
    description: "The UNESCO Center for Peace launches its International Publishing House under President Guy Djorken, with Deputy Director, Ambassador Emmett Imani appointed to lead the Global Publishing Program.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unescocp.org/publishing-house#webpage",
  "name": "International Publishing House | UNESCO Center for Peace",
  "url": "https://unescocp.org/publishing-house",
  "description": "The UNESCO Center for Peace launches its International Publishing House under President Guy Djorken, with Deputy Director, Ambassador Emmett Imani appointed to lead the Global Publishing Program.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function PublishingHousePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-[#c8102e] text-white">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3">
          <span className="flex-shrink-0 bg-white text-[#c8102e] text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded">
            Announcement
          </span>
          <p className="text-sm leading-snug">
            <strong>Under The Leadership of President Guy Djorken</strong>
            {" "}UNESCO Center for Peace Launches Its International Publishing House.
          </p>
        </div>
      </div>
      {/* Under The Leadership of President Guy Djorken, UNESCO Center */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={20} className="text-blue-300" />
            <span className="text-xs uppercase tracking-widest font-bold text-blue-300">Major Announcement</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Under The Leadership of President Guy Djorken, UNESCO Center for Peace Launches Its International Publishing House
          </h1>
          <p className="text-blue-200 text-base md:text-lg leading-relaxed max-w-2xl">
            {"Deputy Director, Ambassador Emmett Imani Appointed to Build and Lead the Center's Global Publishing Program"}
          </p>
        </div>
      </section>
      {/* What Will We Publish? */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-[#d0d0d0] p-8 md:p-10">
              <div className="prose prose-sm max-w-none text-[#333333] leading-relaxed flex flex-col gap-5">
                <figure className="not-prose mb-2">
                  <img alt="Ambassador Emmett Imani, Deputy Director of UNESCO Center for Peace" src="/sites/unescocp/images/ambassador-emmett-imani.jpg" className="w-full aspect-[16/10] rounded-lg object-cover object-[50%_25%]" loading="eager" fetchPriority="high" />
                </figure>
                <p>
                  {"We're proud to share some news that's been a long time coming: the UNESCO Center for Peace is launching its own International Publishing House."}
                </p>
                <p>
                  {"It's hard to overstate how much this means to us. For years, the Center has worked in education, peacebuilding, cultural preservation, and historical scholarship, and along the way, we kept running into the same realization. So many important stories, so much research, so many voices that deserved a wider audience, simply didn't have a place to go. This is our answer to that. Under the leadership of President Guy Djoken, we're building a real home for the authors, researchers, educators, governments, universities, museums, and humanitarian organizations whose work helps make the world a little more peaceful and a little better understood."}
                </p>
                <p>
                  {"To lead this, President Djoken has turned to someone who has spent years thinking about exactly these questions: Deputy Director, Ambassador Emmett Imani, who will build and direct the Center's new Global Publishing Program from the ground up. That means international partnerships, editorial standards, global outreach, the whole foundation of what we hope becomes a publishing house people genuinely trust."}
                </p>
                <h2 className="text-lg font-bold text-[#3b355f] mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                  What Will We Publish?
                </h2>
                <p>
                  {"Books, academic research, policy papers, educational materials, conference proceedings, historical archives, biographies, cultural heritage collections, even children's educational books. The common thread running through all of it isn't genre or format. It's whether a work helps people understand each other a little better, whether it has something real to say about dignity, dialogue, or progress."}
                </p>
                <p>
                  {"We'll be publishing under our own official ISBN registration, which means qualified authors and institutions will have a genuine, internationally recognized home for their work, one built specifically around education and peace rather than profit margins. Every book that carries our name will carry that responsibility too."}
                </p>
                <blockquote className="border-l-4 border-[#3b355f] pl-6 py-2 bg-[#efefef] rounded-r-lg">
                  <p className="text-[#333333] text-sm leading-relaxed italic mb-3">
                    {"\"The written word has always been one of humanity's most powerful instruments for preserving history, educating future generations, and building bridges between cultures. Our goal is to create a publishing platform where important ideas are preserved, diverse voices are heard, and knowledge becomes a tool for peace rather than division. We welcome partnerships with governments, universities, research institutes, museums, international organizations, and distinguished authors from every region of the world.\""}
                  </p>
                  <footer className="text-xs font-bold text-[#3b355f] uppercase tracking-widest">
                    Ambassador Emmett Imani, Deputy Director, UNESCO Center for Peace
                  </footer>
                </blockquote>
                <h2 className="text-lg font-bold text-[#3b355f] mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Who We'd Love to Hear From"}
                </h2>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    National governments and ministries of education, culture, foreign affairs, and heritage
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Universities, colleges, and academic research institutions
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    International organizations and intergovernmental agencies
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Museums, archives, and libraries
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Cultural heritage organizations
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Non-governmental organizations and humanitarian institutions
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Think tanks and policy institutes
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Peacebuilding organizations
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b355f] flex-shrink-0" />
                    Independent researchers, historians, educators, and qualified authors
                  </li>
                </ul>
                <p>
                  {"We're especially drawn to projects with real weight behind them: national histories, cultural preservation work, educational curricula, multilingual editions, diplomatic studies, the kind of writing that doesn't just describe a challenge but honors the people living through it."}
                </p>
                <p>
                  {"If we're honest, this is bigger to us than just \"starting a publishing house.\" It's a statement about something we've believed for a long time: that education is one of the truest foundations for peace we have. When you bring together writers and institutions from completely different cultures and disciplines, something good happens. You start building a library that doesn't belong to one country or one moment in time. It belongs to whoever comes looking for it, now and decades from now."}
                </p>
                <p>
                  {"If you're an author or organization who thinks your work might belong here, we genuinely want to talk. Reach out, tell us what you're working on, and let's see what we can build together."}
                </p>
                <p className="font-semibold text-[#3b355f]">
                  {"Because in the end, that's the whole idea. Through knowledge, through dialogue, through education, we can help build a more peaceful world, one book, one paper, one shared story at a time."}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#d0d0d0]">
                <Link className="inline-flex items-center gap-2 bg-[#3b355f] text-white font-bold text-sm px-6 py-3 rounded hover:bg-[#1d1a2e] transition-colors" href="/contact">
                  Get in Touch{" "}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
            <aside className="flex flex-col gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden">
                <div className="bg-[#3b355f] px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold">Leadership</p>
                </div>
                <div className="p-5 flex flex-col items-center text-center gap-3">
                  <img alt="President Guy Djorken" src="/sites/unescocp/images/guy-djoken.png" className="w-24 h-24 rounded-full object-cover border-4 border-[#3b355f] shadow" loading="lazy" width="96" height="96" />
                  <div>
                    <p className="font-bold text-[#3b355f] text-sm" style={{ fontFamily: "var(--font-heading)" }}>President Guy Djorken</p>
                    <p className="text-xs text-[#767676] mt-0.5">President, UNESCO Center for Peace</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden">
                <div className="bg-[#0057a8] px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold">Appointed</p>
                </div>
                <div className="p-5 flex flex-col items-center text-center gap-3">
                  <img alt="Ambassador Emmett Imani" src="/sites/unescocp/images/ambassador-emmett-imani.jpg" className="w-24 h-24 rounded-full object-cover border-4 border-[#0057a8] shadow" loading="lazy" width="96" height="96" />
                  <div>
                    <p className="font-bold text-[#3b355f] text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                      Ambassador Emmett Imani
                    </p>
                    <p className="text-xs text-[#767676] mt-0.5 leading-snug">Deputy Director, UNESCO Center for Peace</p>
                    <p className="text-xs text-[#767676] mt-0.5 leading-snug">Head of Global Publishing Program</p>
                    <a href="tel:+12028000054" className="text-xs text-[#0057a8] font-semibold mt-1.5 inline-block hover:underline">
                      (202) 800-0054
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#3b355f] text-white rounded-lg p-6 flex flex-col gap-3">
                <h3 className="text-sm font-bold leading-snug" style={{ fontFamily: "var(--font-heading)" }}>Submit Your Work</h3>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Authors and institutions interested in publishing with the UNESCO Center for Peace are encouraged to reach out.
                </p>
                <Link className="inline-flex items-center gap-2 bg-white text-[#3b355f] font-bold text-xs px-4 py-2 rounded hover:bg-blue-50 transition-colors mt-1" href="/contact">
                  Contact Us{" "}
                  <ArrowRight size={12} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
