import { FormEvent, useState } from "react";
import { useLang } from "../i18n/LangContext";
import { waLink } from "../lib/whatsapp";
import WaIcon from "./WaIcon";
const init = { n: "", b: "", e: "", w: "", s: "0", g: "", d: "" };
export default function Contact() {
  const { L, t } = useLang(); const [f, setF] = useState(init); const [err, setErr] = useState<Record<string, string>>({}); const [st, setSt] = useState("");
  const set = (k: string) => (e: any) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault(); const x: Record<string, string> = {};
    if (!f.n.trim()) x.n = t("r"); if (!f.d.trim()) x.d = t("r");
    if (!f.w.trim()) x.w = t("r"); else if (!/^\+?[0-9\s\-()]{8,18}$/.test(f.w.trim())) x.w = t("ep");
    if (f.e && !/^\S+@\S+\.\S+$/.test(f.e.trim())) x.e = t("ev");
    setErr(x); if (Object.keys(x).length) return;
    const l = t("lb"), S = t("S");
    const m = [`${l[0]}: ${f.n}`, f.b && `${l[1]}: ${f.b}`, f.e && `${l[2]}: ${f.e}`, `${l[3]}: ${f.w}`, `${l[4]}: ${S[+f.s][0]}`, f.g && `${l[5]}: ${f.g}`, `${l[6]}: ${f.d}`].filter(Boolean).join("\n");
    setSt(t("stt")); window.open(waLink((L === "id" ? "Halo Dewata Labs,\n" : "Hello Dewata Labs,\n") + m), "_blank", "noopener");
  };
  const fld = (k: string, label: string, p: any = {}) => (<div className="f"><label htmlFor={"f" + k}>{label}</label><input id={"f" + k} value={(f as any)[k]} onChange={set(k)} aria-invalid={!!err[k]} {...p} /><span className="er">{err[k]}</span></div>);
  return (
    <section className="sec ctc" id="contact"><div className="w"><h2>{t("t1")}</h2><p className="lead">{t("t2")}</p>
      <form noValidate onSubmit={submit}>
        {fld("n", t("l1"), { autoComplete: "name" })}{fld("b", t("l2"), { autoComplete: "organization" })}
        {fld("e", t("l3"), { type: "email", autoComplete: "email" })}{fld("w", t("l4"), { type: "tel", autoComplete: "tel" })}
        <div className="f"><label htmlFor="fs">{t("l5")}</label><select id="fs" value={f.s} onChange={set("s")}>{t("S").map((s: string[], i: number) => <option key={i} value={i}>{s[0]}</option>)}</select></div>
        <div className="f"><label htmlFor="fg">{t("l6")}</label><select id="fg" value={f.g} onChange={set("g")}><option value=""></option><option>&lt; Rp 10 jt</option><option>Rp 10–30 jt</option><option>Rp 30–75 jt</option><option>&gt; Rp 75 jt</option></select></div>
        <div className="f full"><label htmlFor="fd">{t("l7")}</label><textarea id="fd" value={f.d} onChange={set("d")} aria-invalid={!!err.d} /><span className="er">{err.d}</span></div>
        <div className="full"><button className="btn p" type="submit"><WaIcon /><span>{t("send")}</span></button> <span id="st" role="status">{st}</span></div>
      </form></div></section>
  );
}
