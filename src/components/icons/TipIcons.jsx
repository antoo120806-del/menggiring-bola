/** Ikon-ikon pada bagian "Tips Tambahan". Semuanya memakai currentColor. */

function IconBase({ className = 'h-6 w-6', children }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {children}
    </svg>
  )
}

export function TargetIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </IconBase>
  )
}

export function ShoeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 3c3 0 5 2 5 5v5c0 4 1 8-3 8s-5-3-5-7 3-5 3-11z" fill="currentColor" />
    </IconBase>
  )
}

export function ShieldIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" fill="currentColor" />
    </IconBase>
  )
}

export function StopwatchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="13" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 9v4l3 2M9 2h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </IconBase>
  )
}
