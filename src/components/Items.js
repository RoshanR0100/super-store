import React from 'react'
import ItemCard from './ItemCard'
import {useState, useEffect} from 'react'

export default function Items() {
    const[item, setItem] = useState({})

    useEffect(() => {
        fetch("/item")
        .then(res => res.json())
        .then(item => setItem(item))
    }, [])

    return (
        <div>
            <ItemCard 
            key={item.id} id={item.id} name={item.name} description={item.description} price={item.price}
             />                    
        </div>
    )
}
