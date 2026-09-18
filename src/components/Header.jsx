import Ball from './illustrations/Ball.jsx'
import Player from './illustrations/Player.jsx'
import Illustration from './Illustration.jsx'
import ASSETS from '../assets/index.js'

/** Banner judul: sapuan kuas navy, judul dua baris, bola, dan pemain. */
export default function Header() {
  return (
    <div className="brush relative mx-auto bg-navy px-5 py-6 shadow-lg sm:px-14 sm:py-8">
      <Ball className="absolute -left-2 -top-3 w-16 drop-shadow-lg sm:w-24" spin />

      <div className="text-center">
        <h1 className="font-display -skew-x-6 leading-[0.92]">
          <span className="title-outline block text-[clamp(30px,7.6vw,68px)] font-bold text-white">
            LANGKAH-LANGKAH
          </span>
          <span className="title-outline block text-[clamp(34px,9vw,80px)] font-bold text-poster-yellow">
            MENGGIRING BOLA
          </span>
        </h1>
        <p className="brush-sm mx-auto mt-3 inline-block bg-navy-light px-4 py-1.5 text-[clamp(14px,2.4vw,22px)] font-bold text-white">
          Kuasai tekniknya, tingkatkan permainannya!
        </p>
      </div>

      <div className="pointer-events-none absolute -right-3 -top-10 hidden w-40 lg:block xl:w-48">
        <Illustration src={ASSETS.hero} alt="Pemain sedang menggiring bola">
          <Player pose="run" />
        </Illustration>
      </div>
    </div>
  )
}
