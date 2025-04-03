import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RestCard({ restData }) {
    return (
        <>
            <Link to={`/restaurant_view/${restData.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '15rem', height: '24rem' }}>
                    <Card.Img variant="top" className='p-3' height={'250px'} src={restData.photograph} />
                    <Card.Body>
                        <Card.Title className='text-warning'>{restData.name}</Card.Title>
                        <Card.Text>
                            Neighbourhood: <span className='text-warning'> {restData.neighborhood}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default RestCard