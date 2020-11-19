import React from 'react';
import './Item.css'
const Item = ({item}) => {
  return (
    <div class="container border">
    
      <img className="item-list-photo" src={item.img}/>
        <h2>{item.name}</h2>
        <h3>Precio: $-{item.price}  x{item.unit}</h3>
        
        <h4> Disponible: {item.stock}  x{item.unit}</h4>
        
        
    </div>
  )
  }
  
  export default Item
