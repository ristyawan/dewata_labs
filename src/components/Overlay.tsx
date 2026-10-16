import { ReactNode, useEffect, useRef } from "react";
export default function Overlay({ mk, title, desc, onClose, children }: { mk: string; title: string; desc: string; onClose: () => void; children: ReactNode }) {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden"; btn.current?.focus();
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", k); prev?.focus?.(); };
  }, []);
  return (
    <div className="ov o" role="dialog" aria-modal="true" aria-labelledby="ot" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pn"><div className="mk" dangerouslySetInnerHTML={{ __html: mk }} />
        <div className="pb"><button ref={btn} className="x" aria-label="Close" onClick={onClose}>&#10005;</button><h3 id="ot">{title}</h3><p>{desc}</p><div className="ra">{children}</div></div></div>
    </div>
  );
}
