import { useState, useEffect } from 'react';
import GetProductFromDatabase from '../../lib/Database'
import ItemDetail from '../../components/itemDetail/ItemDetail'
const ItemDetailContainer=()=>{
    
        const[product,setProduct]=useState([])
        useEffect(async()=>{
            const product=await GetProductFromDatabase(3)
            setProduct(product)
            console.log("item detail container "+ product)
        },[])
      
    return(
        <div id="ItemDetailContainer">
            {product.length===0 ? (
                <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><h2>Cargando....</h2></div>
                ):(
                <div id="ItemDetailContainer">
                    <ItemDetail product={product}/>
                </div>
                ) 
            }
        </div>
    )
}
       
export default ItemDetailContainer