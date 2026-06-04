 
 //function without parameters and with return type
function calculation() : string
{
    let a : number = 13
    let b : number = 38
    let p : string = "parrot";
    console.log("sum of a and b is : " + (a+b))
    return p+" "+b;
   // return a    //Unreachable code detected as it comes out of the function after the first return
  //  console.log("hello")  //Unreachable code detected

}
//print the function only when the code is returning any value
//it will give Undefined when we print the function without returning any value
console.log(calculation());       
//console.log("sum of a and b is : " + (a+b))