
function mul(m :number, n: number) : number
{
   let rec=m*n;
    return rec;

}
let K=mul(12,7)
console.log(K)

let add = (l:number, h:number): number => l+h  //add is arrow based function
console.log(add(17,13))

let Data = (name:string, id:number, present:boolean) =>
{
    console.log(name,id,present)
}
Data("sowmya",110,true)
Data("mona",101,false)