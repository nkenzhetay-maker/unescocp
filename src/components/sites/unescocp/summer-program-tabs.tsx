"use client";

import { useCallback, useEffect, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SummerProgramAbout } from "./summer-program-about";

type Photo = { src: string; alt: string };

// The source gallery also listed 30 ceremony photos whose files return 404 on
// the live site; only photos that actually resolve are shown here.
const PHOTOS: Photo[] = Array.from({ length: 17 }, (_, i) => ({
  src: `/sites/unescocp/images/summer-2026/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Summer Program 2026 photo ${i + 1}`,
}));

type Tab = "about" | "gallery";

const TAB_BASE =
  "inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-lg border border-b-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b355f]";
const TAB_ACTIVE = "bg-white text-[#3b355f] border-[#d0d0d0]";
const TAB_IDLE = "bg-transparent text-[#767676] border-transparent hover:text-[#3b355f] hover:bg-white/60";

export function SummerProgramTabs() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <nav className="flex gap-1 pt-6 border-b border-[#d0d0d0]" aria-label="Summer Program sections" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "about"}
          aria-controls="tabpanel-about"
          id="tab-about"
          className={cn(TAB_BASE, tab === "about" ? TAB_ACTIVE : TAB_IDLE)}
          onClick={() => setTab("about")}
        >
          <BookOpen size={16} />
          About the Program
        </button>
        <button
          role="tab"
          aria-selected={tab === "gallery"}
          aria-controls="tabpanel-gallery"
          id="tab-gallery"
          className={cn(TAB_BASE, tab === "gallery" ? TAB_ACTIVE : TAB_IDLE)}
          onClick={() => setTab("gallery")}
        >
          <Images size={16} />
          Gallery
        </button>
      </nav>
      <div id="tabpanel-about" role="tabpanel" aria-labelledby="tab-about" hidden={tab !== "about"}>
        {tab === "about" && <SummerProgramAbout />}
      </div>
      <div id="tabpanel-gallery" role="tabpanel" aria-labelledby="tab-gallery" hidden={tab !== "gallery"}>
        {tab === "gallery" && <Gallery />}
      </div>
    </div>
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Photo Gallery</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f]" style={{ fontFamily: "var(--font-heading)" }}>
          Summer Program 2026 in Pictures
        </h2>
        <p className="text-sm text-[#555555] mt-2">{PHOTOS.length} photos — click any image to view full size</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            className="group relative overflow-hidden rounded-lg aspect-video bg-[#d0d0d0] focus:outline-none focus:ring-2 focus:ring-[#3b355f]"
            aria-label={`View ${photo.alt}`}
            onClick={() => setOpen(i)}
          >
            <img
              alt={photo.alt}
              src={photo.src}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width="512"
              height="288"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
          </button>
        ))}
      </div>
      {open !== null && <Lightbox index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </div>
  );
}

function Lightbox({ index, onChange, onClose }: { index: number; onChange: (i: number) => void; onClose: () => void }) {
  const count = PHOTOS.length;
  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange]);
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, prev, next]);

  const photo = PHOTOS[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" aria-label="Close" onClick={onClose}>
        <X size={28} />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <ChevronLeft size={36} />
      </button>
      <img
        alt={photo.alt}
        src={photo.src}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <ChevronRight size={36} />
      </button>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
        {index + 1} / {count}
      </p>
    </div>
  );
}
