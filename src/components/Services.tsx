import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
import { M } from "../data/mockups";
import { slugs } from "../data/services";
import Overlay from "./Overlay";
export default function Services() {
  const { t } = useLang(); const S = t("S"); const [cur, setCur] = useState(0); const [open, setOpen] = useState<number | null>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (i: number) => { const n = (i + 6) % 6; setCur(n); cards.current[n]?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth", inline: "center", block: "nearest" }); };
  const explore = (i: number) => { setOpen(null); setTimeout(() => document.getElementById("svc-" + i)?.scrollIntoView({ behavior: "smooth" }), 50); };
  return (
    <section className="sec sv" id="services"><div className="w">
      <h2>{t("s1")}</h2><p className="lead">{t("s2")}</p>
      <div className="car" tabIndex={0} aria-label="Services" onKeyDown={e => { if (e.key === "ArrowRight") go(cur + 1); if (e.key === "ArrowLeft") go(cur - 1); }}>
        {S.map((s: string[], i: number) => (
          <button key={i} ref={el => (cards.current[i] = el)} className={"card" + (i === cur ? " on" : "")} aria-label={s[0]} onClick={() => { go(i); setOpen(i); }}>
            <div className="mk" dangerouslySetInnerHTML={{ __html: M[i] }} /><div className="ct"><h3>{s[0]}</h3><p>{s[1]}</p><span className="ex">{t("ex")}</span></div>
          </button>))}
      </div>
      <div className="ctl"><button aria-label="Previous" onClick={() => go(cur - 1)}>&#8592;</button><button aria-label="Next" onClick={() => go(cur + 1)}>&#8594;</button><span>{`0${cur + 1} / 06`}</span></div>
      {open !== null && <Overlay mk={M[open]} title={S[open][0]} desc={S[open][1] + " " + S[open][4]} onClose={() => setOpen(null)}>
        <Link className="btn" to={"/services/" + slugs[open]}>{t("full")}</Link><button className="btn p" onClick={() => explore(open)}>{t("ex")}</button></Overlay>}
    </div></section>
  );
}
