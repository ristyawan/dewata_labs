import { Link, useParams } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
import { slugs } from "../data/services";
import ServiceDetail from "../components/ServiceDetail";
export default function ServicePage() {
  const { slug } = useParams(); const { t } = useLang(); const i = slugs.indexOf(slug || "");
  if (i < 0) return <main className="sp w sec"><h2>404</h2><Link className="back" to="/#services">← {t("n1")}</Link></main>;
  return (<main className="sp"><ServiceDetail i={i} full /><div className="w" style={{ paddingBottom: 60 }}><Link className="back" to="/#services">← {t("n1")}</Link></div></main>);
}
