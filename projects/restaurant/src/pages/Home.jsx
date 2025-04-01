import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'

function Home() {
    return (
        <>
            <Row>
                <Col sm={6} md={4} lg={3} className='px-5 py-3'>
                    <RestCard />
                </Col>
            </Row>
        </>
    )
}

export default Home