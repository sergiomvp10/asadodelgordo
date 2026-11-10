const C = 200
const AMARILLO = '#fcb700'
const NARANJA = '#ff5a00'
const NEGRO = '#0b0b0b'

function punto(r: number, grados: number) {
  const a = (grados * Math.PI) / 180
  return [C + r * Math.cos(a), C + r * Math.sin(a)]
}

function Laurel({ desde, hasta }: { desde: number; hasta: number }) {
  const pasos = 9
  const hojas = Array.from({ length: pasos }, (_, i) => desde + ((hasta - desde) * i) / (pasos - 1))
  const [x1, y1] = punto(128, desde)
  const [x2, y2] = punto(128, hasta)
  const barrido = hasta > desde ? 1 : 0
  return (
    <g>
      <path d={`M${x1} ${y1} A128 128 0 0 ${barrido} ${x2} ${y2}`} fill="none" stroke={AMARILLO} strokeWidth="3" strokeLinecap="round" />
      {hojas.map((g, i) => {
        const tangente = g + (hasta > desde ? 90 : -90)
        return [-1, 1].map((lado) => {
          const [x, y] = punto(128 + lado * 9, g)
          return (
            <ellipse
              key={`${i}${lado}`}
              cx={x}
              cy={y}
              rx="10"
              ry="4.5"
              fill={lado === 1 ? AMARILLO : NARANJA}
              transform={`rotate(${tangente + lado * 35} ${x} ${y})`}
            />
          )
        })
      })}
    </g>
  )
}

function Estrella({ x, y, r = 9, color = AMARILLO }: { x: number; y: number; r?: number; color?: string }) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const rad = ((i * 36 - 90) * Math.PI) / 180
    const rr = i % 2 === 0 ? r : r * 0.45
    return `${x + rr * Math.cos(rad)},${y + rr * Math.sin(rad)}`
  }).join(' ')
  return <polygon points={pts} fill={color} stroke={NEGRO} strokeWidth="1.5" strokeLinejoin="round" />
}

export default function SelloGanador({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Ganador Burger Master 2026">
      <defs>
        <path id="sello-arco-sup" d={`M${C - 162} ${C} A162 162 0 0 1 ${C + 162} ${C}`} />
      </defs>

      <circle cx={C + 8} cy={C + 8} r="190" fill={NEGRO} />
      <circle cx={C} cy={C} r="190" fill={AMARILLO} stroke={NEGRO} strokeWidth="8" />
      <circle cx={C} cy={C} r="152" fill={NEGRO} stroke={NARANJA} strokeWidth="6" />
      <circle cx={C} cy={C} r="140" fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" />

      <text className="font-display" fontSize="40" letterSpacing="8" fill={NEGRO} textAnchor="middle">
        <textPath href="#sello-arco-sup" startOffset="50%">GANADOR</textPath>
      </text>
      <Estrella x={29} y={200} r={11} color={NARANJA} />
      <Estrella x={371} y={200} r={11} color={NARANJA} />
      <Estrella x={78} y={78} r={8} color={NEGRO} />
      <Estrella x={322} y={78} r={8} color={NEGRO} />
      <Estrella x={C} y={372} r={10} color={NEGRO} />
      <Estrella x={C - 34} y={368} r={7} color={NEGRO} />
      <Estrella x={C + 34} y={368} r={7} color={NEGRO} />

      <Laurel desde={145} hasta={222} />
      <Laurel desde={35} hasta={-42} />

      <image href="/brand/carita.svg" x={158} y={64} width={84} height={94} />

      <text
        x={C + 4}
        y={250}
        className="font-display"
        fontSize="100"
        letterSpacing="2"
        textAnchor="middle"
        fill={NARANJA}
      >
        BURGER
      </text>
      <text
        x={C}
        y={246}
        className="font-display"
        fontSize="100"
        letterSpacing="2"
        textAnchor="middle"
        fill={AMARILLO}
        stroke={NEGRO}
        strokeWidth="3"
        paintOrder="stroke"
      >
        BURGER
      </text>
      <text x={C} y={290} className="font-display" fontSize="46" letterSpacing="8" textAnchor="middle" fill="#fff">
        MASTER
      </text>
      <Estrella x={112} y={274} r={7} />
      <Estrella x={288} y={274} r={7} />

      <g stroke={NEGRO} strokeWidth="4" strokeLinejoin="round">
        <path d="M22 314 L84 314 L84 356 L22 356 L38 335 Z" fill="#c43c00" />
        <path d="M378 314 L316 314 L316 356 L378 356 L362 335 Z" fill="#c43c00" />
        <rect x={60} y={300} width={280} height={46} rx="4" fill={NARANJA} />
      </g>
      <text x={C} y={338} className="font-display" fontSize="42" letterSpacing="10" textAnchor="middle" fill="#fff" stroke={NEGRO} strokeWidth="2.5" paintOrder="stroke">
        2026
      </text>
    </svg>
  )
}
