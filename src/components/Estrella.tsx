import { PRODUCTOS_ESTRELLA } from '../data/site'

export default function Estrella({ onPedir }: { onPedir: (producto: string) => void }) {
  return (
    <section id="estrella" className="py-16 md:py-24">
      <div className="px-4 text-center">
        <span className="sticker">Los favoritos</span>
        <h2 className="section-title mt-3">Productos estrella</h2>
      </div>
      <div className="carrusel-mascara mt-10 overflow-hidden motion-reduce:overflow-x-auto">
        <div className="carrusel flex w-max py-2">
          {[0, 1].map((copia) => (
            <div key={copia} aria-hidden={copia === 1} className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
              {PRODUCTOS_ESTRELLA.map((p) => (
                <article
                  key={p.nombre}
                  className="group flex w-52 shrink-0 flex-col overflow-hidden rounded-3xl border-2 border-white/10 bg-gordo-ink transition hover:-translate-y-1 hover:border-gordo-yellow sm:w-60"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={p.imagen}
                      alt={copia === 0 ? p.nombre : ''}
                      width={533}
                      height={426}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {p.etiqueta && <span className="sticker absolute left-3 top-3 text-base">{p.etiqueta}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-2xl leading-none tracking-wide">{p.nombre}</h3>
                    <p className="mb-4 mt-2 line-clamp-2 text-xs text-white/70">{p.descripcion}</p>
                    <button
                      onClick={() => onPedir(p.nombre)}
                      tabIndex={copia === 1 ? -1 : undefined}
                      className="btn-gordo mt-auto w-full px-4 py-2 text-lg"
                    >
                      La quiero
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
