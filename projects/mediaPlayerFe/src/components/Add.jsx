import { React, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-flex align-items-center'>
                <h5 className='textStyle'>UPLOAD NEW VIDEO</h5>
                <button className='btn' onClick={handleShow}><i className="fa-solid fa-cloud-arrow-up text-light fs-5"></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                data-bs-theme='dark'
            >
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title className='textStyle'><i className="fa-solid fa-film text-warning me-2"></i>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className='mb-3 mt-3'>
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Video Title" />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Video Thumbnail URL" />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Video Link" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add