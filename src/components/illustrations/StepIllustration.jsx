import Player from './Player.jsx'
import FeetTouch from './FeetTouch.jsx'
import Arrow from './Arrow.jsx'
import BalanceLines from './BalanceLines.jsx'

/**
 * Memetakan nama ilustrasi pada `src/data/steps.js` ke gambar SVG-nya,
 * lengkap dengan elemen tambahan (panah / garis gerak) seperti pada poster.
 */
export default function StepIllustration({ name }) {
  if (name === 'feet') return <FeetTouch className="h-full" />

  if (name === 'step') {
    return (
      <div className="relative h-full w-full">
        <Player pose="run" className="h-full w-full" />
        <Arrow className="absolute bottom-10 left-3 w-10" />
      </div>
    )
  }

  if (name === 'balance') {
    return (
      <div className="relative h-full w-full">
        <Player pose="lean" className="h-full w-full" />
        <BalanceLines className="absolute left-2 top-16 w-8 text-sky-400" />
      </div>
    )
  }

  return <Player pose="stand" className="h-full" />
}
