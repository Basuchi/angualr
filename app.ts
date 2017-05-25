

// To Run : ts-node app.ts
//Ex 1:
/*
let  myname: string = 'Raj';
let  heightInCm: number = 182.88;
let  isActive: boolean = true;

// array type annotation
let  places: string[] = ['Blr', 'Hyd', 'Kol', 'Pune'];
console.log("places: ", places);

*/

//Ex 2:
/*
interface IPerson {
    name: string;
    height: number;
}


let  person1: IPerson = {
    name: 'Raju',
	height: 183
};

console.log(person1);
*/
//Ex 3:
/*
enum VehicleType {
    PedalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry
}
var type = VehicleType.Lorry;
var typeName = VehicleType[type]; // 'Lorry'

console.log(type, typeName);
*/

//Ex 4:

/*
interface House {
    bedrooms: number;
    bathrooms: number;
}
interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}
let  myVilla: House = {
    bedrooms: 3,
    bathrooms: 3,
	
  //butlers: 1
};

//let  mansion1: Mansion = myVilla;   //  convert House to Mansion
//console.log("mansion1: ",  mansion1);

let  mansion2: Mansion = <Mansion>myVilla;
console.log("mansion2: ",  mansion2);

*/

//Ex 5:
/*
var myname: string = 'MG  Road';
//var bedrooms: number = <number> myname; //Type 'string' cannot be converted to type 'number'. (2352)
var bedrooms: number = <any> myname; // if don't knw then use any type, but its not good way of writting
*/

//Ex 6:
/*
function getAverage2(a: number, b: number, c: number): string {
    var total = a + b + c;
    var average = total / 3;
    return 'The average is: ' + average;
}
var result = getAverage2(4, 3, 8);
console.log(result);


function getAverage2(a: number, b: number, c?: number ): string {
    var total = a + b + c;
    var average = total / 3;
    return 'The average is: ' + average;
}
var result = getAverage2(4,3,2);
console.log(result);

*/
//Ex : 7
/*
  function getAverage(a: number, b: number, c?: number): string {
        let  total = a;
        let  count = 1;

        total += b;
        count++;

        if (typeof c !== 'undefined') {
            total += c;
            count++;
        }

        let  average = total / count;
        return 'The average is ' + average;
    }

    let  result = getAverage(4, 6);
    console.log(result);

	*/
	
//Ex :8 
	/*
	//function getAverage(a: string, b: string, c: string): string;
	//function getAverage(a: number, b: number, c: number): string;
	
	function getAverage(a: string | number, b: string | number, c: string | number): string;
	

	function getAverage(a: any, b: any, c: any): string{
		return  a + b + c;
	}

	let  result = getAverage("21", "2", "3");
	console.log(result); //function getAverage(a: number, b: number, c: number): string;

	function getAverage(a: string|number, b: any, c: any): string {
	  var total = parseInt(<any>a) + parseInt(b) + parseInt(c);
	  var average = total / 3;
	  return 'The average is: ' + average;
	}

	let result = getAverage("4", "3", "8");
	console.log(result);

	result = getAverage(4, 3, 8);
	console.log(result);
*/

//Ex 9 :





