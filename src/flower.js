import utils from './utils'
export default class Flower {
  constructor (imgUrl) {
    this.imgUrl = imgUrl
    this.parent = document.body;
    this.createEl();
    this.size = Math.random() * 20 + 5;
    this.el.style.width = Math.round(this.size) + "px";
    this.el.style.height = Math.round(this.size) + "px";
    this.maxLeft = document.body.offsetWidth - this.size;
    this.maxTop = document.body.offsetHeight - this.size;
    this.left = Math.random() * this.maxLeft;
    this.top = utils.getOffset().top + 1;
    this.angle = 1.4 + 0.2 * Math.random();
    this.minAngle = 1.4;
    this.maxAngle = 1.6;
    this.angleDelta = 0.01 * Math.random();
    this.speed = 2 + Math.random()
  }
  createEl() {
    this.el = document.createElement("img");
    this.el.setAttribute("src", this.imgUrl);
    this.el.setAttribute("class", "flower");
    this.el.style.position = "absolute";
    this.el.style.display = "block";
    this.el.style.zIndex = "665";
    this.parent.appendChild(this.el) 
    if (window.stopFlower) {
        $('.flower').css('opacity', '0');
    }
  }
  move () {
    if (this.angle < this.minAngle || this.angle > this.maxAngle) this.angleDelta = -this.angleDelta;
    this.angle += this.angleDelta;
    this.left += this.speed * Math.cos(this.angle * Math.PI);
    this.top -= this.speed * Math.sin(this.angle * Math.PI);
    if (this.left < 0) this.left = this.maxLeft;
    else if (this.left > this.maxLeft) this.left = 0
  }
  draw () {
    this.el.style.top = Math.round(this.top) + "px";
    this.el.style.left = Math.round(this.left) + "px"
  }
  remove () {
    this.parent.removeChild(this.el);
    this.parent = this.el = null
  }
}