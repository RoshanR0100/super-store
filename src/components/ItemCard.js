//THIS FILE IS TO BE CALLE

import React from 'react';
import Button from './Button';
import './Button.css';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const ItemCard = ({ id, name, description, price}) => {
    return (
        <>
            <Card border="secondary" style={{padding:10, margin: 'auto', marginBottom: 10, maxWidth:500}}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><Link to={`/items/${id}`} style={{fontSize:35}} >{name}</Link></Card.Title>
                    <Card.Text>
                    {description}<br />
                    {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/items/${id}`} ><Button  text = "View Item" /></Link>
                    <br />
                    <br />
                </Card.Footer>
            </Card>   
        </>
    )
}

export default ItemCard
