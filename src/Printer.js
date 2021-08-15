import React, {useState} from 'react'
import "./Printer.css"


const Printer = () => {
 const [text1,setText1] = useState("")
 const [text2,setText2] = useState("")

 const printTextRender1 = (e) => {
  setText1(e.target.value)
 }
 const printTextRender2 = (e) => {
  setText2(e.target.value)
 }
 const removeRender = (e) => {
  setText1("")
  setText2("")
 }
 return (
  <div className="printer-container">
  <p>
    <span>{text1}</span> 
    <span>{text2}</span>  
  </p>
   <input type="text" onChange={printTextRender1}/>
   <input type="text" onChange={printTextRender2}/>
   <button className="btn" onClick={removeRender}>Remove</button>
   
  </div>
 )
}

export default Printer
