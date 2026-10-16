import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
export default function Header() {
  const { L, setL, t } = useLang();
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 30); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  const items = ["/#home", "/#services", "/#about", "/#process", "/#portfolio", "/#contact"];
  return (
    <header className={solid ? "s" : ""}><div className="w hb">
      <Link className="logo" to="/#home" aria-label="Dewata Labs"><img src="/assets/brand/dewata-labs-logo.jpg" alt="Dewata Labs logo" width="34" height="46" /></Link>
      <nav className={open ? "o" : ""}>{items.map((h, i) => <Link key={h} to={h} onClick={() => setOpen(false)}>{t("n" + i)}</Link>)}</nav>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div className="lang" role="group" aria-label="Language">{(["en", "id"] as const).map(l => <button key={l} aria-pressed={L === l} onClick={() => setL(l)}>{l.toUpperCase()}</button>)}</div>
        <Link className="btn p" to="/#contact" style={{ padding: "9px 18px" }}>{t("talk")}</Link>
        <button className="ham" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>&#9776;</button>
      </div>
    </div></header>
  );
}
