import StepCard from './StepCard.jsx'
import STEPS from '../data/steps.js'

/** Deret langkah 1-4: 4 kolom di desktop, 2 di tablet, 1 di mobile. */
export default function StepsSection() {
  return (
    <section
      aria-label="Langkah 1 sampai 4"
      className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
    >
      {STEPS.map((step) => (
        <StepCard key={step.number} step={step} />
      ))}
    </section>
  )
}
