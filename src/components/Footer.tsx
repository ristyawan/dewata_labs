import { useLang } from "../i18n/LangContext";
import { waLink } from "../lib/whatsapp";
import WaIcon from "./WaIcon";
export default function Footer() {
  const { t } = useLang();
  return (<>
    <footer><div className="w"><span>&copy; 2026 Dewata Labs · Bali, Indonesia</span><a href={waLink(t("wg"))} target="_blank" rel="noopener">+62 877-1375-0093</a><span>{t("ft")}</span></div></footer>
    <a className="fab" href={waLink(t("wg"))} target="_blank" rel="noopener" aria-label="WhatsApp"><WaIcon className="" /></a>
  </>);
}
