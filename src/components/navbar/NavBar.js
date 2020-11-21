import React from 'react'
import './NavBar.css'
import Button from '../button/Button'
import CartIcon from '../carticon/CardIcon'

 const NavBar = ()=> {
    return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="logo">
      <Button type="button" content='https://raw.githubusercontent.com/rubeneggel72/ecomerce/master/src/img/logo.jpg' path='/'  clase="logo" icon=""/>
      
      <h4>e-commerce</h4>
      </div>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">La Empresa</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Servicios</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      
      
      {/* <form className="form-inline mt-2 mt-md-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form> */}
      <form className="form-inline mt-2 mt-md-0 offset-md-1">
      <CartIcon/>
      </form>
      </div> 
      </nav>
    </>
)
}
export default NavBar;