export default function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="sticker">Desde 2000 · Duitama</span>
          <h2 className="section-title mt-3">La historia del Gordo</h2>
          <p className="mt-4 text-lg text-white/80">
            Nacimos en Duitama con una idea clara: ofrecer una experiencia única combinando ingredientes inspirados en la
            cultura, la música y la moda. Hoy estamos en Tunja, Duitama y Sogamoso, sirviendo platos cargados con el sabor
            que nos hizo conocidos.
          </p>
        </div>
        <img
          src="/brand/flow.svg"
          alt="Nuestro flow se traduce en platos cargados, sabor adictivo boyacense"
          className="mx-auto w-full max-w-lg"
          loading="lazy"
        />
      </div>
    </section>
  )
}
