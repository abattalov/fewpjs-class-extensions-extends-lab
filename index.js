class Polygon{
    constructor(numSides){
        this.numSides = numSides;
        this.count = this.numSides.length;
    }

    get countSides(){
        return this.numSides.length
    }

    get perimeter(){
        // if (!Array.isArray(this.numSides)) return;
        let sum = 0;
        for (let int of this.numSides){
            sum += int
        }

        return sum
    }

}

class Triangle extends Polygon{

    get isValid() {
        if (!Array.isArray(this.numSides)) return;
        if (this.count !== 3) return;
        let side1 = this.numSides[0]
        let side2 = this.numSides[1]
        let side3 = this.numSides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      }
}

class Square extends Polygon {

    get isValid() {
      if (!Array.isArray(this.numSides)) return;
      if (this.count !== 4) return;
      let side1 = this.numSides[0]
      let side2 = this.numSides[1]
      let side3 = this.numSides[2]
      let side4 = this.numSides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.numSides)) return;
      if (this.count !== 4) return;
      return this.numSides[0] * this.numSides[0]
    }
  }