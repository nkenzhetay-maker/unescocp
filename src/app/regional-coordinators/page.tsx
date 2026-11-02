import Link from "next/link";
import { ArrowRight, CircleCheckBig, Globe, Mail, MapPin, Star, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Regional Coordinators Network | UNESCO Center for Peace"
  },
  description: "The UNESCO Center for Peace Regional Coordinators Network advances peace, education, and human rights at the local level across six global regions. Learn about the network and how to become a coordinator.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/regional-coordinators"
  },
  openGraph: {
    title: "Regional Coordinators Network | UNESCO Center for Peace",
    description: "The UNESCO Center for Peace Regional Coordinators Network advances peace, education, and human rights at the local level across six global regions. Learn about the network and how to become a coordinator.",
    type: "website",
    url: "/regional-coordinators",
    images: [
      "/sites/unescocp/images/stock/regional-coordinators-hero.jpg"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional Coordinators Network | UNESCO Center for Peace",
    description: "The UNESCO Center for Peace Regional Coordinators Network advances peace, education, and human rights at the local level across six global regions. Learn about the network and how to become a coordinator.",
    images: [
      "/sites/unescocp/images/stock/regional-coordinators-hero.jpg"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unescocp.org/regional-coordinators#webpage",
  "name": "Regional Coordinators Network | UNESCO Center for Peace",
  "url": "https://unescocp.org/regional-coordinators",
  "description": "The UNESCO Center for Peace Regional Coordinators Network advances peace, education, and human rights at the local level across six global regions. Learn about the network and how to become a coordinator.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function RegionalCoordinatorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Regional Coordinators Network */}
      <section className="relative overflow-hidden">
        <img alt="Global network of regional coordinators" src="/sites/unescocp/images/stock/regional-coordinators-hero.jpg" className="w-full h-56 md:h-72 object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1a2e]/90 via-[#3b355f]/65 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-2">Global Network</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              Regional Coordinators Network
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
              Advancing peace, education, and human rights at the local level, across every continent.
            </p>
          </div>
        </div>
      </section>
      {/* Peace Starts Locally */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">About the Network</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Peace Starts Locally
              </h2>
              <p className="text-[#333333] text-sm leading-relaxed mb-4">
                {"The UNESCO Center for Peace Regional Coordinators Network is a global community of dedicated individuals who bring the Center's mission to life in their own regions. Coordinators serve as the on-the-ground presence of UCP, organizing events, building partnerships, and engaging communities across continents."}
              </p>
              <p className="text-[#333333] text-sm leading-relaxed mb-4">
                From West Africa to North America, Europe to the Caribbean, our coordinators connect local communities to the global movement for peace, education, and human rights. They are educators, diplomats, community leaders, and advocates united by a shared belief that lasting peace is built from the ground up.
              </p>
              <p className="text-[#333333] text-sm leading-relaxed">
                The network is actively expanding. We are seeking passionate, committed individuals in every region of the world to join us as Regional Coordinators.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-2 shadow-sm">
                <div className="text-[#3b355f]">
                  <Globe size={22} />
                </div>
                <p className="text-lg font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>6 Regions</p>
                <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Global Reach</p>
              </div>
              <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-2 shadow-sm">
                <div className="text-[#3b355f]">
                  <Users size={22} />
                </div>
                <p className="text-lg font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>Growing Network</p>
                <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Active Coordinators</p>
              </div>
              <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-2 shadow-sm">
                <div className="text-[#3b355f]">
                  <MapPin size={22} />
                </div>
                <p className="text-lg font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>20+</p>
                <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Countries Represented</p>
              </div>
              <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-2 shadow-sm">
                <div className="text-[#3b355f]">
                  <Star size={22} />
                </div>
                <p className="text-lg font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>10+ Years</p>
                <p className="text-xs text-[#767676] uppercase tracking-widest font-semibold">Years of Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Regional Coordinators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Our Team</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
              Regional Coordinators
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="flex flex-col items-center justify-start p-8 gap-4" style={{ background: "rgb(0, 87, 168)" }}>
                  <img alt="Moussa Kone" src="/sites/unescocp/images/coordinators/moussa-kone.jpg" className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg" loading="lazy" width="144" height="144" />
                  <div className="text-center">
                    <p className="text-white font-bold text-sm leading-snug" style={{ fontFamily: "var(--font-heading)" }}>Moussa Kone</p>
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/90 font-semibold">
                      West Africa
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-base font-bold text-[#3b355f] mb-1 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                    Moussa Kone
                  </h3>
                  <p className="text-xs text-[#0057a8] font-semibold uppercase tracking-widest mb-4">Regional Coordinator, West Africa</p>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {"Moussa Kone is appointed Coordinator for West Africa. Following their collaboration over the last year, Mr. Guy Djoken, Chairman of the U.S. National Commission for UNESCO Clubs, Centers & Associations and Executive Director of the Washington, D.C. UNESCO Center for Peace, appointed Moussa Kone as the U.S. Federation of UNESCO Clubs, Centers and Associations (USFUCA) Coordinator for West Africa on August 21st, 2023."}
                    </p>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {"This selection must be regarded with genuine pride and testimony to the outstanding job Moussa has done over the years in International Education as Mandela Washington Fellow 2017 and CEO of Update Consulting International in Cote d'Ivoire and West Africa."}
                    </p>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      The duties of Moussa will include promoting and coordinating U.S. Federation and UNESCO Center for Peace programs and activities throughout West Africa. The newly appointed Coordinator is also authorized to recruit participants from all over Africa to participate in the various programs of the federation.
                    </p>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {"Moussa knows that the work undertaken by the Center is of utmost importance and greatly promotes UNESCO's core goal of planting the seed of peace in the minds of our students and that by so doing, we contribute to the creation of sustainable development and intercultural dialogue by promoting collaboration among nations through education, science, culture, and communication."}
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="flex flex-col items-center justify-start p-8 gap-4" style={{ background: "rgb(59, 53, 95)" }}>
                  <img alt="Rosie Chawla" src="/sites/unescocp/images/coordinators/rosie-chawla.jpg" className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg" loading="lazy" width="144" height="144" />
                  <div className="text-center">
                    <p className="text-white font-bold text-sm leading-snug" style={{ fontFamily: "var(--font-heading)" }}>Rosie Chawla</p>
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/90 font-semibold">
                      Global
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-base font-bold text-[#3b355f] mb-1 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                    Rosie Chawla
                  </h3>
                  <p className="text-xs text-[#0057a8] font-semibold uppercase tracking-widest mb-4">
                    {"Conflict Resolution & Peace Expert | Director of Strategic Initiatives"}
                  </p>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {"Rosie Chawla is a distinguished expert in conflict resolution, social impact funding, and peace education with years of global experience. An associate at Columbia University and adjunct at Jefferson, she holds a Master's in Conflict Resolution from Columbia, a Wharton business certificate, and a Finance degree from Temple."}
                    </p>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      As a consultant for the UNESCO Center for Peace, Rosie has led capacity-building initiatives across Myanmar, Nepal, West Africa, China, Spain, and the USA. Over five years in China, she spearheaded international projects that advanced diplomacy and gender equity.
                    </p>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      Her leadership is widely recognized: she is an advisor to the Business for Peace Council USA and a frequent speaker at the Global Leaders Forum. A two-time attendee of the Business for Peace Forum in Norway, she was also a 2019 finalist for the Women Professional Society Social Impact award. Rosie excels at bridging non-profit development with strategic peacebuilding to drive sustainable global change.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="flex flex-col items-center justify-start p-8 gap-4" style={{ background: "rgb(59, 53, 95)" }}>
                  <img alt="Dr. Therese Fotabong-Binfon" src="/sites/unescocp/images/coordinators/therese-fotabong-binfon.png" className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg" loading="lazy" width="144" height="144" />
                  <div className="text-center">
                    <p className="text-white font-bold text-sm leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                      Dr. Therese Fotabong-Binfon
                    </p>
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/90 font-semibold">
                      {"Africa & North America"}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-base font-bold text-[#3b355f] mb-1 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                    Dr. Therese Fotabong-Binfon
                  </h3>
                  <p className="text-xs text-[#0057a8] font-semibold uppercase tracking-widest mb-4">
                    Director of Partnerships, Development, and Engagement for Africa and North America
                  </p>
                  <p className="text-sm text-[#767676] italic">Biography coming soon.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Active Regions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Where We Work</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>Active Regions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="text-2xl">{"🌎"}</span>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>North America</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  Coordinators across North America organize campus outreach, embassy partnerships, and community peace education events in collaboration with partner universities.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">United States</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Canada</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Mexico</span>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgb(0, 87, 168)" }}>
                <span className="text-2xl">{"🌍"}</span>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>West Africa</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  Our West African network is among the most active, anchoring the annual Spring Conference in Accra and supporting UNESCO World Heritage educational tours.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Ghana</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Senegal</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Nigeria</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">
                    {"Côte d'Ivoire"}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Sierra Leone</span>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="text-2xl">{"🌍"}</span>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{"East & Central Africa"}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  Coordinators in East and Central Africa lead peace education initiatives, youth leadership programs, and cultural heritage preservation projects.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Kenya</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Ethiopia</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Rwanda</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Uganda</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Tanzania</span>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgb(0, 87, 168)" }}>
                <span className="text-2xl">{"🌍"}</span>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Europe</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  European coordinators facilitate connections with UNESCO headquarters in Paris, European universities, and international policy institutions.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">France</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Germany</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">United Kingdom</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Belgium</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Switzerland</span>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgb(59, 53, 95)" }}>
                <span className="text-2xl">{"🌎"}</span>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Caribbean & Latin America"}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  Coordinators across the Caribbean and Latin America advance intercultural dialogue, youth empowerment, and peace education in partnership with local institutions.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Haiti</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Jamaica</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Brazil</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Colombia</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">
                    Dominican Republic
                  </span>
                </div>
              </div>
            </article>
            <article className="bg-[#efefef] rounded-lg border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="px-6 py-4 flex items-center gap-3" style={{ background: "rgb(0, 87, 168)" }}>
                <span className="text-2xl">{"🌏"}</span>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Middle East & North Africa"}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  The MENA network focuses on cultural heritage preservation, interfaith dialogue, and educational exchange programs connecting the region with the global UCP community.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Morocco</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Tunisia</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Egypt</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Lebanon</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-[#d0d0d0] text-[#767676]">Jordan</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* What Regional Coordinators Do */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">The Role</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
              What Regional Coordinators Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold text-[#3b355f] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Key Responsibilities
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Organize local and regional UCP events, workshops, and conferences
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Build partnerships with universities, embassies, schools, and community organizations
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Recruit and engage members, volunteers, and program participants
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Represent the UNESCO Center for Peace in your region
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Coordinate with the UCP headquarters team on programs and initiatives
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Promote peace education, cultural exchange, and human rights in your community
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Report on regional activities and contribute to the UCP annual report
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#3b355f] mt-0.5 flex-shrink-0" />
                  Support the Summer Program, Publishing House, and other flagship initiatives
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3b355f] mb-4" style={{ fontFamily: "var(--font-heading)" }}>Qualifications</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#0057a8] mt-0.5 flex-shrink-0" />
                  Demonstrated commitment to peace, education, and human rights
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#0057a8] mt-0.5 flex-shrink-0" />
                  Strong community ties and leadership experience in your region
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#0057a8] mt-0.5 flex-shrink-0" />
                  Ability to communicate effectively in English (additional languages a plus)
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#0057a8] mt-0.5 flex-shrink-0" />
                  Willingness to dedicate time to organizing and representing UCP
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#0057a8] mt-0.5 flex-shrink-0" />
                  Experience in education, diplomacy, civil society, or related fields preferred
                </li>
                <li className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheckBig size={14} className="text-[#0057a8] mt-0.5 flex-shrink-0" />
                  Alignment with UNESCO values and the UCP mission
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white border-t border-[#d0d0d0]">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b355f] border border-[#3b355f] px-4 py-2 rounded hover:bg-[#3b355f] hover:text-white transition-colors" href="/programs">
              Programs Overview{" "}
              <ArrowRight size={13} />
            </Link>
            <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b355f] border border-[#3b355f] px-4 py-2 rounded hover:bg-[#3b355f] hover:text-white transition-colors" href="/summer-program">
              Summer Program 2026{" "}
              <ArrowRight size={13} />
            </Link>
            <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b355f] border border-[#3b355f] px-4 py-2 rounded hover:bg-[#3b355f] hover:text-white transition-colors" href="/publishing-house">
              Publishing House{" "}
              <ArrowRight size={13} />
            </Link>
            <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b355f] border border-[#3b355f] px-4 py-2 rounded hover:bg-[#3b355f] hover:text-white transition-colors" href="/about">
              About UCP{" "}
              <ArrowRight size={13} />
            </Link>
            <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b355f] border border-[#3b355f] px-4 py-2 rounded hover:bg-[#3b355f] hover:text-white transition-colors" href="/contact">
              Contact Us{" "}
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
      {/* Become a Regional Coordinator */}
      <section className="bg-[#3b355f] text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 rounded-full p-4">
              <Mail size={28} className="text-blue-300" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Become a Regional Coordinator
          </h2>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed mb-8">
            We are actively seeking Regional Coordinators in all parts of the world. If you are passionate about peace, education, and human rights, and ready to lead in your community, we want to hear from you. Reach out to express your interest and learn more about joining the network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="inline-flex items-center gap-2 bg-white text-[#3b355f] font-bold text-sm px-6 py-3 rounded hover:bg-blue-50 transition-colors" href="/contact">
              Apply Now{" "}
              <ArrowRight size={16} />
            </Link>
            <Link className="inline-flex items-center gap-2 border border-white text-white font-semibold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors" href="/about">
              Learn About UCP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
