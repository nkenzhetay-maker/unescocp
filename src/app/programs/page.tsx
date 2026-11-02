import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Programs | UNESCO Center for Peace — Peace Education & Cultural Events"
  },
  description: "Explore UNESCO Center for Peace programs: West African Spring Conference, African Women's Day 2026, Model UN & Debate Youth Conference, Summer Program, and ongoing peace education initiatives.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/programs"
  },
  openGraph: {
    title: "Programs | UNESCO Center for Peace — Peace Education & Cultural Events",
    description: "Explore UNESCO Center for Peace programs: West African Spring Conference, African Women's Day 2026, Model UN & Debate Youth Conference, Summer Program, and ongoing peace education initiatives.",
    type: "website",
    url: "/programs",
    images: [
      "/sites/unescocp/images/stock/programs-hero.jpg"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs | UNESCO Center for Peace — Peace Education & Cultural Events",
    description: "Explore UNESCO Center for Peace programs: West African Spring Conference, African Women's Day 2026, Model UN & Debate Youth Conference, Summer Program, and ongoing peace education initiatives.",
    images: [
      "/sites/unescocp/images/stock/programs-hero.jpg"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unescocp.org/programs#webpage",
  "name": "Programs | UNESCO Center for Peace — Peace Education & Cultural Events",
  "url": "https://unescocp.org/programs",
  "description": "Explore UNESCO Center for Peace programs: West African Spring Conference, African Women's Day 2026, Model UN & Debate Youth Conference, Summer Program, and ongoing peace education initiatives.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function ProgramsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Our Programs */}
      <section className="relative overflow-hidden">
        <img alt="International conference on peace and education" src="/sites/unescocp/images/stock/programs-hero.jpg" className="w-full h-56 md:h-72 object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1a2e]/85 via-[#3b355f]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-2">What We Do</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              Our Programs
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-3 max-w-xl">
              Advancing peace, justice, and human rights through education, culture, and global collaboration.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Programs */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-1">{"Upcoming & Recent"}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
              Featured Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-md border border-[#d0d0d0] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img alt="UCP West African Spring Conference 2025" src="/sites/unescocp/images/west-african-spring-conference-2025.jpg" className="w-full h-52 object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded" style={{ background: "rgb(59, 53, 95)" }}>
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-[#3b355f] mb-1 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  UCP West African Spring Conference 2025
                </h2>
                <p className="text-sm text-[#767676] font-semibold mb-4">World Heritage Educational Tour</p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <Calendar size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>April 20–28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <MapPin size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>MJ Grand Hotel, Accra, Ghana</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <Users size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>All ages welcome</span>
                  </div>
                </div>
                <p className="text-sm text-[#333333] leading-relaxed mb-5">
                  {"An immersive educational tour through Ghana's UNESCO World Heritage Sites, combining cultural exploration with peace-building workshops and intercultural dialogue. Participants will engage with local educators, community leaders, and international delegates."}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Cultural Heritage</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Education</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">West Africa</span>
                </div>
                <Link className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2 rounded transition-colors" href="/contact" style={{ background: "rgb(59, 53, 95)" }}>
                  Learn More{" "}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md border border-[#d0d0d0] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img alt="African Women's Day 2026" src="/sites/unescocp/images/african-womens-day-2026.jpg" className="w-full h-52 object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded" style={{ background: "rgb(200, 16, 46)" }}>
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-[#3b355f] mb-1 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {"African Women's Day 2026"}
                </h2>
                <p className="text-sm text-[#767676] font-semibold mb-4">Celebrating African Diaspora Women from Around the Globe</p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <Calendar size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>March 20–21, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <MapPin size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>Westin Hotel, Crystal City, Arlington, VA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <Users size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>Open to all</span>
                  </div>
                </div>
                <p className="text-sm text-[#333333] leading-relaxed mb-5">
                  A two-day celebration honoring the achievements, resilience, and leadership of African Diaspora women worldwide. The event features keynote addresses, panel discussions, cultural performances, and networking opportunities for women leaders across sectors.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Women Empowerment</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">African Diaspora</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Leadership</span>
                </div>
                <Link className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2 rounded transition-colors" href="/contact" style={{ background: "rgb(200, 16, 46)" }}>
                  Learn More{" "}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md border border-[#d0d0d0] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img alt="Model UN & Debate Youth Conference" src="/sites/unescocp/images/model-un-debate-2025.jpg" className="w-full h-52 object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded" style={{ background: "rgb(0, 87, 168)" }}>
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-[#3b355f] mb-1 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Model UN & Debate Youth Conference"}
                </h2>
                <p className="text-sm text-[#767676] font-semibold mb-4">UCP West African Spring Conference</p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <Calendar size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>April 24–28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <MapPin size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>DPS International Ghana</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#333333]">
                    <Users size={13} className="text-[#3b355f] flex-shrink-0" />
                    <span>Youths ages 14–19</span>
                  </div>
                </div>
                <p className="text-sm text-[#333333] leading-relaxed mb-5">
                  A dynamic youth-focused program where participants engage in Model United Nations simulations and competitive debate on pressing global issues. Young delegates develop critical thinking, public speaking, and diplomacy skills in an international setting.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Youth</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Model UN</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Debate</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[#d0d0d0] text-[#767676]">Leadership</span>
                </div>
                <Link className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2 rounded transition-colors" href="/contact" style={{ background: "rgb(0, 87, 168)" }}>
                  Learn More{" "}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Ongoing Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-1">Year-Round</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
              Ongoing Initiatives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="text-3xl">{"📚"}</div>
              <h3 className="text-base font-bold text-[#3b355f] leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                International Publishing House
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed flex-1">
                {"Under President Guy Djorken's leadership, the UNESCO Center for Peace has launched its International Publishing House to amplify voices for peace, justice, and human rights globally. Deputy Director, Ambassador Emmett Imani leads the Global Publishing Program."}
              </p>
              <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#0057a8] hover:underline mt-auto" href="/about">
                Learn More{" "}
                <ArrowRight size={12} />
              </Link>
            </article>
            <article className="bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="text-3xl">{"☀️"}</div>
              <h3 className="text-base font-bold text-[#3b355f] leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                Summer Program 2026
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed flex-1">
                Two transformative weeks (July 19 – August 1, 2026) exploring science, human rights, cultural identity, and intercultural communication. Open to students and educators committed to building a more just and peaceful world.
              </p>
              <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#0057a8] hover:underline mt-auto" href="/summer-program">
                Learn More{" "}
                <ArrowRight size={12} />
              </Link>
            </article>
            <article className="bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="text-3xl">{"🎵"}</div>
              <h3 className="text-base font-bold text-[#3b355f] leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                Hip-Hop Raps Peace
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed flex-1">
                A groundbreaking initiative using hip-hop culture as a vehicle for peace education, conflict resolution, and youth empowerment. The program engages young people through music, art, and storytelling.
              </p>
              <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#0057a8] hover:underline mt-auto" href="/programs">
                Learn More{" "}
                <ArrowRight size={12} />
              </Link>
            </article>
            <article className="bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="text-3xl">{"🎓"}</div>
              <h3 className="text-base font-bold text-[#3b355f] leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                National Merit Scholarship Week
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed flex-1">
                An annual celebration recognizing academic excellence and civic engagement among students. The program partners with embassies, universities, and community organizations to honor outstanding young scholars.
              </p>
              <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#0057a8] hover:underline mt-auto" href="/programs">
                Learn More{" "}
                <ArrowRight size={12} />
              </Link>
            </article>
            <article className="bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="text-3xl">{"🌍"}</div>
              <h3 className="text-base font-bold text-[#3b355f] leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                Regional Coordinators Network
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed flex-1">
                {"A global network of regional coordinators advancing the UNESCO Center for Peace's mission at the local level. Coordinators organize events, build partnerships, and engage communities across continents."}
              </p>
              <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#0057a8] hover:underline mt-auto" href="/regional-coordinators">
                Learn More{" "}
                <ArrowRight size={12} />
              </Link>
            </article>
            <article className="bg-white rounded-lg border border-[#d0d0d0] p-6 hover:shadow-md transition-shadow flex flex-col gap-3">
              <div className="text-3xl">{"📖"}</div>
              <h3 className="text-base font-bold text-[#3b355f] leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                Peace Education Curriculum
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed flex-1">
                Comprehensive educational resources for schools and universities covering peace studies, conflict resolution, human rights, and intercultural dialogue. Available in multiple languages.
              </p>
              <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#0057a8] hover:underline mt-auto" href="/resources">
                Learn More{" "}
                <ArrowRight size={12} />
              </Link>
            </article>
          </div>
        </div>
      </section>
      {/* Get Involved */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Get Involved</h2>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed mb-8">
            {"Whether you're an educator, student, diplomat, or community leader, there's a place for you in the UNESCO Center for Peace community. Reach out to learn how you can participate in or support our programs."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="inline-flex items-center gap-2 bg-white text-[#3b355f] font-bold text-sm px-6 py-3 rounded hover:bg-blue-50 transition-colors" href="/join-us">
              Join Us{" "}
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
