import { uselang } from "../i18n/LangContext";
import { waLink } from "../lib/whatsapp";
import WaIcon from "./WaIcon";

export default function Footer() {
  const { t } = uselang();
  return (
    <footer className="w">
      <span>&copy; 2026 Dewata Labs. Bali, Indonesia</span>
      <a className="fab" href={waLink(t("wg"))} target="_blank" rel="noopener" aria-label="WhatsApp">
        <WaIcon className="" />
      </a>
    </footer>
  );
}
