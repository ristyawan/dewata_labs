import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceDetail from "../components/ServiceDetail";
import Contact from "../components/Contact";
import { Value, About, Process, Portfolio, Why } from "../components/Sections";
export default function Home() {
  return (<main>
    <Hero /><Value /><Services />
    <div>{[0, 1, 2, 3, 4, 5].map(i => <ServiceDetail key={i} i={i} />)}</div>
    <About /><Process /><Portfolio /><Why /><Contact />
  </main>);
}
