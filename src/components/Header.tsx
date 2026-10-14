import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
const nav = [['Home', '/'], ['Services', '/#services'], ['About', '/#about'], ['Our Process', '/#process'], ['Contact', '/#contact']]
export default function Header() {
  const [sc, setSc] = useState(false), [open, setOpen] = useState(false), [pg, setPg] = useState(0)
  useEffect(() => {
    const f = () => { setSc(scrollY > 30); setPg(scrollY / Math.max(1, document.body.scrollHeight - innerHeight)) }
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (<header className={`fixed inset-x-0 top-0 z-50 border-b py-3.5 transition duration-300 ${sc || open ? 'border-white/10 bg-bg/90 backdrop-blur-md' : 'border-transparent'}`}>
    <div className="wrap flex items-center justify-between gap-5">
      <Logo />
      <nav aria-label="Main" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-bg p-5 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
        {nav.map(([n, to]) => <Link key={n} to={to} onClick={() => setOpen(false)} className="text-[15px] text-muted transition hover:text-white">{n}</Link>)}
      </nav>
      <Link to="/#contact" className="btn btn-p hidden md:inline-flex">Let's Talk</Link>
      <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="h-11 w-11 rounded-xl border border-white/10 md:hidden">{open ? '✕' : '☰'}</button>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-blue to-cyan" style={{ transform: `scaleX(${pg})` }} />
  </header>)
}
