import React from 'react'
import './CartIcon.css'
import Button from '../button/Button'

 const CardIcon = ()=> 
    {
    return (
            <>
                <Button type="button" content='Carro de Compras ' path='/cart'  clase="btn btn-info btn-lg btn-danger" icon="glyphicon glyphicon-shopping-cart"/>
            </>    
            )       
    }
export default CardIcon