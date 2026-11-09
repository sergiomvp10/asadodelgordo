// Toda la información editable de la página vive en este archivo.

export type SedeId = 'tunja' | 'duitama' | 'sogamoso'

export interface Sede {
  id: SedeId
  ciudad: string
  lugar: string
  direccion: string
  horario: string
  telefono: string
  whatsapp: string
  pedidoUrl: string
  lat: number
  lng: number
}

export const SEDES: Sede[] = [
  {
    id: 'tunja',
    ciudad: 'Tunja',
    lugar: 'Centro Comercial Unicentro',
    direccion: 'Centro Comercial Unicentro, Tunja, Boyacá',
    horario: 'Todos los días · 11:50 a.m. – 8:30 p.m.',
    telefono: '310 338 8122',
    whatsapp: '573103388122',
    pedidoUrl: 'https://elasadodelgordo3887.yuumi.co/?branch=434',
    lat: 5.5460179,
    lng: -73.3488342,
  },
  {
    id: 'duitama',
    ciudad: 'Duitama',
    lugar: 'Centro Comercial Innovo',
    direccion: 'Centro Comercial Innovo, Duitama, Boyacá',
    horario: 'Todos los días · 11:55 a.m. – 8:30 p.m.',
    telefono: '322 200 9657',
    whatsapp: '573222009657',
    pedidoUrl: 'https://elasadodelgordo3887.yuumi.co/?branch=430',
    lat: 5.8323157,
    lng: -73.032143,
  },
  {
    id: 'sogamoso',
    ciudad: 'Sogamoso',
    lugar: 'Cra. 9 #16-20',
    direccion: 'Cra. 9 #16-20, Sogamoso, Boyacá',
    horario: 'Todos los días · 11:50 a.m. – 8:30 p.m.',
    telefono: '321 764 8952',
    whatsapp: '573217648952',
    pedidoUrl: 'https://elasadodelgordo3887.yuumi.co/?branch=433',
    lat: 5.7182501,
    lng: -72.9233104,
  },
]

export interface Producto {
  nombre: string
  descripcion: string
  imagen: string
  etiqueta?: string
}

// Productos estrella: cambiar aquí según ventas, margen y popularidad (4 a 6).
export const PRODUCTOS_ESTRELLA: Producto[] = [
  {
    nombre: 'La Bichota',
    descripcion: 'Carne de res 150 gr, queso americano, pulled pork jugoso, tocineta premium, coleslaw y mayosriracha.',
    imagen: '/img/productos/la-bichota.webp',
  },
  {
    nombre: 'Doble Cheese Burguer',
    descripcion: 'Doble carne de res, doble queso americano derretido, doble tocineta premium y pepinillos agridulces.',
    imagen: '/img/productos/doble-cheese.webp',
  },
  {
    nombre: 'La Yankee',
    descripcion: 'Carne de res, pecho desmechado, queso americano, tocineta, huevo frito y aros de cebolla artesanales.',
    imagen: '/img/productos/la-yankee.webp',
  },
  {
    nombre: 'Sugar Daddy',
    descripcion: 'Carne de res, queso americano, mermelada de cebolla y tocineta, chicharrón crocante y aros de cebolla.',
    imagen: '/img/productos/sugar-daddy.webp',
  },
  {
    nombre: 'La Champi Burguer',
    descripcion: 'Carne de res, queso doble crema, champiñones en salsa cremosa, tocineta premium y alioli de ajo.',
    imagen: '/img/productos/champi-burguer.webp',
  },
  {
    nombre: 'Papitas Carnívoras',
    descripcion: 'Papa a la francesa con pecho de res en BBQ, salsa animal, plátano maduro, piña caramelizada y queso.',
    imagen: '/img/productos/papitas-carnivoras.webp',
  },
]

export interface Promo {
  titulo: string
  precio: string
  descripcion: string
  condiciones: string
  vigencia: string
}

// Promociones vigentes: verificar que estén activas en Yuumi antes de publicarlas.
export const PROMOS: Promo[] = [
  {
    titulo: 'La Pecadora 2x1',
    precio: '2 por $35.000',
    descripcion: 'Carne de res a la parrilla, queso doble crema fundido, maíz dulce, salsa tártara, salsa de tocineta y la Mezcla Crocante del Gordo.',
    condiciones: 'Válida en las 3 sedes. El domicilio no está incluido.',
    vigencia: '',
  },
  {
    titulo: 'Combo Papa y Gaseosa',
    precio: '$12.000',
    descripcion: 'El acompañante perfecto para tu hamburguesa: porción de papa a la francesa y gaseosa.',
    condiciones: 'Válido en las 3 sedes. El domicilio no está incluido.',
    vigencia: '',
  },
]

// Opiniones reales y verificables. Dejar vacío si no hay testimonios con permiso del cliente.
export interface Opinion {
  nombre: string
  sede: string
  texto: string
  fuente: string
}

export const OPINIONES: Opinion[] = []

export const REDES = {
  instagram: 'https://www.instagram.com/asadodelgordo',
  tiktok: 'https://www.tiktok.com/@asadodelgordo',
  facebook: '',
}

export const CONTACTO = {
  email: 'elasadodelgordo@gmail.com',
  whatsapp: '573148370588',
}
