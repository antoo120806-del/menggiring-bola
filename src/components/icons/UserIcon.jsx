/** Ikon profil pada bar identitas di footer. */
export default function UserIcon({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="9.5" r="3.6" fill="currentColor" />
      <path d="M5.5 19.5c1.6-3 4-4.4 6.5-4.4s4.9 1.4 6.5 4.4" fill="currentColor" />
    </svg>
  )
}
