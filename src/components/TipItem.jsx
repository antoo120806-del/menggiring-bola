/** Satu tip pada bagian "Tips Tambahan". */
export default function TipItem({ tip, withDivider }) {
  const { title, text, color, Icon } = tip

  return (
    <li
      className={`tip px-1 sm:px-4 ${withDivider ? 'lg:border-l lg:border-slate-300/70' : ''}`}
      tabIndex={0}
    >
      <div className="flex items-start gap-3">
        <span className={`tip-icon grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow ${color}`}>
          <Icon />
        </span>
        <div>
          <h3 className="font-display text-[15px] font-semibold text-navy">{title}</h3>
          <p className="mt-1 text-[15px] leading-snug text-slate-700">{text}</p>
        </div>
      </div>
    </li>
  )
}
