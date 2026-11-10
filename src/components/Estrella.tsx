import { useEffect, useRef } from 'react'
import { PRODUCTOS_ESTRELLA } from '../data/site'

const SEGUNDOS_POR_VUELTA = 25
const UMBRAL_ARRASTRE = 6

export default function Estrella({ onPedir }: { onPedir: (producto: string) => void }) {
  const pistaRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const arrastre = useRef<{ id: number; x: number; offset: number; activo: boolean } | null>(null)
  const huboArrastre = useRef(false)

  useEffect(() => {
    const pista = pistaRef.current
    if (!pista) return
    let frame = 0
    let anterior = performance.now()
    const mover = (ahora: number) => {
      const ancho = pista.scrollWidth / 2
      if (ancho > 0) {
        if (!arrastre.current?.activo) offset.current += ((ahora - anterior) / 1000) * (ancho / SEGUNDOS_POR_VUELTA)
        offset.current = ((offset.current % ancho) + ancho) % ancho
        pista.style.transform = `translate3d(${-offset.current}px,0,0)`
      }
      anterior = ahora
      frame = requestAnimationFrame(mover)
    }
    frame = requestAnimationFrame(mover)
    return () => cancelAnimationFrame(frame)
  }, [])

  const alPresionar = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    arrastre.current = { id: e.pointerId, x: e.clientX, offset: offset.current, activo: false }
    huboArrastre.current = false
  }

  const alMover = (e: React.PointerEvent<HTMLDivElement>) => {
    const a = arrastre.current
    if (!a || a.id !== e.pointerId) return
    const dx = e.clientX - a.x
    if (!a.activo && Math.abs(dx) > UMBRAL_ARRASTRE) {
      a.activo = true
      huboArrastre.current = true
      e.currentTarget.setPointerCapture(e.pointerId)
    }
    if (a.activo) offset.current = a.offset - dx
  }

  const alSoltar = (e: React.PointerEvent<HTMLDivElement>) => {
    if (arrastre.current?.id !== e.pointerId) return
    arrastre.current = null
  }

  return (
    <section id="estrella" className="py-16 md:py-24">
      <div className="px-4 text-center">
        <span className="sticker animate-vibrar">Los favoritos</span>
        <h2 className="section-title mt-3">Productos estrella</h2>
      </div>
      <div
        className="carrusel-mascara mt-10 cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
        onPointerDown={alPresionar}
        onPointerMove={alMover}
        onPointerUp={alSoltar}
        onPointerCancel={alSoltar}
        onClickCapture={(e) => {
          if (huboArrastre.current) {
            e.preventDefault()
            e.stopPropagation()
            huboArrastre.current = false
          }
        }}
      >
        <div ref={pistaRef} className="flex w-max py-2 will-change-transform">
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
                      draggable={false}
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
