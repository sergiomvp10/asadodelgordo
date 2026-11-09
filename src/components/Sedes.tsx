import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { SEDES } from '../data/site'
import { pedidoClick, trackEvent } from '../analytics'

export default function Sedes() {
  return (
    <section id="sedes" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="sticker">Boyacá</span>
        <h2 className="section-title mt-3">Nuestras sedes</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {SEDES.map((sede) => (
          <article key={sede.id} className="flex flex-col overflow-hidden rounded-3xl border-2 border-white/10 bg-gordo-ink">
            <iframe
              title={`Mapa sede ${sede.ciudad}`}
              src={`https://www.google.com/maps?q=${sede.lat},${sede.lng}&z=16&output=embed`}
              className="h-48 w-full grayscale-[40%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-4xl leading-none tracking-wide text-gordo-yellow">{sede.ciudad}</h3>
              <ul className="mt-4 flex-1 space-y-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-gordo-yellow" /> {sede.direccion}
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-gordo-yellow" /> {sede.horario}
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gordo-yellow" />
                  <a
                    href={`tel:+${sede.whatsapp}`}
                    onClick={() => trackEvent('telefono_click', { sede: sede.id })}
                    className="hover:text-gordo-yellow"
                  >
                    {sede.telefono}
                  </a>
                </li>
              </ul>
              <div className="mt-6 grid gap-3">
                <a
                  href={sede.pedidoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pedidoClick(sede.id, 'sedes')}
                  className="btn-gordo"
                >
                  Pedir en {sede.ciudad}
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${sede.lat},${sede.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('como_llegar_click', { sede: sede.id })}
                  className="btn-outline text-lg"
                >
                  <Navigation className="h-4 w-4" /> Cómo llegar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
