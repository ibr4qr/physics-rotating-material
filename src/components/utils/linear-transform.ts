
const rotationalMatrix = (theta: number) => {
  return [
    [() => {
      return Math.cos(theta)
    }, () => {
      return -1 * Math.sin(theta)
    }],
    [() => {
      return Math.sin(theta)
    }, () => {
      return Math.cos(theta)
    }]
  ]
}

class LinearTransform {
  static VectorMatrixProduct (matrix: any, vector: any) {
    // here we don't generalize and suppose the input is a 2x2 matrix and bidimensional vector in the cartesian plane
    const newVector = []

    for (let i = 0; i < 2; i++) {
      let coordinate = 0
      for (let j = 0; j < 2; j++) {
        coordinate += matrix[i][j]() * vector[j]
      }
      newVector.push(coordinate)
    }

    return newVector
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
  static rotation2D (xPosition: number, yPosition: number, theta: number) {
    const [x, y] = this.VectorMatrixProduct(rotationalMatrix(theta), [xPosition, yPosition])

    return {
      x,
      y
    }
  }
}

export default LinearTransform
