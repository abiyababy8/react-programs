import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RestCard() {
    return (
        <>
            <Link to={'/restaurant_view'} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='p-3' height={'250px'} src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" />
                    <Card.Body>
                        <Card.Title className='text-warning'>Ilona Restaurant</Card.Title>
                        <Card.Text>
                            Neighbourhood: <span className='text-warning'> Manhattan</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default RestCard