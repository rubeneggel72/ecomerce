import './App.css'
import NavBar from './components/navbar/NavBar.js'
import Home from './containers/home/Home.js'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">
      <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet"></link> 
      <NavBar/>

      {/* <Contenedores/> */}
      {/* <Home  /> */}
      <ItemDetailContainer/>

    </div>

  )
}

export default App;
