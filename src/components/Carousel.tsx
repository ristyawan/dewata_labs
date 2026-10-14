import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
const T = services.length
export default function Carousel() {
  const [cur, setCur] = useState(0), x0 = useRef<number | null>(null)
  const go = (i: number) => setCur((i + T) % T)
  const key = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1) } if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1) } }
  return (<>
    <div className="wrap mb-14 flex flex-wrap items-end justify-between gap-6">
      <div><span className="lab">What we do</span><h2 className="h2">Solutions Designed Around Your Business.</h2><p className="mt-4 max-w-[52ch] text-muted">From modern websites to custom business systems, we build digital solutions that move your business forward.</p></div>
      <div className="flex gap-2.5">
        <button aria-label="Previous service" onClick={() => go(cur - 1)} className="h-[52px] w-[52px] rounded-full border border-white/10 bg-card text-xl transition hover:scale-110 hover:bg-blue">←</button>
        <button aria-label="Next service" onClick={() => go(cur + 1)} className="h-[52px] w-[52px] rounded-full border border-white/10 bg-card text-xl transition hover:scale-110 hover:bg-blue">→</button>
      </div>
    </div>
    <div className="overflow-hidden pl-5 md:pl-[calc(50vw-20px)]" role="region" aria-roledescription="carousel" aria-label="Services" onKeyDown={key}
      onTouchStart={e => (x0.current = e.touches[0].clientX)} onTouchEnd={e => { if (x0.current === null) return; const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1)); x0.current = null }}>
      <div className="tr" style={{ '--i': cur } as CSSProperties}>
        {services.map((s, i) => (
          <div key={s.slug} className={`cd ${i === cur ? 'a' : ''}`} tabIndex={0} role="group" aria-label={`${s.name}, ${i + 1} of ${T}`} onClick={() => go(i)}
            onMouseEnter={() => matchMedia('(hover:hover)').matches && go(i)} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget && go(i)}>
            <div className="art" style={{ background: s.g }}><img src={`/assets/services/${s.slug}.jpg`} alt={`${s.name} service`} loading="lazy" onError={e => e.currentTarget.remove()} /></div>
            <div className="ov" /><span className="vt">{s.name}</span>
            <div className="bd">
              <small className="font-semibold tracking-wide text-cyan">0{i + 1} / 0{T} · {s.cat}</small>
              <h3 className="mb-3 mt-2 max-w-[12ch] font-display text-3xl font-bold leading-none md:text-4xl">{s.name}</h3>
              <p className="mb-5 max-w-[34ch] text-[15px] text-[#c9cfdb]">{s.desc}</p>
              <Link to={`/services/${s.slug}`} tabIndex={i === cur ? 0 : -1} className="self-start rounded-full bg-white px-5 py-3 text-xs font-bold tracking-wider text-bg transition hover:translate-x-1">EXPLORE DETAILS ↗</Link>
            </div>
          </div>))}
      </div>
    </div>
    <div className="mt-6 flex gap-2 pl-5 md:pl-[calc(50vw-20px)]">{services.map((s, i) => <i key={s.slug} className={`h-1 rounded-sm transition-all ${i === cur ? 'w-10 bg-cyan' : 'w-5 bg-white/10'}`} />)}</div>
  </>)
}
