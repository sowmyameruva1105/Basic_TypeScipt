
interface mydata    // creating rough data
{
    empid : number,
    empname : string,
    issalary : boolean,
    empAdd :
    {
        eStreet : String,
        epin : number,
        eroomno : number
    }

}

let myinfo : mydata =    //creating original data
{
    empid : 123243,
    empname :"Sowmya",
    issalary : true,
    empAdd :
    {
        eStreet : "kphb",
        epin : 50082,
        eroomno : 510
    }
}
console.log(myinfo.empAdd)
console.log("My employee id is : "+ myinfo.empid)

myinfo.Office = "MIndspace"  //Adding element to original data directly
//console.log(myinfo)

myinfo.Office = "DLF"  //over-riding data 
//console.log(myinfo)

delete myinfo.issalary;
//console.log(myinfo)

delete myinfo.empAdd.eroomno;
console.log(myinfo.empAdd)

// checking the existance of the key

console.log("empname"in myinfo)

//getting all keys
console.log(Object.keys(myinfo))

//getting all values
console.log(Object.values(myinfo))

//getting all entries
console.log(Object.entries(myinfo))

