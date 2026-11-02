import { ArrowRight, Briefcase, Building2, CircleCheck, GraduationCap, Heart, House, Landmark, School, Users } from "lucide-react";
import { NetlifyForm } from "@/components/sites/unescocp/netlify-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Join Us | UNESCO Center for Peace"
  },
  description: "Join the UNESCO Center for Peace as a member, partner, or sponsor. Start a UNESCO club, donate, or get involved to help create positive change in the world.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/join-us"
  },
  openGraph: {
    title: "Join Us | UNESCO Center for Peace",
    description: "Join the UNESCO Center for Peace as a member, partner, or sponsor. Start a UNESCO club, donate, or get involved to help create positive change in the world.",
    type: "website",
    url: "/join-us",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Us | UNESCO Center for Peace",
    description: "Join the UNESCO Center for Peace as a member, partner, or sponsor. Start a UNESCO club, donate, or get involved to help create positive change in the world.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://unescocp.org/join-us#webpage",
  "name": "Join Us | UNESCO Center for Peace",
  "url": "https://unescocp.org/join-us",
  "description": "Join the UNESCO Center for Peace as a member, partner, or sponsor. Start a UNESCO club, donate, or get involved to help create positive change in the world.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function JoinUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Join Us */}
      <section className="bg-[#3b355f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-[#f0c040] font-semibold mb-3">Get Involved</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Join Us</h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Make a positive change in the world. There are many ways to support the mission and ideals of the United States Federation of UNESCO Clubs, Centers and Associations as a member, partner, or sponsor.
          </p>
        </div>
      </section>
      {/* Anyone Can Participate */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Anyone Can Participate
          </h2>
          <p className="text-sm text-[#555555] text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            We welcome everyone to contact us to discuss the many opportunities to create positive change together.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <Users size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Individuals</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <Users size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Small Groups of People</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <Heart size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Not-for-Profits</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <School size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">K-12 Schools</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <GraduationCap size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Colleges and Universities</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <Briefcase size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Small Businesses</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <Building2 size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Large Corporations</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <Landmark size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Government Agencies</span>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#0057a8] transition-all">
              <span className="text-[#0057a8]">
                <House size={20} />
              </span>
              <span className="text-sm font-semibold text-[#3b355f]">Families</span>
            </div>
          </div>
        </div>
      </section>
      {/* Donate to Our Mission */}
      <section className="py-16 bg-[#c8102e] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Donate to Our Mission</h2>
              <p className="text-red-100 leading-relaxed text-sm md:text-base">
                Thank you for donating to the US Federation of UNESCO Clubs, Centers and Associations. You are helping us take the next step towards furthering world peace through education, science, and communication.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="https://payment.flywire.com/pay/payment?recipient=UZC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#c8102e] font-bold text-sm px-8 py-3 rounded hover:bg-red-50 transition-colors">
                Donate Now{" "}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Form a UNESCO Club in the U.S. */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#c8102e] font-semibold mb-2">Start a Club</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Form a UNESCO Club in the U.S.
              </h2>
              <p className="text-sm text-[#333333] leading-relaxed mb-4">
                As a Member State of UNESCO, the U.S. is eligible to host UNESCO clubs. These clubs take a variety of forms and are able to tap into the global network of UNESCO clubs, centers, and associations.
              </p>
              <p className="text-sm text-[#333333] leading-relaxed mb-4">
                The Working Group for UNESCO Clubs, Centers, and Associations works to coordinate UNESCO Clubs, Centers, and Associations in the United States as an ad hoc group under the U.S. National Commission for UNESCO.
              </p>
              <p className="text-sm text-[#333333] leading-relaxed mb-6">
                To form a UNESCO club, please attach a copy of your bylaws (if any) and executive committee members and submit the full application to:
              </p>
              <div className="bg-[#efefef] rounded-lg p-5 border border-[#d0d0d0] text-sm space-y-2">
                <p className="font-bold text-[#3b355f]">Mr. Guy Djoken</p>
                <p className="text-[#555555]">Chair, U.S. UNESCO Working Group</p>
                <p className="text-[#555555]">{"Tel: 240-415-0174 | Fax: 240-536-9199"}</p>
                <a href="mailto:USclubsworkinggroup@unescocenterforpeace.org" className="text-[#0057a8] hover:underline break-all block">
                  USclubsworkinggroup@unescocenterforpeace.org
                </a>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheck size={15} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                  Open to all U.S.-based organizations
                </div>
                <div className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheck size={15} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                  Tap into the global UNESCO network
                </div>
                <div className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheck size={15} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                  No official government endorsement required
                </div>
                <div className="flex items-start gap-2 text-sm text-[#333333]">
                  <CircleCheck size={15} className="text-[#0057a8] flex-shrink-0 mt-0.5" />
                  Clubs are self-governed and self-funded
                </div>
              </div>
            </div>
            <div className="bg-[#efefef] rounded-lg border border-[#d0d0d0] p-7">
              <h3 className="text-lg font-bold text-[#3b355f] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Proposed Club Information
              </h3>
              <NetlifyForm name="membership-application" className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Club Name{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="text" name="clubName" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Type{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 text-sm text-[#333333] cursor-pointer">
                      <input className="accent-[#0057a8]" type="radio" value="Club" defaultChecked name="clubType" />
                      Club
                    </label>
                    <label className="flex items-center gap-1.5 text-sm text-[#333333] cursor-pointer">
                      <input className="accent-[#0057a8]" type="radio" value="Center" name="clubType" />
                      Center
                    </label>
                    <label className="flex items-center gap-1.5 text-sm text-[#333333] cursor-pointer">
                      <input className="accent-[#0057a8]" type="radio" value="Association" name="clubType" />
                      Association
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Date Formed{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="date" name="dateFormed" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Club Leader{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="text" name="clubLeader" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Contact Address{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="text" name="contactAddress" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Telephone Number{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="tel" name="telephoneNumber" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Website{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="url" name="website" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Email Address{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="email" name="emailAddress" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Advisor Name{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="text" name="advisorName" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Advisor Email{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8]" type="email" name="advisorEmail" />
                </div>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#3b355f] mb-3">Please provide short answers to the following questions:</p>
                  <div className="mb-4">
                    <label className="block text-xs text-[#555555] mb-1">1) What is the Mission of your organization?</label>
                    <textarea rows={2} className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8] resize-none" name="question1" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs text-[#555555] mb-1">
                      2) What are the priority areas of your club? What are your members interested in?
                    </label>
                    <textarea rows={2} className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8] resize-none" name="question2" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs text-[#555555] mb-1">
                      3) What are some possible projects and activities of your club?
                    </label>
                    <textarea rows={2} className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8] resize-none" name="question3" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs text-[#555555] mb-1">
                      4) What is the administrative structure of your club and, if applicable, how is it funded?
                    </label>
                    <textarea rows={2} className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8] resize-none" name="question4" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs text-[#555555] mb-1">
                      5) What are some of the goals of your club? What achievements do you expect in the coming year?
                    </label>
                    <textarea rows={2} className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0057a8] resize-none" name="question5" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#3b355f] hover:bg-[#2e2a4a] text-white font-bold text-sm py-3 rounded transition-colors flex items-center justify-center gap-2">
                  Submit Application{" "}
                  <ArrowRight size={15} />
                </button>
              </NetlifyForm>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Make a Difference? */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to Make a Difference?</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8">
            Contact us today to learn more about membership, partnership, and sponsorship opportunities with the UNESCO Center for Peace.
          </p>
          <a href="mailto:USclubsworkinggroup@unescocenterforpeace.org" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold text-sm px-7 py-3 rounded transition-colors">
            Get in Touch{" "}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
