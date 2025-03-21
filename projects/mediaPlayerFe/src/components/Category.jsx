import { React, useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Modal, Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addCategory, removeCategory, getAllCategories, getVideosById, updateCategory } from '../services/allApi'

function Category() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])
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
        getCategories()
      }
      handleClose()
    }
  }
  const getCategories = async () => {
    const response = await getAllCategories()
    console.log('Categories:')
    console.log(response)
    const { data } = response
    setCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [])
  const deleteCategory = async (id) => {
    // alert(id)
    const res = await removeCategory(id)
    getCategories()
  }
  const dragOver = (e) => {
    e.preventDefault()
    console.log('inside dragover')
  }
  const videoDropped = async (e, id) => {
    console.log(`dropped inside category with id ${id}`)

    const vId = e.dataTransfer.getData('videoId')
    console.log(`video with id ${vId} is dropped in category with id ${id}`)

    const result = await getVideosById(vId)
    console.log(result)

    const { data } = result

    let selectedCategories = categories?.find((item => item.id == id))
    console.log("selected category:", selectedCategories)

    selectedCategories.allVideos.push(data)
    console.log('final Category:', selectedCategories)

    const result_new = await updateCategory(id, selectedCategories)
    console.log(result_new)
    
    getCategories()

  }
  return (
    <>
      <div>
        <button className='btn btn-warning mb-3 ms-5' onClick={handleShow}>ADD NEW CATEGORY</button>
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
      {
        categories?.map((item) => (
          <div className="border border-secondary rounded p-3 mt-2 m-5" droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDropped(e, item.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item.categoryName}</h6>
              <button className='btn btn-danger' onClick={(e) => deleteCategory(item.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
            {
              item.allVideos?.length > 0 ?
                item.allVideos.map((video) => (
                  <div className=''>
                    <img src={video.thumbnailUrl} alt="" height={'100px'} width={'160px'} className='mt-2'/>
                  </div>
                )) :
                <h3>No Video Found</h3>
            }
          </div>
        ))
      }
    </>
  )
}

export default Category