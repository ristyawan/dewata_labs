import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { M } from "../data/mockups";
import Overlay from "./Overlay";
export function Value() {
  const { t } = useLang();
  return (<section className="sec val"><div className="w vg"><div><h2>{t("v1")}</h2><p className="lead">{t("v2")}</p></div><ul className="vl">{t("vl").map((x: string) => <li key={x}>{x}</li>)}</ul></div></section>);
}
export function About() {
  const { t } = useLang();
  return (<section className="sec about" id="about"><div className="w"><h2>{t("a1")}</h2><p className="lead">{t("a2")}</p></div></section>);
}
export function Process() {
  const { t } = useLang();
  return (<section className="sec" id="process" style={{ background: "var(--navy)" }}><div className="w"><h2>{t("p0")}</h2>
    <div className="pr">{t("pr").map((p: string[], i: number) => <div key={i}><b>0{i + 1}</b><h3>{p[0]}</h3><p>{p[1]}</p></div>)}</div></div></section>);
}
export function Portfolio() {
  const { t } = useLang(); const [o, setO] = useState<number | null>(null); const P = t("P"); const hue = [0, 40, -30, 120, 20, -60];
  return (<section className="sec" id="portfolio"><div className="w"><h2>{t("f1")}</h2><p className="lead">{t("f2")}</p>
    <div className="pf6">{P.map((p: string[], i: number) => (
      <button key={i} className="pi" style={{ ["--h" as any]: hue[i] + "deg" }} onClick={() => setO(i)}>
        <div className="mk" dangerouslySetInnerHTML={{ __html: M[i] }} /><h3>{p[0]}</h3><span>{t("concept")} · {p[1]}</span></button>))}</div>
    {o !== null && <Overlay mk={M[o]} title={P[o][0]} desc={`${t("concept")} · ${P[o][1]}. ${t("S")[o][1]}`} onClose={() => setO(null)}>
      <button className="btn p" onClick={() => { setO(null); setTimeout(() => document.getElementById("svc-" + o)?.scrollIntoView({ behavior: "smooth" }), 50); }}>{t("S")[o][0]}</button></Overlay>}
  </div></section>);
}
export function Why() {
  const { t } = useLang();
  return (<section className="sec why"><div className="w"><h2>{t("y1")}</h2><div className="wg">{t("y").map((y: string[]) => <div key={y[0]}><h3>{y[0]}</h3><p>{y[1]}</p></div>)}</div></div></section>);
}
