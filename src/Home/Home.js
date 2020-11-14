import React from 'react'
import ItemCounter from '../components/ItemCounter/ItemCounter'
import ItemList from '../components/itemList/itemList'

import './Home.css'

function Home({greeting}) 
    {
    return (
            <>
                <div className="home container">
               
                {/* <h2> {greeting} </h2> */}
                <ItemList/>

                {/* <ItemCounter initial={2} min={1} max={10} onAdd={'camisa'}/> */}
                </div>
            </>
        )
    }
export default Home