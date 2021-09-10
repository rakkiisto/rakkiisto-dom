import anime from 'animejs'
import { LazyStyledObject } from './LazyStyledObject'

export class AnimeObject extends LazyStyledObject {
  anime(params: anime.AnimeParams) {
    return anime({ targets: this.dom, ...params })
  }
}
