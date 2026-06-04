//array
let animal : string[] = ["cat", "dog", "fox", "horse", "goat"] 
console.log(animal)

console.log(animal.length)  //5

console.log(animal[4])   //goat

console.log(animal[7])  //undefined

let colors : string[] = ["black", "blue", "yellow", "red", "orange","wine", "brown","green"] 
console.log(colors)
console.log(colors.concat(animal))
colors.unshift("violet")   //add element at start pointcd
colors.push("maroon")    //add element at end point
console.log(colors)
colors.shift();            //removes first element
colors.pop();              //removes last element
console.log(colors)
console.log(colors.indexOf("red"))

let Zoo : string[] = animal.concat(colors)
console.log(Zoo)

//colors.splice(3,4)    //delete any elements based on index value and count
colors.splice(4)        //delete all elements from index value

colors.splice(2,0, "silver","gold","white")  //adding elements based on index value
console.log(colors)


let col : string[] = colors.slice(3,6)
console.log(col)





