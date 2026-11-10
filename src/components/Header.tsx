import { ShoppingBag } from 'lucide-react'

const LINKS = [
  { href: '#estrella', label: 'Favoritos' },
  { href: '#historia', label: 'Nosotros' },
  { href: '#sedes', label: 'Sedes' },
]

export default function Header({ onPedir }: { onPedir: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gordo-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" aria-label="Asado del Gordo - inicio">
          <img src="/brand/logo-horizontal.svg" alt="Asado del Gordo" className="h-8 w-auto sm:h-9" />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-xl tracking-wide text-white/80 hover:text-gordo-yellow">
              {l.label}
            </a>
          ))}
        </nav>
        <button onClick={onPedir} className="btn-gordo px-4 py-2 text-lg">
          <ShoppingBag className="h-5 w-5" /> Pedir
        </button>
      </div>
    </header>
  )
}
