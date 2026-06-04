 
 //function with parameters and with return type

 //example:1

/*function calculation(x:number, y:number,) : number
{
   console.log(x*y)
   return x-y*y;   //it should return only single value
}
//calculation(12,5);
console.log(calculation(16,8))
console.log(calculation(16,4));*/


//example:2
function student(name:string, id:number, branch:string, attendance:boolean, year:number) : boolean
{
  //console.log(name,branch,attendance,year)
  //console.log(id)
  return attendance;
}
console.log(student("sowmya",103,"CSE",true,3))
console.log(student("mona",104,"CSD",false,1))
console.log(student("sai",105,"Mech",true,4))
console.log(student("chaitu",106,"ECE",false,2))
console.log(student("priya",107,"EEE",true,1))