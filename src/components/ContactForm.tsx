import { useState, type FormEvent, type ReactNode } from 'react'
import { services } from '../data/services'
type St = { t: 'ok' | 'no'; m: string } | null
const inp = 'w-full rounded-xl border border-white/10 bg-bg px-3.5 py-3 text-white focus:outline-2 focus:outline-blue'
function L({ c, e, full, children }: { c: string; e?: string; full?: boolean; children: ReactNode }) {
  return <label className={`grid gap-1.5 text-sm text-muted ${full ? 'sm:col-span-2' : ''}`}>{c}{children}<span className="min-h-[1em] text-xs text-red-300">{e}</span></label>
}
export default function ContactForm({ service = '' }: { service?: string }) {
  const [st, setSt] = useState<St>(null), [err, setErr] = useState<Record<string, string>>({}), [busy, setBusy] = useState(false)
  async function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const f = ev.currentTarget, d = Object.fromEntries(new FormData(f)) as Record<string, string>, er: Record<string, string> = {}
    for (const k of ['name', 'email', 'service', 'message']) if (!d[k]?.trim()) er[k] = 'This field is required.'
    if (d.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) er.email = 'Enter a valid email address.'
    setErr(er)
    if (Object.keys(er).length) return setSt({ t: 'no', m: 'Please fix the highlighted fields.' })
    const ep = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
    if (!ep) return setSt({ t: 'no', m: 'This form is not connected to a backend yet, so nothing was sent. Set VITE_FORM_ENDPOINT.' })
    setBusy(true)
    try { const r = await fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) }); if (!r.ok) throw new Error(); setSt({ t: 'ok', m: 'Thank you. Your project details were sent.' }); f.reset() }
    catch { setSt({ t: 'no', m: 'Sending failed. Check your connection and try again.' }) }
    setBusy(false)
  }
  return (<form onSubmit={submit} noValidate className="grid gap-x-4 gap-y-1 rounded-3xl border border-white/10 bg-card p-7 sm:grid-cols-2">
    <L c="Full name *" e={err.name}><input name="name" autoComplete="name" className={inp} /></L>
    <L c="Company name (optional)"><input name="company" autoComplete="organization" className={inp} /></L>
    <L c="Email *" e={err.email}><input name="email" type="email" autoComplete="email" className={inp} /></L>
    <L c="WhatsApp number (optional)"><input name="whatsapp" type="tel" className={inp} /></L>
    <L c="Service of interest *" e={err.service} full><select name="service" defaultValue={service} className={inp}><option value="">Select a service</option>{services.map(s => <option key={s.slug}>{s.name}</option>)}<option>Not sure yet</option></select></L>
    <L c="Project description *" e={err.message} full><textarea name="message" rows={4} className={inp} /></L>
    {st && <p role="status" className={`rounded-xl p-3 text-sm sm:col-span-2 ${st.t === 'ok' ? 'bg-cyan/10 text-cyan' : 'bg-red-400/10 text-red-300'}`}>{st.m}</p>}
    <button disabled={busy} className="btn btn-p mt-2 sm:col-span-2">{busy ? 'Sending…' : 'Send Project Details'}</button>
  </form>)
}
