
let mathsmarks : number[] = new Array(7)


mathsmarks[0]=34
mathsmarks[1]=45
mathsmarks[2]=76
mathsmarks[3]=94
mathsmarks[4]=84
mathsmarks[5]=29
mathsmarks[6]=16

console.log(mathsmarks)
console.log(mathsmarks.length)  //length of an array  //7
console.log("second element is : " +mathsmarks[1])   //second element  //45

mathsmarks[12]=99
console.log(mathsmarks.length)  //length has been resized to 13
console.log(mathsmarks)   //[ 34, 45, 76, 94, 84, 29, 16, <5 empty items>, 99 ]

console.log(mathsmarks[9]) //undefined

