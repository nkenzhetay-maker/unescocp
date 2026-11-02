import Link from "next/link";
import { ArrowRight, BookOpen, Newspaper } from "lucide-react";
import { ProgramCarousel } from "@/components/sites/unescocp/program-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "UNESCO Center for Peace | Promoting Peace, Justice & Human Rights"
  },
  description: "The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations. Based in Frederick, MD.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "UNESCO Center for Peace | Promoting Peace, Justice & Human Rights",
    description: "The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations. Based in Frederick, MD.",
    type: "website",
    url: "/",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "UNESCO Center for Peace | Promoting Peace, Justice & Human Rights",
    description: "The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences. Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations. Based in Frederick, MD.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://unescocp.org/#website",
      "name": "UNESCO Center for Peace",
      "url": "https://unescocp.org/"
    },
    {
      "@type": "NGO",
      "@id": "https://unescocp.org/#organization",
      "name": "UNESCO Center for Peace",
      "alternateName": [
        "UCP",
        "UCP-USA",
        "UNESCO Center for Peace USA"
      ],
      "url": "https://unescocp.org/",
      "description": "The UNESCO Center for Peace is a nonprofit organization headquartered in Frederick, Maryland, USA. It is the flagship member of the U.S. Federation of UNESCO Clubs, Centers and Associations. The Center promotes peace, justice, human rights, and international understanding through education, culture, and the sciences.",
      "email": "africanwomenday@unescocenterforpeace.org",
      "telephone": "+12028000054",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "129 West Patrick Street, Suite 15B",
        "addressLocality": "Frederick",
        "addressRegion": "MD",
        "postalCode": "21701",
        "addressCountry": "US"
      },
      "foundingDate": "1999",
      "knowsAbout": [
        "Peace Education",
        "Human Rights",
        "International Cultural Exchange",
        "UNESCO Ideals",
        "Conflict Resolution",
        "Sustainable Development",
        "Global Citizenship Education",
        "South-South Cooperation",
        "World Heritage Education",
        "International Publishing"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Programs and Services",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "International Summer Peace Program",
            "description": "Annual residential summer program at Hood College, Frederick, MD, for students ages 14-19 from around the world. Curriculum tracks include peace studies, diplomacy, cultural exchange, and leadership.",
            "url": "https://unescocp.org/summer-program",
            "provider": {
              "@id": "https://unescocp.org/#organization"
            }
          },
          {
            "@type": "Event",
            "name": "West African Spring Conference and World Heritage Educational Tour",
            "description": "Annual conference and educational tour held in Accra, Ghana. Includes Model UN and Debate Youth Conference for youths ages 14-19.",
            "location": {
              "@type": "Place",
              "name": "MJ Grand Hotel, Accra, Ghana"
            },
            "url": "https://unescocp.org/programs"
          },
          {
            "@type": "Event",
            "name": "African Women's Day Conference",
            "description": "Annual conference celebrating African Diaspora Women from around the globe, held at the Westin Hotel, Crystal City, Arlington, VA.",
            "location": {
              "@type": "Place",
              "name": "Westin Hotel, Crystal City, Arlington, VA"
            },
            "url": "https://unescocp.org/programs"
          },
          {
            "@type": "Service",
            "name": "International Publishing House",
            "description": "UNESCO Center for Peace International Publishing House publishes books, academic research, policy papers, educational materials, conference proceedings, historical archives, biographies, cultural heritage collections, and children's educational books under its own ISBN registration.",
            "url": "https://unescocp.org/publishing-house",
            "provider": {
              "@id": "https://unescocp.org/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "UNESCO Clubs Worldwide Annual Competition",
            "description": "Annual competition for UNESCO Clubs worldwide promoting peace, culture, and education.",
            "url": "https://unescocp.org/programs",
            "provider": {
              "@id": "https://unescocp.org/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "Regional Coordinator Network",
            "description": "Global network of regional coordinators across six regions supporting UNESCO Center for Peace programs and initiatives worldwide.",
            "url": "https://unescocp.org/regional-coordinators",
            "provider": {
              "@id": "https://unescocp.org/#organization"
            }
          }
        ]
      },
      "member": [
        {
          "@type": "Person",
          "@id": "https://unescocp.org/#person-djoken",
          "name": "Guy Djoken",
          "jobTitle": "President and Executive Director",
          "url": "https://unescocp.org/leadership",
          "award": [
            "Gandhi Peace Award",
            "Nikola Tesla White Dove Award",
            "Citibank Community Partner Award",
            "Justice Thurgood Marshall Award"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Hood College"
          }
        },
        {
          "@type": "Person",
          "@id": "https://unescocp.org/#person-imani",
          "name": "Emmett Imani",
          "honorificPrefix": "Ambassador",
          "jobTitle": "Deputy Director and Director of Global Publishing Program",
          "url": "https://unescocp.org/leadership"
        }
      ],
      "affiliation": [
        {
          "@type": "Organization",
          "name": "U.S. Federation of UNESCO Clubs, Centers and Associations"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Hood College",
          "url": "https://www.hood.edu"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Auburn University",
          "url": "https://www.auburn.edu"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Florida International University",
          "url": "https://www.fiu.edu"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Louisiana State University",
          "url": "https://www.lsu.edu"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/unescocenterforpeaceofi",
        "https://www.instagram.com/ucpcamps",
        "https://www.youtube.com/@peaceland9200",
        "https://ucp-usa.org/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://unescocp.org/#webpage",
      "url": "https://unescocp.org/",
      "name": "UNESCO Center for Peace | Promoting Peace, Justice & Human Rights",
      "isPartOf": {
        "@id": "https://unescocp.org/#website"
      },
      "about": {
        "@id": "https://unescocp.org/#organization"
      },
      "datePublished": "2023-01-01",
      "dateModified": "2026-08-12"
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-[#c8102e] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <span className="flex-shrink-0 bg-white text-[#c8102e] text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded">
              Announcement
            </span>
            <div className="text-sm leading-snug">
              <span className="font-bold">Under The Leadership of President Guy Djorken</span>
              {" "}UNESCO Center for Peace Launches Its International Publishing House.{" "}
              <span className="font-semibold">
                {"Deputy Director, Ambassador Emmett Imani Appointed to Build and Lead the Center's Global Publishing Program."}
              </span>
              {" "}
              <Link className="underline font-bold hover:text-red-200 transition-colors" href="/publishing-house">{"Read more →"}</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome to the UNESCO Center for Peace */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgb(59, 53, 95) 0%, rgb(29, 26, 46) 100%)" }}>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-xs uppercase tracking-widest text-blue-300 mb-3 font-semibold">{"Peace · Justice · Human Rights"}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Welcome to the UNESCO Center for Peace
              </h1>
              <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences. Peace is more than the absence of conflict; it requires social justice, equality, and respect for diversity.
              </p>
              <p className="text-sm text-blue-200 leading-relaxed mb-8">
                We aim to create a culture of peace that transcends borders and promotes global understanding and cooperation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="inline-flex items-center gap-2 bg-white text-[#3b355f] font-bold text-sm px-6 py-3 rounded hover:bg-blue-50 transition-colors" href="/programs">
                  Explore Our Programs{" "}
                  <ArrowRight size={16} />
                </Link>
                <Link className="inline-flex items-center gap-2 border border-white text-white font-semibold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors" href="/join-us">
                  Join Us
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white">
              <img alt="U.S. Federation of Clubs & Associations for UNESCO" src="/sites/unescocp/logo-us-federation.png" className="w-full h-72 md:h-96 object-contain p-8 md:p-12" loading="eager" fetchPriority="high" width="500" height="471" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#efefef]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>
      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-1">Our Work</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
                Featured Programs
              </h2>
            </div>
            <Link className="text-sm text-[#0057a8] font-semibold hover:underline flex items-center gap-1" href="/programs">
              View All{" "}
              <ArrowRight size={14} />
            </Link>
          </div>
          <ProgramCarousel />
        </div>
      </section>
      <section className="bg-[#3b355f] text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="w-12 h-1 bg-blue-300 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            {"\"We Craft the Tools and Create the Conditions for Civic Engagement to Thrive\""}
          </blockquote>
          <p className="text-blue-200 text-base leading-relaxed">
            {"Our global community cannot flourish without a shared vision of what's possible, and processes that are coordinated, efficient, and inclusive. The UNESCO Center for Peace is committed to providing the tools, insights, and connections needed to ensure the social sector continues to grow and innovate."}
          </p>
          <div className="w-12 h-1 bg-blue-300 mx-auto mt-6" />
        </div>
      </section>
      {/* UNESCO Center for Peace Launches Its International Publishin */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen size={20} className="text-[#c8102e]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#c8102e]">Major Announcement</span>
            </div>
            <div className="bg-white border-l-4 border-[#3b355f] rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-[#3b355f] flex flex-col items-center justify-center p-8">
                  <img alt="President Guy Djorken" src="/sites/unescocp/images/guy-djoken.png" className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mb-4" loading="lazy" />
                  <p className="text-white font-bold text-center text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                    President Guy Djorken
                  </p>
                  <p className="text-blue-200 text-xs text-center mt-1">UNESCO Center for Peace</p>
                </div>
                <div className="md:col-span-2 p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-[#3b355f] mb-3 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    UNESCO Center for Peace Launches Its International Publishing House
                  </h2>
                  <p className="text-[#333333] text-sm leading-relaxed mb-4">
                    Under the leadership of{" "}
                    <strong>President Guy Djorken</strong>
                    , the UNESCO Center for Peace has officially launched its International Publishing House, a landmark initiative to amplify voices for peace, justice, and human rights on a global scale.
                  </p>
                  <div className="bg-[#efefef] rounded p-4 mb-4">
                    <p className="text-sm text-[#333333] leading-relaxed">
                      <strong>Deputy Director, Ambassador Emmett Imani</strong>
                      {" "}{"has been appointed to build and lead the Center's Global Publishing Program, bringing distinguished diplomatic experience and a deep commitment to international education and cultural exchange."}
                    </p>
                  </div>
                  <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#0057a8] hover:underline" href="/publishing-house">
                    Read the full announcement{" "}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Summer Program 2026 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">July 19 – August 1, 2026</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Summer Program 2026
              </h2>
              <p className="text-[#333333] text-sm leading-relaxed mb-6">
                Join future peacemakers from around the world for two transformative weeks exploring science, human rights, cultural identity, and intercultural communication. Open to students and educators committed to building a more just and peaceful world.
              </p>
              <Link className="inline-flex items-center gap-2 bg-[#3b355f] text-white font-bold text-sm px-6 py-3 rounded hover:bg-[#1d1a2e] transition-colors" href="/summer-program">
                Register Now{" "}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img alt="Students at international summer program" src="/sites/unescocp/images/stock/home-summer-program.jpg" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      {/* Latest News */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-1">Stay Informed</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>Latest News</h2>
            </div>
            <Newspaper size={28} className="text-[#3b355f] opacity-30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-[#3b355f] px-5 py-3">
                <time className="text-xs text-blue-200 font-semibold uppercase tracking-wide">December 7, 2022</time>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  Decision of the 40th Session of the Executive Board of WFUCA
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  The 40th session of the Executive Board of WFUCA took place online on 5 December 2022. Mr. Mustapha Badreddine (Lebanon) was unanimously elected as the new Acting President of WFUCA. The World Congress will be held in the Republic of Korea in the first half of 2023, hosted by KNFACU.
                </p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-sm border border-[#d0d0d0] overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-[#0057a8] px-5 py-3">
                <time className="text-xs text-blue-100 font-semibold uppercase tracking-wide">2023</time>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-[#3b355f] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  USAID Director Cheryl Anderson at National Merit Scholarship Week 2023
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  Cheryl Anderson participated in the second edition of the National Merit Scholarship Week 2023. Congratulations to all contestants and to Miss Mathematics! #USinGuinea
                </p>
                <a href="https://ucp-usa.org/wp-content/uploads/2023/01/R4P-Press-Release-FINAL-v-TMT.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#0057a8] hover:underline">
                  Hip-Hop Raps Peace Press Release{" "}
                  <ArrowRight size={12} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Our Partner Universities */}
      <section className="py-14 bg-white border-t border-[#d0d0d0]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Academic Partners</p>
          <h2 className="text-xl md:text-2xl font-bold text-[#3b355f] mb-10" style={{ fontFamily: "var(--font-heading)" }}>
            Our Partner Universities
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
    </>
  );
}
