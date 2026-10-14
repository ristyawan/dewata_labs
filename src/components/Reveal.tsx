import { useEffect, useRef, useState, type ReactNode } from 'react'
type P = { children: ReactNode; className?: string; v?: '' | 'l' | 's'; delay?: number; as?: any; id?: string }
export default function Reveal({ children, className = '', v = '', delay = 0, as: Tag = 'div', id }: P) {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <Tag ref={ref} id={id} style={{ transitionDelay: `${delay}ms` }} className={`rv ${v} ${on ? 'in' : ''} ${className}`}>{children}</Tag>
}
