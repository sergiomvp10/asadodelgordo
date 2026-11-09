import { Mail, MessageCircle } from 'lucide-react'
import { CONTACTO, REDES, SEDES } from '../data/site'
import { trackEvent } from '../analytics'
import Doodles from './Doodles'
import IconoRed, { type RedIcono } from './IconoRed'

const MENSAJE_PROMOS = 'Hola, quiero recibir las promociones y novedades de Asado del Gordo.'

const REDES_TODAS: { key: RedIcono; label: string; url: string }[] = [
  { key: 'instagram', label: 'Instagram', url: REDES.instagram },
  { key: 'tiktok', label: 'TikTok', url: REDES.tiktok },
  { key: 'whatsapp', label: 'WhatsApp', url: `https://wa.me/${CONTACTO.whatsapp}` },
]
const REDES_LISTA = REDES_TODAS.filter((r) => r.url)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gordo-yellow text-black">
      <Doodles className="text-black/[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border-2 border-black bg-black p-8 text-white shadow-[6px_6px_0_#000] md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="font-display text-4xl leading-none tracking-wide sm:text-5xl">
              Entérate primero de las <span className="text-gordo-yellow">promos</span>
            </h2>
            <p className="mt-2 text-white/70">Escríbenos a WhatsApp y te avisamos de combos, novedades y ofertas de temporada.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
            {SEDES.map((sede) => (
              <a
                key={sede.id}
                href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(MENSAJE_PROMOS)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('promos_whatsapp_click', { sede: sede.id })}
                className="inline-flex items-center gap-2 rounded-full bg-gordo-yellow px-4 py-2 font-display text-lg tracking-wide text-black transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> {sede.ciudad}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <img src="/brand/logo-carita-horizontal-negro.svg" alt="Asado del Gordo - Sabor adictivo" className="h-24 w-auto" loading="lazy" />
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-wide">Sedes</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {SEDES.map((sede) => (
                <li key={sede.id}>
                  <strong>{sede.ciudad}:</strong> {sede.lugar} · {sede.telefono}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-wide">Contacto</h3>
            <a href={`mailto:${CONTACTO.email}`} className="mt-3 flex items-center gap-2 text-sm hover:underline">
              <Mail className="h-4 w-4" /> {CONTACTO.email}
            </a>
            <a
              href={`https://wa.me/${CONTACTO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { origen: 'footer' })}
              className="mt-2 flex items-center gap-2 text-sm hover:underline"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp {CONTACTO.whatsappTexto}
            </a>
            {REDES_LISTA.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {REDES_LISTA.map((r) => (
                  <a
                    key={r.key}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={r.label}
                    title={r.label}
                    onClick={() => trackEvent('red_social_click', { red: r.key })}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[3px_3px_0_#fff] ring-2 ring-black transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    <IconoRed red={r.key} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="mt-12 border-t border-black/20 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Asado del Gordo · Sabor adictivo · Tunja · Duitama · Sogamoso
        </p>
      </div>
    </footer>
  )
}
