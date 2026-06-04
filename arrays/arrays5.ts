
let numbers : number[] = [47, 13, 75, -28, 98, -6, 86]
//sorting the numbers based on first number of each element
console.log(numbers.sort()) // incorrect sorting
//sorting in ascending order
console.log(numbers.sort((a,b) => (a-b)))
//sorting in descending order
console.log(numbers.sort((x,y) => (y-x)))

//adding +3 for each and every element in array
let add3 : number[] = numbers.map(x => x+3)

console.log(add3)

//printing only numbers which is only multiply by 3
let fil3 : number[] = numbers.filter( v => v%3 == 0)
console.log(fil3)

//printing only numbers which is not multiply by 3
let fil4 : number[] = add3.filter( v => v%3 != 0)
console.log(fil4)





