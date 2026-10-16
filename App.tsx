import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 30);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return (<>
    <ScrollManager /><Header />
    <Routes><Route path="/" element={<Home />} /><Route path="/services/:slug" element={<ServicePage />} /><Route path="*" element={<Home />} /></Routes>
    <Footer />
  </>);
}
