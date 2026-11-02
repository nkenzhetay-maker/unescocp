import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: "translateX(-100%)" }}>
        <div className="min-w-full relative">
          <div className="w-full h-64 md:h-96 bg-[#3b355f]" role="img" aria-label="UCP West African Spring Conference 2025" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              UCP West African Spring Conference 2025
            </h3>
            <p className="text-sm text-gray-200 mb-4 max-w-2xl">
              World Heritage Educational Tour, April 20–28, MJ Grand Hotel, Accra, Ghana. All ages welcome.
            </p>
            <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide bg-white text-[#3b355f] px-4 py-2 rounded hover:bg-blue-50 transition-colors" href="/programs">
              Learn More{" "}
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
        <div className="min-w-full relative">
          <img alt="African Women's Day 2026" src="/sites/unescocp/images/african-womens-day-2026.jpg" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {"African Women's Day 2026"}
            </h3>
            <p className="text-sm text-gray-200 mb-4 max-w-2xl">
              Celebrating African Diaspora Women from Around the Globe, March 20–21, 2026, Westin Hotel, Crystal City, Arlington, VA.
            </p>
            <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide bg-white text-[#3b355f] px-4 py-2 rounded hover:bg-blue-50 transition-colors" href="/programs">
              Learn More{" "}
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
        <div className="min-w-full relative">
          <div className="w-full h-64 md:h-96 bg-[#3b355f]" role="img" aria-label="Model UN & Debate Youth Conference" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {"Model UN & Debate Youth Conference"}
            </h3>
            <p className="text-sm text-gray-200 mb-4 max-w-2xl">
              UCP West African Spring Conference: Model United Nations and Debate, April 24–28, 2025, DPS International Ghana. Youths ages 14–19.
            </p>
            <Link className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide bg-white text-[#3b355f] px-4 py-2 rounded hover:bg-blue-50 transition-colors" href="/programs">
              Learn More{" "}
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
      <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors" aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors" aria-label="Next slide">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-3 right-6 flex gap-2">
        <button className="w-2 h-2 rounded-full transition-all bg-white/50" aria-label="Go to slide 1" />
        <button className="w-2 h-2 rounded-full transition-all bg-white scale-125" aria-label="Go to slide 2" />
        <button className="w-2 h-2 rounded-full transition-all bg-white/50" aria-label="Go to slide 3" />
      </div>
    </div>
