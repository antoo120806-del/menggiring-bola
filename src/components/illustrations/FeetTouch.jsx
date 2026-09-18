import Ball from './Ball.jsx'
import { SKIN, SHORTS, BOOT } from './palette.js'

/** Ilustrasi langkah 2: kaki menyentuh bola dengan bagian dalam. */
export default function FeetTouch({ className = '' }) {
  return (
    <svg
      viewBox="0 0 240 300"
      className={`w-full ${className}`}
      role="img"
      aria-label="Kaki menyentuh bola dengan bagian dalam"
    >
      <ellipse cx="120" cy="286" rx="82" ry="10" fill="#000" opacity=".1" />
      <path d="M52 0h56v96H52z" fill={SHORTS} />
      <path d="M132 0h58v92h-58z" fill={SHORTS} />
      <path d="M60 92c0 44 4 66 8 86" stroke={SKIN} strokeWidth="30" strokeLinecap="round" fill="none" />
      <path d="M160 88c2 44 0 66-2 88" stroke={SKIN} strokeWidth="30" strokeLinecap="round" fill="none" />
      <path d="M66 182c3 20 4 38 4 52" stroke="#fff" strokeWidth="31" strokeLinecap="round" fill="none" />
      <path d="M157 180c-1 20-2 38-2 52" stroke="#fff" strokeWidth="31" strokeLinecap="round" fill="none" />
      <path d="M52 250h38c10 0 16 5 16 12s-6 11-16 11H48c-6 0-9-4-8-10z" fill={BOOT} />
      <path d="M140 248h34c10 0 17 6 17 13s-7 12-17 12h-38c-6 0-9-5-8-11z" fill={BOOT} />

      <g transform="translate(120,196) scale(.68)">
        <Ball className="w-full" />
      </g>

      {/* panah arah sentuhan */}
      <path d="M196 150c14 12 16 30 6 44" stroke="#f59e0b" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M198 196l6 16 12-12z" fill="#f59e0b" />
    </svg>
  )
}
