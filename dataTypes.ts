let lname ='hello world';
console.log(lname);

let age : number;
age=19;

let lisNum : Array<number>;
lisNum = [8,77,5,6,9];

let result = lisNum.filter((num)=>num>8);
console.log(result);

let numb= lisNum.filter((num)=>num===77);
console.log(numb);

let sumListnum = lisNum.reduce((acc,num)=> acc + num);
console.log(sumListnum);