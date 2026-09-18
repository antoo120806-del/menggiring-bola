/**
 * Pembungkus gambar: memakai `src` dari `src/assets/index.js` bila tersedia,
 * dan jatuh kembali ke ilustrasi SVG bawaan bila nilainya masih null.
 */
export default function Illustration({ src, alt, children }) {
  if (src) return <img src={src} alt={alt} className="h-full w-full object-contain" />
  return children
}
