import { SEDES } from '../data/site'
import { pedidoClick } from '../analytics'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <img
        src="/img/hero-bn.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gordo-black/40 via-gordo-black/60 to-gordo-black" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:pb-24 md:pt-16">
        <div className="text-center md:text-left">
          <img
            src="/brand/logo-completo.svg"
            alt="Asado del Gordo - Sabor adictivo"
            className="mx-auto h-48 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] sm:h-60 md:mx-0"
          />
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl">
            Hamburguesas <span className="text-gordo-yellow">cargadas</span> con flow boyacense
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            {SEDES.map((sede) => (
              <a
                key={sede.id}
                href={sede.pedidoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pedidoClick(sede.id, 'portada')}
                className="btn-gordo"
              >
                Pedir en {sede.ciudad}
              </a>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md px-2 sm:px-0">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gordo-yellow" />
          <img
            src="/img/productos/la-bichota.webp"
            alt="Hamburguesa La Bichota de Asado del Gordo"
            width={533}
            height={426}
            className="relative -rotate-2 rounded-[2rem] border-4 border-black object-cover shadow-2xl"
          />
          <span className="sticker absolute -bottom-5 left-6 rotate-3 text-2xl shadow-[3px_3px_0_#000] ring-2 ring-black">
            Sabor adictivo
          </span>
          <img
            src="/brand/carita.svg"
            alt=""
            aria-hidden="true"
            className="absolute -right-4 -top-8 h-24 w-auto animate-wiggle"
          />
        </div>
      </div>
    </section>
  )
}
