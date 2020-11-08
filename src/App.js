import './App.css'
import NavBar from './components/navbar/NavBar.js'
import Home from './Home/Home.js'

function App() {
  return (
    
    <div className="App">
    <NavBar />
    <Home greeting="Bienvenidos!!!" />
  </div>

  )
}

export default App;
