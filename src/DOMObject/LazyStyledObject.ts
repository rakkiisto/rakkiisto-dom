import Color from 'color'
import { CSSColorNames, mixBlendMode } from './@Types'
import { StyledObject } from './StyledObject'

export class LazyStyledObject extends StyledObject {
  size(): [number, number]
  size(width: number, height: number): this
  size(width?: number, height?: number): this | [number, number] {
    if (typeof width === 'number' && typeof height === 'number') return this.width(width).height(height)
    return [this.width(), this.height()]
  }
  max(): [number, number]
  max(width: number, height: number): this
  max(width?: number, height?: number): this | [number, number] {
    if (typeof width === 'number' && typeof height === 'number')
      return this.maxWidth(width).maxHeight(height)
    return [this.maxWidth(), this.maxHeight()]
  }

  pos(): [number, number]
  pos(x: number, y: number, w?: number, h?: number): this
  pos(x?: number, y?: number, w?: number, h?: number): this | [number, number] {
    if (typeof x === 'number' && typeof y === 'number') {
      this.left(x).top(y).position('absolute')
      if (typeof w === 'number' && typeof h === 'number') return this.width(w).height(h)
      return this
    }
    return [this.left(), this.top()]
  }

  box(): [number, number, number, number] {
    return [this.left(), this.top(), this.right(), this.bottom()]
  }

  Color(): Color
  Color(arg: CSSColorNames | string | Color): this
  Color(arg?: string | Color): Color | this {
    if (arg) return this.__setStyle__('color', typeof arg === 'string' ? arg : arg.toString())
    return Color(this.__getStyle__('color'))
  }
  bg(): Color
  bg(arg: CSSColorNames | string | Color): this
  bg(arg?: string | Color): Color | this {
    if (arg) return this.__setStyle__('backgroundColor', typeof arg === 'string' ? arg : arg.toString())
    return Color(this.__getStyle__('backgroundColor'))
  }

  blendMode(): mixBlendMode
  blendMode(arg: mixBlendMode): this
  blendMode(arg?: mixBlendMode): mixBlendMode | this {
    //@ts-ignore
    if (arg) return this.__setStyle__('mixBlendMode', arg)
    //@ts-ignore
    return this.__getStyle__('mixBlendMode')
  }

  z(): number
  z(arg: number): this
  z(arg?: number): number | this {
    if (typeof arg === 'number') return this.__setStyle__('zIndex', arg.toString())
    return parseInt(this.__getStyle__('zIndex'))
  }

  /** this.transformOrigin('center center').transform(`rotate(${deg}deg)`) */
  rotate(deg: number) {
    return this.transformOrigin('center center').transform(`rotate(${deg}deg)`)
  }

  glow(color = 'white', size: number = 8) {
    return this.filter(`drop-shadow(0 0 ${size}px ${color})`)
  }

  show(): this {
    return this.visibility('visible')
  }
  hide(): this {
    return this.visibility('hidden')
  }
}
