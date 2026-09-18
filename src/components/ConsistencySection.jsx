import { Fragment } from 'react'
import StepNumber from './StepNumber.jsx'
import BrushLabel from './BrushLabel.jsx'
import Illustration from './Illustration.jsx'
import Player from './illustrations/Player.jsx'
import Arrow from './illustrations/Arrow.jsx'
import ASSETS from '../assets/index.js'

const POSES = ['lean', 'run', 'lean']

/** Langkah 5: rangkaian tiga pose berulang pada panel merah muda. */
export default function ConsistencySection() {
  return (
    <section
      aria-label="Langkah 5: lakukan secara konsisten"
      className="relative mt-10 rounded-card bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 p-4 pt-10 shadow-card sm:pt-12"
    >
      <div className="absolute -top-2 left-3 flex items-center gap-2 sm:left-5">
        <StepNumber color="bg-poster-pink" className="h-14 w-14 text-3xl">
          5
        </StepNumber>
        <BrushLabel as="h3" color="bg-poster-pink" className="-rotate-1 px-4 py-1.5 text-base sm:text-lg">
          Lakukan Secara Konsisten
        </BrushLabel>
      </div>

      <div className="grid items-center gap-4 lg:grid-cols-[1.55fr_1fr]">
        <div className="flex items-center justify-center gap-1 sm:gap-3">
          {POSES.map((pose, index) => (
            <Fragment key={`${pose}-${index}`}>
              <div className="h-32 w-20 shrink-0 sm:h-44 sm:w-28">
                <Illustration src={ASSETS.step5} alt={`Pose menggiring bola ${index + 1}`}>
                  <Player pose={pose} className="h-full w-full" />
                </Illustration>
              </div>
              {index < POSES.length - 1 && <Arrow className="w-8 shrink-0 sm:w-12" />}
            </Fragment>
          ))}
        </div>

        <p className="rounded-2xl bg-pink-200/70 px-5 py-4 text-[clamp(16px,2.4vw,22px)] font-bold leading-relaxed text-purple-800">
          Latih gerakan ini secara berulang-ulang agar semakin terbiasa, cepat, dan terampil dalam
          menggiring bola.
        </p>
      </div>
    </section>
  )
}
