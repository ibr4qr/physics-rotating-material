





class LinearTransform {


    /* Linear Tranformation rappresented with a simple rotational matrix */
    /*
      [
        cos θ -sin θ
        sin θ cos θ
      ]
    */
      /**
       * 
       * @param xPosition x coordinate component in the Carteesian plane
       * @param yPosition y coordinate component in the Cartesian plane
       * @param theta angle by which the vector (x, y) will rotated 
       */
    static rotation2D(xPosition: number, yPosition: number, theta: number) {

        return {
            x: (xPosition * Math.cos(theta) + yPosition * Math.sin(theta)),
            y: -1 * xPosition * Math.sin(theta) + yPosition * Math.cos(theta)
        }
    }   
}

export default LinearTransform;