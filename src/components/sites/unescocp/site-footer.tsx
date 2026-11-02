import Link from "next/link";
import { Mail } from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/programs", label: "Programs" },
  { href: "/summer-program", label: "Summer Program" },
  { href: "/resources", label: "Resources" },
  { href: "/join-us", label: "Join Us" },
];

const EMAILS = [
  "africanwomenday@unescocenterforpeace.org",
  "USclubsworkinggroup@unescocenterforpeace.org",
  "sguzman@unescocenterforpeace.org",
];

export function SiteFooter() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                alt="U.S. Federation of Clubs & Associations for UNESCO"
                src="/sites/unescocp/logo-us-federation.png"
                className="h-20 w-auto rounded bg-white p-1"
                width="500"
                height="471"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {"Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations"}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-3">
              Please see our activities in our announcement outlet:{" "}
              <a href="https://ucp-usa.org/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white underline transition-colors">
                https://ucp-usa.org/
              </a>
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/unescocenterforpeaceofi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ucpcamps" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@peaceland9200" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-gray-300 hover:text-white transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="tel:+12028000054" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact: (202) 800-0054
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              {EMAILS.map((email) => (
                <li key={email} className="flex items-start gap-2">
                  <Mail size={14} className="mt-0.5 text-gray-400 flex-shrink-0" />
                  <a href={`mailto:${email}`} className="text-xs text-gray-300 hover:text-white transition-colors break-all">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-gray-400">
          {"Copyright © 2026 UNESCO Center for Peace | Powered by UNESCO Center for Peace"}
        </div>
      </div>
    </footer>
  );
}
