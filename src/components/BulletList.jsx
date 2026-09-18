/** Daftar poin di bawah gambar tiap langkah. */
export default function BulletList({ items }) {
  return (
    <ul className="mt-3 space-y-2 rounded-2xl bg-slate-50/80 p-3 text-[15px] leading-snug">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="mt-[2px] text-lg leading-none text-slate-500">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
