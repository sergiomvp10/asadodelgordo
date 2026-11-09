import { Tag } from 'lucide-react'
import { PROMOS } from '../data/site'

export default function Promos({ onPedir }: { onPedir: (producto: string) => void }) {
  if (PROMOS.length === 0) return null
  return (
    <section id="promos" className="bg-gordo-yellow text-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 className="section-title">Promos y combos</h2>
            <p className="mt-2 max-w-lg font-medium">Pa’ compartir o pa’ darse un gusto. Disponibles en la tienda en línea.</p>
          </div>
          <img src="/brand/ilustraciones.svg" alt="" aria-hidden="true" className="h-16 w-auto sm:h-20" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROMOS.map((promo) => (
            <article
              key={promo.titulo}
              className="flex flex-col rounded-3xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-4xl leading-none">{promo.titulo}</h3>
                <span className="shrink-0 -rotate-3 rounded-lg bg-black px-3 py-1 font-display text-2xl text-gordo-yellow">
                  {promo.precio}
                </span>
              </div>
              <p className="mt-3 flex-1 text-black/80">{promo.descripcion}</p>
              <ul className="mt-4 space-y-1 text-sm text-black/70">
                <li className="flex items-center gap-2">
                  <Tag className="h-4 w-4 shrink-0" /> {promo.condiciones}
                </li>
                {promo.vigencia && <li className="pl-6">Vigencia: {promo.vigencia}</li>}
              </ul>
              <button
                onClick={() => onPedir(promo.titulo)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-display text-xl tracking-wide text-gordo-yellow transition hover:-translate-y-0.5"
              >
                Pedir esta promo
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
