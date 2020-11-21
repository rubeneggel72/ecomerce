import React from 'react'
import {Link} from 'react-router-dom'

 const Button = ({content,path,callback,clase,icon})=> 
    {
        {console.log('button content :'+content)}
        {console.log('button path :'+path)}
    return (
        <Link to={path}>
            {content.startsWith('http')|| content.startsWith('data')?(
                <img src={content} alt=""/> ):(          
                <button className={clase} id='Button' onclick={callback}>{content}
                <span className={icon}/>
                </button>
            )}
           
            </Link>  
            )       
    }
export default Button