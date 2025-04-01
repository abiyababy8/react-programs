import React from 'react'
import { Row, Col, ListGroup, Modal, Collapse } from 'react-bootstrap'
import { useState } from 'react';
function RestView() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);
    return (
        <>
            <Row>
                <Col md={1} lg={1}>
                </Col>
                <Col md={3} lg={3}>
                    <img height={'100%'} width={'100%'} src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </Col>
                <Col md={7} lg={7}>
                    <hr />
                    <h5 className='text-center'><span className='text-warning'>RESTAURANT </span>DETAILS</h5>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item><h5 className='text-center'>PALAARAM</h5></ListGroup.Item>
                        <ListGroup.Item>Neighbourhood:</ListGroup.Item>
                        <ListGroup.Item>Address:</ListGroup.Item>
                        <ListGroup.Item>Cuisine</ListGroup.Item>
                        <ListGroup.Item className='text-center p-3'>
                            <button className='btn btn-warning' onClick={handleShow}>Operating Hours</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Sunday:</ListGroup.Item>
                                        <ListGroup.Item>Monday:</ListGroup.Item>
                                        <ListGroup.Item>Tuesday:</ListGroup.Item>
                                        <ListGroup.Item>Wednesday:</ListGroup.Item>
                                        <ListGroup.Item>Thursday:</ListGroup.Item>
                                        <ListGroup.Item>Friday:</ListGroup.Item>
                                        <ListGroup.Item>Saturday:</ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                            </Modal>
                            <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>User Reviews</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={1} lg={1}>
                </Col>
            </Row>
            <Row>
                <Col md={4} lg={4}>

                </Col>
                <Col md={7} lg={7}>
                    <Collapse in={open}>
                        <div>
                            <hr />
                            <div className='mt-2'>
                                <h6>Name & Date: Steve, October 26,2024</h6>
                                <p>Rating: 4</p>
                                <p>Review: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora iste iusto reiciendis nisi, placeat molestias corporis natus architecto cupiditate! Rerum quae ducimus vel iste omnis consectetur cum quidem odio?</p>
                            </div>
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </>
    )
}
export default RestView