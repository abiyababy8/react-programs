import React from 'react'
import { Card, Button } from 'react-bootstrap'
function VideoCard() {
    return (
        <>
            <Card style={{ width: '13.5rem'}} className='text-dark'>
                <Card.Img variant="top" src="https://i.ytimg.com/vi/8II9yQIASjo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHZ3XvIo4Bh7h2Kg7rzoYRUKkRUA" height={'250px'} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>Dhurooha Manthahasame</Card.Title>
                        <Button variant="danger"><i className="fa-solid fa-trash"></i></Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default VideoCard