import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { services, workflow } from '../data/services'
import { useMeta } from '../components/useMeta'
const wa = import.meta.env.VITE_WHATSAPP as string | undefined
export default function ServicePage() {
  const { slug } = useParams(), s = services.find(x => x.slug === slug)
  useMeta(s ? `${s.name} | DEWATA LABS` : 'Service not found | DEWATA LABS', s?.desc ?? 'Service not found.')
  if (!s) return <div className="wrap pb-24 pt-40"><h1 className="font-display text-5xl font-bold">Service not found</h1><Link to="/#services" className="mt-6 inline-block text-cyan">← All services</Link></div>
  const sec = 'border-t border-white/10 py-14'
  return (<div className="wrap pt-32">
    <Link to="/#services" className="font-semibold text-cyan">← All services</Link>
    <div className="pb-10 pt-8"><span className="lab">{s.cat}</span><h1 className="max-w-[15ch] font-display text-5xl font-extrabold leading-none tracking-tight md:text-7xl">{s.name}</h1><p className="mt-5 max-w-[52ch] text-lg text-muted">{s.desc}</p><a href="#quote" className="btn btn-p mt-7">Request a Quote</a></div>
    <img src={`/assets/services/${s.slug}.jpg`} alt={s.name} onError={e => e.currentTarget.remove()} className="mb-10 aspect-[21/9] w-full rounded-3xl border border-white/10 object-cover" />
    <Reveal as="section" className={sec}><h2 className="mb-6 font-display text-3xl font-bold">Main challenges</h2><div className="grid gap-4 md:grid-cols-3">{s.challenges.map(c => <div key={c} className="rounded-2xl border border-white/10 bg-card p-6 text-muted">{c}</div>)}</div></Reveal>
    <Reveal as="section" className={sec}><h2 className="mb-4 font-display text-3xl font-bold">Our solution</h2><p className="max-w-[60ch] text-lg text-muted">{s.solution}</p></Reveal>
    <Reveal as="section" className={sec}><h2 className="mb-6 font-display text-3xl font-bold">Features and deliverables</h2><ul className="grid gap-x-8 md:grid-cols-2">{s.features.map(f => <li key={f} className="relative py-2.5 pl-7 text-muted before:absolute before:left-0 before:top-[21px] before:h-0.5 before:w-3 before:bg-cyan">{f}</li>)}</ul></Reveal>
    <Reveal as="section" className={sec}><h2 className="mb-6 font-display text-3xl font-bold">Project workflow</h2><div className="grid gap-4 md:grid-cols-4">{workflow.map(([t, d], i) => <div key={t} className="rounded-2xl border border-white/10 bg-card p-6 text-muted"><b className="text-white">{i + 1}. {t}</b><br />{d}</div>)}</div></Reveal>
    <Reveal as="section" className={sec}><h2 className="mb-6 font-display text-3xl font-bold">Example work</h2><div className="max-w-sm rounded-2xl border border-white/10 p-6" style={{ background: s.g }}><span className="rounded-full bg-black/45 px-3 py-0.5 text-xs text-muted">Demo concept</span><b className="mt-16 block font-display text-xl">{s.demo}</b></div></Reveal>
    <Reveal as="section" className={sec}><h2 className="mb-6 font-display text-3xl font-bold">Frequently asked questions</h2>{s.faq.map(([q, a]) => <details key={q} className="mb-3 rounded-2xl border border-white/10 bg-card p-6 text-muted"><summary className="cursor-pointer font-semibold text-white">{q}</summary><p className="mt-2.5">{a}</p></details>)}</Reveal>
    <Reveal as="section" id="quote" className="my-14 rounded-[28px] border border-white/10 bg-gradient-to-br from-blue/20 to-cyan/10 p-8 md:p-12">
      <h2 className="mb-6 max-w-[18ch] font-display text-4xl font-bold">Request a quote for {s.name.toLowerCase()}.</h2><ContactForm service={s.name} />
      <div className="mt-6 flex flex-wrap gap-3.5"><a href={wa ? `https://wa.me/${wa.replace(/\D/g, '')}` : '/#contact'} className="btn">Contact on WhatsApp</a><Link to="/#services" className="btn">View all services</Link></div></Reveal>
  </div>)
}
