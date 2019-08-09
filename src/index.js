import Flower from './flower'
import utils from './utils'
export default class FlowerFly {
  constructor (flowerCount, imgUrl) {
    this.imgUrl = imgUrl
    this.start = true
    this.removingFlower = false
    this.createFlower(flowerCount)
  }
  init(a) {
    if (typeof window.onload != "function") {
      window.onload = a
    } else {
      const b = window.onload;
      window.onload = function() {
        b()
        a()
      }
    }
  }
  addListener(target, event, callback) {
    if (target.addEventListener) {
        target.addEventListener(event, callback, false)
    } else {
        target.attachEvent && target.attachEvent("on" + event, callback)
    }
  }

  getClientHeight() {
    const body = document.body 
    let clientHeight
    if (window.innerHeight) {
      clientHeight = window.innerHeight;
    } else if (body.parentElement.clientHeight) {
      clientHeight = body.parentElement.clientHeight;
    } else if (body && body.clientHeight) {
      clientHeight = body.clientHeight;
    }
    return clientHeight
  }
  createFlower (flowerCount) {
    if (this.start) {
        let flowers = [];
        const m = setInterval(() => {
          if (!this.removingFlower && flowerCount > flowers.length && Math.random() < flowerCount * 0.0025) {
            flowers.push(new Flower(this.imgUrl))
          }
          if (this.removingFlower && !flowers.length) {
              clearInterval(m);
          }
          for (let pageYOffset = utils.getOffset().top, clientHeight = this.getClientHeight(), d = flowers.length - 1; d >= 0; d--) {
              if (flowers[d]) {
                  if (flowers[d].top < pageYOffset || flowers[d].top + flowers[d].size + 1 > pageYOffset + clientHeight) { // 到达屏幕底部，移除花瓣
                      flowers[d].remove();
                      flowers[d] = null;
                      flowers.splice(d, 1)
                  } else {
                      flowers[d].move();
                      flowers[d].draw()
                  }
              }
          }
        }, 40)
        this.addListener(window, "scroll", function() {
            for (let e = flowers.length - 1; e >= 0; e--) {
              flowers[e].draw()
            }
        })
    } else {
        this.init(function() {
            createFlower(flowerCount)
        })
    }
  }
  removeFlower () {
    this.removingFlower = true
  }
}