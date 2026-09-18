/** Lingkaran angka langkah dengan cincin putih. */
export default function StepNumber({ color, className = '', children }) {
  return (
    <span
      className={`font-display grid place-items-center rounded-full font-bold text-white shadow-md ring-4 ring-white ${color} ${className}`}
    >
      {children}
    </span>
  )
}
