import React from 'react'
import {Link} from 'react-router-dom'

 const Button = ({content,path,callback,clase,icon})=> 
    {
        {console.log('button content :'+content)}
        {console.log('button path :'+path)}
    return (
        <div id="Button">
            <Link to={path}>
                {content.startsWith('http')|| content.startsWith('data')?(
                    <img src={content} alt="" className={clase}/> ):(          
                    <button className={clase} id='Button' onclick={callback}>{content}
                    <span className={icon}/>
                    </button>
                )}
                </Link>  
            </div>
            )       
    }
export default Button