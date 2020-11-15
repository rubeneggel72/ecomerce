import { useState, useEffect } from 'react';
import ItemCounter from '../components/itemCounter/ItemCounter'
import ItemList from '../components/itemList/ItemList'
import getProductsFromDatabase from '../lib/Database'
import './Home.css'

const Home = () =>{
    const[products,setProducts]=useState([])
    useEffect(async()=>{
        const productsAsJSON=await getProductsFromDatabase()
        const products=JSON.parse(productsAsJSON)
        setProducts(products)
    },[])
    return (   
        <div className="Home">   
        {products.length===0 ? (
        <div><br/><br/><br/><br/>Cargando....</div>
        ):(
        <div className="Home">    
        <ItemList products={products}/>
        </div>
    ) }
    </div>
    )        
    }
export default Home 