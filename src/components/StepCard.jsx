import StepNumber from './StepNumber.jsx'
import BrushLabel from './BrushLabel.jsx'
import BulletList from './BulletList.jsx'
import Illustration from './Illustration.jsx'
import StepIllustration from './illustrations/StepIllustration.jsx'
import ASSETS from '../assets/index.js'

/** Satu kartu langkah (1-4). */
export default function StepCard({ step }) {
  const { number, title, color, frame, bullets, illustration, assetKey } = step

  return (
    <article className="step-card relative rounded-card bg-white/95 p-4 pt-9 shadow-card sm:pt-10" tabIndex={0}>
      <div className="absolute -top-1 left-3 flex items-center gap-2">
        <StepNumber color={color} className="h-12 w-12 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
          {number}
        </StepNumber>
        <BrushLabel as="h3" color={color} className="-rotate-1 px-3 py-1.5 text-[15px] sm:text-base">
          {title}
        </BrushLabel>
      </div>

      <div className={`mt-4 grid h-44 place-items-center overflow-hidden rounded-2xl sm:h-52 ${frame}`}>
        <Illustration src={ASSETS[assetKey]} alt={`Ilustrasi ${title}`}>
          <StepIllustration name={illustration} />
        </Illustration>
      </div>

      <BulletList items={bullets} />
    </article>
  )
}
