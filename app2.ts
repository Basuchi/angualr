
//Ex 1: inheritance kind of example

/*
class Vehicle {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Sedan extends Vehicle { constructor() { super("BMW"); } }

class Plane {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let x5 = new Vehicle("BMW X5");
console.log("1. ",  x5);

let bmw = new Sedan();
x5 = bmw; // lispy 
console.log("2. ",  x5);

let p = new Plane("basu");
//x5 = p;//Type 'Plane' is not assignable to type 'Vehicle'

*/
//Ex : 2
	
	/**class Animal {
	   public  feet: number;
	   static count: number ;
		constructor(name: string, numFeet: number) { //do something  }
	}
	class SizeZ {
	   public feet: number;
		constructor(meters: number, scaleFactor: number) { // do something  }
	}
	let ani: Animal;
	let sz: SizeZ;

	ani = sz;
	
	*/
	
	
//Ex 3: module concept
	
	/*
	module Shipping {

    // Available as Shipping.Ship
    export interface Ship {
        name: string;
        port: string;
        displacement: number;
    }

    // Available as Shipping.Ferry
    export class Ferry implements Ship {
        constructor(
            public name: string,
            public port: string,
            public displacement: number) {
        }
    }

    // Only available inside of the Shipping module
    var defaultDisplacement = 4000;

    class PrivateShip implements Ship { // export
        constructor(
            public name: string,
            public port: string,
            public displacement: number = defaultDisplacement) {
        }
    }

}

var ferry = new Shipping.Ferry('Ganga', 'Mumbai', 3220);
console.log(ferry);


var myship = new Shipping.PrivateShip('Yamuna', 'Kochi'); // Property 'PrivateShip' does not exist on type 'typeof Shipping'. (2339)

	*/
	
//Ex : 3

/*
   interface Vehicle {
	   moveTo(x: number, y: number): any;  
	   }

    class Car implements Vehicle {
        moveTo(x: number, y: number) {
            console.log('Driving to ' + x + ' ' + y);
        }
    }

    class SportsCar extends Car { }

    class Airplane {
        moveTo(x: number, y: number) {
            console.log('Flying to ' + x + ' ' + y);
        }
    }

    function navigate(vehicle: Vehicle) {vehicle.moveTo(59.94, 10.71); }

    let airplane = new Airplane();
    navigate(airplane); // it will work , becaz function is available and
						//vehicle is object and it ignored and move to its local function i.e. moveTo()....
						// not a java behevioar 

    let spcar = new SportsCar();
    navigate(spcar);
	
	*/
//Ex 4:
		
/*
	interface MyCoord {
		x: number;
		}
	// ... elsewhere ...
	interface MyCoord {
		y: number;
	}
	var  myScreen: MyCoord ={x:3, y:4};
	console.log(myScreen.x + myScreen.y);


		
	 class MyCoord2 {
		x: number;
	}
	// ... elsewhere ...
	interface MyCoord2 {
		y: number;
	}
	var  myScreen2: MyCoord2 ={x:5, y:7};
	console.log(myScreen2.x + myScreen2.y); // will allow to add some functionily to the existing interface 
											// or class with rewrtitting 
	
*/
//Ex 5: TS looks in attributs rather than class/interface name
/*
interface X1 { name: string; }
interface X2 { name: string;  }
let  myVar5: X1 = null;
let  myVar6: X2 = myVar5;


//if structure of class/interface is mathces , TS allows to manupulate the stuffs
	interface Point_2i {
		x: number,
		y: number
	}
	class Point2D_cl {
		constructor(public x:number, public y:number){}
	}

	let p: Point_2i;
	p = new Point2D_cl(1,2); 
*/

	//Ex : 6:
	/*
	interface ILayerInfo {
		a: string;
	}

	interface ILayerStatic {
		b(): void;
	}

	interface Layer extends ILayerInfo, ILayerStatic {
		new(info: ILayerInfo): any;
	}
	
	*/
	//Ex 7: generics in java / Templates in C++
/*
	
	function reverse<T>(a : T[]): T[] { // generics in java / Templates in C++
			
			return a.reverse();
	}
 
     let letters = ['a', 'b', 'c', 'd'];
    let reversedLetters = reverse<string>(letters);
    console.log(reversedLetters);

    let numbers = [1, 2, 3, 4];
    let reversedNumbers = reverse<number>(numbers);
    console.log(reversedNumbers);
*/

//Ex 8 : Deligation function
/*
class Bird {
    constructor(weight: number, height: number) {  }
    walk() {console.log('walk!'); }
}

class Penguin {
    constructor(private bird: Bird) { } //// injecting the class bird in Penguin class 
    walk() {this.bird.walk(); }
    swim() { console.log('swim!'); }
}

const bird = new Bird(500, 30); // gm & cm
const penguin = new Penguin(bird);  
penguin.walk(); 

*/
//Ex : 6
// global scope/ function scope // block scope
	/*for (var i = 0; i < 5; i++) {
		setTimeout(function() { console.log(i); }, 100 * i);
	}


	for (let i = 0; i < 5; i++) {
		setTimeout(function() { console.log(i); }, 100 * i);
	}

	
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() { console.log(i); }, 1000 * i);
    })(i);
}


//more kind of java style 

function callTimer(i){
    setTimeout(function() { console.log(i); }, 100 * i);
}

for (var i = 0; i < 5; i++) {
     callTimer(i);
    
}


*/

// Ex 7: Abstract 

abstract class Book {
    constructor(public name: string) { }
    getName(): void { console.log("Book: " + this.name); }
    abstract callAuthor(): void; // must be implemented in derived classes
}

class Fiction extends Book {
    constructor() {
        super("Harry Potter"); // constr in derived classes must call super()
    }

    callAuthor(): void {console.log("Send SMS."); }

    checkSales(): void {
        console.log("gather all sales data.");
    }
}


let myBook: Book; // Allowed
//let my = new Book(); // Not allowed

myBook = new Fiction();
myBook.callAuthor();

//myBook.checkSales(); //Property 'checkSales' does not exist on type 'Book'. (2339)







	
