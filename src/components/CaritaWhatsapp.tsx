import { CONTACTO } from '../data/site'
import { trackEvent } from '../analytics'

export default function CaritaWhatsapp() {
  return (
    <a
      href={`https://wa.me/${CONTACTO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { origen: 'carita' })}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 transition hover:scale-105"
    >
      <img
        src="/brand/carita.svg"
        alt=""
        aria-hidden="true"
        className="h-24 w-auto animate-wiggle drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
      />
    </a>
  )
}
