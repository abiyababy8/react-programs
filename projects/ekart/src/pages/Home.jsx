import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Button,Card} from 'react-bootstrap';
function Home() {
  return (
    <>
    <Row className='m-5'>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </>
  )
}

export default Home