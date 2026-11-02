import Link from "next/link";
import { X } from "lucide-react";

    <header className="sticky top-0 z-50 bg-white border-b border-[#767676]">
      <div className="bg-[#3b355f] text-white text-xs py-1 px-4 text-right hidden md:block">
        <span>{"Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations"}</span>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5 gap-4">
          <Link className="flex-shrink-0 text-primary font-bold text-lg leading-tight hover:opacity-80 transition-opacity" href="/" style={{ fontFamily: "var(--font-heading)" }}>
            UNESCO Centre for Peace
          </Link>
          <nav className="hidden xl:flex items-center gap-1 flex-wrap justify-end">
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/">
              Home
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#3b355f] border-b-2 border-[#3b355f]" href="/about">
              About
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/leadership">
              Leadership
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/programs">
              Programs
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/summer-program">
              Summer Program
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/regional-coordinators">
              Regional Coordinators
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/resources">
              Resources
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/join-us">
              Join Us
            </Link>
            <Link className="text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide text-[#333333]" href="/contact">
              Contact
            </Link>
            <a href="https://payment.flywire.com/pay/payment?recipient=UZC" target="_blank" rel="noopener noreferrer" className="ml-2">
              <img alt="Donate" src="/assets/images/6af1d16ff6e3e380016c8fedfa4d35bb.gif" className="h-7 w-auto" />
            </a>
          </nav>
          <button className="xl:hidden p-2 hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
            <X size={22} />
          </button>
        </div>
        <div className="xl:hidden border-t border-[#d0d0d0] py-4">
          <nav className="flex flex-col gap-1">
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/">
              Home
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#3b355f]" href="/about">
              About
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/leadership">
              Leadership
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/programs">
              Programs
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/summer-program">
              Summer Program
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/regional-coordinators">
              Regional Coordinators
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/resources">
              Resources
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/join-us">
              Join Us
            </Link>
            <Link className="text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded text-[#333333]" href="/contact">
              Contact
            </Link>
            <a href="https://payment.flywire.com/pay/payment?recipient=UZC" target="_blank" rel="noopener noreferrer" className="mt-2 px-2">
              <img alt="Donate" src="/assets/images/6af1d16ff6e3e380016c8fedfa4d35bb.gif" className="h-7 w-auto" />
            </a>
          </nav>
        </div>
      </div>
    </header>
