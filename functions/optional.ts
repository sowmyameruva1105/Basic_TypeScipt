
function studentData(name: string, id?:number, present?:boolean) : void
{
    if(id == undefined)
    {
        console.log("my name is "+name)
    }
    else
    {
        console.log("my id is "+ id)

    }
    //console.log(name,id)
}
studentData("sowmya",510,false)