import { Link } from 'react-router-dom'
export default function Logo() {
  return (<Link to="/" aria-label="DEWATA LABS home" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-[.08em]">
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none"><defs><linearGradient id="lg" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#5B8CFF"/><stop offset="1" stopColor="#4DE2D0"/></linearGradient></defs>
    <path d="M6 34V14L14 6v28zM34 34V14L26 6v28z" stroke="url(#lg)" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="20" cy="20" r="3" fill="#4DE2D0"/></svg>
    DEWATA <span className="font-medium text-muted">LABS</span></Link>)
}
