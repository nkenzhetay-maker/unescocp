import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const DONATE_URL = "https://payment.flywire.com/pay/payment?recipient=UZC";

// The source site linked an animated "Donate" GIF that no longer resolves (404),
// so the link is drawn as a button of the same height (h-7).
export function DonateButton({ className }: { className?: string }) {
  return (
    <a
      href={DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded bg-[#c8102e] px-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#a50d26]",
        className,
      )}
    >
      <Heart size={12} fill="currentColor" />
      Donate
    </a>
  );
}
