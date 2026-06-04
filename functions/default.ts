
function vote(name:string, age:number, eli= "eligible") : void
{
    if(age >=18)
    {
        console.log(name + " is "+eli)
    }
    else
    {
        console.log(name+ " is not "+eli)

    }

}
vote("sowmya",27)
vote("mona",16)