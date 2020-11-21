import React,{useState}from 'react'
import './ItemCounter.css'

const ItemCounter=({initial,min,max})=>{
   var min=parseInt(min)
   var max=parseInt(max)
   var initial=parseInt(initial)
     const [counter, setCounter]=useState(initial)
     
      const decrement=() =>{ (counter>min)?
         setCounter(counter-min):setCounter(counter)}
      const increment=() =>{ (counter<max)?
         setCounter(counter+min):setCounter(counter)}
   
   return(  
      <div id="ItemCounter">
         <div className="col-lg-12 mt-3">
					<button className="btn btn-primary btn-lg"onClick={decrement}>-</button>
					<input className="btn btn-outline-primary btn-lg" value={counter} type="number"/>
					<button className="btn btn-primary btn-lg"onClick={increment}>+</button>
			</div>
      </div>    
   )
 }
 export default ItemCounter
