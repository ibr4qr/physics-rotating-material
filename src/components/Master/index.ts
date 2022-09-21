import GameObject from '../GameObject'
import { Color, Size } from '../types/generals'

class Master extends GameObject {
  mouseXPosition: number = 0.0
  mouseYPosition: number = 0.0

  constructor (canvas: HTMLCanvasElement, s: Size, c: Color) {
    super(
      {
        x: (canvas.width - s.w) / 2,
        y: (canvas.height - s.h) / 2
      },
      s,
      c
    )
    window.addEventListener('mousemove', e => {
      this.mouseXPosition = e.clientX
      this.mouseYPosition = e.clientY

      this.position = {
        x: e.clientX,
        y: e.clientY
      }
    })
  }

  update (elapsed: number) {
    // console.log(this);
    // drawCircle(this.mouseXPosition, this.mouseYPosition, 10, "red", );
  }
}

export default Master
