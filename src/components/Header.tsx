import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";

export default function Header() {
  const { L, setL, t } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    "/#home",
    "/#services",
    "/#about",
    "/#process",
    "/#portfolio",
    "/#contact",
  ];

  return (
    <header
      className={solid ? "s" : ""}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: solid
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: solid
          ? "1px solid rgba(15, 23, 42, 0.1)"
          : "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: solid ? "0 4px 20px rgba(15, 23, 42, 0.06)" : "none",
      }}
    >
      <div className="w hb">
        <Link
          className="logo"
          to="/#home"
          aria-label="Dewata Labs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            flexShrink: 0,
            background: "transparent",
            padding: 0,
            textDecoration: "none",
          }}
        >
          <img
            src="/assets/brand/dewata-labs-logo.png"
            alt="Dewata Labs logo"
            style={{
              height: "230px",
              width: "auto",
              maxWidth: "180px",
              objectFit: "contain",
              display: "block",
            }}
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
            {(["en", "id"] as const).map((item) => (
              <button
                key={item}
                aria-pressed={L === item}
                onClick={() => setL(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            className="btn p"
            to="/#contact"
            style={{ padding: "9px 18px", whiteSpace: "nowrap" }}
          >
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
