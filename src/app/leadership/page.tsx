import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Guy Djoken, President & Emmett Imani, Deputy Director | UNESCO Center for Peace Leadership"
  },
  description: "Meet Guy Djoken, President and Executive Director of the UNESCO Center for Peace, and Deputy Director, Ambassador Emmett Imani, Head of the Global Publishing Program. Leaders in peace education, human rights, and cultural diplomacy.",
  keywords: "Guy Djoken, Emmett Imani, UNESCO Center for Peace leadership, President UNESCO Center for Peace, Deputy Director UNESCO, Ambassador Emmett Imani, Guy Djoken UNESCO, peace education leaders, UNESCO executive director, Global Publishing Program",
  alternates: {
    canonical: "/leadership"
  },
  openGraph: {
    title: "Guy Djoken, President & Emmett Imani, Deputy Director | UNESCO Center for Peace Leadership",
    description: "Meet Guy Djoken, President and Executive Director of the UNESCO Center for Peace, and Deputy Director, Ambassador Emmett Imani, Head of the Global Publishing Program. Leaders in peace education, human rights, and cultural diplomacy.",
    type: "profile",
    url: "/leadership",
    images: [
      "/sites/unescocp/images/stock/about-hero.jpg"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Guy Djoken, President & Emmett Imani, Deputy Director | UNESCO Center for Peace Leadership",
    description: "Meet Guy Djoken, President and Executive Director of the UNESCO Center for Peace, and Deputy Director, Ambassador Emmett Imani, Head of the Global Publishing Program. Leaders in peace education, human rights, and cultural diplomacy.",
    images: [
      "/sites/unescocp/images/stock/about-hero.jpg"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://unescocp.org/leadership#webpage",
      "name": "Guy Djoken, President & Emmett Imani, Deputy Director | UNESCO Center for Peace Leadership",
      "url": "https://unescocp.org/leadership",
      "description": "Meet Guy Djoken, President and Executive Director of the UNESCO Center for Peace, and Deputy Director, Ambassador Emmett Imani, Head of the Global Publishing Program. Leaders in peace education, human rights, and cultural diplomacy.",
      "isPartOf": {
        "@id": "https://unescocp.org/#website"
      },
      "about": [
        {
          "@id": "https://unescocp.org/#organization"
        },
        {
          "@id": "https://unescocp.org/leadership#guy-djoken"
        },
        {
          "@id": "https://unescocp.org/leadership#emmett-imani"
        }
      ],
      "dateModified": "2026-07-07"
    },
    {
      "@type": "Person",
      "@id": "https://unescocp.org/leadership#guy-djoken",
      "name": "Guy Djoken",
      "givenName": "Guy",
      "familyName": "Djoken",
      "jobTitle": "President and Executive Director",
      "description": "Guy Djoken is President and Executive Director of the UNESCO Center for Peace and Chairman of the U.S. National Commission for UNESCO Clubs, Centers & Associations. A social entrepreneur and civil rights activist, he is a recipient of the Gandhi Peace Award, Nikola Tesla Global Forum White Dove Award, Citibank Community Partner Award, and Justice Thurgood Marshall Award.",
      "image": "https://unescocp.org/assets/images/9b8c123e1754a9ea011f5c031735d448.png",
      "worksFor": {
        "@id": "https://unescocp.org/#organization"
      },
      "affiliation": {
        "@id": "https://unescocp.org/#organization"
      },
      "award": [
        "Gandhi Peace Award",
        "Nikola Tesla Global Forum White Dove Award",
        "Citibank Community Partner Award",
        "Justice Thurgood Marshall Award"
      ],
      "knowsAbout": [
        "Peace Education",
        "Human Rights",
        "Social Justice",
        "International Affairs",
        "Cultural Diplomacy",
        "UNESCO",
        "Diversity Training",
        "Civil Rights"
      ],
      "url": "https://unescocp.org/leadership",
      "sameAs": [
        "https://unescocp.org/leadership",
        "https://unescocp.org/about"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://unescocp.org/leadership#emmett-imani",
      "name": "Emmett Imani",
      "givenName": "Emmett",
      "familyName": "Imani",
      "honorificPrefix": "Ambassador",
      "jobTitle": "Deputy Director and Head of Global Publishing Program",
      "description": "Ambassador Emmett Imani, MBA, MTML, is Deputy Director of the UNESCO Center for Peace and Head of the Global Publishing Program. A geopolitical analyst and distinguished diplomat with expertise in the Middle East, Eurasia, the South Caucasus, international security, cultural diplomacy, and global governance.",
      "image": "https://unescocp.org/airo-assets/images/pages/about/ambassador",
      "worksFor": {
        "@id": "https://unescocp.org/#organization"
      },
      "affiliation": {
        "@id": "https://unescocp.org/#organization"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MBA"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MTML"
        }
      ],
      "knowsAbout": [
        "Geopolitics",
        "International Security",
        "Global Governance",
        "Middle East Affairs",
        "Eurasia",
        "Cultural Diplomacy",
        "Strategic Communications",
        "Global Publishing",
        "Peace Education"
      ],
      "url": "https://unescocp.org/leadership",
      "sameAs": [
        "https://unescocp.org/leadership",
        "https://unescocp.org/publishing-house"
      ]
    }
  ]
};

