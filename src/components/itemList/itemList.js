import React from 'react'
import Item from '../item/Item'
const ItemList = ({products}) => {
  console.log("lista " +products)
  return (
    <div id="ItemList" className="container item-list-container">
      <div className="row">  
      {products.map((product,idx)=>{
      {console.log(product.name)}
      return(
        <div className="col-4 border col-item-list">
        <Item key={idx} item={product}/>
        </div>
      )              
    })}
    </div>
    </div>
)}

export default ItemList;

