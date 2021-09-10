import anime from 'animejs';
import { LazyStyledObject } from './LazyStyledObject';
export class AnimeObject extends LazyStyledObject {
    anime(params) {
        return anime({ targets: this.dom, ...params });
    }
}
