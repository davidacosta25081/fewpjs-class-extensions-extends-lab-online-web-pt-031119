class Polygon {
  constructor(array){
    this.array = array
  }



  get countSides() {
    return `${this.array.length}`
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
