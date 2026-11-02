"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = { title: string; text: string; image: string | null };

// image: null where the source site's photo is missing (404); the slide keeps
// its height on the brand ink colour until the original photo is supplied.
const SLIDES: Slide[] = [
  {
    title: "UCP West African Spring Conference 2025",
    text: "World Heritage Educational Tour, April 20–28, MJ Grand Hotel, Accra, Ghana. All ages welcome.",
    image: null,
  },
  {
    title: "African Women's Day 2026",
    text: "Celebrating African Diaspora Women from Around the Globe, March 20–21, 2026, Westin Hotel, Crystal City, Arlington, VA.",
    image: "/sites/unescocp/images/african-womens-day-2026.jpg",
  },
  {
    title: "Model UN & Debate Youth Conference",
    text: "UCP West African Spring Conference: Model United Nations and Debate, April 24–28, 2025, DPS International Ghana. Youths ages 14–19.",
    image: null,
  },
];

const INTERVAL_MS = 5000;

export function ProgramCarousel() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(id);
  }, [index, count]);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((slide, i) => (
          <div key={slide.title} className="min-w-full relative" aria-hidden={i !== index}>
            {slide.image ? (
              <img alt={slide.title} src={slide.image} className="w-full h-64 md:h-96 object-cover" loading={i === 0 ? "eager" : "lazy"} />
            ) : (
              <div className="w-full h-64 md:h-96 bg-[#3b355f]" role="img" aria-label={slide.title} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {slide.title}
              </h3>
              <p className="text-sm text-gray-200 mb-4 max-w-2xl">{slide.text}</p>
              <Link
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide bg-white text-[#3b355f] px-4 py-2 rounded hover:bg-blue-50 transition-colors"
                href="/programs"
                tabIndex={i === index ? undefined : -1}
              >
                Learn More <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
        onClick={() => setIndex((i) => (i - 1 + count) % count)}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % count)}
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-3 right-6 flex gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            className={cn("w-2 h-2 rounded-full transition-all", i === index ? "bg-white scale-125" : "bg-white/50")}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
