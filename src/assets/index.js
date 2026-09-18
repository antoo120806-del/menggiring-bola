/**
 * Titik ganti gambar.
 *
 * Selama nilainya `null`, ilustrasi SVG bawaan (komponen di
 * `src/components/illustrations`) yang dipakai. Begitu diisi, komponen
 * `Illustration` otomatis merender <img> dengan gambar tersebut.
 *
 * Cara pakai gambar lokal:
 *   1. Simpan berkas di folder ini, mis. `src/assets/01-posisi-awal.png`
 *   2. import step1 from './01-posisi-awal.png'
 *   3. Isi nilai di bawah dengan variabel tersebut (atau langsung URL).
 */
export const ASSETS = {
  hero: null, // pemain di sudut kanan banner judul
  step1: null, // Posisi Awal
  step2: null, // Sentuh Bola
  step3: null, // Langkahkan Kaki
  step4: null, // Jaga Keseimbangan
  step5: null, // Lakukan Secara Konsisten
}

export default ASSETS
