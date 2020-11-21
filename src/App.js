import React from 'react'
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar/NavBar.js'
import Cart from './containers/cart/Cart.js'
import Spinner from './components/spinner/Spinner.js'
import Home from './containers/home/Home.js'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"></link>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            {<Home/>}
          </Route>
          <Route exact path='/detail/:id'>
            {<ItemDetailContainer/>}
          </Route>
          <Route exact path='/cart'>
            {<Cart/>}
          </Route>


        </Switch>



      </BrowserRouter>
       
      
      
      {/* <Contenedores/> */}
     
      {/* <ItemDetailContainer/> */}

    </div>

  )
}

export default App;
