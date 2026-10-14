import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import { useMeta } from './components/useMeta'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
function Simple({ title }: { title: string }) {
  useMeta(`${title} | DEWATA LABS`, `${title} of DEWATA LABS.`)
  return <div className="wrap pb-24 pt-40"><h1 className="font-display text-5xl font-bold">{title}</h1><p className="mt-4 text-muted">Placeholder: the site owner must supply this text before launch.</p><Link to="/" className="mt-8 inline-block text-cyan">← Back home</Link></div>
}
export default function App() {
  return (<>
    <ScrollManager /><Header />
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/privacy" element={<Simple title="Privacy Policy" />} />
      <Route path="/terms" element={<Simple title="Terms of Service" />} />
      <Route path="*" element={<Simple title="Page not found" />} />
    </Routes></main>
    <Footer />
  </>)
}
