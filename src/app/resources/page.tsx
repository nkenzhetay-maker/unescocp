import { BookOpen, ExternalLink, Globe, Newspaper } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Resources | UNESCO Center for Peace"
  },
  description: "Access newsletters, partner organization links, UNESCO documents, and educational resources from the UNESCO Center for Peace.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/resources"
  },
  openGraph: {
    title: "Resources | UNESCO Center for Peace",
    description: "Access newsletters, partner organization links, UNESCO documents, and educational resources from the UNESCO Center for Peace.",
    type: "website",
    url: "/resources",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | UNESCO Center for Peace",
    description: "Access newsletters, partner organization links, UNESCO documents, and educational resources from the UNESCO Center for Peace.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unescocp.org/resources#webpage",
  "name": "Resources | UNESCO Center for Peace",
  "url": "https://unescocp.org/resources",
  "description": "Access newsletters, partner organization links, UNESCO documents, and educational resources from the UNESCO Center for Peace.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Resources */}
      <section className="bg-[#3b355f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-[#f0c040] font-semibold mb-3">UNESCO Center for Peace</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Resources</h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Newsletters, partner organization links, UNESCO documents, and educational materials to support your engagement with our global peace mission.
          </p>
        </div>
      </section>
      {/* Our Newsletters */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper size={22} className="text-[#c8102e]" />
            <h2 className="text-2xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>Our Newsletters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://mailchi.mp/e4ecd075402e/july-2023-newsletter-15372575" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md hover:border-[#0057a8] transition-all flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#c8102e] mb-1 block">July 2023</span>
                  <h3 className="text-base font-bold text-[#3b355f] group-hover:text-[#0057a8] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    July 2023 Newsletter
                  </h3>
                </div>
                <ExternalLink size={16} className="text-[#767676] group-hover:text-[#0057a8] flex-shrink-0 mt-1 transition-colors" />
              </div>
              <p className="text-sm text-[#555555] leading-relaxed">
                UCP July 2023 edition covering programs, events, and community updates.
              </p>
              <span className="text-xs font-semibold text-[#0057a8] mt-auto">{"Read Newsletter →"}</span>
            </a>
            <a href="https://us12.campaign-archive.com/?u=244aff79caaf859ee3b531eea&id=6414ae3bfe" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md hover:border-[#0057a8] transition-all flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#c8102e] mb-1 block">September 2023</span>
                  <h3 className="text-base font-bold text-[#3b355f] group-hover:text-[#0057a8] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    September 2023 Newsletter
                  </h3>
                </div>
                <ExternalLink size={16} className="text-[#767676] group-hover:text-[#0057a8] flex-shrink-0 mt-1 transition-colors" />
              </div>
              <p className="text-sm text-[#555555] leading-relaxed">
                UCP September 2023 edition with highlights from our global initiatives.
              </p>
              <span className="text-xs font-semibold text-[#0057a8] mt-auto">{"Read Newsletter →"}</span>
            </a>
          </div>
        </div>
      </section>
      {/* Links and Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={22} className="text-[#0057a8]" />
            <h2 className="text-2xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>Links and Resources</h2>
          </div>
          <p className="text-sm text-[#555555] mb-10 max-w-3xl leading-relaxed">
            The list below provides the names and links to many UNESCO organizations. They provide good information about the structure, mission, and objective of UNESCO throughout the world. We encourage you to visit their websites to learn more.
          </p>
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#767676] border-b border-[#d0d0d0] pb-2 mb-5">
              UNESCO Network
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="http://wfuca.org/index.php" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    World Federation of UNESCO Clubs, Centers and Associations
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.wfuca.org</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
              <a href="http://en.unesco.org/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    UNESCO Official Website
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.unesco.org</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
              <a href="http://www.unescousa.org/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    United States Federation of UNESCO Clubs, Centers and Associations
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.unescocp.org</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
              <a href="http://en.unesco.org/countries/associations-centres-and-clubs-unesco" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    UNESCO ERC Webpage about Clubs for UNESCO
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.unesco.org/clubs</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#767676] border-b border-[#d0d0d0] pb-2 mb-5">
              United Nations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="http://www.un.org/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    United Nations Official Website
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.un.org</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
              <a href="http://www.un.org/en/civilsociety/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    United Nations / Civil Society Relations
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.un.org/issues/civilsociety</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
              <a href="http://www.un.org/millenniumgoals/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    Millennium Development Goals
                  </p>
                  <p className="text-xs text-[#767676] truncate">www.un.org/millenniumgoals</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#767676] border-b border-[#d0d0d0] pb-2 mb-5">Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="http://portal.unesco.org/en/ev.php-URL_ID=15244&URL_DO=DO_TOPIC&URL_SECTION=201.html" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    UNESCO Constitution
                  </p>
                  <p className="text-xs text-[#767676] truncate">portal.unesco.org</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
              <a href="https://ucp-usa.org/wp-content/uploads/2023/01/R4P-Press-Release-FINAL-v-TMT.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 bg-[#efefef] rounded-lg p-4 border border-[#d0d0d0] hover:border-[#0057a8] hover:shadow-sm transition-all">
                <BookOpen size={16} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#3b355f] group-hover:text-[#0057a8] transition-colors leading-snug mb-0.5">
                    Hip-Hop Raps Peace Press Release
                  </p>
                  <p className="text-xs text-[#767676] truncate">Download PDF</p>
                </div>
                <ExternalLink size={13} className="text-[#aaaaaa] group-hover:text-[#0057a8] flex-shrink-0 ml-auto mt-0.5 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Stay Connected */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Stay Connected</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8">
            Subscribe to our newsletter and follow our programs to stay informed about the latest news and initiatives from the UNESCO Center for Peace.
          </p>
          <a href="mailto:sguzman@unescocenterforpeace.org" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold text-sm px-7 py-3 rounded transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
