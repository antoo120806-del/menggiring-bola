import BrushLabel from './BrushLabel.jsx'
import BulbIcon from './icons/BulbIcon.jsx'
import TipItem from './TipItem.jsx'
import TIPS from '../data/tips.js'

/** Panel biru muda berisi empat tips tambahan. */
export default function TipsSection() {
  return (
    <section aria-label="Tips tambahan" className="mt-6 rounded-card bg-[#eaf4fe] p-4 shadow-card sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <BulbIcon className="h-8 w-8 text-amber-400" />
        <BrushLabel as="h2" className="px-4 py-1.5 text-lg">
          Tips Tambahan
        </BrushLabel>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {TIPS.map((tip, index) => (
          <TipItem key={tip.title} tip={tip} withDivider={index > 0} />
        ))}
      </ul>
    </section>
  )
}
