import React from 'react';
import Item from '../item/item'

const ItemList = () => {

   
    function List()  { 

      var rows = []
      for (var i = 0; i < 10; i++) {
        
          rows.push(<Item id={i} />);
      }
      return <tbody>{rows}</tbody>;
    }

  return <>  
    <div className="App">
      <h1> ¡Lista de productos!</h1>
      <List/>
    </div>
  </>
}

export default ItemList;
