import React from 'react'
import ItemCounter from '../components/ItemCounter/ItemCounter'

import './Home.css'

function Home({greeting}) 
    {
    return (
            <>
                <div className="home container">
                <h1>Esto será pagina de e-commerce</h1>
                <h2> {greeting} </h2>
                <ItemCounter initial={2} min={1} max={10} onAdd={'camisa'}/>
                </div>
            </>
        )
    }
export default Home