import {useState} from "react"
 const InkPen =(props) =>{
const [counter2, setCounter] = useState(78)

const handlechange=(value)=>{
  props.myfunc(counter2+value);
  setCounter(counter2+value)
}
const list = ["1","2","3","4"]
  return (

    <div>

    <h1>InkPen:{counter2}</h1>
  <button onClick = {()=>{
  handlechange(1)
}}> + </button>
<button onClick = {()=>{
  handlechange(-1)
}}> - </button>



    </div>


  )
}

export {InkPen}