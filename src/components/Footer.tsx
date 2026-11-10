import { CONTACTO, REDES } from '../data/site'
import { trackEvent } from '../analytics'
import Doodles from './Doodles'
import IconoRed, { type RedIcono } from './IconoRed'

const REDES_TODAS: { key: RedIcono; label: string; url: string }[] = [
  { key: 'instagram', label: 'Instagram', url: REDES.instagram },
  { key: 'tiktok', label: 'TikTok', url: REDES.tiktok },
  { key: 'facebook', label: 'Facebook', url: REDES.facebook },
  { key: 'whatsapp', label: 'WhatsApp', url: `https://wa.me/${CONTACTO.whatsapp}` },
]
const REDES_LISTA = REDES_TODAS.filter((r) => r.url)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gordo-yellow text-black">
      <Doodles className="text-black/[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-32 pt-14 md:pb-14">
        <div className="flex flex-col items-center">
          <img src="/brand/logo-carita-horizontal-negro.svg" alt="Asado del Gordo - Sabor adictivo" className="h-24 w-auto" loading="lazy" />
          {REDES_LISTA.length > 0 && (
            <div className="mt-8 flex w-full max-w-xs justify-between">
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
        <p className="mt-12 border-t border-black/20 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Asado del Gordo · Sabor adictivo · Tunja · Duitama · Sogamoso
        </p>
      </div>
    </footer>
  )
}
