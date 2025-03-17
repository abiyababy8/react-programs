import { React, useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addCategory, getAllCategories } from '../services/allApi'
function Category() {
  const [show, setShow] = useState(false);
  const [categories,setCategories]=useState([])
  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState('')
  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.warning('Please Fill The Category Name!')
    }
    else {
      const body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      console.log('Category response:')
      console.log(response)
      if (response.status === 201) {
        toast.success(`${categoryName} is successfully saved!`)
      }
      handleClose()
    }
  }
  const getCategories = async () => {
    const response = await getAllCategories()
    console.log('Categories:')
    console.log(response)
    const {data}=response
    setCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [])
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
              <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category