import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import ContactForm from '../components/ContactForm'
import { services, portfolio } from '../data/services'
import { useMeta } from '../components/useMeta'
const wa = import.meta.env.VITE_WHATSAPP as string | undefined
const waHref = wa ? `https://wa.me/${wa.replace(/\D/g, '')}` : '/#contact'
const values = [['Purpose-Driven Design', 'Digital experiences built around real business goals.'], ['Smart Technology', 'Practical solutions designed for performance and usability.'], ['Long-Term Partnership', 'Reliable support as your business evolves.']]
const why = [['Tailored Solutions', 'Built around your business needs.'], ['Modern Experiences', 'Responsive, intuitive, and visually refined.'], ['Practical Technology', 'Focused on real operational needs.'], ['Ongoing Support', 'Maintenance and improvements according to the selected service agreement.']]
const steps = [['Discover', 'Understand your goals, customers, and business requirements.'], ['Design', 'Create the structure, user experience, and visual direction.'], ['Develop', 'Build, integrate, and test the solution.'], ['Launch & Support', 'Deploy the project and provide agreed maintenance or support.']]
export default function Home() {
  useMeta('DEWATA LABS | Digital Agency in Bali, Indonesia', 'DEWATA LABS builds modern websites, e-commerce, hospitality sites, CRM, POS and automation for businesses in Bali and worldwide.')
  const vis = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const f = () => vis.current?.style.setProperty('--sy', String(Math.min(scrollY, 800)))
    addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (<>
    <section id="home" className="relative flex min-h-screen items-center pb-24 pt-32" style={{ background: 'radial-gradient(900px 500px at 78% 40%,rgba(91,140,255,.16),transparent 70%),radial-gradient(500px 400px at 90% 80%,rgba(77,226,208,.09),transparent 70%)' }}>
      <div className="wrap grid items-center gap-10 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="hero-in mb-6 text-sm tracking-[.14em] text-muted">DIGITAL AGENCY · BALI, INDONESIA</p>
          <h1 className="hero-in font-display text-[clamp(2.8rem,7.4vw,6rem)] font-extrabold leading-[1.02] tracking-tight [animation-delay:.1s]">Digital Experiences.<br />Built for Growth.</h1>
          <p className="hero-in mb-9 mt-6 max-w-[50ch] text-lg text-muted [animation-delay:.2s]">We design and build modern websites, custom software, and digital solutions that help businesses grow, connect with customers, and work smarter.</p>
          <div className="hero-in flex flex-wrap gap-3.5 [animation-delay:.3s]"><a href="#services" className="btn btn-p">Explore Our Services</a><a href="#contact" className="btn">Start a Project</a></div>
        </div>
        <div ref={vis} aria-hidden className="order-first mx-auto w-full max-w-[320px] md:order-none md:max-w-[460px]" style={{ transform: 'translateY(calc(var(--sy,0)*-.12px))' }}>
          <svg viewBox="0 0 400 400" className="w-full overflow-visible"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5B8CFF" /><stop offset="1" stopColor="#4DE2D0" /></linearGradient></defs>
            <g className="fl"><path d="M70 350V150l60-70h30v270z" fill="#191D27" stroke="url(#a)" strokeWidth="2" /></g>
            <g className="fl" style={{ animationDirection: 'reverse' }}><path d="M330 350V150l-60-70h-30v270z" fill="#191D27" stroke="url(#a)" strokeWidth="2" /></g>
            <rect x="188" y="110" width="24" height="240" rx="12" fill="url(#a)" opacity=".85" />
            <path d="M200 130 130 210 270 250 200 330M130 210 270 250" stroke="rgba(255,255,255,.25)" fill="none" />
            <g fill="#fff"><circle cx="200" cy="130" r="6" /><circle cx="130" cy="210" r="5" /><circle cx="270" cy="250" r="5" /><circle cx="200" cy="330" r="6" /></g></svg>
        </div>
      </div>
      <div aria-hidden className="absolute bottom-7 left-1/2 h-9 w-[22px] -translate-x-1/2 rounded-xl border-[1.5px] border-muted" />
    </section>

    <section id="about" className="py-24"><div className="wrap">
      <Reveal><p className="max-w-[28ch] font-display text-2xl font-semibold leading-snug md:text-4xl">From your first digital presence to complete business systems, we turn ideas into practical digital solutions.</p></Reveal>
      <div className="mt-14 grid border-t border-white/10 md:grid-cols-3">
        {values.map(([t, d], i) => (<Reveal key={t} delay={i * 150} className="pr-8 pt-8"><i className="font-display text-sm not-italic text-cyan">0{i + 1}</i><b className="mb-1.5 mt-2 block font-display text-xl">{t}</b><p className="text-[15px] text-muted">{d}</p></Reveal>))}
      </div></div></section>

    <section id="services" className="overflow-hidden bg-bg2 py-28"><Carousel /></section>

    <section id="process" className="py-28"><div className="wrap">
      <Reveal><span className="lab">Our Process</span><h2 className="h2">From Idea to Launch.</h2></Reveal>
      <Reveal className="relative mt-16 grid gap-8 md:grid-cols-4">
        <div className="grow absolute left-0 right-0 top-[21px] hidden h-px bg-gradient-to-r from-blue to-cyan md:block" />
        {steps.map(([t, d], i) => (<div key={t} className="relative pl-16 md:pl-0 md:pt-14"><i className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-cyan bg-bg font-display text-sm not-italic text-cyan">0{i + 1}</i><b className="font-display text-xl">{t}</b><p className="mt-1.5 text-[15px] text-muted">{d}</p></div>))}
      </Reveal></div></section>

    <section className="bg-bg2 py-28"><div className="wrap">
      <Reveal><span className="lab">Featured work</span><h2 className="h2">Built with Purpose.</h2><p className="mt-4 max-w-[52ch] text-muted">Demonstration concepts that show how we approach each service. Real client work will appear here as it is published.</p></Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {portfolio.map(([n, si, f], i) => (<Reveal key={f} v="s" delay={(i % 3) * 120} className={i === 0 || i === 3 ? 'lg:col-span-3' : 'lg:col-span-2'}>
          <Link to={`/services/${services[si].slug}`} className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[22px] border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/30" style={{ background: services[si].g }}>
            <img src={`/assets/portfolio/${f}.jpg`} alt={`${n} (demo concept)`} loading="lazy" onError={e => e.currentTarget.remove()} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent to-65%" />
            <span className="relative self-start rounded-full border border-white/10 bg-black/45 px-3 py-0.5 text-xs text-muted">Demo concept</span><b className="relative font-display text-xl">{n}</b></Link></Reveal>))}
      </div></div></section>

    <section className="py-28"><div className="wrap">
      <Reveal><span className="lab">Why DEWATA LABS</span><h2 className="h2">Technology Should Make Business Simpler.</h2></Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{why.map(([t, d], i) => <Reveal key={t} delay={i * 120} className="rounded-[20px] border border-white/10 bg-card p-7 transition hover:border-cyan/40"><div className="mb-5 h-2 w-8 rounded bg-gradient-to-r from-blue to-cyan" /><b className="mb-1.5 block font-display text-lg">{t}</b><p className="text-[15px] text-muted">{d}</p></Reveal>)}</div></div></section>

    <section id="contact" className="bg-bg2 py-28"><div className="wrap grid items-start gap-14 lg:grid-cols-[.9fr_1.1fr]">
      <Reveal v="l"><span className="lab">Contact</span><h2 className="h2 !text-5xl md:!text-7xl">Have an Idea? Let's Build It.</h2><p className="mt-5 max-w-[46ch] text-muted">Tell us what you want to create. We'll help you explore the right digital solution for your business.</p>
        <div className="mt-8 flex flex-wrap gap-3.5"><a href="#cf" className="btn btn-p">Start Your Project</a><a href={waHref} className="btn" {...(wa ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>Chat on WhatsApp</a></div></Reveal>
      <Reveal id="cf" delay={150}><ContactForm /></Reveal></div></section>
  </>)
}
