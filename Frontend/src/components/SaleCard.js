import React from 'react'
import Button from './Button'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SaleCard = ({id, name, description, price}) => {
    return (
        <div>
            <>
            <Card border="secondary" style={{padding:10, margin: 'auto', marginBottom: 10, maxWidth:500}}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title><Link to={`/deals/${id}`} style={{fontSize:35}} >{name} (On Sale!)</Link></Card.Title>
                    <Card.Text>
                    {description}<br />
                    {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/deals/${id}`} ><Button  text = "View Item" /></Link>
                    <br />
                    <br />
                </Card.Footer>
            </Card>
            </>            
        </div>
    )
}

export default SaleCard
