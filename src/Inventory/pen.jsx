import {useState} from "react"
 const Pen =(props) =>{
const [counter4, setCounter] = useState(10)

const handlechange=(value)=>{
  props.myfunc(counter4+value);
  setCounter(counter4+value)
}
const list = ["1","2","3","4"]
  return (

    <div>

    <h1>Pen:{counter4}</h1>
  <button onClick = {()=>{
  handlechange(1)
}}> + </button>
<button onClick = {()=>{
  handlechange(-1)
}}> - </button>



    </div>


  )
}

export {Pen}