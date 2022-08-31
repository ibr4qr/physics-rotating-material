import GameObject from "../GameObject";
import Master from "../Master";
import { Color, Position, Size, Angle, Radius, Sign } from "../types/generals";
import { drawCircle } from "../utils/index";
import LinearTransform from "../utils/linear-transform";
/**
 * TODO: 
 * Someone may declare a master that wants somehow to listen to user input
 * such as cursor movement
 * 
 */

// we need to a better orbits 
// cause it seems meteros are a bit off the trajectory.

class Meteor extends GameObject {
  /* static  */
  static counter: number = 0;


  /* private  */
  private masterRef: Master = null;
  private theta: Angle = 0.0;
  private radius: Radius = 0.0;
  private ratio: number = 0.0;
  private beta: number = 0.0;
  private sign: Sign = -1;
  private xTransformation: number = 0;
  private yTransformation: number = 0;


  /* public  */
  public canvas: HTMLCanvasElement = null;

  constructor(
    canvas: HTMLCanvasElement,
    p: Position,
    s: Size,
    c: string, // this should of type Color, but for it's ok String Type
    radius: Radius,
    theta: Angle,
    master: Master,
    ratio: number,
    beta: number,
    sign: Sign // 1 | -1
  ) {
    super(p, s, c);
    this.radius = radius;
    this.masterRef = master;
    this.theta = theta;
    this.ratio = ratio;
    this.beta = beta;
    this.sign = sign;
  }



  /* update the current meteor position */
  update(elapsed: number) {
    const aRatio = 1 * this.ratio;
    const bRatio = 1 / this.ratio;

    // color of the meteor ( maybe this should me generated randomically ?? )
    
    let xPosition = (this.radius * Math.cos(this.theta)) / aRatio;
    let yPosition = (this.radius * Math.sin(this.theta)) / bRatio;

    // applying a rotation (β) to the plane the meteor is rotating on 


    const { x, y} = LinearTransform.rotation2D(xPosition, yPosition, this.beta);

    // can we make better ?? 
    this.xTransformation =
      this.masterRef.position.x  + x;

    this.yTransformation =
      this.masterRef.position.y + y;
    
    // update theta 
    this.theta += this.sign * (0.0002 * this.radius);
  }

  render(ctx: CanvasRenderingContext2D) {
    // just draw a circle of the desired color
    drawCircle(this.xTransformation, this.yTransformation, 0.03, this.color, ctx);
  }
}

export default Meteor;
