class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    // arrow function 
    // area = () =>{
    //     const areaValue = this.width * this.height;
    //     return areaValue;
    // }
    //function 
    // area(){
    //     const areaValue = this.width * this.height;
    //     return areaValue;
    // }

    // best practice 
    get area (){
        const areaValue = this.width * this.height;
        return areaValue;
    }
}

let square1 = new Square(4);
console.log(square1.area);