
// let b:boolean = true;
// console.log(true+true)  //2 as true is treated as 1 and false is treated as 0 in javascript

// console.log([] == false) // true as [](an empty string) is converted as 0 and false is treated as 0, so 0==0

/*let a =10;
console.log(a)   //10
let b ="Sowmya";
console.log(b)   //Sowmya
let c =true;
console.log(c)   //true
let n =null;
console.log(n)   //null

let a : string = "Sowmya";
console.log(typeof(a))

let a;
console.log(a)  //undefined
a = 10;
console.log(a)   //10
a= "hello"
console.log(a)   //hello 
let big = 1812234567876543n;
console.log(big)   //1812234567876543n
console.log(typeof big)  //bigint

let arr : (string | number | boolean)[] = ["sowmya", 103, "2nd year", true]
console.log(arr) 


let name1 ={name:"sowmya"};
let name2= name1  //sowmya
name2.name="meruva"
console.log(name1)
console.log(name2)  */

let a=10;
let b=a;
//b=20;
let c=b;
b=20;
console.log(a)
console.log(b)
console.log(c)