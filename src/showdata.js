 export default function Show(props){

return(
  <h1>{props.task} <button onClick={()=>props.onSelect(props.id)}>X</button></h1>

)

 }