var arr:any[] = [10,20,30,40,50,"Veeba"];

//console.info(arr);

//1. push to end of array
arr.push(111);
console.info(arr);

//2. pop last element of array
//console.info(arr.pop());

//3.shift will remove first element of array and returns the value of element
//var shiftArr :any = arr.shift();
//console.info(shiftArr); // 10



//4.unshift add elements first and return the length of the array 
//var uShiftArr:any = arr.unshift(222);
//console.info(uShiftArr); // 10

//5. slice - 
//var sliceArr:any = arr.slice(2,5); // from index 2, 4-1=3 elemsts will return  sub array
//console.info(sliceArr);
//console.info(arr);
//splice - from index 2, 5-1=4 index remove the elements and in same place, put these 333,444 values
var spliceArr:any = arr.splice(2,5,333,444);
console.info(spliceArr);

//6. forEach -> x is index here 
for(var x:any in arr){

		console.info(arr[x]);
}

//forEach x-> elements here 10,20 ...
for(var x:any of arr){

		console.info(x);
}

// map
/*var mapArr:any = arr.map(function(a,x){

		return a*x;
});*/

//console.info(mapArr);

var filterArr:any = arr.filter(function(a,x){
		return a>=20;
});

console.info(filterArr);
