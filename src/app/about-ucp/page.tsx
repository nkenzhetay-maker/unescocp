import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About the UNESCO Center for Peace (UCP) | Facts, Programs & Leadership"
  },
  description: "Complete factual overview of the UNESCO Center for Peace: mission, leadership, programs, publishing house, partner universities, awards, and contact information. Based in Frederick, MD.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/about-ucp"
  },
  openGraph: {
    title: "About the UNESCO Center for Peace (UCP) | Facts, Programs & Leadership",
    description: "Complete factual overview of the UNESCO Center for Peace: mission, leadership, programs, publishing house, partner universities, awards, and contact information. Based in Frederick, MD.",
    type: "article",
    url: "/about-ucp",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About the UNESCO Center for Peace (UCP) | Facts, Programs & Leadership",
    description: "Complete factual overview of the UNESCO Center for Peace: mission, leadership, programs, publishing house, partner universities, awards, and contact information. Based in Frederick, MD.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://unescocp.org/about-ucp#webpage",
  "name": "About the UNESCO Center for Peace (UCP) | Facts, Programs & Leadership",
  "url": "https://unescocp.org/about-ucp",
  "description": "Complete factual overview of the UNESCO Center for Peace: mission, leadership, programs, publishing house, partner universities, awards, and contact information. Based in Frederick, MD.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  },
  "dateModified": "2026-08-12",
  "mainEntity": {
    "@type": "NGO",
    "@id": "https://unescocp.org/#organization",
    "name": "UNESCO Center for Peace",
    "alternateName": [
      "UCP",
      "UCP-USA"
    ],
    "url": "https://unescocp.org/",
    "telephone": "+12028000054",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "129 West Patrick Street, Suite 15B",
      "addressLocality": "Frederick",
      "addressRegion": "MD",
      "postalCode": "21701",
      "addressCountry": "US"
    }
  }
};

