import { Star } from 'lucide-react'
import { OPINIONES, SEDES } from '../data/site'
import { trackEvent } from '../analytics'

const resenasUrl = (ciudad: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`El Asado del Gordo ${ciudad}`)}`

export default function Opiniones() {
  return (
    <section id="opiniones" className="border-y border-white/10 bg-gordo-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="section-title">Lo que dicen de nosotros</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Opiniones reales de nuestros clientes en Google. ¿Ya nos probaste? Cuéntanos qué tal te fue.
          </p>
        </div>
        {OPINIONES.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {OPINIONES.map((o) => (
              <figure key={o.nombre + o.texto} className="rounded-3xl border-2 border-white/10 bg-gordo-black p-6">
                <div className="flex gap-1 text-gordo-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-white/90">“{o.texto}”</blockquote>
                <figcaption className="mt-4 text-sm text-white/60">
                  {o.nombre} · {o.sede} · {o.fuente}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {SEDES.map((sede) => (
            <a
              key={sede.id}
              href={resenasUrl(sede.ciudad)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('resenas_click', { sede: sede.id })}
              className="flex items-center justify-between rounded-2xl border-2 border-white/15 px-5 py-4 transition hover:border-gordo-yellow hover:text-gordo-yellow"
            >
              <span className="font-display text-2xl tracking-wide">Reseñas {sede.ciudad}</span>
              <Star className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
