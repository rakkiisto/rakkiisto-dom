import { DOMObject } from './DOMObject'

export namespace DOM {
  export function add(obj: DOMObject) {
    document.body.appendChild(obj.dom)
  }
  export function remove(obj: DOMObject) {
    document.body.removeChild(obj.dom)
  }

  export function onResize(handler: () => void) {
    handler()
    window.addEventListener('resize', handler)
  }
}
