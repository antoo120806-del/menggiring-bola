import { useId } from 'react'

const CENTER_PENTAGON = '50,22 72.8,38.6 64.1,65.4 35.9,65.4 27.2,38.6'
const EDGE_PENTAGON = '50,18 29.9,3.4 37.6,-20.3 62.4,-20.3 70.1,3.4'
const EDGE_ANGLES = [0, 72, 144, 216, 288]

/** Bola sepak. `spin` membuatnya berputar pelan (dimatikan bila pengguna
 *  meminta pengurangan animasi lewat prefers-reduced-motion). */
export default function Ball({ className = '', spin = false }) {
  const clipId = useId()

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${spin ? 'spin-slow' : ''}`}
      role="img"
      aria-label="Bola sepak"
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="47" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="47" fill="#ffffff" stroke="#1f2937" strokeWidth="3" />
      <g clipPath={`url(#${clipId})`} fill="#1f2937">
        <polygon points={CENTER_PENTAGON} />
        {EDGE_ANGLES.map((angle) => (
          <polygon key={angle} points={EDGE_PENTAGON} transform={`rotate(${angle} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="47" fill="none" stroke="#1f2937" strokeWidth="3" />
      <ellipse cx="34" cy="28" rx="12" ry="7" fill="#fff" opacity=".55" transform="rotate(-25 34 28)" />
    </svg>
  )
}
