
//Ex 1: singleton class

/*
class Singleton {
    private static singleton: Singleton;
    constructor() {
        if (!Singleton.singleton) {
            Singleton.singleton = this;
            console.log("init steps ... ", this);
        }
        return Singleton.singleton;
    }
    add() {console.log("add fn called"); }
}

let  obj1a = new Singleton();
let obj2 = new Singleton();

console.log( "comparison: " ,obj1a === obj2); // true;
obj1a.add();
*/

//Ex : 2
 const {called} = new class {
    count: number = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};

called();
called();
called();// statefull function / impure function

