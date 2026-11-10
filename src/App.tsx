import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cintas from './components/Cintas'
import Estrella from './components/Estrella'
import Historia from './components/Historia'
import Opiniones from './components/Opiniones'
import Sedes from './components/Sedes'
import Footer from './components/Footer'
import SedePicker from './components/SedePicker'
import CaritaWhatsapp from './components/CaritaWhatsapp'

interface PickerState {
  open: boolean
  origen: string
  producto?: string
}

export default function App() {
  const [picker, setPicker] = useState<PickerState>({ open: false, origen: '' })

  const abrirPicker = useCallback((origen: string, producto?: string) => setPicker({ open: true, origen, producto }), [])
  const cerrarPicker = useCallback(() => setPicker((p) => ({ ...p, open: false })), [])

  return (
    <>
      <div aria-hidden="true" className="fondo-global pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="doodles text-white/[0.07]" />
      </div>
      <Header onPedir={() => abrirPicker('header')} />
      <main>
        <Hero />
        <Cintas />
        <Estrella onPedir={(producto) => abrirPicker('producto_estrella', producto)} />
        <Historia />
        <Opiniones />
        <Sedes />
      </main>
      <Footer />
      <CaritaWhatsapp />
      <SedePicker open={picker.open} origen={picker.origen} producto={picker.producto} onClose={cerrarPicker} />
    </>
  )
}
