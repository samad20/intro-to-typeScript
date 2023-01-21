//how to write functins in TypeScript:
//////////////////////////////////////////////////////////
// 1.
function add(num1: number, num2:number):number{
    return num1+num2;
}
let resultSum :number = add(2728,8282);
console.log(resultSum);
//11010
//////////////////////////////////////////////////////////

// 2.
const sub= (num1: number, num2:number):number => num1-num2;
console.log(sub(8,2));
//6
//////////////////////////////////////////////////////////

// 3.
const mult= function(num1: number, num2:number):number {
    return num1*num2;
}
console.log(mult(6,2));
//12
//////////////////////////////////////////////////////////

//Optional Parameters:
function add2(num1:number,num2:number,num3?:number) : number{
    return num3? num1+num2+num3 : num1+num2;
}

console.log(add2(1,2));
//3
console.log(add2(1,2,3));
//6
//////////////////////////////////////////////////////////

// Rest Parameters

function Greet(greeting: string, ...names: string[]) :string{
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"

console.log(Greet("Hello"));// returns "Hello !"


function add3(num1:number, ...nums:number[]):number{

    return num1+nums.reduce((a,b)=>a+b,0); 
}

console.log(add3(1,...[1,6,7]));
//15
//////////////////////////////////////////////////////////

4.
function getItem<Type> (items : Type[]) : Type[]
{
    return new Array<Type>().concat(items);
} 

let consresult = getItem([1,2,3,4,5]);

console.log(consresult);