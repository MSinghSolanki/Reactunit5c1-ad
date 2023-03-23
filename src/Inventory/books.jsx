import {useState} from "react"
 const Books =(props) =>{
const [counter1, setCounter] = useState(13)

const handlechange=(value)=>{
  props.myfunc(counter1+value);
  setCounter(counter1+value)
}
const list = ["1","2","3","4"]
  return (

    <div>

    <h1>Books:{counter1}</h1>
  <button onClick = {()=>{
  handlechange(1)
}}> + </button>
<button onClick = {()=>{
  handlechange(-1)
}}> - </button>



    </div>


  )
}

export {Books}