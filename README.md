# Dewata Labs

Website agensi digital — Vite + React + TypeScript + React Router. Dua bahasa (EN/ID), carousel layanan, panel expand, 6 halaman layanan, WhatsApp.

## Menjalankan
```bash
npm install
npm run dev        # pengembangan
npm run build      # produksi (hasil di dist/)
npm run preview
```

## Struktur
- `public/assets/brand/` — logo asli (`dewata-labs-logo.jpg`), video banner asli (`dewata-labs-banner.mp4`), poster (`hero-poster.jpg`, frame pertama video)
- `src/i18n/translations.ts` — semua teks EN/ID, termasuk 6 layanan (`S`)
- `src/data/mockups.ts` — visual mockup tiap layanan; `src/data/services.ts` — slug rute
- `src/components/`, `src/pages/` — komponen dan halaman (`/` dan `/services/:slug`)
- `src/styles/main.css` — seluruh gaya
- `vercel.json` — fallback SPA agar `/services/...` bisa dibuka langsung

## Mengubah isi
- **Nomor WhatsApp:** `src/lib/whatsapp.ts` (`WA_NUMBER`)
- **Terjemahan/layanan:** `src/i18n/translations.ts` (urutan `S` di EN dan ID harus sama)
- **Logo/video:** ganti file di `public/assets/brand/` dengan nama sama

## Deploy
GitHub: `git init && git add . && git commit -m "Dewata Labs"` lalu push. Vercel: import repo; Framework Vite, Build `npm run build`, Output `dist`. Tidak ada environment variable.

## Catatan
- Video 2 MB, aman untuk Git biasa.
- Logo berupa JPG berlatar putih-keabuan; di header ditempatkan pada tile terang. Ganti dengan PNG/SVG transparan bila tersedia.
- Form kontak membuka WhatsApp dengan pesan terisi (tanpa backend).
- Portofolio berisi konsep, bukan proyek klien. Tambahkan domain produksi, canonical, dan og:image absolut di `index.html` setelah domain ada.
