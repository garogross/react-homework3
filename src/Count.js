import React, {useState} from 'react'
import "./Count.css"

const Count = () => {
 const [count,setCount] = useState(1)

  const plusFunc = () => {
    setCount(count+1)
  }
  const minusFunc = () => {
    setCount(count-1)
  }
 return (
      <div className="count-container">
        <h2>{count}</h2>
        <div className="buttons">
         <button className="btn plus-btn" onClick={plusFunc} >Plus</button>
         <button className="btn minus-btn" onClick={minusFunc} >Minus</button>
        </div>


      </div>

 )
}

export default Count