export default function LeadershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Leadership */}
      <section className="bg-[#3b355f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-[#f0c040] font-semibold mb-3">Our Team</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Leadership</h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Meet Guy Djoken, President and Executive Director, and Deputy Director, Ambassador Emmett Imani — the leaders guiding the UNESCO Center for Peace in its mission to advance education, culture, and peacebuilding worldwide.
          </p>
        </div>
      </section>
      <section className="bg-[#c8102e] py-4">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className="flex-shrink-0 bg-white text-[#c8102e] text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded">
              Announcement
            </span>
            <p className="text-white text-sm leading-snug">
              <strong>President Guy Djoken</strong>
              {" "}launches the International Publishing House.{" "}
              <strong>Deputy Director, Ambassador Emmett Imani</strong>
              {" "}appointed to lead the Global Publishing Program.
            </p>
          </div>
        </div>
      </section>
      {/* Meet Our Leaders */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Meet Our Leaders
            </h2>
            <p className="text-sm text-[#555555] max-w-xl mx-auto leading-relaxed">
              The UNESCO Center for Peace is guided by experienced leaders in international affairs, peace education, and cultural diplomacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article itemScope itemType="https://schema.org/Person" className="bg-white rounded-lg shadow-md border border-[#d0d0d0] overflow-hidden">
              <meta itemProp="url" content="https://unescocp.org/leadership#guy-djoken" />
              <meta itemProp="worksFor" content="UNESCO Center for Peace" />
              <div className="bg-[#3b355f] px-6 py-6 flex items-center gap-5">
                <img alt="President Guy Djoken — President & Executive Director, UNESCO Center for Peace" src="/sites/unescocp/images/guy-djoken.png" itemProp="image" className="w-24 h-24 rounded-full object-cover border-2 border-white flex-shrink-0" loading="eager" width="96" height="96" />
                <div>
                  <h2 itemProp="name" className="text-base font-bold text-white leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                    President Guy Djoken
                  </h2>
                  <p itemProp="jobTitle" className="text-blue-200 text-xs mt-1 leading-snug">
                    {"President & Executive Director, UNESCO Center for Peace"}
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <p itemProp="description" className="text-sm text-[#333333] leading-relaxed">
                  {"Dynamic and motivated MBA graduate, Guy Djoken is Chairman of the U.S. National Commission for UNESCO Clubs, Centers & Associations and Executive Director of the Washington, D.C.-based UNESCO Center for Peace. He is a social entrepreneur and a civil rights activist with extensive public speaking experience in domestic and international settings on social justice and Human Rights. He is known for his constant passion for bridging the gap between the have and the have not, with a documented track record in diversity training, public relations, leadership, international affairs, problem-solving, and a strong background in operational management. His international awards include the Gandhi Peace Award, the Nikola Tesla Global Forum White Dove Award, the Citibank Community Partner Award, and the Justice Thurgood Marshall Award."}
                </p>
                <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
                  <p className="text-xs font-semibold text-[#3b355f] uppercase tracking-wide mb-2">{"Awards & Recognition"}</p>
                  <ul className="flex flex-wrap gap-2">
                    <li itemProp="award" className="text-xs bg-[#efefef] border border-[#d0d0d0] text-[#3b355f] px-2 py-1 rounded">
                      Gandhi Peace Award
                    </li>
                    <li itemProp="award" className="text-xs bg-[#efefef] border border-[#d0d0d0] text-[#3b355f] px-2 py-1 rounded">
                      Nikola Tesla Global Forum White Dove Award
                    </li>
                    <li itemProp="award" className="text-xs bg-[#efefef] border border-[#d0d0d0] text-[#3b355f] px-2 py-1 rounded">
                      Citibank Community Partner Award
                    </li>
                    <li itemProp="award" className="text-xs bg-[#efefef] border border-[#d0d0d0] text-[#3b355f] px-2 py-1 rounded">
                      Justice Thurgood Marshall Award
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Person" className="bg-white rounded-lg shadow-md border border-[#d0d0d0] overflow-hidden">
              <meta itemProp="url" content="https://unescocp.org/leadership#emmett-imani" />
              <meta itemProp="worksFor" content="UNESCO Center for Peace" />
              <div className="bg-[#3b355f] px-6 py-6 flex items-center gap-5">
                <img alt="Deputy Director, Ambassador Emmett Imani — Deputy Director & Head of Global Publishing Program, UNESCO Center for Peace" src="/sites/unescocp/images/ambassador-emmett-imani.jpg" itemProp="image" className="w-24 h-24 rounded-full object-cover border-2 border-white flex-shrink-0" loading="eager" width="96" height="96" />
                <div>
                  <h2 itemProp="name" className="text-base font-bold text-white leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                    Deputy Director, Ambassador Emmett Imani
                  </h2>
                  <p itemProp="jobTitle" className="text-blue-200 text-xs mt-1 leading-snug">
                    {"Deputy Director & Head of Global Publishing Program, UNESCO Center for Peace"}
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <p itemProp="description" className="text-sm text-[#333333] leading-relaxed">
                  Emmett Imani, MBA, MTML, is a geopolitical analyst whose work lies at the intersection of geopolitics, international security, historical memory, and global governance, with a particular focus on the Middle East, Eurasia, the South Caucasus, and emerging multipolar power structures.
                </p>
                <p className="text-sm text-[#333333] leading-relaxed">
                  {"He currently serves as Deputy Director of the UNESCO Center for Peace, where he was appointed to establish and lead the Center's Global Publishing Program. A distinguished diplomat and Ambassador of Peace, Imani brings extensive experience in international affairs, cultural diplomacy, strategic communications, and global publishing, with a strong commitment to advancing peace, justice, education, and intercultural understanding."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Our Goals and Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">USFUCA</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Our Goals and Objectives
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed max-w-2xl">
              A summary of the specific goals and objectives of the U.S. Federation of UNESCO Clubs, Centers and Associations (USFUCA).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Promote UNESCO</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {"Promote UNESCO's areas of work -- education, natural sciences, social and human sciences, culture and communication -- as a strong force in individual and social transformation."}
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Promote the Mission and Goals
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Promote the mission and goals of UNESCO in all areas of the United States of America in concordance with national, regional, local and international development efforts.
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Assist UNESCO</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Assist the UNESCO National Commission of the United States in evolving policies and standards in facilitating the attainment of quality education for all and lifelong learning for sustainable development; advocating for science knowledge and policy for sustainable development; addressing emerging social and ethical challenges; fostering cultural diversity, intercultural dialogue and a culture of peace; contributing to building inclusive knowledge societies through information and communication.
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Establish and Maintain Relationships
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {"Establish and maintain close relationships among government agencies, private and non-government institutions in matters relating to UNESCO's areas of work."}
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">5</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Establish and Implement Projects
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Establish and implement feasible projects and mechanisms for the promotion of networking among institutions for upgrading the professional growth of officers and members of UNESCO Clubs, Centers and Associations in the United States of America.
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Lobby for Laws and Policy
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {"Lobby for laws and policies that will promote the development of UNESCO's areas of work."}
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">7</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Continuing Education
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Mobilize available resources for the conduct of continuing education of officers and members of UNESCO Clubs, Centers and Associations.
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">8</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Advocacy Campaign</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Undertake a nationwide advocacy campaign for the promotion of peace, eradication of poverty, sustainable development and intercultural dialogue through education, natural sciences, social and human sciences, culture, communication, and information.
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">9</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Organize Chapters in All Regions
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Gradually organize chapters in all regions of the country in order to create growing participation in UNESCO areas of work.
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">10</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Relevant Trainings</h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {"Develop and produce relevant training and instructional materials, produce books, manuals and the like on its own in partnership with duly recognized educational institutions in the country or in international arena in order to promote UNESCO's area of work."}
                </p>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-6 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">11</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3b355f] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Close Coordination with International Organizations
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Establish close coordination and linkages with other international organizations particularly the European and North American Federation of UNESCO Clubs, Centers and Associations (EFUCA) and World Federation of UNESCO Clubs, Centers and Associations (WFUCA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Our Mission */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Join Our Mission</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8">
            Be part of a global movement advancing peace, education, and cultural understanding.
          </p>
          <Link href="/join-us" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold text-sm px-7 py-3 rounded transition-colors">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
