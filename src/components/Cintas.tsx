const FRASES = ['Sabor adictivo', 'Platos cargados', 'Flow boyacense', 'Tunja', 'Duitama', 'Sogamoso']

function Cinta({ className = '', reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <div className={`-mx-[5%] overflow-hidden border-y-2 border-black py-2 ${className}`}>
      <div className={`marquee flex w-max ${reverse ? 'marquee-reverse' : ''}`}>
        {[0, 1].map((grupo) => (
          <div key={grupo} className="flex shrink-0 items-center gap-6 pr-6">
            {[...FRASES, ...FRASES].map((frase, i) => (
              <span key={i} className="flex items-center gap-6 whitespace-nowrap font-display text-2xl tracking-wide sm:text-3xl">
                {frase}
                <span className="text-xl">✕</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Cintas() {
  return (
    <div aria-hidden="true" className="relative z-10 overflow-hidden py-12">
      <Cinta className="rotate-[2.5deg] bg-black text-gordo-yellow" reverse />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -rotate-[2deg]">
        <Cinta className="bg-gordo-yellow text-black shadow-[0_6px_0_#000]" />
      </div>
    </div>
  )
}
