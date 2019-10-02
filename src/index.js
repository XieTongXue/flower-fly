import Flower from './flower'
import utils from './utils'
export default class FlowerFly {
  constructor (flowerCount, imgUrl) {
    this.flowerCount = flowerCount
    this.imgUrl = imgUrl
    this.start = true
    this.listener = null
    this.removingFlower = false
    this.init()
  }
  init() {
    if (typeof window.onload != "function") {
      window.onload = () => {
        this.createFlower(this.flowerCount)
      }
    } else {
      const preOnload = window.onload;
      window.onload = () => {
        preOnload()
        this.createFlower(this.flowerCount)
      }
    }
    this.addListener(window, "scroll", function() {
      for (let e = this.flowers.length - 1; e >= 0; e--) {
        this.flowers[e].draw()
      }
    })
  }
  addListener(target, event, callback) {
    if (target.addEventListener) {
        target.addEventListener(event, callback, false)
    } else {
        target.attachEvent && target.attachEvent("on" + event, callback)
    }
  }
  createFlower () {
    this.flowers = []
    this.listener = setInterval(() => {
      if (this.flowerCount > this.flowers.length && Math.random() < this.flowerCount * 0.0025) {
        this.flowers.push(new Flower(this.imgUrl))
      }
      let pageYOffset = utils.getOffset().top, clientHeight = utils.getClientHeight()
      for (let index = this.flowers.length - 1; index >= 0; index--) {
          if (this.flowers[index]) {
              if (this.flowers[index].top < pageYOffset || this.flowers[index].top + this.flowers[index].size + 1 > pageYOffset + clientHeight) { // 到达屏幕底部，移除花瓣
                this.flowers[index].remove();
                this.flowers[index] = null;
                this.flowers.splice(index, 1)
              } else {
                this.flowers[index].move();
                this.flowers[index].draw()
              }
          }
      }
    }, 40)
  }
  clear () {
    if (!this.flowers || this.flowers.length === 0) {return}
    for (let i = 0, length = this.flowers.length; i < length; i++) {
      this.flowers[i].remove()
    }
    this.flowers = null
    this.start = false
    clearInterval(this.listener);
  }
  reStart () {
    !this.start && this.createFlower()
  }
}