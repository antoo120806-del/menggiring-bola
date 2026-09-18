/**
 * Label bersudut kuas seperti pada poster (judul langkah, "Tips Tambahan",
 * badge institusi). `as` dipakai agar bisa menjadi h2/h3 saat dibutuhkan.
 */
export default function BrushLabel({
  as: Tag = 'span',
  color = 'bg-navy',
  className = '',
  children,
}) {
  return (
    <Tag
      className={`brush-sm font-display font-semibold text-white shadow-sm ${color} ${className}`}
    >
      {children}
    </Tag>
  )
}
