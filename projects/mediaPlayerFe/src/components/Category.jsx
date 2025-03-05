import { React, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
function Category() {
   const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
    <div>
      <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
    </div><Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                data-bs-theme='dark'
            >
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title className='textStyle'><i className="fa-solid fa-list text-warning me-2"></i>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className='mb-3 mt-3'>
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Category Name" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning">Add</Button>
                </Modal.Footer>
            </Modal>

    </>
  )
}

export default Category