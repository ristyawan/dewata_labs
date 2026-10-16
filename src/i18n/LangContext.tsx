import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { T } from "./translations";
export type Lang = "en" | "id";
const Ctx = createContext<{ L: Lang; setL: (l: Lang) => void; t: (k: string) => any }>(null as any);
export const useLang = () => useContext(Ctx);
export function LangProvider({ children }: { children: ReactNode }) {
  const [L, setLang] = useState<Lang>(() => {
    try { const s = localStorage.getItem("dl"); if (s === "en" || s === "id") return s; } catch {}
    return navigator.language?.startsWith("id") ? "id" : "en";
  });
  const setL = (l: Lang) => { setLang(l); try { localStorage.setItem("dl", l); } catch {} };
  useEffect(() => {
    document.documentElement.lang = L;
    document.title = L === "id" ? "Dewata Labs | Jasa Website dan Solusi Digital Bisnis" : "Dewata Labs | Digital Agency, Websites & Business Solutions";
    const d = document.querySelector('meta[name="description"]');
    d?.setAttribute("content", L === "id" ? "Dewata Labs membantu bisnis membangun website profesional, toko online, website hospitality, aplikasi CRM, dan sistem otomatisasi bisnis." : "Dewata Labs builds professional websites, e-commerce platforms, hospitality websites, CRM applications, and business automation solutions.");
  }, [L]);
  return <Ctx.Provider value={{ L, setL, t: (k) => T[L][k] }}>{children}</Ctx.Provider>;
}
