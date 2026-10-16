import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
export default function Header() {
  const { L, setL, t } = useLang();
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 30); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  const items = ["/#home", "/#services", "/#about", "/#process", "/#portfolio", "/#contact"];
  return (
    import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  solid?: boolean;
  L?: "en" | "id";
  setL?: (lang: "en" | "id") => void;
  t?: (key: string) => string;
}

export default function Header({
  solid = false,
  L = "en",
  setL = () => {},
  t = (key: string) => key,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const items = ["/#home", "/#services", "/#about", "/#contact"];

  return (
    <header
      className={solid ? "s" : ""}
      style={{
        background: "rgba(10, 15, 29, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="w hb">
        <Link
          className="logo"
          to="/#home"
          aria-label="Dewata Labs"
          style={{ display: "inline-flex", alignItems: "center", background: "none", padding: 0 }}
        >
          <img
            src="/assets/brand/dewata-labs-logo.png"
            alt="Dewata Labs logo"
            style={{ height: "38px", width: "auto", display: "block" }}
          />
        </Link>
        <nav className={open ? "o" : ""}>
          {items.map((h, i) => (
            <Link key={h} to={h} onClick={() => setOpen(false)}>
              {t("n" + i)}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="lang" role="group" aria-label="Language">
            {(["en", "id"] as const).map((l) => (
              <button key={l} aria-pressed={L === l} onClick={() => setL(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link className="btn p" to="/#contact" style={{ padding: "9px 18px" }}>
            {t("talk")}
          </Link>
          <button
            className="ham"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
