import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";
import { waLink } from "../lib/whatsapp";
import WaIcon from "./WaIcon";

export default function Hero() {
  const { t } = useLang();
  const v = useRef<HTMLVideoElement>(null);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHide(true);
      return;
    }
    v.current?.play().catch(() => setHide(true));
  }, []);
  return (
    <section className="hero" id="home">
      <img className="pf" src="/assets/brand/hero-poster.jpg" alt="" aria-hidden="true" />
      {!hide && <video className="video" src="/assets/brand/dewata-labs-banner.mp4" ref={v} autoPlay muted loop playsInline preload="metadata" poster="/assets/brand/hero-poster.jpg" aria-hidden="true" onError={() => setHide(true)} />}
      <div className="w">
        <h1>{t("h1")}</h1>
        <p className="lead">{t("hls")}</p>
        <div className="cta"><a className="btn p" href="#services" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView(); }}>{t("d2")}</a>
        <a className="btn" href={waLink(t("wh"))} target="_blank" rel="noopener"><WaIcon className="" /><span>{t("c2")}</span></a></div>
      </div>
    </section>
  );
}
