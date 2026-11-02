import Link from "next/link";
import { ArrowRight, Award, BookOpen, Globe, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About UNESCO Center for Peace | Mission, Leadership & History"
  },
  description: "Learn about the UNESCO Center for Peace — our mission to promote peace, justice, and human rights through education, culture, and science. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About UNESCO Center for Peace | Mission, Leadership & History",
    description: "Learn about the UNESCO Center for Peace — our mission to promote peace, justice, and human rights through education, culture, and science. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations.",
    type: "website",
    url: "/about",
    images: [
      "/sites/unescocp/images/stock/about-hero.jpg"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About UNESCO Center for Peace | Mission, Leadership & History",
    description: "Learn about the UNESCO Center for Peace — our mission to promote peace, justice, and human rights through education, culture, and science. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations.",
    images: [
      "/sites/unescocp/images/stock/about-hero.jpg"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://unescocp.org/about#webpage",
  "name": "About UNESCO Center for Peace | Mission, Leadership & History",
  "url": "https://unescocp.org/about",
  "description": "Learn about the UNESCO Center for Peace — our mission to promote peace, justice, and human rights through education, culture, and science. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* About the UNESCO Center for Peace */}
      <section className="relative overflow-hidden">
        <img alt="UNESCO international diplomacy and peace" src="/sites/unescocp/images/stock/about-hero.jpg" className="w-full h-56 md:h-72 object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1a2e]/90 via-[#3b355f]/65 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-2">Who We Are</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              About the UNESCO Center for Peace
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
              {"Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations"}
            </p>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Our Purpose</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                {"Mission & Vision"}
              </h2>
              <p className="text-[#333333] text-sm leading-relaxed mb-4">
                The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences. We believe that peace is more than the absence of conflict; it requires social justice, equality, and respect for diversity.
              </p>
              <p className="text-[#333333] text-sm leading-relaxed mb-4">
                Our vision is a world where every person has access to quality education, lives free from discrimination, and participates fully in the cultural and scientific life of their community and the global society.
              </p>
              <p className="text-[#333333] text-sm leading-relaxed">
                {"As a Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations, we work in alignment with UNESCO's global mandate to build the defenses of peace in the minds of people."}
              </p>
            </div>
            <div className="bg-[#3b355f] text-white rounded-lg p-8">
              <div className="w-10 h-1 bg-blue-300 mb-6" />
              <blockquote className="text-lg md:text-xl font-bold leading-snug mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                {"\"Since wars begin in the minds of men, it is in the minds of men that the defenses of peace must be constructed.\""}
              </blockquote>
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest">UNESCO Constitution, 1945</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Four Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">What Guides Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
              Our Four Pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#efefef] rounded-lg p-6 border-t-4 border-[#3b355f] hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-3 text-[#3b355f]">
                <Globe size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>{"Peace & Security"}</h3>
              <p className="text-xs text-[#333333] leading-relaxed">
                Promoting dialogue, conflict prevention, and reconciliation across communities and nations through education and cultural exchange.
              </p>
            </div>
            <div className="bg-[#efefef] rounded-lg p-6 border-t-4 border-[#3b355f] hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-3 text-[#3b355f]">
                <BookOpen size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {"Education & Science"}
              </h3>
              <p className="text-xs text-[#333333] leading-relaxed">
                Advancing quality education and scientific cooperation as foundations for sustainable peace and human development.
              </p>
            </div>
            <div className="bg-[#efefef] rounded-lg p-6 border-t-4 border-[#3b355f] hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-3 text-[#3b355f]">
                <Users size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {"Culture & Diversity"}
              </h3>
              <p className="text-xs text-[#333333] leading-relaxed">
                Celebrating cultural heritage and diversity as sources of strength, mutual respect, and intercultural understanding.
              </p>
            </div>
            <div className="bg-[#efefef] rounded-lg p-6 border-t-4 border-[#3b355f] hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-3 text-[#3b355f]">
                <Award size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Human Rights</h3>
              <p className="text-xs text-[#333333] leading-relaxed">
                Upholding the universal values of dignity, justice, and equality as enshrined in the UNESCO Constitution and the UN Charter.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership */}
      <section className="py-12 bg-[#3b355f]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-2">Our Team</p>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Leadership</h2>
          <p className="text-blue-200 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
            Meet the dedicated leaders guiding the UNESCO Center for Peace in its mission to advance education, culture, and peacebuilding worldwide.
          </p>
          <Link className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold text-sm px-6 py-3 rounded transition-colors" href="/leadership">
            Meet Our Leaders{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      {/* History & Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Our Story</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
              {"History & Background"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-sm text-[#333333] leading-relaxed">
                {"The UNESCO Center for Peace was established to serve as a bridge between the global mandate of UNESCO and the communities, schools, and organizations across the United States and beyond. As a Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations, the Center operates in alignment with UNESCO's mission to contribute to peace and security by promoting collaboration among nations through education, science, and culture."}
              </p>
              <p className="text-sm text-[#333333] leading-relaxed">
                Over the years, the Center has grown into a dynamic institution hosting international conferences, youth programs, scholarship initiatives, and cultural exchanges. Its programs span West Africa, the Americas, and beyond, connecting educators, students, diplomats, and community leaders in a shared commitment to peace.
              </p>
              <p className="text-sm text-[#333333] leading-relaxed">
                {"The launch of the International Publishing House marks a new chapter in the Center's history, expanding its capacity to produce and disseminate knowledge, research, and creative works that advance the cause of peace and human rights worldwide."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-right">
                  <span className="text-xs font-bold text-[#3b355f] uppercase tracking-wide">2010s</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3b355f] mt-0.5" />
                  <div className="w-px flex-1 bg-[#d0d0d0] mt-1" />
                </div>
                <p className="text-sm text-[#333333] leading-relaxed pb-4">
                  {"UNESCO Center for Peace established as a Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations."}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-right">
                  <span className="text-xs font-bold text-[#3b355f] uppercase tracking-wide">2022</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3b355f] mt-0.5" />
                  <div className="w-px flex-1 bg-[#d0d0d0] mt-1" />
                </div>
                <p className="text-sm text-[#333333] leading-relaxed pb-4">
                  Participation in the 40th Session of the Executive Board of WFUCA; expansion of international partnerships.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-right">
                  <span className="text-xs font-bold text-[#3b355f] uppercase tracking-wide">2023</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3b355f] mt-0.5" />
                  <div className="w-px flex-1 bg-[#d0d0d0] mt-1" />
                </div>
                <p className="text-sm text-[#333333] leading-relaxed pb-4">
                  National Merit Scholarship Week 2023 with USAID Director Cheryl Anderson; Hip-Hop Raps Peace initiative launched.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-right">
                  <span className="text-xs font-bold text-[#3b355f] uppercase tracking-wide">2025</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3b355f] mt-0.5" />
                  <div className="w-px flex-1 bg-[#d0d0d0] mt-1" />
                </div>
                <p className="text-sm text-[#333333] leading-relaxed pb-4">
                  {"UCP West African Spring Conference, Accra, Ghana; Model UN & Debate Youth Conference."}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-right">
                  <span className="text-xs font-bold text-[#3b355f] uppercase tracking-wide">2026</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3b355f] mt-0.5" />
                  <div className="w-px flex-1 bg-[#d0d0d0] mt-1" />
                </div>
                <p className="text-sm text-[#333333] leading-relaxed pb-4">
                  International Publishing House launched under President Djorken; Ambassador Imani appointed Deputy Director.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The United States and UNESCO */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="rounded-lg overflow-hidden shadow-md border border-[#d0d0d0]">
              <img alt="Flags of member states at the United Nations" src="/sites/unescocp/images/united-nations-flags.jpg" className="w-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#c8102e] font-semibold mb-2">Historical Context</p>
              <h2 className="text-xl md:text-2xl font-bold text-[#3b355f] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                The United States and UNESCO
              </h2>
              <div className="flex flex-col gap-4 text-sm text-[#333333] leading-relaxed">
                <p>
                  The United States was an important part of the creation of the United Nations Educational, Scientific, Cultural Organization (UNESCO) that was founded after World War II on 16 November 1945 to contribute to peace and security. Collaboration among nations through education, science and culture remains a cornerstone of a peaceful world order.
                </p>
                <p>
                  The United States joined UNESCO at its founding but later withdrew in 1984 because of a growing disparity between U.S. foreign policy and UNESCO goals. After an almost twenty-year absence from the organization, the United States rejoined the organization in October 2003.
                </p>
                <p>
                  In 2011, Mr. Guy Djoken was formally appointed by the U.S. National Commission for UNESCO as the Chairman of the United States National Commission for UNESCO Clubs, Centers and Associations in his capacity as Executive Director of UNESCO Center for Peace.
                </p>
                <p>
                  {"As Chairman of the U.S. Working Group for UNESCO Clubs, Centers and Associations, he successfully led the return of the U.S. UNESCO Clubs movement to the World Federation of UNESCO Clubs, Centers and Associations (WFUCA) in August 2011 during the organization's 8th World Congress and 30th Anniversary in Hanoi, Vietnam. In December 2012, he also oversaw U.S. Admission to the European and North American Federation of UNESCO Clubs, Centers and Associations during the organization's annual meeting in Bucharest, Romania."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner Universities */}
      <section className="py-14 bg-[#efefef] border-t border-[#d0d0d0]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Academic Partners</p>
          <h2 className="text-xl md:text-2xl font-bold text-[#3b355f] mb-10" style={{ fontFamily: "var(--font-heading)" }}>
            Partner Universities
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="group">
              <img alt="Auburn University" src="/sites/unescocp/images/partners/auburn-university.png" className="h-24 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" width="120" height="120" />
            </div>
            <div className="group">
              <img alt="Florida International University" src="/sites/unescocp/images/partners/florida-international-university.png" className="h-24 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" width="120" height="120" />
            </div>
            <div className="group">
              <img alt="Louisiana State University" src="/sites/unescocp/images/partners/louisiana-state-university.jpg" className="h-24 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" width="120" height="120" />
            </div>
          </div>
        </div>
      </section>
      {/* Join Our Global Community */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Join Our Global Community</h2>
          <p className="text-blue-200 text-sm md:text-base leading-relaxed mb-8">
            Whether you are an educator, student, diplomat, or community leader, there is a place for you in the UNESCO Center for Peace. Explore our programs or reach out to get involved.
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
