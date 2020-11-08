import React,{useState}from 'react'
import './ItemCounter.css'

const ItemCounter=({initial,min,max,onAdd})=>{
     const [counter, setCounter]=useState(initial)
     
     const decrement=() =>{ (counter>min)?
      setCounter(counter-1):setCounter(counter)}
  
     const increment=() =>{
      (counter<max)?
      setCounter(counter+1):setCounter(counter)}

   return(  
      <div >
         <div >
            <br/>
            <h3>{onAdd} x </h3>
            <button className="btn btn-info" onClick={decrement } > - </button>
            <button className="btn btn-outline-info counter" onClick={decrement } disabled> {counter} </button>
            <button className="btn btn-info" onClick={increment}> + </button>
         </div>
         <br/>
         <button className="btn btn-primary">Agregar al carrito</button>
         <br/>    
      </div>       
    )
 }
 export default ItemCounter