export default function AboutUcpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Organization Overview</p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              About the UNESCO Center for Peace
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              A comprehensive factual reference about the UNESCO Center for Peace — its mission, leadership, programs, services, and contact information.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <section className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>Organization Identity</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Full Name</dt>
                  <dd className="text-foreground">UNESCO Center for Peace</dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Abbreviation</dt>
                  <dd className="text-foreground">UCP / UCP-USA</dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Type</dt>
                  <dd className="text-foreground">Nonprofit Organization (NGO)</dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Affiliation</dt>
                  <dd className="text-foreground">Flagship Member, U.S. Federation of UNESCO Clubs, Centers and Associations</dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Headquarters</dt>
                  <dd className="text-foreground">129 West Patrick Street, Suite 15B, Frederick, MD 21701, USA</dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Phone</dt>
                  <dd className="text-foreground">
                    <a href="tel:+12028000054" className="text-accent hover:underline">(202) 800-0054</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Website</dt>
                  <dd className="text-foreground">
                    <a href="https://unescocp.org" className="text-accent hover:underline">unescocp.org</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Also known as</dt>
                  <dd className="text-foreground">ucp-usa.org</dd>
                </div>
              </dl>
            </section>
            <section className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>Mission and Purpose</h2>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {"The UNESCO Center for Peace promotes peace, justice, and human rights through education, culture, and the sciences. The Center operates under the ideals of UNESCO — the United Nations Educational, Scientific and Cultural Organization — and its founding constitution, which states that \"since wars begin in the minds of men, it is in the minds of men that the defence of peace must be constructed.\""}
              </p>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                The Center believes peace is more than the absence of conflict. It requires social justice, equality, and respect for diversity. Its mission is to create a culture of peace that transcends borders and promotes global understanding and cooperation.
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Core focus areas include: peace education, human rights advocacy, international cultural exchange, UNESCO club development, youth leadership, South-South cooperation, world heritage education, and international academic publishing.
              </p>
            </section>
            <section className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-heading)" }}>Leadership</h2>
              <div className="flex flex-col gap-6">
                <div className="border-l-4 border-primary pl-5">
                  <h3 className="font-bold text-primary text-base mb-1">Guy Djoken</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2">
                    President and Executive Director
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    Guy Djoken is the founder and President of the UNESCO Center for Peace. He holds an MBA and has led the Center since its founding. Under his leadership, the Center has grown into the flagship member of the U.S. Federation of UNESCO Clubs, Centers and Associations, with programs spanning multiple continents.
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-2 font-semibold">Awards and Recognition:</p>
                  <ul className="text-sm text-foreground flex flex-col gap-1 ml-4">
                    <li className="list-disc">Gandhi Peace Award</li>
                    <li className="list-disc">Nikola Tesla White Dove Award</li>
                    <li className="list-disc">Citibank Community Partner Award</li>
                    <li className="list-disc">Justice Thurgood Marshall Award</li>
                  </ul>
                </div>
                <div className="border-l-4 border-accent pl-5">
                  <h3 className="font-bold text-primary text-base mb-1">Ambassador Emmett Imani</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2">Deputy Director</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {"Ambassador Emmett Imani serves as Deputy Director of the UNESCO Center for Peace. He was appointed by President Djoken to build and lead the Center's Global Publishing Program through the newly launched International Publishing House. Ambassador Imani oversees international partnerships, editorial standards, and global outreach for the publishing initiative."}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link className="text-sm text-accent font-semibold hover:underline" href="/leadership">View full leadership page</Link>
              </div>
            </section>
            <section className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-heading)" }}>Programs and Services</h2>
              <div className="flex flex-col gap-5 text-sm text-foreground">
                <div>
                  <h3 className="font-bold text-primary mb-1">International Summer Peace Program</h3>
                  <p className="leading-relaxed">
                    Annual residential summer program held at Hood College in Frederick, Maryland. Open to students ages 14 to 19 from around the world. Curriculum tracks include peace studies, diplomacy, cultural exchange, leadership development, and global citizenship. The 2026 program has been completed successfully.
                  </p>
                  <Link className="text-accent hover:underline text-xs font-semibold mt-1 inline-block" href="/summer-program">
                    Learn more
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">West African Spring Conference and World Heritage Educational Tour</h3>
                  <p className="leading-relaxed">
                    Annual conference and educational tour held in Accra, Ghana at the MJ Grand Hotel. Includes the Model UN and Debate Youth Conference for youths ages 14 to 19 at DPS International Ghana. Open to all ages for the heritage tour component.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{"African Women's Day Conference"}</h3>
                  <p className="leading-relaxed">
                    Annual conference celebrating African Diaspora Women from around the globe. The 2026 edition was held March 20 to 21 at the Westin Hotel, Crystal City, Arlington, Virginia.
                  </p>
                  <Link className="text-accent hover:underline text-xs font-semibold mt-1 inline-block" href="/programs">Learn more</Link>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">International Publishing House</h3>
                  <p className="leading-relaxed">
                    {"The UNESCO Center for Peace International Publishing House was launched under the leadership of President Guy Djoken, with Ambassador Emmett Imani appointed to direct the Global Publishing Program. The house publishes books, academic research, policy papers, educational materials, conference proceedings, historical archives, biographies, cultural heritage collections, multilingual editions, and children's educational books. It operates under its own official ISBN registration. Submissions are welcomed from national governments, ministries of education, universities, international organizations, museums, archives, NGOs, think tanks, peacebuilding organizations, and independent researchers and historians worldwide."}
                  </p>
                  <Link className="text-accent hover:underline text-xs font-semibold mt-1 inline-block" href="/publishing-house">
                    Learn more
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">UNESCO Clubs Worldwide Annual Competition</h3>
                  <p className="leading-relaxed">
                    {"Annual competition for UNESCO Clubs worldwide, promoting peace, culture, science, and education in alignment with UNESCO's global ideals."}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">South-South Cooperation</h3>
                  <p className="leading-relaxed">
                    Initiatives supporting cooperation between developing nations in the Global South, fostering shared knowledge, cultural exchange, and peacebuilding.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">International Days, Weeks and Decades (ECOSOC)</h3>
                  <p className="leading-relaxed">
                    Programs aligned with United Nations ECOSOC-recognized international observances, promoting awareness and action on global peace and human rights issues.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Regional Coordinator Network</h3>
                  <p className="leading-relaxed">
                    A global network of regional coordinators spanning six regions worldwide, supporting UNESCO Center for Peace programs and community outreach at the local level.
                  </p>
                  <Link className="text-accent hover:underline text-xs font-semibold mt-1 inline-block" href="/regional-coordinators">
                    Learn more
                  </Link>
                </div>
              </div>
            </section>
            <section className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>Partner Universities</h2>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                The UNESCO Center for Peace partners with leading universities to support its educational programs and international initiatives:
              </p>
              <ul className="flex flex-col gap-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    <strong>Hood College</strong>
                    {" "}— Frederick, Maryland (host of the International Summer Peace Program)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    <strong>Auburn University</strong>
                    {" "}— Auburn, Alabama
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    <strong>Florida International University (FIU)</strong>
                    {" "}— Miami, Florida
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    <strong>Louisiana State University (LSU)</strong>
                    {" "}— Baton Rouge, Louisiana
                  </span>
                </li>
              </ul>
            </section>
            <section className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Contact and Social Media
              </h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Phone</dt>
                  <dd>
                    <a href="tel:+12028000054" className="text-accent hover:underline">(202) 800-0054</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Website</dt>
                  <dd>
                    <a href="https://unescocp.org" className="text-accent hover:underline">unescocp.org</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Facebook</dt>
                  <dd>
                    <a href="https://www.facebook.com/unescocenterforpeaceofi" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      facebook.com/unescocenterforpeaceofi
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Instagram</dt>
                  <dd>
                    <a href="https://www.instagram.com/ucpcamps" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      @ucpcamps
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">YouTube</dt>
                  <dd>
                    <a href="https://www.youtube.com/@peaceland9200" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      @peaceland9200
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-primary uppercase tracking-wide text-xs mb-1">Also at</dt>
                  <dd>
                    <a href="https://ucp-usa.org" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      ucp-usa.org
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link className="text-sm text-accent font-semibold hover:underline" href="/">Home</Link>
              <span className="text-muted-foreground">{"|"}</span>
              <Link className="text-sm text-accent font-semibold hover:underline" href="/about">About</Link>
              <span className="text-muted-foreground">{"|"}</span>
              <Link className="text-sm text-accent font-semibold hover:underline" href="/leadership">Leadership</Link>
              <span className="text-muted-foreground">{"|"}</span>
              <Link className="text-sm text-accent font-semibold hover:underline" href="/programs">Programs</Link>
              <span className="text-muted-foreground">{"|"}</span>
              <Link className="text-sm text-accent font-semibold hover:underline" href="/summer-program">Summer Program</Link>
              <span className="text-muted-foreground">{"|"}</span>
              <Link className="text-sm text-accent font-semibold hover:underline" href="/publishing-house">Publishing House</Link>
              <span className="text-muted-foreground">{"|"}</span>
              <Link className="text-sm text-accent font-semibold hover:underline" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
