import React from 'react';
import './Item.css'
import ItemCounter from '../itemCounter/ItemCounter'
import Button from '../button/Button'
const Item = ({item}) => {
  {console.log('item:'+item.img)}
  {console.log('item id :'+item.id)}
  return (
    <div class="container ctnItem ">      <br/>
      
      <Button content={item.img} path={`/detail/${item.id}`}/>
      
      <h2 className="text-left"><strong>{item.name}</strong></h2>
      <h5 className="text-left">Precio: ${item.price}  x {item.unit}</h5>
      <h5 className="text-left"> Disponible: {item.stock}  {item.unit}</h5>
      <h5 className="text-left"><strong>Cant:</strong>{<ItemCounter initial={item.min} min={item.min} max={item.stock}/>}</h5>    
      <br/>
			<a href="#" class="btn btn-danger w-100 btn-lg">Add To Cart</a>
      <br/><br/>
    </div>
  )
  }
  
  export default Item
