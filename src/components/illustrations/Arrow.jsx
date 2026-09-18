/** Panah merah antar-pose. */
export default function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 60 28" className={className} aria-hidden="true">
      <path d="M2 14h34" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
      <path d="M34 2l22 12-22 12z" fill="#ef4444" />
    </svg>
  )
}
