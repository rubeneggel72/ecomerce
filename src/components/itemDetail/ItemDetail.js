import React from 'react'
import ItemCounter from '../itemCounter/ItemCounter'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './ItemDetail.css'
const ItemDetail = ({products,id}) => {
  
  return (
    <div class="container item">
      <div class="row">
        <div class="col-md-6 border">
          <img className='item-photo' src={products[id].img}/>
          </div>
        <div className="col-md-6 border ">
	        <h1 className='itemname text-left'>{products[id].name}</h1>
          <hr />     
					<h2 className="m-0 p-0 price-pro text-left"><strong> PRECIO : $</strong>{products[id].price} x {products[id].unit}. </h2>
					<hr/>
					<h3 className="text-left"><strong>Detalle del producto:</strong></h3>
					<p className="text-left">{products[id].detail}</p><hr class="m-0 pt-2 mt-2"/>
					<h3 className="tag-section text-left"><strong>Sección: </strong><a href="">{products[id].grupo}</a></h3>
          <hr/>
					<h3 className="text-left">Quantity :{<ItemCounter initial={1} min={1} max={10}/>}</h3>
					<div className="col-lg-12 mt-3">
            <div className="row">
              <br/>
					    <div className="col-lg-6 pb-2">
                <br/>
					      <a href="#" class="btn btn-danger w-100 btn-lg">Add To Cart</a>
                <br/>
				      </div>
            </div>
          </div>
	      </div>
      </div>
    </div>

)
}

export default ItemDetail

