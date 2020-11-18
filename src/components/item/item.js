import React from 'react';
import './Item.css'
const Item = ({item}) => {
  return (
    <div id='Item'>
        <h6>{item.name}-Precio: $-{item.price}- Cant. {item.stock}</h6>
        <img src={item.img}/>
        
    </div>
  )
  }
  
  export default Item
