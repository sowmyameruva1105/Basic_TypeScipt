 
 //function with parameters and without return type

 //example:1

/*function calculation(x:number, y:number,) : void
{
   console.log(x*y)
}
calculation(12,5);
calculation(16,4);
calculation(68,2);
calculation(98,5);*/

//example:2
function student(name:string, id:number, branch:string, attendance:boolean, year:number,sem:string) : void
{
  console.log(name,branch,attendance,year)
  console.log(id)
  //console.log(sem)      //undefined as its value is not given
}
student("sowmya",103,"CSE",true,3)
student("mona",104,"CSD",false,1)
student("sai",105,"Mech",true,4)
student("chaitu",106,"ECE",false,2)
student("priya",107,"EEE",true,1)