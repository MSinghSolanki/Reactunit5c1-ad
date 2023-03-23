import "./styles.css";
import {Books} from "./Inventory/books"
import {InkPen} from "./Inventory/inkpen"
import {NoteBook} from "./Inventory/notebook"
import {Pen} from "./Inventory/pen"
import {useState} from "react"
export default function App() {

const [total,settotal] =useState(0)

 const func =(counter)=>{
   settotal(counter)
     console.log(settotal)
 }
  return (
    <div>
  <Books myfunc={func.bind()} />
 
  
  <InkPen myfunc={func.bind()}/>
  <NoteBook myfunc={func.bind()}/>
  <Pen myfunc={func.bind()}/>
<div className="Total"><h1>Total:{total}</h1></div>
    </div>
  );
}
