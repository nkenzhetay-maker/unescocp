import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { NetlifyForm } from "@/components/sites/unescocp/netlify-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | UNESCO Center for Peace"
  },
  description: "Get in touch with the UNESCO Center for Peace. Located at 129 West Patrick Street, Suite 15B, Frederick, MD 21701. Call (202) 800-0054 or email us today.",
  keywords: "UNESCO Center for Peace, Guy Djoken, Emmett Imani, Deputy Director UNESCO, President UNESCO Center for Peace, peace education, human rights, Frederick MD, UNESCO clubs, peacebuilding, cultural diplomacy, Global Publishing Program, Ambassador Emmett Imani, Guy Djoken UNESCO",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Us | UNESCO Center for Peace",
    description: "Get in touch with the UNESCO Center for Peace. Located at 129 West Patrick Street, Suite 15B, Frederick, MD 21701. Call (202) 800-0054 or email us today.",
    type: "website",
    url: "/contact",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | UNESCO Center for Peace",
    description: "Get in touch with the UNESCO Center for Peace. Located at 129 West Patrick Street, Suite 15B, Frederick, MD 21701. Call (202) 800-0054 or email us today.",
    images: [
      "/sites/unescocp/logo-us-federation.png"
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://unescocp.org/contact#webpage",
  "name": "Contact Us | UNESCO Center for Peace",
  "url": "https://unescocp.org/contact",
  "description": "Get in touch with the UNESCO Center for Peace. Located at 129 West Patrick Street, Suite 15B, Frederick, MD 21701. Call (202) 800-0054 or email us today.",
  "isPartOf": {
    "@id": "https://unescocp.org/#website"
  },
  "about": {
    "@id": "https://unescocp.org/#organization"
  }
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Contact Us */}
      <section className="bg-[#3b355f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-[#f0c040] font-semibold mb-3">UNESCO Center for Peace</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our programs and initiatives.
          </p>
        </div>
      </section>
      {/* Get in Touch */}
      <section className="py-16 bg-[#efefef]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-bold text-[#3b355f] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Get in Touch</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#767676] mb-1">Address</p>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        129 West Patrick Street, Suite 15B
                        <br />
                        Frederick, MD 21701
                        <br />
                        United States of America
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#767676] mb-1">Phone</p>
                      <a href="tel:+12028000054" className="text-sm text-[#0057a8] hover:underline font-semibold">(202) 800-0054</a>
                      <br />
                      <a href="tel:+12405004787" className="text-sm text-[#0057a8] hover:underline">+1 240.500.4787</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3b355f] flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#767676] mb-1">Email</p>
                      <a href="mailto:contact@unescocenterforpeace.org" className="text-sm text-[#0057a8] hover:underline break-all">
                        contact@unescocenterforpeace.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#767676] mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/unescocenterforpeace" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#3b355f] hover:bg-[#0057a8] text-white flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/unescocenterforpeace" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#3b355f] hover:bg-[#0057a8] text-white flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@unescocenterforpeace" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#3b355f] hover:bg-[#0057a8] text-white flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#767676] mb-3">Quick Links</p>
                <div className="flex flex-col gap-2">
                  <Link href="/about" className="text-sm text-[#0057a8] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} className="text-[#c8102e]" />
                    About Us
                  </Link>
                  <Link href="/programs" className="text-sm text-[#0057a8] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} className="text-[#c8102e]" />
                    Programs
                  </Link>
                  <Link href="/summer-program" className="text-sm text-[#0057a8] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} className="text-[#c8102e]" />
                    Summer Program
                  </Link>
                  <Link href="/regional-coordinators" className="text-sm text-[#0057a8] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} className="text-[#c8102e]" />
                    Regional Coordinators
                  </Link>
                  <Link href="/resources" className="text-sm text-[#0057a8] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} className="text-[#c8102e]" />
                    Resources
                  </Link>
                  <Link href="/join-us" className="text-sm text-[#0057a8] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} className="text-[#c8102e]" />
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-[#d0d0d0] p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#3b355f] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Send Us a Message</h2>
              <NetlifyForm name="contact" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                      Name{" "}
                      <span className="text-[#c8102e]">*</span>
                    </label>
                    <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0057a8]" placeholder="Your full name" type="text" name="name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                      Email{" "}
                      <span className="text-[#c8102e]">*</span>
                    </label>
                    <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0057a8]" placeholder="your@email.com" type="email" name="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3b355f] mb-1">Phone</label>
                    <input className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0057a8]" placeholder="+1 (000) 000-0000" type="tel" name="phone" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                      Subject{" "}
                      <span className="text-[#c8102e]">*</span>
                    </label>
                    <input required className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0057a8]" placeholder="How can we help?" type="text" name="subject" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3b355f] mb-1">
                    Message{" "}
                    <span className="text-[#c8102e]">*</span>
                  </label>
                  <textarea required rows={5} className="w-full border border-[#d0d0d0] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0057a8] resize-none" placeholder="Tell us about your inquiry..." name="message" />
                </div>
                <button type="submit" className="w-full bg-[#3b355f] hover:bg-[#2e2a4a] text-white font-bold text-sm py-3 rounded transition-colors flex items-center justify-center gap-2">
                  Send Message{" "}
                  <ArrowRight size={15} />
                </button>
              </NetlifyForm>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <iframe title="UNESCO Center for Peace location" src="https://www.google.com/maps?q=129+W+Patrick+St,+Suite+15B,+Frederick,+MD+21701&output=embed" width="100%" height="360" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: "0px", display: "block" }} />
      </section>
      {/* Support Our Mission */}
      <section className="bg-[#3b355f] text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Support Our Mission</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8">
            Your contribution helps us advance peace, justice, and human rights through education, culture, and the sciences worldwide.
          </p>
          <a href="https://payment.flywire.com/pay/payment?recipient=UZC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold text-sm px-7 py-3 rounded transition-colors">
            Donate Now{" "}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
