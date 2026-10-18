import React, { useEffect, useState } from 'react';

export default function LogoStorytelling3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg) scale(1)');

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('scroll-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollY = -rect.top;
      const maxScroll = container.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // Efek rotasi 3D dan perbesaran saat discroll
      const rotateX = Math.sin(progress * Math.PI * 2) * 15;
      const rotateY = progress * 360;
      const scale = 1 + progress * 0.25;

      setTransformStyle(`rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);

      // Menentukan teks mana yang aktif berdasarkan posisi scroll
      const boxesCount = 4;
      let currentIdx = Math.floor(progress * boxesCount);
      if (currentIdx >= boxesCount) currentIdx = boxesCount - 1;
      setActiveIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const infoList = [
    {
      title: "1. Digital Canang (Identitas Utama)",
      desc: "Mengambil filosofi persembahan tulus (canang) khas Bali yang dipadukan dengan geometri modern, melambangkan dedikasi penuh Dewata Labs dalam menyajikan solusi terbaik bagi bisnis."
    },
    {
      title: "2. Tech Core (Pusat Inovasi)",
      desc: "Titik pusat berwarna biru di tengah melambangkan 'otak' teknologi dan kecerdasan digital, memastikan sistem yang dibangun memiliki performa tinggi dan keamanan terjamin."
    },
    {
      title: "3. 4 Fondasi di Bawah (Catur Desa)",
      desc: "Mewakili 4 pilar dasar keandalan sistem operasional: Security (Aman), Speed (Cepat), Stability (Stabil), dan Support (Dukungan teknis andal)."
    },
    {
      title: "4. 3 Pilar di Atas (Tri Hita Karana)",
      desc: "Melambangkan 3 solusi utama Dewata Labs untuk bisnis Anda: Sistem POS & Kasir, Aplikasi Kustom, dan Sistem Website Dinamis."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0B192C', color: '#F7F4EE', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ textAlign: 'center', padding: '30px 20px', background: '#102E4A', borderBottom: '2px solid #0878F9' }}>
        <h1 style={{ fontSize: '1.8rem', letterSpacing: '2px', color: '#F7F4EE', margin: 0 }}>DEWATA LABS</h1>
        <p style={{ color: '#0878F9', marginTop: '5px', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>
          Digital Solution for Your Business
        </p>
      </div>

      <div style={{ textAlign: 'center', padding: '15px', color: '#888', fontSize: '0.85rem' }}>
        ↓ Gulir ke bawah perlahan untuk mengeksplorasi filosofi logo 3D ↓
      </div>

      {/* Wadah Scroll Panjang */}
      <div id="scroll-container" style={{ height: '400vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', perspective: '1200px' }}>
          
          {/* Wadah Logo 3D */}
          <div style={{ width: '260px', height: '260px', position: 'relative', transformStyle: 'preserve-3d', transform: transformStyle, transition: 'transform 0.1s ease-out', marginBottom: '30px' }}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(16, 46, 74, 0.5)', border: '2px solid rgba(8, 120, 249, 0.4)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}>
              {/* Pastikan file gambar logo ada di folder public/ atau diimport */}
              <img src="/1000369344.png" alt="Dewata Labs Logo" style={{ width: '85%', height: '85%', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(8, 120, 249, 0.6))' }} />
            </div>
          </div>

          {/* Kotak Teks Filosofi Dinamis */}
          {infoList.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                bottom: '60px',
                background: 'rgba(16, 46, 74, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(8, 120, 249, 0.3)',
                borderLeft: '6px solid #0878F9',
                padding: '20px 30px',
                borderRadius: '14px',
                maxWidth: '550px',
                width: '90%',
                boxShadow: '0 15px 35px rgba(0,0,0,0.7)',
                textAlign: 'center',
                opacity: activeIndex === index ? 1 : 0,
                transform: activeIndex === index ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                pointerEvents: activeIndex === index ? 'auto' : 'none'
              }}
            >
              <h3 style={{ color: '#0878F9', marginBottom: '8px', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#F7F4EE', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
