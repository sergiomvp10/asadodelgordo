import { Beef, Flame, Sandwich } from 'lucide-react'

const DIFERENCIAS = [
  { icon: Sandwich, titulo: 'Pan brioche artesanal', texto: 'La base de cada hamburguesa: suave, dorado y hecho para aguantar todo lo que le ponemos.' },
  { icon: Beef, titulo: 'Carne de res 150 gr', texto: 'Jugosa y a la parrilla, con combinaciones llaneras, callejeras y bien boyacenses.' },
  { icon: Flame, titulo: 'Salsas y toppings de la casa', texto: 'Piña artesanal, aros de cebolla, mezcla crocante y salsas que no encuentras en otro lado.' },
]

export default function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="sticker">Desde 2022 · Duitama</span>
          <h2 className="section-title mt-3">La historia del Gordo</h2>
          <p className="mt-4 text-lg text-white/80">
            Nacimos en Duitama con una idea clara: ofrecer una experiencia única combinando ingredientes inspirados en la
            cultura, la música y la moda. Hoy estamos en Tunja, Duitama y Sogamoso, sirviendo platos cargados con el sabor
            que nos hizo conocidos.
          </p>
          <img src="/brand/flow.svg" alt="Nuestro flow se traduce en platos cargados, sabor adictivo boyacense" className="mt-8 w-full max-w-md" loading="lazy" />
        </div>
        <div className="grid gap-4">
          {DIFERENCIAS.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="flex gap-4 rounded-3xl border-2 border-white/10 bg-gordo-ink p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gordo-yellow text-black">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl tracking-wide">{titulo}</h3>
                <p className="text-sm text-white/70">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
