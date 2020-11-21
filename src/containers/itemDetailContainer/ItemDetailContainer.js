import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import GetProductFromDatabase from '../../dataBase/Data'
import ItemDetail from '../../components/itemDetail/ItemDetail'
import Spinner from '../../components/spinner/Spinner'
const ItemDetailContainer=()=>{
const [detail,useDetail]=useState({})
const {id}=useParams()
    
        const[product,setProduct]=useState([])
        useEffect(async()=>{
            const product=await GetProductFromDatabase(id)
            setProduct(product)
            console.log("item detail container "+ product)
        },[])
      
    return(
        <div id="ItemDetailContainer">
            {product.length===0 ? (
                <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Spinner/>
                <h2>Cargando....</h2></div>
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