function test(){

	var xx:number = 100;
	var str:string = "ABC";
	var b:boolean=false;
	var x:any=123.4;

	console.info(typeof(xx));
	console.info(typeof(str));
	console.info(typeof(b));
	console.info(typeof(x));
	



}

//function with arguments

function display(aa:number,bb:number){

	//return (x+y);
	console.info(aa+bb);

}


//console.info(print(100,200));

test();
display(1,2);