/**
 * Isi langkah 1-4. `illustration` menentukan ilustrasi SVG yang dipakai
 * (lihat `src/components/illustrations/StepIllustration.jsx`), `assetKey`
 * menentukan gambar pengganti dari `src/assets/index.js`.
 *
 * Nama kelas ditulis utuh agar terbaca oleh pemindai kelas Tailwind.
 */
export const STEPS = [
  {
    number: '1',
    title: 'Posisi Awal',
    color: 'bg-poster-blue',
    frame: 'bg-sky-50',
    illustration: 'stand',
    assetKey: 'step1',
    bullets: [
      'Berdiri dengan sikap rileks, pandangan ke depan.',
      'Posisi kaki sedikit terbuka dan lutut agak ditekuk.',
    ],
  },
  {
    number: '2',
    title: 'Sentuh Bola',
    color: 'bg-poster-green',
    frame: 'bg-emerald-50',
    illustration: 'feet',
    assetKey: 'step2',
    bullets: [
      'Gunakan bagian dalam, luar, atau punggung kaki.',
      'Sentuh bola dengan lembut agar tetap dalam kontrol.',
    ],
  },
  {
    number: '3',
    title: 'Langkahkan Kaki',
    color: 'bg-poster-orange',
    frame: 'bg-orange-50',
    illustration: 'step',
    assetKey: 'step3',
    bullets: [
      'Langkahkan kaki secara bergantian (kanan dan kiri).',
      'Jaga jarak bola tetap dekat dengan tubuh.',
    ],
  },
  {
    number: '4',
    title: 'Jaga Keseimbangan',
    color: 'bg-poster-purple',
    frame: 'bg-purple-50',
    illustration: 'balance',
    assetKey: 'step4',
    bullets: [
      'Condongkan badan sedikit ke depan.',
      'Gunakan kedua lengan untuk menjaga keseimbangan.',
    ],
  },
]

export default STEPS
