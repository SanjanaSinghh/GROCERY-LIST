import { useState } from "react";
import Show from "./showdata";

 export default  function List(){
 const[task,setask]=useState("")
 const[data,ndata]=useState([])
 const add=()=>{
   ndata([...data,task])
   setask('')
   
 }
 console.log(data)
 const remove=(a)=>{
    const newdata=data.filter((b,index)=>{
     return index!==a 
   })
   ndata(newdata)
 }
return(
<> <div>
<input type='text' onChange={e=>setask(e.target.value)} value={task} />
<button  onClick={add}> Add item</button>
</div>
{
  data.map((x,i)=>{
     return<Show
    key={i}
    id={i}
    task={x}
    onSelect={remove} />
  })
}
</>
)

 }