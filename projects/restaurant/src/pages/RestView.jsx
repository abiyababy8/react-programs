import React from 'react'
import { Row, Col, ListGroup, Modal, Collapse } from 'react-bootstrap'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function RestView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);
    // useParams hook is used to get data passed url
    const { id } = useParams()
    console.log("Url data:", id)
    const restaurantData = useSelector(state => state.restaurantStore.allRestaurant.restaurants)
    const selectedRestaurant = restaurantData.find(item => item.id == id)
    console.log("selected restaurant:", selectedRestaurant)
    return (
        <>
            <Row>
                <Col md={1} lg={1}>
                </Col>
                <Col md={3} lg={3}>
                    <img height={'100%'} width={'100%'} src={selectedRestaurant?.photograph} alt="" />
                </Col>
                <Col md={7} lg={7}>
                    <hr />
                    <h5 className='text-center'><span className='text-warning'>RESTAURANT </span>DETAILS</h5>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item><h5 className='text-center'>{selectedRestaurant?.name}</h5></ListGroup.Item>
                        <ListGroup.Item>Neighbourhood: {selectedRestaurant?.neighborhood}</ListGroup.Item>
                        <ListGroup.Item>Address: {selectedRestaurant?.address}</ListGroup.Item>
                        <ListGroup.Item>Cuisine: {selectedRestaurant?.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item className='text-center p-3'>
                            <button className='btn btn-warning' onClick={handleShow}>Operating Hours</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Sunday: {selectedRestaurant?.operating_hours.Sunday}</ListGroup.Item>
                                        <ListGroup.Item>Monday: {selectedRestaurant?.operating_hours.Monday}</ListGroup.Item>
                                        <ListGroup.Item>Tuesday: {selectedRestaurant?.operating_hours.Tuesday}</ListGroup.Item>
                                        <ListGroup.Item>Wednesday: {selectedRestaurant?.operating_hours.Wednesday}</ListGroup.Item>
                                        <ListGroup.Item>Thursday: {selectedRestaurant?.operating_hours.Thursday}</ListGroup.Item>
                                        <ListGroup.Item>Friday: {selectedRestaurant?.operating_hours.Friday}</ListGroup.Item>
                                        <ListGroup.Item>Saturday: {selectedRestaurant?.operating_hours.Saturday}</ListGroup.Item>
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
                            {
                                selectedRestaurant?.reviews?.length > 0 ?
                                    selectedRestaurant?.reviews?.map(item => (

                                        <div className='mt-2'>
                                            <hr />
                                            <h6>Name & Date: {item.name}, {item.date}</h6>
                                            <p>Rating: {item.rating}</p>
                                            <p>Review: {item.comments}</p>
                                        </div>
                                    )) :
                                    <p>NO REVIEWS FOUND</p>
                            }
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </>
    )
}
export default RestView