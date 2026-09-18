/** Garis gerak biru pada langkah 4 (jaga keseimbangan). */
export default function BalanceLines({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M6 10c6 4 6 8 0 12M16 8c8 5 8 11 0 16M26 6c10 6 10 14 0 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
