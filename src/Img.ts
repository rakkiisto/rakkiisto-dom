import { DOMObject } from './DOMObject'

export class Img extends DOMObject {
  image: HTMLImageElement
  isLoaded = false
  onload: Promise<this>
  constructor(public src: string, image = new Image()) {
    super(image)
    this.image = image
    this.image.src = src
    this.onload = new Promise(
      resolve =>
        (this.image.onload = () => {
          this.isLoaded = true
          resolve(this)
        }),
    )
  }

  copy(): Img {
    return new Img(this.src).copyStyleFrom(this.style)
  }

  updateSrc(src: string) {
    this.src = this.image.src = src
    super.width
  }

  autoWidth(width: number): this {
    this.onload.then(i => i.size(width, (width / this.image.naturalWidth) * this.image.naturalHeight))
    return this
  }
  autoHeight(height: number): this {
    this.onload.then(i => i.size((height / this.image.naturalHeight) * this.image.naturalWidth, height))
    return this
  }

  relPos(x: number, y: number): this {
    const [x0, y0] = this.pos()
    if (isNaN(x0) || isNaN(y0)) return this.pos(x, y)
    return this.pos(x0 + x, y0 + y)
  }

  center(): this {
    return this.relPos(-this.width() / 2, -this.height() / 2)
  }

  offsetPos(x: number, y: number) {
    return this.relPos(-x, -y)
  }
}
