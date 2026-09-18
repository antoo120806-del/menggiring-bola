import Ball from './illustrations/Ball.jsx'
import UserIcon from './icons/UserIcon.jsx'
import IDENTITY from '../data/identity.js'

/** Bar identitas dengan pita rumput di atasnya. */
export default function Footer() {
  const { fields, institution, tagline } = IDENTITY

  return (
    <footer className="relative mt-9">
      <div className="grass-top -mb-6 h-10 w-full bg-field" aria-hidden="true" />

      <div className="relative flex flex-col items-center justify-between gap-4 rounded-bar bg-white/95 px-5 py-4 shadow-card sm:flex-row sm:px-8">
        <div className="flex items-center gap-4">
          <UserIcon className="h-11 w-11 text-navy" />
          <dl className="font-display text-[15px] font-medium text-navy sm:text-[17px]">
            {fields.map(({ label, value }) => (
              <div key={label} className="flex gap-2">
                <dt className="w-16">{label}</dt>
                <dd>: {value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="brush-sm font-display bg-navy px-5 py-1.5 text-lg font-semibold text-white sm:text-xl">
              {institution}
            </p>
            <p className="mt-1 text-sm font-bold text-navy">{tagline}</p>
          </div>
          <Ball className="hidden w-14 sm:block" />
        </div>
      </div>
    </footer>
  )
}
