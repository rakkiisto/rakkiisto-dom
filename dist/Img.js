import { DOMObject } from './DOMObject';
export class Img extends DOMObject {
    constructor(src, image = new Image()) {
        super(image);
        this.src = src;
        this.isLoaded = false;
        this.image = image;
        this.image.src = src;
        this.onload = new Promise(resolve => (this.image.onload = () => {
            this.isLoaded = true;
            resolve(this);
        }));
    }
    copy() {
        return new Img(this.src).copyStyleFrom(this.style);
    }
    updateSrc(src) {
        this.src = this.image.src = src;
        super.width;
    }
    autoWidth(width) {
        this.onload.then(i => i.size(width, (width / this.image.naturalWidth) * this.image.naturalHeight));
        return this;
    }
    autoHeight(height) {
        this.onload.then(i => i.size((height / this.image.naturalHeight) * this.image.naturalWidth, height));
        return this;
    }
    relPos(x, y) {
        const [x0, y0] = this.pos();
        if (isNaN(x0) || isNaN(y0))
            return this.pos(x, y);
        return this.pos(x0 + x, y0 + y);
    }
    center() {
        return this.relPos(-this.width() / 2, -this.height() / 2);
    }
    offsetPos(x, y) {
        return this.relPos(-x, -y);
    }
}
