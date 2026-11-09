import { PRODUCTOS_ESTRELLA } from '../data/site'

export default function Estrella({ onPedir }: { onPedir: (producto: string) => void }) {
  return (
    <section id="estrella" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="sticker">Los favoritos</span>
        <h2 className="section-title mt-3">Productos estrella</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Los que más se piden. El menú completo lo encuentras en la tienda en línea de cada sede.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTOS_ESTRELLA.map((p) => (
          <article
            key={p.nombre}
            className="group flex flex-col overflow-hidden rounded-3xl border-2 border-white/10 bg-gordo-ink transition hover:-translate-y-1 hover:border-gordo-yellow"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={p.imagen}
                alt={p.nombre}
                width={533}
                height={426}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              {p.etiqueta && <span className="sticker absolute left-3 top-3 text-base">{p.etiqueta}</span>}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-3xl leading-none tracking-wide">{p.nombre}</h3>
              <p className="mt-2 flex-1 text-sm text-white/70">{p.descripcion}</p>
              <button onClick={() => onPedir(p.nombre)} className="btn-gordo mt-5 w-full">
                La quiero
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
