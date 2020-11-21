import { useState, useEffect } from 'react';
import ItemList from '../../components/itemList/ItemList'
import getProductFromDatabase from '../../dataBase/Data'
import Spinner from '../../components/spinner/Spinner'
import './Home.css'
const Home = () =>{
    const[products,setProducts]=useState([])
    useEffect(async()=>{
        const products=await getProductFromDatabase(0)
        setProducts(products)
    },[])

    return (   
        <div id="Home">  
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"></link> 
        {products.length===0 ? (
        <div><br/><br/><br/><br/>
        <Spinner/>
        <h2>Cargando....</h2></div>
        ):(
        <div> 
        {<ItemList products={products}/> }
        </div>
    ) }
    </div>
    )        
    }
export default Home 