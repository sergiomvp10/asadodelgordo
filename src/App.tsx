import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Estrella from './components/Estrella'
import Promos from './components/Promos'
import Historia from './components/Historia'
import Opiniones from './components/Opiniones'
import Sedes from './components/Sedes'
import Footer from './components/Footer'
import SedePicker from './components/SedePicker'

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
      <Header onPedir={() => abrirPicker('header')} />
      <main>
        <Hero />
        <Estrella onPedir={(producto) => abrirPicker('producto_estrella', producto)} />
        <Promos onPedir={(producto) => abrirPicker('promo', producto)} />
        <Historia />
        <Opiniones />
        <Sedes />
      </main>
      <Footer />
      <SedePicker open={picker.open} origen={picker.origen} producto={picker.producto} onClose={cerrarPicker} />
    </>
  )
}
