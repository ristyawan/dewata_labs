import { Link } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
import { M } from "../data/mockups";
import { slugs } from "../data/services";
import { waLink } from "../lib/whatsapp";
import WaIcon from "./WaIcon";
export default function ServiceDetail({ i, full }: { i: number; full?: boolean }) {
  const { t } = useLang(); const s: string[] = t("S")[i]; const H = t("H");
  return (
    <section className="det" id={"svc-" + i}><div className="w dg">
      <div className="mk" dangerouslySetInnerHTML={{ __html: M[i] }} />
      <div><h3>{s[0]}</h3><p className="lead" style={{ marginTop: 12 }}>{s[1]}</p>
        <h4>{H[0]}</h4><p>{s[2]}</p><h4>{H[1]}</h4><ul>{s[3].split("|").map(x => <li key={x}>{x}</li>)}</ul>
        <h4>{H[2]}</h4><p>{s[4]}</p><h4>{H[3]}</h4><p>{s[5]}</p>
        <div className="cta" style={{ animation: "none" }}>
          <a className="btn p" href={waLink(t("ws").replace("{s}", s[0]))} target="_blank" rel="noopener"><WaIcon />{t("inq")}</a>
          {!full && <Link className="btn" to={"/services/" + slugs[i]}>{t("full")}</Link>}
        </div></div></div></section>
  );
}
