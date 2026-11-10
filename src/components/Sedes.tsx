import { Mail, Phone } from 'lucide-react'
import { CONTACTO, SEDES } from '../data/site'
import IconoRed from './IconoRed'
import { pedidoClick, trackEvent } from '../analytics'

export default function Sedes() {
  return (
    <section id="sedes" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="sticker">Boyacá</span>
        <h2 className="section-title mt-3">Nuestras sedes</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {SEDES.map((sede, i) => {
          const comoLlegar = `https://www.google.com/maps/dir/?api=1&destination=${sede.lat},${sede.lng}`
          const ultimaSola = i === SEDES.length - 1 && SEDES.length % 2 === 1
          return (
            <article
              key={sede.id}
              className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gordo-ink shadow-[0_8px_24px_rgba(0,0,0,0.45)] ${
                ultimaSola ? 'col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.625rem)] lg:col-span-1 lg:mx-0 lg:w-auto' : ''
              }`}
            >
              <a
                href={comoLlegar}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('como_llegar_click', { sede: sede.id })}
                aria-label={`Cómo llegar a la sede ${sede.ciudad}`}
                className="relative block aspect-square overflow-hidden sm:aspect-[4/3]"
              >
                <iframe
                  title={`Mapa sede ${sede.ciudad}`}
                  src={`https://www.google.com/maps?q=${sede.lat},${sede.lng}&z=16&output=embed`}
                  className="pointer-events-none absolute -top-16 left-0 h-[calc(100%+4rem)] w-full grayscale-[30%]"
                  loading="lazy"
                  tabIndex={-1}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="font-display text-2xl leading-none tracking-wide text-gordo-yellow sm:text-3xl">{sede.ciudad}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-white/80 sm:text-sm">{sede.lugar}</p>
                <a
                  href={`tel:+${sede.whatsapp}`}
                  onClick={() => trackEvent('telefono_click', { sede: sede.id })}
                  className="mt-1 inline-flex items-center gap-1 text-xs text-white/80 hover:text-gordo-yellow sm:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 text-gordo-yellow" /> {sede.telefono}
                </a>
                <div className="mt-auto pt-3">
                  <a
                    href={sede.pedidoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => pedidoClick(sede.id, 'sedes')}
                    className="btn-gordo w-full px-3 py-1.5 text-base shadow-[3px_3px_0_#000] sm:text-lg"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <div className="mt-14 flex flex-col items-center text-center">
        <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl">Contáctanos</h3>
        <div className="mt-3 flex items-center gap-3">
          <a
            href={`tel:+${CONTACTO.whatsapp}`}
            onClick={() => trackEvent('telefono_click', { sede: 'general' })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-gordo-yellow sm:text-base"
          >
            <Phone className="h-4 w-4 text-gordo-yellow" /> {CONTACTO.telefono}
          </a>
          <a
            href={`https://wa.me/${CONTACTO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            title="Escríbenos por WhatsApp"
            onClick={() => trackEvent('whatsapp_click', { origen: 'contacto' })}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gordo-yellow text-black shadow-[2px_2px_0_#000] ring-2 ring-black transition hover:-translate-y-0.5 hover:bg-white"
          >
            <IconoRed red="whatsapp" className="h-4 w-4" />
          </a>
        </div>
        <a
          href={`mailto:${CONTACTO.email}`}
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-gordo-yellow sm:text-base"
        >
          <Mail className="h-4 w-4 text-gordo-yellow" /> {CONTACTO.email}
        </a>
      </div>
    </section>
  )
}
