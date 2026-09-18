# Langkah-Langkah Menggiring Bola

Reproduksi poster infografis "Langkah-Langkah Menggiring Bola" sebagai halaman
web responsif. Dibangun dengan React 18, Vite 5, dan Tailwind CSS 3.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil produksi ke folder dist/
npm run preview  # pratinjau hasil build
```

## Struktur

```
index.html                  # dokumen HTML + pemuatan font Google
tailwind.config.js          # palet poster, font, radius, dan bayangan
src/
  main.jsx                  # titik masuk React
  index.css                 # Tailwind + kelas khusus (brush, title-outline, grass-top)
  App.jsx                   # susunan halaman
  assets/index.js           # daftar gambar yang bisa diganti
  data/
    steps.js                # isi langkah 1-4
    tips.js                 # isi tips tambahan
    identity.js             # identitas pada footer
  components/
    Header.jsx              # banner judul
    Intro.jsx               # kotak kuning definisi
    StepsSection.jsx        # grid langkah 1-4
    StepCard.jsx            # kartu satu langkah
    StepNumber.jsx          # lingkaran angka
    BrushLabel.jsx          # label bersudut kuas
    BulletList.jsx          # daftar poin
    ConsistencySection.jsx  # panel langkah 5
    TipsSection.jsx         # panel tips
    TipItem.jsx             # satu tip
    Footer.jsx              # bar identitas
    Illustration.jsx        # pemilih gambar asli vs ilustrasi bawaan
    icons/                  # ikon SVG (bohlam, profil, ikon tips)
    illustrations/          # ilustrasi SVG (bola, pemain, kaki, panah)
```

## Mengganti gambar

Ilustrasi pemain dan bola saat ini berupa SVG bawaan sebagai placeholder.
Untuk memakai gambar asli: simpan berkas di `src/assets/`, lalu isi kunci yang
sesuai pada `src/assets/index.js` (`hero`, `step1`–`step5`). Sisanya otomatis.

## Mengubah isi teks

Teks langkah, tips, dan identitas ada di `src/data/`. Tidak perlu menyentuh
komponen untuk mengubah kalimat, urutan, atau warna label langkah.

## Catatan

- Font Fredoka dan Kalam dimuat dari Google Fonts pada `index.html`. Untuk
  penggunaan offline, unduh fontnya dan muat lewat `@font-face` di `index.css`.
- Animasi berputar pada bola dan efek angkat kartu dinonaktifkan otomatis bila
  sistem pengguna menyalakan `prefers-reduced-motion`.
