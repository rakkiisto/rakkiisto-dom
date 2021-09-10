import Color from 'color';
import { StyledObject } from './StyledObject';
export class LazyStyledObject extends StyledObject {
    size(width, height) {
        if (typeof width === 'number' && typeof height === 'number')
            return this.width(width).height(height);
        return [this.width(), this.height()];
    }
    max(width, height) {
        if (typeof width === 'number' && typeof height === 'number')
            return this.maxWidth(width).maxHeight(height);
        return [this.maxWidth(), this.maxHeight()];
    }
    pos(x, y, w, h) {
        if (typeof x === 'number' && typeof y === 'number') {
            this.left(x).top(y).position('absolute');
            if (typeof w === 'number' && typeof h === 'number')
                return this.width(w).height(h);
            return this;
        }
        return [this.left(), this.top()];
    }
    box() {
        return [this.left(), this.top(), this.right(), this.bottom()];
    }
    Color(arg) {
        if (arg)
            return this.__setStyle__('color', typeof arg === 'string' ? arg : arg.toString());
        return Color(this.__getStyle__('color'));
    }
    bg(arg) {
        if (arg)
            return this.__setStyle__('backgroundColor', typeof arg === 'string' ? arg : arg.toString());
        return Color(this.__getStyle__('backgroundColor'));
    }
    blendMode(arg) {
        //@ts-ignore
        if (arg)
            return this.__setStyle__('mixBlendMode', arg);
        //@ts-ignore
        return this.__getStyle__('mixBlendMode');
    }
    z(arg) {
        if (typeof arg === 'number')
            return this.__setStyle__('zIndex', arg.toString());
        return parseInt(this.__getStyle__('zIndex'));
    }
    /** this.transformOrigin('center center').transform(`rotate(${deg}deg)`) */
    rotate(deg) {
        return this.transformOrigin('center center').transform(`rotate(${deg}deg)`);
    }
    glow(color = 'white', size = 8) {
        return this.filter(`drop-shadow(0 0 ${size}px ${color})`);
    }
    show() {
        return this.visibility('visible');
    }
    hide() {
        return this.visibility('hidden');
    }
}
