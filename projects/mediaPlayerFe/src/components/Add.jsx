import { React, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { uploadVideo } from '../services/allApi';
import { toast } from 'react-toastify'
function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setVideoDetails({
            caption: '',
            thumbnailUrl: '',
            embeddedLink: ''
        })
    }
    const handleShow = () => setShow(true);
    const [videoDetails, setVideoDetails] = useState({
        caption: '',
        thumbnailUrl: '',
        embeddedLink: ''
    })
    const handleUpload = async () => {
        console.log('Uploaded Video Details...')
        console.log(videoDetails)
        const { caption, thumbnailUrl, embeddedLink } = videoDetails
        if (!caption || !thumbnailUrl || !embeddedLink) {
            toast.warning("Please Fill The Form Completely!")
        }
        else {
            const result = await uploadVideo(videoDetails)
            console.log('Result:')
            console.log(result)
            if (result.status == 201) {
                setUploadVideoStatus(result)
                toast.success('Successfully Uploaded')
                handleClose()
            }
            else {
                toast.error('Something went wrong')
            }
        }
    }
    const setEmbeddedLink = (data) => {
        //set embedded link
        const link = `https://www.youtube.com/embed/${data.slice(-11)}`
        console.log(link)
        setVideoDetails({ ...videoDetails, embeddedLink: link })
    }
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
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Video Title" onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Video Thumbnail URL" onChange={(e) => setVideoDetails({ ...videoDetails, thumbnailUrl: e.target.value })} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control className='bg-dark text-light' type="text" placeholder="Enter Video Link" onChange={(e) => setEmbeddedLink(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add