export default function Doodles({ className = '', drift = false }: { className?: string; drift?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`doodles ${drift ? 'doodles-drift' : ''} ${className}`} />
    </div>
  )
}
