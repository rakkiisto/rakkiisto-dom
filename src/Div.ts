import { DOMObject } from './DOMObject'

export class Div extends DOMObject {
  /** this.margin(0).pos(0, 0) */
  constructor() {
    super(document.createElement('div'))
    this.margin(0).pos(0, 0)
  }
}

export class Rect extends Div {
  constructor(x: number, y: number, width: number, height: number, color = '#F00') {
    super()
    this.pos(x, y, width, height).bg(color)
  }
}

export class Circle extends Div {
  constructor(x: number, y: number, radius: number = 48) {
    super()
    this.pos(x - radius, y - radius, radius * 2, radius * 2)
      .borderRadius(50)
      .transformOrigin('center center')
  }
}

export class Diamond extends Div {
  constructor(x: number, y: number, radius: number = 48) {
    super()
    this.pos(x - radius, y - radius, radius * 2, radius * 2)
      .transformOrigin('center center')
      .transform('rotate(45deg)')
  }
}
