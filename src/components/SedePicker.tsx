import { useEffect } from 'react'
import { MapPin, X } from 'lucide-react'
import { SEDES } from '../data/site'
import { pedidoClick } from '../analytics'

interface Props {
  open: boolean
  producto?: string
  origen: string
  onClose: () => void
}

export default function SedePicker({ open, producto, origen, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sede-picker-title"
    >
      <div
        className="w-full max-w-md rounded-3xl border-2 border-black bg-gordo-yellow p-6 text-black shadow-[8px_8px_0_#000]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="sede-picker-title" className="font-display text-4xl leading-none">
              ¿Desde qué sede pides?
            </h2>
            {producto && <p className="mt-1 text-sm font-medium">Vas a pedir: {producto}</p>}
          </div>
          <button onClick={onClose} aria-label="Cerrar" className="rounded-full p-1 hover:bg-black/10">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-5 grid gap-3">
          {SEDES.map((sede) => (
            <a
              key={sede.id}
              href={sede.pedidoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                pedidoClick(sede.id, origen, producto)
                onClose()
              }}
              className="flex items-center justify-between rounded-2xl border-2 border-black bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:bg-black hover:text-gordo-yellow"
            >
              <span>
                <span className="block font-display text-3xl leading-none">{sede.ciudad}</span>
                <span className="text-sm opacity-80">{sede.lugar}</span>
              </span>
              <MapPin className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-medium">Te llevamos a nuestra tienda en línea para terminar tu pedido.</p>
      </div>
    </div>
  )
}
