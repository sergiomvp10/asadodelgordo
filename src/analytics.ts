type Params = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: 'event', name: string, params?: Params) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(name: string, params?: Params) {
  window.gtag?.('event', name, params)
}

export function pedidoClick(sede: string, origen: string, producto?: string) {
  trackEvent('pedido_click', { sede, origen, ...(producto ? { producto } : {}) })
}
