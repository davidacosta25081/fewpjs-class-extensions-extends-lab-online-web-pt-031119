class Polygon {
  constructor(array){
    this.array = array
  }



   get countSides() {
    return this.array.length
  }

   get perimeter() {

        var per = 0;
        for (var i = 0; i < this.array.length; i++)
        {
            per += this.array[i];
        }
        return per;
    }



}

class Triangle extends Polygon {

   isValid() {
    if ((this.countSides === 3) && (this.array[0] + this.array[1] > this.array[2] || this.array[0] + this.array[2] > this.array[1] || this.array[1] + this.array[2] > this.array[0]))
      {
      return this.isValid = true;
    } else {
      return this.isValid = false;
    }
  }

}

class Square extends Polygon {

  get isValid(){
    if (this.array[0] === this.array[1] === this.array[2] === this.array[3]) {
      return this.isValid = true; }
    else { return this.isValid = false;
    }
  }
}
