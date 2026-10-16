import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";

export default function Header() {
  const { l, setL, t } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = ["/#home", "/#services", "/#about", "/#process", "/#portfolio", "/#contact"];

  return (
    <header
      className={`solid ? "s" : ""}`}
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
            {(["en", "id"] as const).map((lang) => (
              <button
                key={lang}
                aria-pressed={l === lang}
                onClick={() => setL(lang)}
              >
                {lang.toUpperCase()}
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
