import { _CSSStyleDeclaration, CSSColorNames } from './@Types'
import { DOMObjectBase } from './DOMObjectBase'

export class StyledObject extends DOMObjectBase {
  __getStyle__(key: keyof _CSSStyleDeclaration): string {
    const style = this.style[key]
    return style ? style : 'style not defined'
  }

  __getStyle_px__(key: keyof _CSSStyleDeclaration): number {
    const unit = 'px'
    return parseInt(this.__getStyle__(key).replace(unit, ''))
  }
  __getStyle_percent__(key: keyof _CSSStyleDeclaration): number {
    const unit = '%'
    return parseInt(this.__getStyle__(key).replace(unit, ''))
  }

  __setStyle__(key: keyof _CSSStyleDeclaration): string
  __setStyle__(key: keyof _CSSStyleDeclaration, arg: string): this
  __setStyle__(key: keyof _CSSStyleDeclaration, arg?: string): string | this {
    if (typeof arg !== 'undefined') {
      this.style[key] = arg
      return this
    }
    return this.__getStyle__(key)
  }

  __setStyle_px__(key: keyof _CSSStyleDeclaration, arg: number): this {
    const unit = 'px'
    return this.__setStyle__(key, `${arg}${unit}`)
  }
  __setStyle_percent__(key: keyof _CSSStyleDeclaration, arg: number): this {
    const unit = '%'
    return this.__setStyle__(key, `${arg}${unit}`)
  }

  width(): number
  width(arg: number | string): this
  width(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('width', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('width', arg)
    return this.__getStyle_px__('width')
  }
  height(): number
  height(arg: number | string): this
  height(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('height', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('height', arg)
    return this.__getStyle_px__('height')
  }
  maxWidth(): number
  maxWidth(arg: number | string): this
  maxWidth(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('maxWidth', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('maxWidth', arg)
    return this.__getStyle_px__('maxWidth')
  }
  maxHeight(): number
  maxHeight(arg: number | string): this
  maxHeight(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('maxHeight', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('maxHeight', arg)
    return this.__getStyle_px__('maxHeight')
  }

  top(): number
  top(arg: number | string): this
  top(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('top', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('top', arg)
    return this.__getStyle_px__('top')
  }
  left(): number
  left(arg: number | string): this
  left(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('left', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('left', arg)
    return this.__getStyle_px__('left')
  }
  bottom(): number
  bottom(arg: number | string): this
  bottom(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('bottom', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('bottom', arg)
    return this.__getStyle_px__('bottom')
  }
  right(): number
  right(arg: number | string): this
  right(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('right', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('right', arg)
    return this.__getStyle_px__('right')
  }

  borderRadius(): number
  borderRadius(arg: number | string): this
  borderRadius(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('borderRadius', arg)
    if (typeof arg === 'number') return this.__setStyle_percent__('borderRadius', arg)
    return this.__getStyle_percent__('borderRadius')
  }

  color(): string
  color(arg: CSSColorNames | string): this
  color(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('color', arg)
    return this.__getStyle__('color')
  }
  backgroundColor(): string
  backgroundColor(arg: CSSColorNames): this
  backgroundColor(arg: string): this
  backgroundColor(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('backgroundColor', arg)
    return this.__getStyle__('backgroundColor')
  }

  margin(): number
  margin(arg: number | string): this
  margin(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('margin', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('margin', arg)
    return this.__getStyle_px__('margin')
  }

  opacity(): number
  opacity(arg: number): this
  opacity(arg?: number): number | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('opacity', arg.toString())
    return parseInt(this.__getStyle__('opacity'))
  }
  zIndex(): number
  zIndex(arg: number): this
  zIndex(arg?: number): number | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('zIndex', arg.toString())
    return parseInt(this.__getStyle__('zIndex'))
  }

  position(): string
  position(arg: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'): this
  position(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('position', arg)
    return this.__getStyle__('position')
  }
  overflow(): string
  overflow(
    arg: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'inherit' | 'initial' | 'unset' | 'no-content',
  ): this
  overflow(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('overflow', arg)
    return this.__getStyle__('overflow')
  }
  visibility(): string
  visibility(arg: 'visible' | 'hidden' | 'collapse' | 'inherit' | 'initial' | 'unset'): this
  visibility(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('visibility', arg)
    return this.__getStyle__('visibility')
  }

  transform(): string
  transform(arg: string): this
  transform(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('transform', arg)
    return this.__getStyle__('transform')
  }
  transformOrigin(): string
  transformOrigin(arg: string): this
  transformOrigin(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('transformOrigin', arg)
    return this.__getStyle__('transformOrigin')
  }
  filter(): string
  filter(arg: string): this
  filter(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('filter', arg)
    return this.__getStyle__('filter')
  }
  boxShadow(): string
  boxShadow(arg: string): this
  boxShadow(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('boxShadow', arg)
    return this.__getStyle__('boxShadow')
  }

  outline(): string
  outline(arg: string): this
  outline(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('outline', arg)
    return this.__getStyle__('outline')
  }
  outlineOffset(): number
  outlineOffset(arg: number | string): this
  outlineOffset(arg?: number | string): number | this {
    if (typeof arg === 'string') return this.__setStyle__('outlineOffset', arg)
    if (typeof arg === 'number') return this.__setStyle_px__('outlineOffset', arg)
    return this.__getStyle_px__('outlineOffset')
  }
  outlineColor(): string
  outlineColor(arg: string): this
  outlineColor(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('outlineColor', arg)
    return this.__getStyle__('outlineColor')
  }

  objectFit(): string
  objectFit(arg: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'): this
  objectFit(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('objectFit', arg)
    return this.__getStyle__('objectFit')
  }
  objectPosition(): string
  objectPosition(arg: string): this
  objectPosition(arg?: string): string | this {
    if (typeof arg !== 'undefined') return this.__setStyle__('objectPosition', arg)
    return this.__getStyle__('objectPosition')
  }
}
