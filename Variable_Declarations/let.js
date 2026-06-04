
let My_data = "Sowmya";  //declaration
console.log(My_data)

 My_data = 36;           //re-assigning
console.log(My_data)

//let My_data = "KPHB";    //re-declaration  --> SyntaxError: Identifier 'My_data' has already been declared
console.log(My_data)

{
    console.log(My_data) //accessing inside a block

    let My_color = "blue";   
    console.log(My_color)   //declare inside a block and access inside a block
}

//console.log(My_color)     //declare inside a block and access outside a block -->ReferenceError: My_color is not defined