import {useState} from "react"
 const NoteBook =(props) =>{
const [counter3, setCounter] = useState(44)

const handlechange=(value)=>{
  props.myfunc(counter3+value);
  setCounter(counter3+value)
}
const list = ["1","2","3","4"]
  return (

    <div>

    <h1>NoteBook:{counter3}</h1>
  <button onClick = {()=>{
  handlechange(1)
}}> + </button>
<button onClick = {()=>{
  handlechange(-1)
}}> - </button>



    </div>


  )
}

export {NoteBook}