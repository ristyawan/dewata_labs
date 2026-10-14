import { Link } from 'react-router-dom'
import Logo from './Logo'
import { services } from '../data/services'
const nav = [['Home', '/'], ['Services', '/#services'], ['About', '/#about'], ['Our Process', '/#process'], ['Contact', '/#contact']]
export default function Footer() {
  const email = import.meta.env.VITE_CONTACT_EMAIL as string | undefined
  return (<footer className="border-t border-white/10 pb-10 pt-16 text-sm text-muted"><div className="wrap">
    <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div><Logo /><p className="mt-4 max-w-[34ch]">Digital Experiences. Smart Solutions. A digital technology agency in Bali serving local and international clients.</p></div>
      <div><h4 className="mb-3 font-display font-semibold text-white">Services</h4>{services.map(s => <Link key={s.slug} to={`/services/${s.slug}`} className="mb-2 block hover:text-white">{s.name}</Link>)}</div>
      <div><h4 className="mb-3 font-display font-semibold text-white">Navigate</h4>{nav.map(([n, t]) => <Link key={n} to={t} className="mb-2 block hover:text-white">{n}</Link>)}</div>
      <div><h4 className="mb-3 font-display font-semibold text-white">Contact</h4>{email ? <a href={`mailto:${email}`}>{email}</a> : <p>Contact details to be added by the site owner.</p>}</div>
    </div>
    <div className="mt-11 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6"><span>© {new Date().getFullYear()} DEWATA LABS. All rights reserved.</span><span><Link to="/privacy" className="hover:text-white">Privacy Policy</Link> · <Link to="/terms" className="hover:text-white">Terms of Service</Link></span></div>
  </div></footer>)
}
