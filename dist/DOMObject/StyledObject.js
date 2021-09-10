import { DOMObjectBase } from './DOMObjectBase';
export class StyledObject extends DOMObjectBase {
    __getStyle__(key) {
        const style = this.style[key];
        return style ? style : 'style not defined';
    }
    __getStyle_px__(key) {
        const unit = 'px';
        return parseInt(this.__getStyle__(key).replace(unit, ''));
    }
    __getStyle_percent__(key) {
        const unit = '%';
        return parseInt(this.__getStyle__(key).replace(unit, ''));
    }
    __setStyle__(key, arg) {
        if (typeof arg !== 'undefined') {
            this.style[key] = arg;
            return this;
        }
        return this.__getStyle__(key);
    }
    __setStyle_px__(key, arg) {
        const unit = 'px';
        return this.__setStyle__(key, `${arg}${unit}`);
    }
    __setStyle_percent__(key, arg) {
        const unit = '%';
        return this.__setStyle__(key, `${arg}${unit}`);
    }
    width(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('width', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('width', arg);
        return this.__getStyle_px__('width');
    }
    height(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('height', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('height', arg);
        return this.__getStyle_px__('height');
    }
    maxWidth(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('maxWidth', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('maxWidth', arg);
        return this.__getStyle_px__('maxWidth');
    }
    maxHeight(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('maxHeight', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('maxHeight', arg);
        return this.__getStyle_px__('maxHeight');
    }
    top(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('top', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('top', arg);
        return this.__getStyle_px__('top');
    }
    left(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('left', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('left', arg);
        return this.__getStyle_px__('left');
    }
    bottom(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('bottom', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('bottom', arg);
        return this.__getStyle_px__('bottom');
    }
    right(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('right', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('right', arg);
        return this.__getStyle_px__('right');
    }
    borderRadius(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('borderRadius', arg);
        if (typeof arg === 'number')
            return this.__setStyle_percent__('borderRadius', arg);
        return this.__getStyle_percent__('borderRadius');
    }
    color(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('color', arg);
        return this.__getStyle__('color');
    }
    backgroundColor(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('backgroundColor', arg);
        return this.__getStyle__('backgroundColor');
    }
    margin(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('margin', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('margin', arg);
        return this.__getStyle_px__('margin');
    }
    opacity(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('opacity', arg.toString());
        return parseInt(this.__getStyle__('opacity'));
    }
    zIndex(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('zIndex', arg.toString());
        return parseInt(this.__getStyle__('zIndex'));
    }
    position(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('position', arg);
        return this.__getStyle__('position');
    }
    overflow(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('overflow', arg);
        return this.__getStyle__('overflow');
    }
    visibility(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('visibility', arg);
        return this.__getStyle__('visibility');
    }
    transform(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('transform', arg);
        return this.__getStyle__('transform');
    }
    transformOrigin(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('transformOrigin', arg);
        return this.__getStyle__('transformOrigin');
    }
    filter(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('filter', arg);
        return this.__getStyle__('filter');
    }
    boxShadow(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('boxShadow', arg);
        return this.__getStyle__('boxShadow');
    }
    outline(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('outline', arg);
        return this.__getStyle__('outline');
    }
    outlineOffset(arg) {
        if (typeof arg === 'string')
            return this.__setStyle__('outlineOffset', arg);
        if (typeof arg === 'number')
            return this.__setStyle_px__('outlineOffset', arg);
        return this.__getStyle_px__('outlineOffset');
    }
    outlineColor(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('outlineColor', arg);
        return this.__getStyle__('outlineColor');
    }
    objectFit(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('objectFit', arg);
        return this.__getStyle__('objectFit');
    }
    objectPosition(arg) {
        if (typeof arg !== 'undefined')
            return this.__setStyle__('objectPosition', arg);
        return this.__getStyle__('objectPosition');
    }
}
