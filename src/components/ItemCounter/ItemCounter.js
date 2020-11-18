import React,{useState}from 'react'
import './ItemCounter.css'

const ItemCounter=({initial,min,max})=>{
     const [counter, setCounter]=useState(initial)
     
     const decrement=() =>{ (counter>min)?
      setCounter(counter-1):setCounter(counter)}
  
     const increment=() =>{
      (counter<max)?
      setCounter(counter+1):setCounter(counter)}

   return(  
      <div >
         <div className="col-lg-12 mt-3">
					<button className="btn btn-primary btn-lg"onClick={decrement }>-</button>
					<input className="btn btn-outline-primary btn-lg" value={counter}/>
					<button className="btn btn-primary btn-lg"onClick={increment}>+</button>
			</div>
      </div>    
   )
 }
 export default ItemCounter
