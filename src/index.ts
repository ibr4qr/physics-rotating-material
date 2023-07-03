import Factory from './components/Factory'
import Master from './components/Master'
import Meteor from './components/Meteor'
import ObjectFactory from './components/utils'

import './style/App.css'

const __METEORS = 200

class Motion {
  private canvas: HTMLCanvasElement = null
  private ctx: CanvasRenderingContext2D = null
  private master: Master = null
  private meteors: Meteor[] = []
  private height: number = 0
  private width: number = 0

  constructor (w: number = 200, h: number = 200) {
    this.height = h
    this.width = w
  }

  /* mounting everything on the DOM */
  Mount () {
    this.canvas = <HTMLCanvasElement>(
      Factory.createElement('canvas', null, 'canvas')
    )

    this.canvas.classList.add('game-container')
    this.canvas.height = this.height
    this.canvas.width = this.width

    this.ctx = this.canvas.getContext('2d')

    Factory.mountElement(document.body, this.canvas)
  }

  Init () {
    this.Mount()
    this.master = new Master(this.canvas, { w: 10, h: 10 }, '#e63946')
    for (let i = 0; i < __METEORS; i++) {
      const meteor = ObjectFactory.GetMeteor(this.canvas, this.master)

      this.meteors.push(meteor)
    }
    this.report()
    this.gameLoop()
  }

  gameLoop () {
    // TODO:
    // some perfomance measurements
    let A = 0
    let B = 0
    /* eslint-disable  */
    let FPS = 0
    let elapsed = 0

    const step = (deltaTime: number) => {
      B = deltaTime

      // clean the scene
      this.ctx.fillStyle = 'rgba(0,0,0,0.05)'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

      // update and render gameObjects
      this.update(elapsed)
      this.render()

      FPS = (B - A) / 1000
      elapsed = 1000 / (B - A)

      A = B
      requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  update (elapsed: number) {
    this.master.update(elapsed)
    this.meteors.forEach(meteor => meteor.update(elapsed))
  }

  render () {
    this.master.render(this.ctx)
    this.meteors.forEach((meteor) => meteor.render(this.ctx))
  }

  report () {
    console.log(
      '%cgithub: https://github.com/ibr4qr',
      'color: whitesmoke; background-color:#e76f51; padding: 2em 1em;'
    )
    console.log(
      '%cCurrently working at: Alten Italy',
      'color: whitesmoke; background-color:#e76f51; padding: 1em 1em;'
    )
  }
}

export default Motion;



export class DrawCanvas {
  constructor(container: HTMLBodyElement, w: number, h: number) {
    const canvas = document.createElement('canvas');
    canvas.height = h;
    canvas.width = w;
    container.appendChild(canvas);
  }
}
