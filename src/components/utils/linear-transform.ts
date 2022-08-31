




const rotationalMatrix = (theta: number) => {


    return [
            [() => {
                return Math.cos(theta)
            }, () => {
                return -1 * Math.sin(theta)
            }],
            [() => {
                return Math.sin(theta);
            }, () => {
                return Math.cos(theta);
            }] 
          ]
}


class LinearTransform {
    static VectorMatrixProduct(matrix: object, vector: object) {
        // here we don't generalize and suppose the input is a 2x2 matrix and bidimensional vector in the cartesian plane
        const newVector = {};

        for(let i = 0; i < 2; i++) {
            for(let j = 0; j < 2; j++) {
                console.log(matrix);
            }
        }        
    }

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
        // this.VectorMatrixProduct(rotationalMatrix(theta), )

        console.log(JSON.stringify(rotationalMatrix(theta)));

        return {
            x: (xPosition * Math.cos(theta) - yPosition * Math.sin(theta)),
            y: xPosition * Math.sin(theta) + yPosition * Math.cos(theta)
        }
    }   
}

export default LinearTransform;