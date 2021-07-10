import React from 'react'
import Button from './Button'
// import full from './full_star.png'
// import empty from './empty.png'
// import half from './half_star.png'
import {useState, useEffect} from 'react';


function ItemData(){
    const [data, setData] = useState({})
  
    useEffect(() => {
      fetch("/item")
    .then(res => res.json())
    .then(data => setData(data))
    }, [])
  
    return (
    <div key={data.id} style={{ margin: 'auto'}}>
        <h2>{data.name}</h2>
        <h4>{data.description}</h4>
        <h4>{data.price}</h4>
        <Button text="Add to cart" />
    </div>
    )
    
}

export default ItemData