"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// The site is written in English only. Visitors whose device language differs
// get a Google Translate rendering; the menu switches language or back to English.

const SOURCE = "en";
const CHOICE_KEY = "ucp-lang";

// Native names, so a visitor can find their language whatever the page shows.
const LANGUAGES: Array<[string, string]> = [
  ["en", "English (original)"], ["tr", "Türkçe"], ["es", "Español"], ["fr", "Français"], ["de", "Deutsch"],
  ["pt", "Português"], ["it", "Italiano"], ["nl", "Nederlands"], ["pl", "Polski"], ["ru", "Русский"],
  ["uk", "Українська"], ["ar", "العربية"], ["fa", "فارسی"], ["iw", "עברית"], ["hi", "हिन्दी"], ["ur", "اردو"],
  ["bn", "বাংলা"], ["zh-CN", "中文（简体）"], ["zh-TW", "中文（繁體）"], ["ja", "日本語"], ["ko", "한국어"],
  ["id", "Bahasa Indonesia"], ["ms", "Bahasa Melayu"], ["vi", "Tiếng Việt"], ["th", "ไทย"], ["tl", "Filipino"],
  ["sw", "Kiswahili"], ["am", "አማርኛ"], ["ha", "Hausa"], ["yo", "Yorùbá"], ["ig", "Igbo"], ["zu", "isiZulu"],
  ["az", "Azərbaycan"], ["kk", "Қазақ"], ["ky", "Кыргызча"], ["uz", "Oʻzbek"], ["tk", "Türkmen"],
  ["ka", "ქართული"], ["hy", "Հայերեն"], ["el", "Ελληνικά"], ["ro", "Română"], ["bg", "Български"],
  ["sr", "Српски"], ["hr", "Hrvatski"], ["cs", "Čeština"], ["sk", "Slovenčina"], ["hu", "Magyar"],
  ["sv", "Svenska"], ["no", "Norsk"], ["da", "Dansk"], ["fi", "Suomi"],
];

// navigator.language -> Google Translate code
function toGoogleCode(tag: string): string {
  const lower = tag.toLowerCase();
  if (lower.startsWith("zh")) return /-(tw|hk|mo|hant)/.test(lower) ? "zh-TW" : "zh-CN";
  const base = lower.split("-")[0];
  const aliases: Record<string, string> = { he: "iw", jv: "jw", fil: "tl", nb: "no", nn: "no" };
  return aliases[base] ?? base;
}

function labelFor(code: string): string {
  const tag = code === "iw" ? "he" : code;
  try {
    const name = new Intl.DisplayNames([tag], { type: "language" }).of(tag);
    if (name) return name.charAt(0).toUpperCase() + name.slice(1);
  } catch {}
  return code;
}

function readCookieLang(): string | null {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function cookieDomains(): string[] {
  const host = location.hostname;
  return host === "localhost" || /^[\d.]+$/.test(host) ? [""] : ["", `; domain=${host}`, `; domain=.${host}`];
}

function setCookieLang(code: string | null) {
  for (const domain of cookieDomains()) {
    document.cookie = code
      ? `googtrans=/${SOURCE}/${code}; path=/${domain}`
      : `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain}`;
  }
}

function readChoice(): string | null {
  try {
    return localStorage.getItem(CHOICE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(code: string) {
  try {
    localStorage.setItem(CHOICE_KEY, code);
  } catch {}
}

// Google Translate wraps text nodes in <font> elements behind React's back;
// without this, React updates on translated nodes throw (facebook/react#11538).
function tolerateTranslatedDom() {
  const proto = Node.prototype as Node & { __ucpTranslatePatched?: boolean };
  if (proto.__ucpTranslatePatched) return;
  proto.__ucpTranslatePatched = true;
  const removeChild = proto.removeChild;
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = proto.insertBefore;
  proto.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

type TranslateWindow = Window & {
  googleTranslateElementInit?: () => void;
  google?: { translate?: { TranslateElement: new (opts: object, id: string) => unknown } };
};

function loadGoogleTranslate() {
  if (document.getElementById("google-translate-script")) return;
  tolerateTranslatedDom();
  const w = window as TranslateWindow;
  w.googleTranslateElementInit = () => {
    const TranslateElement = w.google?.translate?.TranslateElement;
    if (TranslateElement) new TranslateElement({ pageLanguage: SOURCE, autoDisplay: false }, "google_translate_element");
  };
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const [lang, setLang] = useState(SOURCE);

  useEffect(() => {
    const target = readChoice() ?? toGoogleCode(navigator.language || SOURCE);
    if (target === SOURCE) {
      if (readCookieLang()) setCookieLang(null);
      return;
    }
    if (readCookieLang() !== target) setCookieLang(target);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- device language is only known after mount
    setLang(target);
    loadGoogleTranslate();
  }, []);

  function change(code: string) {
    saveChoice(code);
    setCookieLang(code === SOURCE ? null : code);
    location.reload();
  }

  // a detected language outside the list still gets an entry (client-only, after mount)
  const options = LANGUAGES.some(([code]) => code === lang) ? LANGUAGES : [[lang, labelFor(lang)], ...LANGUAGES];

  return (
    <div className={cn("notranslate inline-flex items-center gap-1.5", className)} translate="no">
      <Globe size={13} aria-hidden />
      <label className="sr-only" htmlFor="site-language">
        Language
      </label>
      <select
        id="site-language"
        value={lang}
        onChange={(e) => change(e.target.value)}
        className="bg-transparent text-xs text-white outline-none cursor-pointer [&>option]:text-[#333333]"
      >
        {options.map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
