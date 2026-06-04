let weather : string = "cool";
console.log(weather);

let MobileNumber : number = 6302477123;
console.log(MobileNumber)

const StillExists : boolean = true;
console.log(StillExists);

let MyName : null = null;
console.log(MyName);

let time :undefined;
console.log(time);

let year : symbol = Symbol("born")

let MyCar = 
{
    color : "red",
    company : null,
    [year] : 2025,
    readyToTake : false,
    testDrive : undefined

}
console.log(MyCar)
console.log(typeof MyCar)
console.log(MyCar.color)
//console.log(MyCar.day)