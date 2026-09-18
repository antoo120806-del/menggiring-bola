import Ball from './Ball.jsx'
import { SKIN, SKIN_DARK, SHIRT, SHIRT_DARK, SHORTS, BOOT, HAIR } from './palette.js'

const LEAN = { stand: 2, lean: 6, run: 9 }

/**
 * Ilustrasi pemain sepak bola (placeholder pengganti gambar asli).
 *
 * @param {'stand'|'lean'|'run'} pose  kemiringan badan
 * @param {'left'|'right'|'none'} ball posisi bola terhadap pemain
 * @param {boolean} flip               cerminkan arah hadap pemain
 */
export default function Player({ className = '', flip = false, ball = 'right', pose = 'stand' }) {
  const lean = LEAN[pose] ?? LEAN.stand

  return (
    <svg
      viewBox="0 0 240 300"
      className={`w-full ${className}`}
      role="img"
      aria-label="Pemain sepak bola menggiring bola"
    >
      <g transform={flip ? 'translate(240,0) scale(-1,1)' : undefined}>
        <ellipse cx="118" cy="288" rx="66" ry="9" fill="#000" opacity=".12" />
        <g transform={`rotate(${lean} 118 200)`}>
          {/* kaki belakang */}
          <path d="M96 176c-8 20-14 34-16 50" stroke={SKIN_DARK} strokeWidth="19" strokeLinecap="round" fill="none" />
          <path d="M80 226c-2 12-3 20-3 28" stroke="#fff" strokeWidth="19" strokeLinecap="round" fill="none" />
          <path d="M66 258h26c5 0 8 3 8 7 0 4-3 6-8 6H62c-4 0-6-3-5-7z" fill={BOOT} />

          {/* kaki depan */}
          <path d="M136 176c10 18 16 32 18 46" stroke={SKIN} strokeWidth="20" strokeLinecap="round" fill="none" />
          <path d="M154 222c2 12 3 22 2 30" stroke="#fff" strokeWidth="20" strokeLinecap="round" fill="none" />
          <path d="M142 256h30c6 0 9 3 9 7s-3 7-9 7h-34c-4 0-6-3-5-7z" fill={BOOT} />

          {/* celana */}
          <path d="M78 140c22 12 58 12 82 0l8 44c-14 8-24 10-32 8l-10-26-10 26c-9 2-20 0-33-8z" fill={SHORTS} />

          {/* badan */}
          <path d="M118 74c-18 0-34 7-39 16l-5 52c26 12 62 12 88 0l-5-52c-5-9-21-16-39-16z" fill={SHIRT} />
          <path d="M118 74c-8 0-15 1-21 3 5 8 12 12 21 12s16-4 21-12c-6-2-13-3-21-3z" fill={SHIRT_DARK} />

          {/* lengan */}
          <path d="M82 92c-14 10-22 24-24 40" stroke={SHIRT} strokeWidth="21" strokeLinecap="round" fill="none" />
          <path d="M58 132c-2 8-2 14 0 20" stroke={SKIN} strokeWidth="17" strokeLinecap="round" fill="none" />
          <path d="M156 92c14 10 22 22 25 36" stroke={SHIRT} strokeWidth="21" strokeLinecap="round" fill="none" />
          <path d="M181 128c3 8 3 15 2 22" stroke={SKIN} strokeWidth="17" strokeLinecap="round" fill="none" />

          {/* leher dan kepala */}
          <rect x="110" y="56" width="17" height="20" rx="8" fill={SKIN_DARK} />
          <circle cx="118" cy="40" r="26" fill={SKIN} />
          <path d="M92 40c0-17 12-29 27-29s27 12 27 28c0 0-9-11-26-11-13 0-21 6-28 12z" fill={HAIR} />
          <path d="M141 18c6 2 9 7 8 13-3-5-8-9-14-11z" fill={HAIR} />
          <circle cx="109" cy="42" r="2.6" fill="#31261f" />
          <circle cx="127" cy="42" r="2.6" fill="#31261f" />
          <path d="M104 36c3-2 7-2 9 0M123 36c3-2 7-2 9 0" stroke="#31261f" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M112 52c4 4 9 4 13 0" stroke="#a9704d" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </g>
      </g>

      {ball !== 'none' && (
        <g transform={`translate(${ball === 'left' ? 14 : 168}, 232) scale(.62)`}>
          <Ball className="w-full" />
        </g>
      )}
    </svg>
  )
}
