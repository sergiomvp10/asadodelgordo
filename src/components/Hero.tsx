import { SEDES } from '../data/site'
import { pedidoClick } from '../analytics'
import Doodles from './Doodles'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gordo-black">
      <Doodles drift className="text-white/[0.14]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(252,183,0,0.30),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(252,183,0,0.14),transparent_45%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-gordo-black" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-4 md:gap-10 sm:pt-10 md:grid-cols-2 md:pb-24 md:pt-16">
        <div className="text-center md:text-left">
          <img
            src="/brand/logo-completo.svg"
            alt="Asado del Gordo - Sabor adictivo"
            style={{ animationDelay: '0ms' }}
            className="entrar mx-auto h-36 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] sm:h-60 md:mx-0"
          />
          <h1 style={{ animationDelay: '150ms' }} className="entrar mt-4 font-display sm:mt-6 text-5xl leading-[0.95] tracking-wide sm:text-6xl">
            Hamburguesas <span className="text-gordo-yellow">cargadas</span> con flow boyacense
          </h1>
          <div className="mx-auto mt-5 grid max-w-sm grid-cols-3 gap-2 sm:mt-8 sm:gap-3 md:mx-0">
            {SEDES.map((sede, i) => (
              <a
                key={sede.id}
                href={sede.pedidoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pedir en ${sede.ciudad}`}
                onClick={() => pedidoClick(sede.id, 'portada')}
                style={{ animationDelay: `${300 + i * 100}ms` }}
                className="entrar btn-gordo px-2 py-[9.5px] text-lg"
              >
                {sede.ciudad}
              </a>
            ))}
          </div>
        </div>
        <div style={{ animationDelay: '250ms' }} className="entrar relative mx-auto w-full max-w-md px-2 sm:px-0">
          <div aria-hidden="true" className="sunburst pointer-events-none absolute -inset-[35%]" />
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gordo-yellow" />
          <img
            src="/img/productos/la-awoo-del-gordo.webp"
            alt="La Awoo del Gordo, hamburguesa ganadora del Burger Master 2026"
            width={853}
            height={1066}
            className="relative aspect-[4/5] w-full -rotate-2 rounded-[2rem] border-4 border-black object-cover shadow-2xl"
          />
          <div
            style={{ animationDelay: '650ms' }}
            className="entrar absolute -left-3 -top-8 z-10 w-[7.5rem] sm:-left-10 sm:-top-14 sm:w-40 md:w-[11.5rem]"
          >
            <img
              src="/brand/sello-burger-master-2026.svg"
              alt="Ganador Burger Master 2026"
              width={1004}
              height={1092}
              className="w-full animate-sello drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]"
            />
          </div>
          <span style={{ animationDelay: '800ms' }} className="entrar sticker absolute -bottom-5 left-1/2 -translate-x-1/2 rotate-2 whitespace-nowrap text-2xl shadow-[3px_3px_0_#000] ring-2 ring-black sm:text-3xl">
            La Awoo del Gordo
          </span>
        </div>
      </div>
    </section>
  )
}
