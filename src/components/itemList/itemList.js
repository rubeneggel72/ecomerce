import React from 'react'
import Item from '../item/Item'
const ItemList = ({products}) => {
  console.log("lista " +products)
  return (
    <div id="ItemList">
    {products.map((product,idx)=>{
      {console.log(product.name)}
      return(
        <Item key={idx} item={product}/>
      )              
    })}
    </div>
)}

export default ItemList;

